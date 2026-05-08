'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import type { AppContentProps } from './AppRegistry';

interface HistoryEntry {
  type: 'input' | 'output';
  text: string;
}

const COMMANDS: Record<string, (args: string[]) => string> = {
  help: () => `Available commands: help, echo, clear, ls, pwd, whoami, date, uname`,
  echo: (args) => args.join(' '),
  ls: () => `Applications  Desktop  Documents  Downloads  Library  Movies  Music  Pictures  Public`,
  pwd: () => '/Users/user',
  whoami: () => 'user',
  date: () => new Date().toString(),
  uname: () => 'Darwin desktop-layout 26.0.0 arm64',
  clear: () => '\x1bclear',
};

export function Terminal({ windowId }: AppContentProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: 'output', text: 'Desktop Layout OS Terminal' },
    { type: 'output', text: 'Type "help" for available commands.\n' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    const newHistory: HistoryEntry[] = [
      ...history,
      { type: 'input', text: trimmed },
    ];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed) {
      const [cmd, ...args] = trimmed.split(' ');
      const fn = COMMANDS[cmd];
      const output = fn ? fn(args) : `command not found: ${cmd}`;
      newHistory.push({ type: 'output', text: output });
      setCmdHistory((prev) => [trimmed, ...prev]);
    }

    setHistory(newHistory);
    setInput('');
    setHistIdx(-1);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? '' : (cmdHistory[idx] ?? ''));
    }
  };

  return (
    <div
      className="flex flex-col h-full bg-neutral-900 text-green-400 font-mono text-xs p-3 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-auto">
        {history.map((entry, i) => (
          <div key={i} className="leading-5">
            {entry.type === 'input' ? (
              <span>
                <span className="text-blue-400">user@desktop</span>
                <span className="text-white">:</span>
                <span className="text-yellow-400">~</span>
                <span className="text-white">$ </span>
                {entry.text}
              </span>
            ) : (
              <span className="text-neutral-300 whitespace-pre-wrap">{entry.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      {/* Input row */}
      <div className="flex items-center gap-1 mt-1">
        <span className="text-blue-400">user@desktop</span>
        <span className="text-white">:</span>
        <span className="text-yellow-400">~</span>
        <span className="text-white">$&nbsp;</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
          spellCheck={false}
        />
      </div>
    </div>
  );
}
