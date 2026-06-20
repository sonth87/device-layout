'use client';

import { useState } from 'react';
import type { AppContentProps } from './AppRegistry';
import { useAppTranslation } from '@/hooks/useAppTranslation';

const TEXT_EDITOR_LOCALE = {
  en: {
    welcome: '# Welcome\n\nStart typing here...',
    placeholder: 'Start typing...',
    words: 'words',
    characters: 'characters',
  },
  vi: {
    welcome: '# Chào mừng\n\nBắt đầu viết ở đây...',
    placeholder: 'Bắt đầu viết...',
    words: 'từ',
    characters: 'ký tự',
  },
  ja: {
    welcome: '# ようこそ\n\nここに入力を開始してください...',
    placeholder: '入力を開始...',
    words: '単語',
    characters: '文字',
  },
  ko: {
    welcome: '# 환영합니다\n\n여기에 입력을 시작하세요...',
    placeholder: '입력 시작...',
    words: '단어',
    characters: '자',
  },
  zh: {
    welcome: '# 欢迎\n\n在此开始输入...',
    placeholder: '开始输入...',
    words: '字',
    characters: '字符',
  },
  th: {
    welcome: '# ยินดีต้อนรับ\n\nเริ่มพิมพ์ที่นี่...',
    placeholder: 'เริ่มพิมพ์...',
    words: 'คำ',
    characters: 'ตัวอักษร',
  },
} as const;

export function TextEditor({ windowId, appId }: AppContentProps) {
  const { t } = useAppTranslation(appId, TEXT_EDITOR_LOCALE);
  const [content, setContent] = useState<string>(t.welcome);
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const charCount = content.length;
  void windowId;

  return (
    <div className="flex flex-col h-full">
      <textarea
        className="flex-1 w-full resize-none p-4 text-sm font-mono bg-white dark:bg-neutral-900 text-black dark:text-white outline-none leading-relaxed"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        spellCheck={false}
        placeholder={t.placeholder}
      />
      {/* Status bar info */}
      <div className="shrink-0 px-4 py-1 text-xs text-black/40 dark:text-white/40 border-t border-black/10 dark:border-white/10 flex gap-4">
        <span>{wordCount} {t.words}</span>
        <span>{charCount} {t.characters}</span>
      </div>
    </div>
  );
}
