'use client';

import { type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppListRowProps {
  /** Primary label (left side) */
  label: string;
  /** Optional subtitle below label */
  subtitle?: string;
  /** Optional icon/element before the label */
  icon?: ReactNode;
  /** Secondary value shown before the chevron */
  value?: ReactNode;
  /** Right-side control (toggle, badge, custom element) — replaces chevron */
  control?: ReactNode;
  /** If true, shows a chevron and makes the row a button */
  onPress?: () => void;
  /** Mark the row as selected/active */
  active?: boolean;
  /** Disable interaction */
  disabled?: boolean;
  className?: string;
}

/**
 * A single row inside an AppListGroup.
 * Adapts between interactive (button with chevron) and display-only modes.
 *
 * Example — navigation row:
 *   <AppListRow label="Appearance" icon={<Paintbrush />} onPress={() => nav('appearance')} />
 *
 * Example — value row:
 *   <AppListRow label="Language" value="English" />
 *
 * Example — toggle row:
 *   <AppListRow label="Dark Mode" control={<AppToggle checked={dark} onChange={setDark} />} />
 *
 * Example — selected row (checkmark):
 *   <AppListRow label="macOS 26" active={theme === 'macos'} onPress={() => setTheme('macos')} />
 */
export function AppListRow({
  label,
  subtitle,
  icon,
  value,
  control,
  onPress,
  active,
  disabled,
  className,
}: AppListRowProps) {
  const inner = (
    <>
      {/* Left: icon */}
      {icon && (
        <span className="shrink-0 text-black/50 dark:text-white/50">{icon}</span>
      )}

      {/* Center: label + subtitle */}
      <div className="flex-1 min-w-0">
        <span className={cn(
          'text-[15px] leading-tight',
          active ? 'text-blue-500 font-medium' : 'text-black dark:text-white',
          disabled && 'opacity-40',
        )}>
          {label}
        </span>
        {subtitle && (
          <p className="text-[12px] text-black/40 dark:text-white/40 mt-0.5 leading-tight">{subtitle}</p>
        )}
      </div>

      {/* Right: value / control / chevron */}
      {control ? (
        <span className="shrink-0 ml-3">{control}</span>
      ) : value !== undefined ? (
        <span className="shrink-0 ml-3 text-[15px] text-black/40 dark:text-white/40">{value}</span>
      ) : active && !onPress ? (
        <svg className="w-4 h-4 text-blue-500 shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : null}

      {onPress && !control && (
        <ChevronRight className="w-4 h-4 text-black/25 dark:text-white/25 shrink-0 ml-1" />
      )}
    </>
  );

  const base = cn(
    'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
    onPress && !disabled && 'hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/8 dark:active:bg-white/8',
    disabled && 'pointer-events-none',
    className,
  );

  if (onPress) {
    return (
      <button onClick={onPress} disabled={disabled} className={base}>
        {inner}
      </button>
    );
  }

  return <div className={base}>{inner}</div>;
}
