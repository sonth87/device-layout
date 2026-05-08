'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Search, Phone, Video, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  from: 'me' | 'them';
  time: number;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  preview: string;
  unread: number;
  messages: Message[];
}

const INITIAL_CONVOS: Conversation[] = [
  {
    id: '1',
    name: 'Alice Chen',
    avatar: '👩‍💻',
    preview: 'Sounds great! See you then',
    unread: 0,
    messages: [
      { id: '1', text: 'Hey! Are you free tomorrow for coffee?', from: 'them', time: Date.now() - 3600000 },
      { id: '2', text: 'Yes! Around 10am works for me 😊', from: 'me', time: Date.now() - 3500000 },
      { id: '3', text: 'Sounds great! See you then', from: 'them', time: Date.now() - 3400000 },
    ],
  },
  {
    id: '2',
    name: 'Bob Martin',
    avatar: '👨‍🎨',
    preview: 'The design looks amazing!',
    unread: 2,
    messages: [
      { id: '1', text: 'Just pushed the new designs to Figma', from: 'them', time: Date.now() - 7200000 },
      { id: '2', text: 'The design looks amazing!', from: 'them', time: Date.now() - 7100000 },
    ],
  },
  {
    id: '3',
    name: 'Team Dev 🚀',
    avatar: '👥',
    preview: 'Deploy scheduled for Friday',
    unread: 5,
    messages: [
      { id: '1', text: 'Sprint review went well!', from: 'them', time: Date.now() - 86400000 },
      { id: '2', text: 'Deploy scheduled for Friday', from: 'them', time: Date.now() - 82800000 },
    ],
  },
];

export function Messages() {
  const [convos, setConvos] = useState<Conversation[]>(INITIAL_CONVOS);
  const [selectedId, setSelectedId] = useState<string>('1');
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const selected = convos.find((c) => c.id === selectedId);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selected?.messages.length]);

  const send = () => {
    if (!input.trim() || !selected) return;
    const msg: Message = { id: crypto.randomUUID(), text: input.trim(), from: 'me', time: Date.now() };
    setConvos((prev) => prev.map((c) =>
      c.id === selected.id
        ? { ...c, messages: [...c.messages, msg], preview: msg.text }
        : c
    ));
    setInput('');

    // Simulate reply after 800ms
    setTimeout(() => {
      const replies = [
        'Got it! 👍',
        'Sounds good!',
        'Thanks for letting me know.',
        'Interesting... tell me more!',
        '😄',
        'Will do!',
      ];
      const reply: Message = {
        id: crypto.randomUUID(),
        text: replies[Math.floor(Math.random() * replies.length)],
        from: 'them',
        time: Date.now(),
      };
      setConvos((prev) => prev.map((c) =>
        c.id === selected.id
          ? { ...c, messages: [...c.messages, reply], preview: reply.text }
          : c
      ));
    }, 800);
  };

  const filteredConvos = convos.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const fmtTime = (t: number) => {
    const d = new Date(t);
    const now = new Date();
    if (d.toDateString() === now.toDateString()) {
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  return (
    <div className="h-full flex bg-white dark:bg-[#1c1c1e] text-black dark:text-white">
      {/* Sidebar */}
      <div className="w-60 shrink-0 border-r border-black/10 dark:border-white/10 flex flex-col">
        <div className="p-3 border-b border-black/10 dark:border-white/10">
          <div className="flex items-center gap-2 px-2 py-1.5 bg-black/5 dark:bg-white/10 rounded-xl">
            <Search className="w-3.5 h-3.5 text-black/40 dark:text-white/40" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-black/30 dark:placeholder:text-white/30"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredConvos.map((c) => (
            <button
              key={c.id}
              onClick={() => { setSelectedId(c.id); setConvos((prev) => prev.map((x) => x.id === c.id ? { ...x, unread: 0 } : x)); }}
              className={cn(
                'w-full text-left flex items-center gap-3 px-3 py-3 border-b border-black/5 dark:border-white/5 transition-colors',
                c.id === selectedId ? 'bg-blue-500/10' : 'hover:bg-black/5 dark:hover:bg-white/5',
              )}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-xl shrink-0">
                {c.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold truncate">{c.name}</p>
                  <p className="text-[11px] text-black/40 dark:text-white/40 shrink-0 ml-2">{fmtTime(c.messages[c.messages.length - 1]?.time ?? 0)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-black/50 dark:text-white/50 truncate flex-1">{c.preview}</p>
                  {c.unread > 0 && (
                    <span className="shrink-0 w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold">
                      {c.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      {selected ? (
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-black/10 dark:border-white/10 shrink-0">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-lg">
              {selected.avatar}
            </div>
            <p className="font-semibold flex-1">{selected.name}</p>
            <button className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-blue-500"><Phone className="w-4 h-4" /></button>
            <button className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-blue-500"><Video className="w-4 h-4" /></button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {selected.messages.map((msg) => (
              <div key={msg.id} className={cn('flex', msg.from === 'me' ? 'justify-end' : 'justify-start')}>
                <div className={cn(
                  'max-w-[70%] px-3 py-2 rounded-2xl text-sm',
                  msg.from === 'me'
                    ? 'bg-blue-500 text-white rounded-br-sm'
                    : 'bg-gray-100 dark:bg-white/10 text-black dark:text-white rounded-bl-sm',
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2 shrink-0">
            <button className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-blue-500">
              <Plus className="w-4 h-4" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder="iMessage"
              className="flex-1 px-3 py-1.5 rounded-full border border-black/15 dark:border-white/15 bg-transparent text-sm outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center hover:opacity-80 transition-opacity disabled:opacity-30"
            >
              <Send className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-black/30 dark:text-white/30 text-sm">
          Select a conversation
        </div>
      )}
    </div>
  );
}
