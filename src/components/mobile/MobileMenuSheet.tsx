'use client';

import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';
import { getMenuLabel, getMenuItemLabel } from '@/components/menubar/MenuBar';
import type { MenuBarMenu, MenuBarItem } from '@/types/app';

interface MobileMenuSheetProps {
  menus: MenuBarMenu[];
  appId: string;
  open: boolean;
  onClose: () => void;
}

/**
 * Bottom-sheet menu for iPhone/Android — auto-translated from the same
 * `menuBarMenus` data macOS/Windows use (no separate mobile-only field on
 * AppConfig). Nested `children` expand/collapse inline (accordion) instead
 * of a desktop-style flyout, which doesn't suit touch/mobile ergonomics.
 */
export function MobileMenuSheet({ menus, appId, open, onClose }: MobileMenuSheetProps) {
  const { t } = useTranslation();
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const dispatch = useCallback(
    (item: MenuBarItem) => {
      if (item.action) {
        window.dispatchEvent(
          new CustomEvent('app:menu:action', { detail: { appId, action: item.action } }),
        );
      }
      onClose();
    },
    [appId, onClose],
  );

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-[2000]"
            onClick={onClose}
          />
          <motion.div
            key="sheet"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 38 }}
            className="fixed bottom-0 left-0 right-0 z-[2001] max-h-[75vh] overflow-y-auto rounded-t-2xl bg-white dark:bg-neutral-900 shadow-2xl"
          >
            <div className="sticky top-0 flex justify-center py-2 bg-white dark:bg-neutral-900">
              <div className="w-10 h-1 rounded-full bg-black/20 dark:bg-white/25" />
            </div>

            <div className="px-4 pb-8">
              {menus.map((menu) => (
                <div key={menu.label} className="mb-4">
                  <div className="px-1 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black/40 dark:text-white/40">
                    {getMenuLabel(menu.label, t)}
                  </div>
                  <div className="rounded-xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.06]">
                    {menu.items.map((item, i) =>
                      item.separator ? (
                        <div key={`sep-${i}`} className="h-px mx-3 bg-black/8 dark:bg-white/10" />
                      ) : (
                        <MobileMenuRow key={item.key} item={item} t={t} onSelect={dispatch}
                          expandedKey={expandedKey} setExpandedKey={setExpandedKey} />
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function MobileMenuRow({
  item,
  t,
  onSelect,
  expandedKey,
  setExpandedKey,
  depth = 0,
}: {
  item: MenuBarItem;
  t: any;
  onSelect: (item: MenuBarItem) => void;
  expandedKey: string | null;
  setExpandedKey: (key: string | null) => void;
  depth?: number;
}) {
  const hasChildren = !!item.children && item.children.length > 0;
  const isExpanded = expandedKey === item.key;

  if (!hasChildren) {
    return (
      <button
        disabled={item.disabled}
        onClick={() => onSelect(item)}
        style={{ paddingLeft: 12 + depth * 16 }}
        className={cn(
          'w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left active:bg-black/5 dark:active:bg-white/10 transition-colors',
          item.disabled ? 'text-black/30 dark:text-white/30' : 'text-black dark:text-white',
        )}
      >
        <span>{getMenuItemLabel(item.label, t)}</span>
        {item.shortcut && (
          <span className="text-[12px] opacity-40 ml-4">{item.shortcut}</span>
        )}
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpandedKey(isExpanded ? null : item.key)}
        style={{ paddingLeft: 12 + depth * 16 }}
        className="w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left text-black dark:text-white active:bg-black/5 dark:active:bg-white/10 transition-colors"
      >
        <span>{getMenuItemLabel(item.label, t)}</span>
        <ChevronDown className={cn('w-4 h-4 opacity-50 transition-transform', isExpanded && 'rotate-180')} />
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="overflow-hidden"
          >
            {item.children!.map((child, i) =>
              child.separator ? (
                <div key={`sep-${i}`} className="h-px mx-3 bg-black/8 dark:bg-white/10" />
              ) : (
                <MobileMenuRow
                  key={child.key}
                  item={child}
                  t={t}
                  onSelect={onSelect}
                  expandedKey={expandedKey}
                  setExpandedKey={setExpandedKey}
                  depth={depth + 1}
                />
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
