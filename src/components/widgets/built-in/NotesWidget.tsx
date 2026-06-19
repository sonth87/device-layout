'use client';

import { StickyNote } from 'lucide-react';
import type { WidgetSize } from '@/types/widget';

interface Props { size: WidgetSize }

export function NotesWidget({ size: _size }: Props) {
  return (
    <div className="w-full h-full flex flex-col bg-[#ffd60a]/65 p-4">
      <div className="flex items-center gap-2 mb-3">
        <StickyNote className="w-3.5 h-3.5 text-black/50"/>
        <p className="text-black/50 text-[11px] font-semibold">NOTES</p>
      </div>
      <p className="text-black/80 text-[13px] font-medium leading-snug line-clamp-3">
        No recent notes. Open Notes to start writing.
      </p>
    </div>
  );
}
