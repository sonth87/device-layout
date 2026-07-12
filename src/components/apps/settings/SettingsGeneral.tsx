'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store';
import { LANG_LABELS, LANG_FLAGS } from '@/types/locale';
import type { SupportedLang } from '@/types/locale';

const LANGUAGES: SupportedLang[] = ['en', 'vi', 'ja', 'ko', 'zh', 'th'];

export function SettingsGeneral() {
  const { t, language } = useTranslation();
  const setLanguage = useStore((s) => s.setLanguage);

  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [langExpanded, setLangExpanded] = useState(false);

  const items = [
    {
      id: 'about',
      label: t.about,
      description: 'Desktop Layout v1.0.0',
      expandable: true,
    },
    {
      id: 'update',
      label: t.softwareUpdate,
      description: t.softwareUpdateDesc,
      expandable: false,
    },
    {
      id: 'lang',
      label: t.languageRegion,
      description: `${LANG_FLAGS[language as SupportedLang]} ${LANG_LABELS[language as SupportedLang]}`,
      expandable: true,
    },
    {
      id: 'dateTime',
      label: t.dateTime,
      description: new Date().toLocaleDateString(
        language === 'en' ? 'en-US' :
        language === 'vi' ? 'vi-VN' :
        language === 'ja' ? 'ja-JP' :
        language === 'ko' ? 'ko-KR' :
        language === 'zh' ? 'zh-CN' :
        language === 'th' ? 'th-TH' : 'en-US',
        { dateStyle: 'long' }
      ),
      expandable: false,
    },
    {
      id: 'airDrop',
      label: t.airDrop,
      description: 'Configured for nearby devices',
      expandable: false,
    },
    {
      id: 'sharing',
      label: t.sharing,
      description: 'Hostname: desktop-layout',
      expandable: false,
    },
    {
      id: 'startupDisk',
      label: t.startupDisk,
      description: 'Macintosh HD',
      expandable: false,
    },
  ];

  return (
    <div className="space-y-2">
      {items.map(({ id, label, description, expandable }) => {
        const isAbout = id === 'about';
        const isLang = id === 'lang';
        const isExpanded = isAbout ? aboutExpanded : (isLang ? langExpanded : false);

        return (
          <div
            key={id}
            className="overflow-hidden rounded-[var(--radius-card)] bg-white dark:bg-white/5 shadow-sm"
          >
            {/* Row */}
            <div
              onClick={() => {
                if (isAbout) setAboutExpanded((v) => !v);
                else if (isLang) setLangExpanded((v) => !v);
              }}
              className={`flex items-center justify-between px-4 py-3 select-none ${
                expandable ? 'cursor-pointer hover:bg-black/[0.03] dark:hover:bg-white/8 transition-colors' : ''
              }`}
            >
              <span className="text-sm font-medium text-black/90 dark:text-white/90">{label}</span>
              <span className="text-xs text-black/40 dark:text-white/40 flex items-center gap-1.5 min-w-0 max-w-[55%] justify-end">
                <span className="truncate">{description}</span>
                <svg
                  className={`w-3.5 h-3.5 opacity-35 shrink-0 transition-transform duration-200 ${
                    expandable && isExpanded ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>

            {/* About expanded */}
            {isAbout && (
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] ${
                  aboutExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="py-3 px-4 space-y-0">
                  {[
                    { label: 'Author', value: <span className="font-semibold text-blue-500 tracking-wider">SKYLINE</span> },
                    { label: 'Name', value: <span className="text-black/80 dark:text-white/80 font-medium">SONTH</span> },
                    {
                      label: 'GitHub',
                      value: (
                        <a
                          href="https://github.com/sonth87"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline flex items-center gap-1 font-mono"
                        >
                          github/sonth87
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ),
                    },
                    { label: 'Date of Birth', value: <span className="text-black/80 dark:text-white/80 font-mono">--/--/----</span> },
                    { label: 'Country', value: <span className="text-black/80 dark:text-white/80 font-medium">🇻🇳 VietNam</span> },
                  ].map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex justify-between items-center py-2 text-xs ${
                        i > 0 ? 'border-t border-black/5 dark:border-white/5' : ''
                      }`}
                    >
                      <span className="text-black/50 dark:text-white/50 font-medium">{row.label}</span>
                      {row.value}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Language & Region expanded */}
            {isLang && (
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] ${
                  langExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="py-3.5 px-4 space-y-3.5">
                  <div>
                    <span className="text-xs text-black/50 dark:text-white/50 font-medium block mb-2">
                      {t.preferredLanguage}
                    </span>
                    <div className="relative">
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as SupportedLang)}
                        className="w-full bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 rounded-lg px-3 py-2 text-sm focus:outline-none appearance-none cursor-pointer pr-8"
                      >
                        {LANGUAGES.map((lang) => (
                          <option key={lang} value={lang} className="bg-white dark:bg-[#151821] text-black dark:text-white">
                            {LANG_FLAGS[lang]} {LANG_LABELS[lang]}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none opacity-40">
                        <svg className="w-3.5 h-3.5 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
