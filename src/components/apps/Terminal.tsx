'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { useStore } from '@/store';
import type { AppContentProps } from './AppRegistry';

interface HistoryEntry {
  type: 'input' | 'output' | 'error';
  text: string;
}

type CommandFn = (args: string[], cwd: string) => { output: string; newCwd?: string };

function buildCommands(store: ReturnType<typeof useStore.getState>): Record<string, CommandFn> {
  return {
    help: () => ({
      output: 'Available: help, echo, clear, ls, pwd, cat, mkdir, rm, mv, touch, date, uname, whoami, tree',
    }),
    echo: (args) => ({ output: args.join(' ') }),
    pwd: (_, cwd) => ({ output: cwd }),
    whoami: () => ({ output: 'user' }),
    date: () => ({ output: new Date().toString() }),
    uname: () => ({ output: 'DesktopLayout OS 1.0.0 (Next.js) arm64' }),

    ls: (args, cwd) => {
      const target = args[0] ? (args[0].startsWith('/') ? args[0] : `${cwd}/${args[0]}`.replace('//', '/')) : cwd;
      const entries = store.vfsLs(target);
      if (!store.vfsExists(target)) return { output: `ls: ${target}: No such file or directory` };
      if (entries.length === 0) return { output: '' };
      return { output: entries.map(e => e.type === 'dir' ? `\x1b[34m${e.name}/\x1b[0m` : e.name).join('  ') };
    },

    cat: (args, cwd) => {
      if (!args[0]) return { output: 'cat: missing operand' };
      const target = args[0].startsWith('/') ? args[0] : `${cwd}/${args[0]}`.replace('//', '/');
      const content = store.vfsReadFile(target);
      if (content === null) return { output: `cat: ${args[0]}: No such file or directory` };
      return { output: content };
    },

    mkdir: (args, cwd) => {
      if (!args[0]) return { output: 'mkdir: missing operand' };
      const target = args[0].startsWith('/') ? args[0] : `${cwd}/${args[0]}`.replace('//', '/');
      store.vfsMkdir(target);
      return { output: '' };
    },

    touch: (args, cwd) => {
      if (!args[0]) return { output: 'touch: missing operand' };
      const target = args[0].startsWith('/') ? args[0] : `${cwd}/${args[0]}`.replace('//', '/');
      if (!store.vfsExists(target)) store.vfsWriteFile(target, '');
      return { output: '' };
    },

    rm: (args, cwd) => {
      if (!args[0]) return { output: 'rm: missing operand' };
      const flags = args.filter(a => a.startsWith('-'));
      const path = args.find(a => !a.startsWith('-')) ?? '';
      const target = path.startsWith('/') ? path : `${cwd}/${path}`.replace('//', '/');
      if (!store.vfsExists(target)) return { output: `rm: ${path}: No such file or directory` };
      store.vfsRm(target);
      return { output: '' };
    },

    mv: (args, cwd) => {
      if (args.length < 2) return { output: 'mv: missing operand' };
      const from = args[0].startsWith('/') ? args[0] : `${cwd}/${args[0]}`.replace('//', '/');
      const to = args[1].startsWith('/') ? args[1] : `${cwd}/${args[1]}`.replace('//', '/');
      if (!store.vfsExists(from)) return { output: `mv: ${args[0]}: No such file or directory` };
      store.vfsMv(from, to);
      return { output: '' };
    },

    cd: (args, cwd) => {
      const target = !args[0] ? '/Users/user' : args[0] === '..' ? (cwd.split('/').slice(0, -1).join('/') || '/') : args[0].startsWith('/') ? args[0] : `${cwd}/${args[0]}`.replace('//', '/');
      if (!store.vfsExists(target)) return { output: `cd: ${args[0]}: No such file or directory` };
      const entry = store.vfs[target];
      if (entry?.type === 'file') return { output: `cd: ${args[0]}: Not a directory` };
      return { output: '', newCwd: target };
    },

    tree: (_, cwd) => {
      const lines: string[] = [cwd];
      const recurse = (path: string, prefix: string, depth: number) => {
        if (depth > 3) return;
        const entries = store.vfsLs(path).sort((a, b) => a.name.localeCompare(b.name));
        entries.forEach((e, i) => {
          const isLast = i === entries.length - 1;
          lines.push(`${prefix}${isLast ? '└── ' : '├── '}${e.name}${e.type === 'dir' ? '/' : ''}`);
          if (e.type === 'dir') recurse(e.path, prefix + (isLast ? '    ' : '│   '), depth + 1);
        });
      };
      recurse(cwd, '', 0);
      return { output: lines.join('\n') };
    },
  };
}

export function Terminal({ windowId }: AppContentProps) {
  const store = useStore.getState;
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: 'output', text: 'Desktop Layout OS — Terminal v1.0\nType "help" for available commands.\n' },
  ]);
  const [input, setInput] = useState('');
  const [cwd, setCwd] = useState('/Users/user');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const storeSnapshot = useStore();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();

    if (!trimmed) {
      setHistory((h) => [...h, { type: 'input', text: '' }]);
      return;
    }

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const newEntries: HistoryEntry[] = [{ type: 'input', text: trimmed }];
    const [cmd, ...args] = trimmed.split(/\s+/);

    const commands = buildCommands(storeSnapshot);
    const fn = commands[cmd];

    if (fn) {
      const result = fn(args, cwd);
      if (result.output) newEntries.push({ type: 'output', text: result.output });
      if (result.newCwd) setCwd(result.newCwd);
    } else {
      newEntries.push({ type: 'error', text: `${cmd}: command not found` });
    }

    setCmdHistory((prev) => [trimmed, ...prev]);
    setHistory((h) => [...h, ...newEntries]);
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
    } else if (e.key === 'c' && e.ctrlKey) {
      setInput('');
      setHistory((h) => [...h, { type: 'input', text: `${input}^C` }]);
    }
  };

  const prompt = `\x1b[34muser\x1b[0m@\x1b[32mdesktop\x1b[0m:\x1b[33m${cwd.replace('/Users/user', '~')}\x1b[0m$ `;

  // Simple ANSI color parser for output display
  const renderText = (text: string) => {
    // Remove ANSI codes for now; just render plain (full ANSI parser is complex)
    return text.replace(/\x1b\[[0-9;]*m/g, '');
  };

  return (
    <div
      className="flex flex-col h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-[12px] leading-5 p-3 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-auto">
        {history.map((entry, i) => (
          <div key={i}>
            {entry.type === 'input' ? (
              <div className="flex flex-wrap">
                <span className="text-blue-400">user</span>
                <span>@</span>
                <span className="text-green-400">desktop</span>
                <span>:</span>
                <span className="text-yellow-400">{cwd.replace('/Users/user', '~')}</span>
                <span>$ {entry.text}</span>
              </div>
            ) : (
              <div className={entry.type === 'error' ? 'text-red-400' : 'text-neutral-300'}>
                <pre className="whitespace-pre-wrap font-mono">{renderText(entry.text)}</pre>
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Active input row */}
      <div className="flex flex-wrap items-center mt-1 gap-0">
        <span className="text-blue-400">user</span>
        <span>@</span>
        <span className="text-green-400">desktop</span>
        <span>:</span>
        <span className="text-yellow-400">{cwd.replace('/Users/user', '~')}</span>
        <span>$&nbsp;</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent outline-none text-[#d4d4d4] caret-white min-w-0"
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}
