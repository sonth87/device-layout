'use client';

import { cn } from '@/lib/utils';

interface AppToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

/**
 * iOS-style toggle switch. Use as `control` prop in AppListRow.
 *
 * Example:
 *   <AppListRow
 *     label="Liquid Glass"
 *     control={<AppToggle checked={enabled} onChange={setEnabled} />}
 *   />
 */
export function AppToggle({ checked, onChange, disabled }: AppToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={(e) => { e.stopPropagation(); onChange(!checked); }}
      className={cn(
        'relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors duration-200',
        checked ? 'bg-[#34c759]' : 'bg-black/15 dark:bg-white/20',
        disabled && 'opacity-40 pointer-events-none',
      )}
    >
      <span className={cn(
        'absolute top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow-md transition-all duration-200',
        checked ? 'left-[22px]' : 'left-[2px]',
      )} />
    </button>
  );
}
