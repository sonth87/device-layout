'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Search, Phone, Video, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MobileSplitView, useMobileSplitBack, useSplitViewSelection } from './MobileSplitView';
import { useTranslation } from '@/hooks/useTranslation';

const MESSAGES_LOCALE = {
  en: { search: 'Search', imessage: 'iMessage', messages: 'Messages' },
  vi: { search: 'Tìm kiếm', imessage: 'iMessage', messages: 'Tin nhắn' },
  ja: { search: '検索', imessage: 'iMessage', messages: 'メッセージ' },
  ko: { search: '검색', imessage: 'iMessage', messages: '메시지' },
  zh: { search: '搜索', imessage: 'iMessage', messages: '信息' },
  th: { search: 'ค้นหา', imessage: 'iMessage', messages: 'ข้อความ' },
} as const;

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

import messagesData from '@/data/messages-data.json';

const INITIAL_CONVOS: Conversation[] = messagesData.map((c) => ({
  ...c,
  messages: c.messages.map((m) => ({
    ...m,
    from: m.from as 'me' | 'them',
    time: Date.now() + m.timeOffset,
  })),
}));

export function Messages() {
  const { language } = useTranslation();
  const tMsg = MESSAGES_LOCALE[language as keyof typeof MESSAGES_LOCALE] || MESSAGES_LOCALE.en;
  const [convos, setConvos] = useState<Conversation[]>(INITIAL_CONVOS);
  const [selectedId, setSelectedId] = useSplitViewSelection<string>(convos[0]?.id ?? null);
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

  const listPanel = (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white">
      <div className="p-3 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-2 px-2 py-1.5 bg-black/5 dark:bg-white/10 rounded-xl">
          <Search className="w-3.5 h-3.5 text-black/40 dark:text-white/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={tMsg.search}
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
              c.id !== selectedId && 'hover:bg-black/5 dark:hover:bg-white/5',
            )}
            style={c.id === selectedId ? { backgroundColor: 'var(--highlight-color)' } : undefined}
          >
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-xl shrink-0">
              {c.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-black/90 dark:text-white/90 truncate">{c.name}</p>
                <p className="text-[11px] text-black/40 dark:text-white/40 shrink-0 ml-2">{fmtTime(c.messages[c.messages.length - 1]?.time ?? 0)}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-xs text-black/50 dark:text-white/50 truncate flex-1">{c.preview}</p>
                {c.unread > 0 && (
                  <span 
                    className="shrink-0 w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center font-bold"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                  >
                    {c.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const chatPanel = selected ? (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white">
      <ChatHeader convo={selected} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {selected.messages.map((msg) => (
          <div key={msg.id} className={cn('flex', msg.from === 'me' ? 'justify-end' : 'justify-start')}>
            <div 
              className={cn(
                'max-w-[70%] px-3 py-2 rounded-2xl text-sm',
                msg.from === 'me'
                  ? 'text-white rounded-br-sm'
                  : 'bg-gray-100 dark:bg-white/10 text-black dark:text-white rounded-bl-sm',
              )}
              style={msg.from === 'me' ? { backgroundColor: 'var(--accent-color)' } : undefined}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      {/* Input */}
      <div className="px-3 py-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2 shrink-0">
        <button className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-accent-active">
          <Plus className="w-4 h-4" />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && send()}
          placeholder={tMsg.imessage}
          className="flex-1 px-3 py-1.5 rounded-full border border-black/15 dark:border-white/15 bg-transparent text-sm outline-none focus:ring-1 focus:ring-accent-active"
        />
        <button
          onClick={send}
          disabled={!input.trim()}
          className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity disabled:opacity-30 text-white"
          style={{ backgroundColor: input.trim() ? 'var(--accent-color)' : '#d1d1d6' }}
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  ) : null;

  return (
    <MobileSplitView
      list={listPanel}
      detail={chatPanel}
      onBack={() => setSelectedId(null)}
      detailTitle={selected?.name}
      className="bg-white dark:bg-[#0F1115]"
    />
  );
}

function ChatHeader({ convo }: { convo: Conversation }) {
  const mobileBack = useMobileSplitBack();
  const { language } = useTranslation();
  const tMsg = MESSAGES_LOCALE[language as keyof typeof MESSAGES_LOCALE] || MESSAGES_LOCALE.en;
  return (
    <div className="flex items-center gap-2 px-3 py-2.5 border-b border-black/10 dark:border-white/10 shrink-0">
      {mobileBack && (
        <button
          onClick={mobileBack}
          className="flex items-center gap-0.5 text-accent-active active:opacity-60 transition-opacity mr-1"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[14px] font-medium">{tMsg.messages}</span>
        </button>
      )}
      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-lg shrink-0">
        {convo.avatar}
      </div>
      <p className="font-semibold text-black/90 dark:text-white/90 flex-1 text-sm">{convo.name}</p>
      <button className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-accent-active"><Phone className="w-4 h-4" /></button>
      <button className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-accent-active"><Video className="w-4 h-4" /></button>
    </div>
  );
}
