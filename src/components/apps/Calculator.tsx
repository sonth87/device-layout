'use client';

import { useState, useEffect, useCallback } from 'react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';
import type { AppContentProps } from './AppRegistry';
import { 
  Delete, 
  History as HistoryIcon
} from 'lucide-react';

type CalculatorMode = 'basic' | 'scientific' | 'programmer';
type ProgrammerRadix = 'HEX' | 'DEC' | 'OCT' | 'BIN';

interface HistoryLog {
  expression: string;
  result: string;
}

export function Calculator({ windowId, appId }: AppContentProps) {
  const { language } = useTranslation();
  void appId;

  // Store access
  const win = useStore((s) => s.windows[windowId]);
  const resizeWindow = useStore((s) => s.resizeWindow);

  // Layout & UI State
  const [mode, setMode] = useState<CalculatorMode>('basic');
  const [showHistory, setShowHistory] = useState(false);

  // Calculator Logic State
  const [displayValue, setDisplayValue] = useState('0');
  const [operand, setOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);
  const [historyLog, setHistoryLog] = useState<HistoryLog[]>([]);

  // Scientific Mode State
  const [isRad, setIsRad] = useState(true);
  const [isSecond, setIsSecond] = useState(false);
  const [memory, setMemory] = useState<number>(0);

  // Programmer Mode State
  const [radix, setRadix] = useState<ProgrammerRadix>('DEC');
  const [bitSize, setBitSize] = useState<8 | 16 | 32 | 64>(64);
  const [asciiMode, setAsciiMode] = useState<'ASCII' | 'Unicode'>('ASCII');
  const [showBinaryBits, setShowBinaryBits] = useState(true);

  // Get current numerical value safely
  const getNumericValue = useCallback((): number => {
    if (mode === 'programmer') {
      if (radix === 'HEX') {
        const val = parseInt(displayValue, 16);
        return isNaN(val) ? 0 : val;
      }
      if (radix === 'OCT') {
        const val = parseInt(displayValue, 8);
        return isNaN(val) ? 0 : val;
      }
      if (radix === 'BIN') {
        const val = parseInt(displayValue, 2);
        return isNaN(val) ? 0 : val;
      }
      const val = parseInt(displayValue, 10);
      return isNaN(val) ? 0 : val;
    }
    const val = parseFloat(displayValue.replace(',', '.'));
    return isNaN(val) ? 0 : val;
  }, [displayValue, mode, radix]);

  // Format number for display
  const formatDisplay = useCallback((num: number, targetRadix: ProgrammerRadix = radix): string => {
    if (mode === 'programmer') {
      const rounded = Math.floor(num);
      if (targetRadix === 'HEX') return rounded.toString(16).toUpperCase();
      if (targetRadix === 'OCT') return rounded.toString(8);
      if (targetRadix === 'BIN') {
        let binStr = (rounded >>> 0).toString(2);
        if (binStr.length > bitSize) {
          binStr = binStr.slice(-bitSize);
        }
        return binStr || '0';
      }
      return rounded.toString(10);
    }
    
    if (isNaN(num)) return 'Error';
    if (!isFinite(num)) return 'Infinity';
    
    const str = num.toString();
    if (str.includes('e')) return str;
    const parts = str.split('.');
    if (parts[1] && parts[1].length > 8) {
      return num.toFixed(8).replace(/\.?0+$/, '');
    }
    return str;
  }, [mode, radix, bitSize]);

  // Set modes and dynamically adjust window size
  const handleSetMode = useCallback((newMode: CalculatorMode) => {
    setMode(newMode);
    if (!win) return;

    let targetWidth = 320;
    let targetHeight = 460;

    if (newMode === 'scientific') {
      targetWidth = 620;
      targetHeight = 460;
    } else if (newMode === 'programmer') {
      targetWidth = 620;
      targetHeight = 500;
    }

    if (showHistory) {
      targetWidth += 180;
    }

    resizeWindow(windowId, {
      x: win.rect.x,
      y: win.rect.y,
      width: targetWidth,
      height: targetHeight,
    }, false);
  }, [win, showHistory, resizeWindow, windowId]);

  const handleToggleHistory = useCallback(() => {
    const nextShowHistory = !showHistory;
    setShowHistory(nextShowHistory);
    if (!win) return;

    const currentWidth = win.rect.width;
    const targetWidth = nextShowHistory ? currentWidth + 180 : currentWidth - 180;

    resizeWindow(windowId, {
      x: win.rect.x,
      y: win.rect.y,
      width: targetWidth,
      height: win.rect.height,
    }, false);
  }, [win, showHistory, resizeWindow, windowId]);

  // Listen to WindowChrome custom events
  useEffect(() => {
    const handleToggle = (e: Event) => {
      const ce = e as CustomEvent;
      if (ce.detail.windowId === windowId) {
        handleToggleHistory();
      }
    };
    const handleSetModeEvent = (e: Event) => {
      const ce = e as CustomEvent;
      if (ce.detail.windowId === windowId) {
        handleSetMode(ce.detail.mode);
      }
    };

    window.addEventListener('app:calculator:toggle-history', handleToggle);
    window.addEventListener('app:calculator:set-mode', handleSetModeEvent);
    return () => {
      window.removeEventListener('app:calculator:toggle-history', handleToggle);
      window.removeEventListener('app:calculator:set-mode', handleSetModeEvent);
    };
  }, [windowId, handleToggleHistory, handleSetMode]);

  // Dispatch state changes back to WindowChrome
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('app:calculator:state-changed', {
      detail: { windowId, mode, showHistory }
    }));
  }, [windowId, mode, showHistory]);

  // ── CORE CALCULATOR LOGIC ──────────────────────────────────────

  const handleDigit = useCallback((digit: string) => {
    setDisplayValue((prev) => {
      if (prev === '0' || shouldResetDisplay) {
        setShouldResetDisplay(false);
        return digit;
      }
      if (prev.length > 20 && !shouldResetDisplay) return prev;
      return prev + digit;
    });
  }, [shouldResetDisplay]);

  const handleDecimal = useCallback(() => {
    if (mode === 'programmer') return;
    setDisplayValue((prev) => {
      if (shouldResetDisplay) {
        setShouldResetDisplay(false);
        return '0.';
      }
      if (prev.includes('.')) return prev;
      return prev + '.';
    });
  }, [mode, shouldResetDisplay]);

  const handleAC = useCallback(() => {
    setDisplayValue('0');
    setOperand(null);
    setOperator(null);
    setShouldResetDisplay(false);
  }, []);

  const handleBackspace = useCallback(() => {
    setDisplayValue((prev) => {
      if (prev.length <= 1 || shouldResetDisplay) {
        return '0';
      }
      return prev.slice(0, -1);
    });
  }, [shouldResetDisplay]);

  const handleToggleSign = useCallback(() => {
    const num = getNumericValue();
    setDisplayValue(formatDisplay(-num));
  }, [getNumericValue, formatDisplay]);

  const handlePercent = useCallback(() => {
    const num = getNumericValue();
    setDisplayValue(formatDisplay(num / 100));
  }, [getNumericValue, formatDisplay]);

  const performCalculation = useCallback((op: string, a: number, b: number): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×':
      case '*': return a * b;
      case '÷':
      case '/': return b === 0 ? NaN : a / b;
      case 'xʸ':
      case '^': return Math.pow(a, b);
      case 'y√x': return Math.pow(a, 1 / b);
      case 'logy': return Math.log(a) / Math.log(b);
      // Programmer bitwise
      case 'AND': return a & b;
      case 'OR': return a | b;
      case 'XOR': return a ^ b;
      case 'NOR': return ~(a | b);
      case '<<': return a << b;
      case '>>': return a >> b;
      case 'X<<Y': return a << b;
      case 'X>>Y': return a >> b;
      case 'RoL': {
        const shift = b % bitSize;
        return (a << shift) | (a >>> (bitSize - shift));
      }
      case 'RoR': {
        const shift = b % bitSize;
        return (a >>> shift) | (a << (bitSize - shift));
      }
      case 'mod': return a % b;
      default: return b;
    }
  }, [bitSize]);

  const handleOperator = useCallback((nextOperator: string) => {
    const nextValue = getNumericValue();

    if (operand === null) {
      setOperand(nextValue);
    } else if (operator) {
      const result = performCalculation(operator, operand, nextValue);
      setOperand(result);
      setDisplayValue(formatDisplay(result));
    }

    setOperator(nextOperator);
    setShouldResetDisplay(true);
  }, [getNumericValue, operand, operator, performCalculation, formatDisplay]);

  const handleEqual = useCallback(() => {
    const nextValue = getNumericValue();

    if (operand === null || !operator) return;

    const result = performCalculation(operator, operand, nextValue);
    
    const expr = `${formatDisplay(operand)} ${operator} ${formatDisplay(nextValue)}`;
    const res = formatDisplay(result);
    setHistoryLog((h) => [...h, { expression: expr, result: res }]);

    setDisplayValue(res);
    setOperand(null);
    setOperator(null);
    setShouldResetDisplay(true);
  }, [getNumericValue, operand, operator, performCalculation, formatDisplay]);

  // Unary scientific functions
  const handleUnaryScientific = (op: string) => {
    const num = getNumericValue();
    let result = 0;

    switch (op) {
      case 'x²': result = num * num; break;
      case 'x³': result = num * num * num; break;
      case '2ˣ': result = Math.pow(2, num); break;
      case '1/x': result = 1 / num; break;
      case '2√x': result = Math.sqrt(num); break;
      case '3√x': result = Math.cbrt(num); break;
      case 'ln': result = Math.log(num); break;
      case 'log₂': result = Math.log2(num); break;
      case 'log₁₀': result = Math.log10(num); break;
      case 'sin': result = isRad ? Math.sin(num) : Math.sin((num * Math.PI) / 180); break;
      case 'cos': result = isRad ? Math.cos(num) : Math.cos((num * Math.PI) / 180); break;
      case 'tan': result = isRad ? Math.tan(num) : Math.tan((num * Math.PI) / 180); break;
      case 'sinh': result = Math.sinh(num); break;
      case 'cosh': result = Math.cosh(num); break;
      case 'tanh': result = Math.tanh(num); break;
      case 'sin⁻¹': {
        const val = Math.asin(num);
        result = isRad ? val : (val * 180) / Math.PI;
        break;
      }
      case 'cos⁻¹': {
        const val = Math.acos(num);
        result = isRad ? val : (val * 180) / Math.PI;
        break;
      }
      case 'tan⁻¹': {
        const val = Math.atan(num);
        result = isRad ? val : (val * 180) / Math.PI;
        break;
      }
      case 'sinh⁻¹': result = Math.asinh(num); break;
      case 'cosh⁻¹': result = Math.acosh(num); break;
      case 'tanh⁻¹': result = Math.atanh(num); break;
      case 'x!': {
        if (num < 0 || !Number.isInteger(num)) {
          result = NaN;
        } else {
          let f = 1;
          for (let i = 1; i <= num; i++) f *= i;
          result = f;
        }
        break;
      }
      case 'e': result = Math.E; break;
      case 'π': result = Math.PI; break;
      case 'Rand': result = Math.random(); break;
      default: return;
    }

    setDisplayValue(formatDisplay(result));
    setShouldResetDisplay(true);
  };

  // Memory commands
  const handleMemory = (cmd: string) => {
    const num = getNumericValue();
    switch (cmd) {
      case 'mc': setMemory(0); break;
      case 'mr': setDisplayValue(formatDisplay(memory)); setShouldResetDisplay(true); break;
      case 'm+': setMemory((m) => m + num); break;
      case 'm-': setMemory((m) => m - num); break;
      default: break;
    }
  };

  // Programmer mode helpers
  const handleToggleBit = (bitIndex: number) => {
    const num = getNumericValue();
    const valBig = BigInt(Math.floor(num));
    const mask = BigInt(1) << BigInt(bitIndex);
    const toggled = valBig ^ mask;
    setDisplayValue(formatDisplay(Number(toggled)));
  };

  // Convert Programmer values
  const handleSelectRadix = (newRadix: ProgrammerRadix) => {
    const currentNum = getNumericValue();
    setRadix(newRadix);
    setDisplayValue(formatDisplay(currentNum, newRadix));
  };

  // Keyboard handler
  useEffect(() => {
    if (!win?.isFocused) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;

      if (/^[0-9]$/.test(key)) {
        if (mode === 'programmer' && radix === 'BIN' && key !== '0' && key !== '1') return;
        if (mode === 'programmer' && radix === 'OCT' && !/^[0-7]$/.test(key)) return;
        handleDigit(key);
        e.preventDefault();
      }
      if (/^[a-fA-F]$/.test(key) && mode === 'programmer' && radix === 'HEX') {
        handleDigit(key.toUpperCase());
        e.preventDefault();
      }
      if (key === '+') { handleOperator('+'); e.preventDefault(); }
      if (key === '-') { handleOperator('-'); e.preventDefault(); }
      if (key === '*' || key === 'x' || key === 'X') { handleOperator('×'); e.preventDefault(); }
      if (key === '/') { handleOperator('÷'); e.preventDefault(); }
      if (key === '=' || key === 'Enter') { handleEqual(); e.preventDefault(); }
      if (key === '.' || key === ',') { handleDecimal(); e.preventDefault(); }
      if (key === 'Backspace') { handleBackspace(); e.preventDefault(); }
      if (key === 'Escape' || key === 'c' || key === 'C') { handleAC(); e.preventDefault(); }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [win?.isFocused, mode, radix, handleDigit, handleDecimal, handleOperator, handleEqual, handleBackspace, handleAC]);

  // Character mapping representation in Programmer mode (ASCII / Unicode)
  const getCharRepresentation = () => {
    const code = getNumericValue();
    if (code < 32 || code > 126) return 'Control / Non-Printable';
    return String.fromCharCode(code);
  };

  // Renders the 64-bit visualizer
  const renderBitGrid = () => {
    const num = getNumericValue();
    const valBig = BigInt(Math.floor(num));
    const bits: number[] = [];
    for (let i = 63; i >= 0; i--) {
      bits.push(Number((valBig >> BigInt(i)) & BigInt(1)));
    }

    const topRow = bits.slice(0, 32);
    const bottomRow = bits.slice(32, 64);

    const renderRowBits = (rowBits: number[], startIndex: number) => {
      const groups = [];
      for (let g = 0; g < 8; g++) {
        groups.push(rowBits.slice(g * 4, (g + 1) * 4));
      }

      return (
        <div className="flex justify-between items-center gap-1.5 font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
          {groups.map((group, gIdx) => {
            const groupStartBit = startIndex - (gIdx * 4);
            return (
              <div key={gIdx} className="flex flex-col items-center gap-0.5">
                <div className="flex gap-1">
                  {group.map((bit, bIdx) => {
                    const actualBitIdx = groupStartBit - bIdx;
                    return (
                      <button
                        key={bIdx}
                        onClick={() => handleToggleBit(actualBitIdx)}
                        className={cn(
                          "w-2.5 h-3.5 flex items-center justify-center rounded transition-colors select-none",
                          bit === 1 
                            ? "text-amber-500 font-semibold bg-amber-500/10 hover:bg-amber-500/20" 
                            : "text-neutral-400 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300"
                        )}
                      >
                        {bit}
                      </button>
                    );
                  })}
                </div>
                {gIdx === 0 && (
                  <span className="text-[7px] text-neutral-400 dark:text-neutral-600 font-mono -mt-0.5">{startIndex}</span>
                )}
                {gIdx === 4 && (
                  <span className="text-[7px] text-neutral-400 dark:text-neutral-600 font-mono -mt-0.5">{startIndex - 16}</span>
                )}
                {gIdx === 7 && startIndex === 31 && (
                  <span className="text-[7px] text-neutral-400 dark:text-neutral-600 font-mono -mt-0.5">0</span>
                )}
              </div>
            );
          })}
        </div>
      );
    };

    return (
      <div className="space-y-1.5 p-2 bg-black/5 dark:bg-neutral-900/60 rounded-lg border border-black/5 dark:border-white/5 select-none shrink-0">
        {renderRowBits(topRow, 63)}
        {renderRowBits(bottomRow, 31)}
      </div>
    );
  };

  return (
    <div className="flex h-full w-full bg-[#f4f3ee] dark:bg-[#1b1916] text-[#1c1c1e] dark:text-white select-none overflow-hidden">
      
      {/* ── 1. HISTORY SIDEBAR ────────────────────────────────────── */}
      {showHistory && (
        <div className="w-[180px] shrink-0 border-r border-black/5 dark:border-white/5 bg-[#eae8e4] dark:bg-[#171513] flex flex-col h-full z-10 transition-all duration-200">
          {/* Titlebar spacer overlay */}
          <div className="h-11 shrink-0 flex items-center px-4" />
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3">
            {historyLog.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-neutral-400 dark:text-neutral-500 gap-2">
                <HistoryIcon className="w-8 h-8 opacity-40" />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">No History</span>
              </div>
            ) : (
              historyLog.map((log, idx) => (
                <div 
                  key={idx} 
                  className="text-right text-xs py-1.5 border-b border-black/5 dark:border-white/5 group relative hover:bg-black/5 dark:hover:bg-white/5 rounded px-1 cursor-pointer transition-colors"
                  onClick={() => setDisplayValue(log.result)}
                >
                  <div className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono truncate">{log.expression}</div>
                  <div className="font-semibold text-neutral-700 dark:text-neutral-200 font-mono mt-0.5">{log.result}</div>
                </div>
              ))
            )}
          </div>
          {historyLog.length > 0 && (
            <div className="p-2 border-t border-black/5 dark:border-white/5">
              <button 
                onClick={() => setHistoryLog([])}
                className="w-full text-center py-1 text-[10px] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white bg-black/5 dark:bg-white/5 rounded active:bg-black/10 dark:active:bg-white/10 transition-colors font-medium"
              >
                Clear History
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── 2. MAIN CONTAINER ────────────────────────────────────── */}
      <div className="flex-1 flex flex-col h-full relative">
        
        {/* Transparent titlebar overlay spacer */}
        <div className="h-11 shrink-0 w-full" />

        {/* ── SCREEN DISPLAY AREA ────────────────────────────────────── */}
        <div className="flex-1 flex flex-col justify-end items-end px-5 py-3 relative min-h-0 select-text">
          {/* Secondary display showing operand and operator */}
          {operand !== null && operator && (
            <div className="text-neutral-400 dark:text-neutral-500 text-xs font-mono mb-1 truncate max-w-full select-none">
              {formatDisplay(operand)} {operator}
            </div>
          )}

          {/* Primary value display */}
          <div className={cn(
            "font-light tracking-tight truncate max-w-full select-all font-mono leading-none text-right",
            displayValue.length > 14 ? "text-2xl" : displayValue.length > 10 ? "text-3xl" : "text-5xl"
          )}>
            {displayValue}
          </div>
        </div>

        {/* ── PROGRAMMER RADIX LIST & BITS VISUALIZER ──────────────── */}
        {mode === 'programmer' && (
          <div className="px-4 py-2 space-y-2 border-t border-black/5 dark:border-white/5 select-none shrink-0 bg-black/5 dark:bg-black/10">
            {/* Hex, Dec, Oct, Bin conversions */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
              {(['HEX', 'DEC', 'OCT', 'BIN'] as ProgrammerRadix[]).map((r) => {
                const isActive = radix === r;
                const value = formatDisplay(getNumericValue(), r);
                return (
                  <div 
                    key={r}
                    onClick={() => handleSelectRadix(r)}
                    className={cn(
                      "flex items-center justify-between py-0.5 px-1.5 rounded cursor-pointer transition-colors",
                      isActive 
                        ? "bg-amber-500/10 text-amber-500 font-semibold" 
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    <span>{r}</span>
                    <span className="truncate max-w-[170px] font-semibold text-right text-neutral-850 dark:text-neutral-200">{value}</span>
                  </div>
                );
              })}
            </div>

            {/* Binary bit visualizer */}
            {showBinaryBits && renderBitGrid()}

            {/* ASCII/Unicode representation bar */}
            <div className="flex justify-between items-center text-[9px] text-neutral-450 dark:text-neutral-500 font-mono px-1">
              <span>{asciiMode}:</span>
              <span className="text-neutral-600 dark:text-neutral-300 truncate max-w-[200px]">{getCharRepresentation()}</span>
            </div>
          </div>
        )}

        {/* ── 3. BUTTONS KEYBOARD GRID ──────────────────────────────── */}
        <div className="p-4 pt-1 shrink-0 border-t border-black/5 dark:border-white/5 select-none bg-[#eae8e4] dark:bg-[#171513]">
          
          {/* BASIC MODE KEYBOARD (4 x 5 Grid) */}
          {mode === 'basic' && (
            <div className="grid grid-cols-4 gap-2.5">
              {/* Row 1 */}
              <button onClick={handleBackspace} className="h-12 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] active:bg-[#c2c1be] dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-500 text-[#1c1c1e] dark:text-white flex items-center justify-center transition-colors">
                <Delete className="w-4.5 h-4.5" />
              </button>
              <button onClick={handleAC} className="h-12 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] active:bg-[#c2c1be] dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-500 text-[#1c1c1e] dark:text-white font-medium transition-colors">
                AC
              </button>
              <button onClick={handlePercent} className="h-12 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] active:bg-[#c2c1be] dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-500 text-[#1c1c1e] dark:text-white font-medium transition-colors">
                %
              </button>
              <button onClick={() => handleOperator('÷')} className={cn("h-12 rounded-full font-semibold text-xl transition-colors", operator === '÷' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>
                ÷
              </button>

              {/* Row 2 */}
              {['7', '8', '9'].map((digit) => (
                <button key={digit} onClick={() => handleDigit(digit)} className="h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors">
                  {digit}
                </button>
              ))}
              <button onClick={() => handleOperator('×')} className={cn("h-12 rounded-full font-semibold text-xl transition-colors", operator === '×' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>
                ×
              </button>

              {/* Row 3 */}
              {['4', '5', '6'].map((digit) => (
                <button key={digit} onClick={() => handleDigit(digit)} className="h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors">
                  {digit}
                </button>
              ))}
              <button onClick={() => handleOperator('-')} className={cn("h-12 rounded-full font-semibold text-2xl transition-colors", operator === '-' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>
                -
              </button>

              {/* Row 4 */}
              {['1', '2', '3'].map((digit) => (
                <button key={digit} onClick={() => handleDigit(digit)} className="h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors">
                  {digit}
                </button>
              ))}
              <button onClick={() => handleOperator('+')} className={cn("h-12 rounded-full font-semibold text-xl transition-colors", operator === '+' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>
                +
              </button>

              {/* Row 5 */}
              <button onClick={handleToggleSign} className="h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-lg font-medium transition-colors">
                +/-
              </button>
              <button onClick={() => handleDigit('0')} className="h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors">
                0
              </button>
              <button onClick={handleDecimal} className="h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors">
                ,
              </button>
              <button onClick={handleEqual} className="h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-white text-2xl font-bold transition-colors">
                =
              </button>
            </div>
          )}

          {/* SCIENTIFIC MODE KEYBOARD (10 x 5 Grid) */}
          {mode === 'scientific' && (
            <div className="grid grid-cols-10 gap-1.5 text-[10px]">
              {/* Row 1 */}
              <button onClick={() => handleDigit('(')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">(</button>
              <button onClick={() => handleDigit(')')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">)</button>
              <button onClick={() => handleMemory('mc')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">mc</button>
              <button onClick={() => handleMemory('m+')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">m+</button>
              <button onClick={() => handleMemory('m-')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">m-</button>
              <button onClick={() => handleMemory('mr')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">mr</button>
              <button onClick={handleBackspace} className="h-10 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white flex items-center justify-center transition-colors">
                <Delete className="w-3.5 h-3.5" />
              </button>
              <button onClick={handleAC} className="h-10 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white font-semibold transition-colors">AC</button>
              <button onClick={handlePercent} className="h-10 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white font-semibold transition-colors">%</button>
              <button onClick={() => handleOperator('÷')} className={cn("h-10 rounded-full font-bold text-sm transition-colors", operator === '÷' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>÷</button>

              {/* Row 2 */}
              <button onClick={() => setIsSecond(!isSecond)} className={cn("h-10 rounded-full transition-colors font-semibold", isSecond ? "bg-amber-500 text-white" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200")}>2ⁿᵈ</button>
              <button onClick={() => handleUnaryScientific('x²')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">x²</button>
              <button onClick={() => handleUnaryScientific('x³')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">x³</button>
              <button onClick={() => handleOperator('xʸ')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">xʸ</button>
              <button onClick={() => handleUnaryScientific('2ˣ')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">2ˣ</button>
              <button onClick={() => handleUnaryScientific('e')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">e</button>
              {['7', '8', '9'].map((digit) => (
                <button key={digit} onClick={() => handleDigit(digit)} className="h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors">{digit}</button>
              ))}
              <button onClick={() => handleOperator('×')} className={cn("h-10 rounded-full font-bold text-sm transition-colors", operator === '×' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>×</button>

              {/* Row 3 */}
              <button onClick={() => handleUnaryScientific('1/x')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">1/x</button>
              <button onClick={() => handleUnaryScientific('2√x')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">²√x</button>
              <button onClick={() => handleUnaryScientific('3√x')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">³√x</button>
              <button onClick={() => handleOperator('y√x')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">ʸ√x</button>
              <button onClick={() => handleOperator('logy')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">logʸ</button>
              <button onClick={() => handleUnaryScientific('log₂')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">log₂</button>
              {['4', '5', '6'].map((digit) => (
                <button key={digit} onClick={() => handleDigit(digit)} className="h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors">{digit}</button>
              ))}
              <button onClick={() => handleOperator('-')} className={cn("h-10 rounded-full font-bold text-sm transition-colors", operator === '-' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>-</button>

              {/* Row 4 */}
              <button onClick={() => handleUnaryScientific('x!')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">x!</button>
              <button onClick={() => handleUnaryScientific(isSecond ? 'sin⁻¹' : 'sin')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">{isSecond ? 'sin⁻¹' : 'sin'}</button>
              <button onClick={() => handleUnaryScientific(isSecond ? 'cos⁻¹' : 'cos')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">{isSecond ? 'cos⁻¹' : 'cos'}</button>
              <button onClick={() => handleUnaryScientific(isSecond ? 'tan⁻¹' : 'tan')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">{isSecond ? 'tan⁻¹' : 'tan'}</button>
              <button onClick={() => handleUnaryScientific('log₁₀')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">log₁₀</button>
              <button onClick={() => handleOperator('EE')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">EE</button>
              {['1', '2', '3'].map((digit) => (
                <button key={digit} onClick={() => handleDigit(digit)} className="h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors">{digit}</button>
              ))}
              <button onClick={() => handleOperator('+')} className={cn("h-10 rounded-full font-bold text-sm transition-colors", operator === '+' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>+</button>

              {/* Row 5 */}
              <button onClick={() => handleUnaryScientific('Rand')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">Rand</button>
              <button onClick={() => handleUnaryScientific(isSecond ? 'sinh⁻¹' : 'sinh')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">{isSecond ? 'sinh⁻¹' : 'sinh'}</button>
              <button onClick={() => handleUnaryScientific(isSecond ? 'cosh⁻¹' : 'cosh')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">{isSecond ? 'cosh⁻¹' : 'cosh'}</button>
              <button onClick={() => handleUnaryScientific(isSecond ? 'tanh⁻¹' : 'tanh')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">{isSecond ? 'tanh⁻¹' : 'tanh'}</button>
              <button onClick={() => handleUnaryScientific('π')} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">π</button>
              <button onClick={() => setIsRad(!isRad)} className="h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">{isRad ? 'Rad' : 'Deg'}</button>
              <button onClick={handleToggleSign} className="h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors">+/-</button>
              <button onClick={() => handleDigit('0')} className="h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors">0</button>
              <button onClick={handleDecimal} className="h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors">,</button>
              <button onClick={handleEqual} className="h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold transition-colors">=</button>
            </div>
          )}

          {/* PROGRAMMER MODE KEYBOARD (7 x 6 Grid) */}
          {mode === 'programmer' && (
            <div className="grid grid-cols-7 gap-1.5 text-[9px] font-semibold">
              {(() => {
                const isBin = radix === 'BIN';
                const isOct = radix === 'OCT';
                const isDec = radix === 'DEC';
                const isHex = radix === 'HEX';

                const disableAF = !isHex;
                const disable89 = isBin || isOct;
                const disable27 = isBin;

                return (
                  <>
                    {/* Row 1 */}
                    <button onClick={handleBackspace} className="h-10 rounded-lg bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white flex items-center justify-center transition-colors">
                      <Delete className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => handleDigit('(')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">(</button>
                    <button onClick={() => handleDigit(')')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">)</button>
                    <button 
                      onClick={() => handleDigit('D')} 
                      disabled={disableAF} 
                      className={cn("h-10 rounded-lg text-white transition-colors", disableAF ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600")}
                    >D</button>
                    <button 
                      onClick={() => handleDigit('E')} 
                      disabled={disableAF} 
                      className={cn("h-10 rounded-lg text-white transition-colors", disableAF ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600")}
                    >E</button>
                    <button 
                      onClick={() => handleDigit('F')} 
                      disabled={disableAF} 
                      className={cn("h-10 rounded-lg text-white transition-colors", disableAF ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600")}
                    >F</button>
                    <button onClick={handleAC} className="h-10 rounded-lg bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white transition-colors">AC</button>

                    {/* Row 2 */}
                    <button onClick={() => handleOperator('AND')} className={cn("h-10 rounded-lg transition-colors", operator === 'AND' ? "bg-amber-500/20 text-amber-500 font-bold border border-amber-500/50" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200")}>AND</button>
                    <button onClick={() => handleOperator('OR')} className={cn("h-10 rounded-lg transition-colors", operator === 'OR' ? "bg-amber-500/20 text-amber-500 font-bold border border-amber-500/50" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200")}>OR</button>
                    <button onClick={() => handleOperator('XOR')} className={cn("h-10 rounded-lg transition-colors", operator === 'XOR' ? "bg-amber-500/20 text-amber-500 font-bold border border-amber-500/50" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200")}>XOR</button>
                    <button 
                      onClick={() => handleDigit('A')} 
                      disabled={disableAF} 
                      className={cn("h-10 rounded-lg text-white transition-colors", disableAF ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600")}
                    >A</button>
                    <button 
                      onClick={() => handleDigit('B')} 
                      disabled={disableAF} 
                      className={cn("h-10 rounded-lg text-white transition-colors", disableAF ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600")}
                    >B</button>
                    <button 
                      onClick={() => handleDigit('C')} 
                      disabled={disableAF} 
                      className={cn("h-10 rounded-lg text-white transition-colors", disableAF ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600")}
                    >C</button>
                    <button onClick={() => handleOperator('÷')} className={cn("h-10 rounded-lg transition-colors text-sm font-bold", operator === '÷' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>÷</button>

                    {/* Row 3 */}
                    <button onClick={() => handleOperator('NOR')} className={cn("h-10 rounded-lg transition-colors", operator === 'NOR' ? "bg-amber-500/20 text-amber-500 font-bold border border-amber-500/50" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200")}>NOR</button>
                    <button onClick={() => handleOperator('<<')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">&lt;&lt;</button>
                    <button onClick={() => handleOperator('>>')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">&gt;&gt;</button>
                    {['7', '8', '9'].map((digit) => {
                      const isDisabled = (digit === '8' || digit === '9') ? disable89 : false;
                      return (
                        <button 
                          key={digit} 
                          onClick={() => handleDigit(digit)} 
                          disabled={isDisabled}
                          className={cn("h-10 rounded-lg text-white transition-colors", isDisabled ? "bg-[#eae8e4]/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white")}
                        >{digit}</button>
                      );
                    })}
                    <button onClick={() => handleOperator('×')} className={cn("h-10 rounded-lg transition-colors text-sm font-bold", operator === '×' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>×</button>

                    {/* Row 4 */}
                    <button onClick={() => handleUnaryScientific('~')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">NOT</button>
                    <button onClick={() => handleOperator('X<<Y')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">X&lt;&lt;Y</button>
                    <button onClick={() => handleOperator('X>>Y')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">X&gt;&gt;Y</button>
                    {['4', '5', '6'].map((digit) => {
                      const isDisabled = disable89;
                      return (
                        <button 
                          key={digit} 
                          onClick={() => handleDigit(digit)} 
                          disabled={isDisabled}
                          className={cn("h-10 rounded-lg text-white transition-colors", isDisabled ? "bg-[#eae8e4]/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white")}
                        >{digit}</button>
                      );
                    })}
                    <button onClick={() => handleOperator('-')} className={cn("h-10 rounded-lg transition-colors text-sm font-bold", operator === '-' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>-</button>

                    {/* Row 5 */}
                    <button onClick={() => handleUnaryScientific('NEG')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">NEG</button>
                    <button onClick={() => handleOperator('RoL')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">RoL</button>
                    <button onClick={() => handleOperator('RoR')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">RoR</button>
                    {['1', '2', '3'].map((digit) => {
                      const isDisabled = (digit === '2' || digit === '3') ? disable27 : false;
                      return (
                        <button 
                          key={digit} 
                          onClick={() => handleDigit(digit)} 
                          disabled={isDisabled}
                          className={cn("h-10 rounded-lg text-white transition-colors", isDisabled ? "bg-[#eae8e4]/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white")}
                        >{digit}</button>
                      );
                    })}
                    <button onClick={() => handleOperator('+')} className={cn("h-10 rounded-lg transition-colors text-sm font-bold", operator === '+' ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white")}>+</button>

                    {/* Row 6 */}
                    <button onClick={() => handleOperator('mod')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">mod</button>
                    <button onClick={() => handleUnaryScientific('flip8')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">flip₈</button>
                    <button onClick={() => handleUnaryScientific('flip16')} className="h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors">flip₁₆</button>
                    <button 
                      onClick={() => handleDigit('FF')} 
                      disabled={disableAF} 
                      className={cn("h-10 rounded-lg text-white transition-colors", disableAF ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-[#dddbd7] dark:bg-neutral-700 dark:hover:bg-neutral-600")}
                    >FF</button>
                    <button onClick={() => handleDigit('0')} className="h-10 rounded-lg bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white transition-colors">0</button>
                    <button 
                      onClick={() => handleDigit('00')} 
                      disabled={isBin}
                      className={cn("h-10 rounded-lg text-white transition-colors", isBin ? "bg-[#eae8e4]/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white")}
                    >00</button>
                    <button onClick={handleEqual} className="h-10 rounded-lg bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold transition-colors">=</button>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
