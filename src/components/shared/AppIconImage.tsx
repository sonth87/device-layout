'use client';

import { useState } from 'react';
import {
  Folder, SquareTerminal, Settings, Globe, FileText,
  AppWindow, HelpCircle, Music, Image, Mail, Calendar,
  Calculator, Map, Camera, Phone, Video, MessageSquare,
  Code2, Database, Terminal, Cpu, Layers, Clock, StickyNote,
  type LucideIcon,
} from 'lucide-react';
import type { AppConfig } from '@/types/app';
import { cn } from '@/lib/utils';

const LUCIDE_MAP: Record<string, LucideIcon> = {
  Folder, SquareTerminal, Settings, Globe, FileText,
  AppWindow, HelpCircle, Music, Image, Mail, Calendar,
  Calculator, Map, Camera, Phone, Video, MessageSquare,
  Code2, Database, Terminal, Cpu, Layers, Clock, StickyNote,
};

interface AppIconImageProps {
  appConfig: AppConfig;
  size?: number;
  className?: string;
  fill?: boolean;
}

/**
 * Renders app icon: SVG/PNG image → Lucide icon → letter fallback.
 * Border radius and overflow clipping are strictly enforced with !important
 * to ensure no user styles can override the system squircle icon layout.
 */
export function AppIconImage({ appConfig, size = 56, className = '', fill = false }: AppIconImageProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const fromColor = appConfig.iconColor?.[0] ?? '#0a84ff';
  const toColor = appConfig.iconColor?.[1] ?? '#0055d4';
  const textColor = appConfig.iconTextColor ?? '#ffffff';
  const customIconSize = Math.round(size * 0.785); // 44px for size=56
  const lucideIconSize = Math.round(size * 0.643); // 36px for size=56

  const containerClassName = cn(
    className,
    'flex items-center justify-center shrink-0 overflow-hidden! rounded-[var(--radius-icon)]!'
  );

  // Custom React Component icon
  if (typeof appConfig.icon !== 'string') {
    const CustomIcon = appConfig.icon;
    const isRaw = appConfig.rawIcon || appConfig.fullBleedIcon;

    if (isRaw) {
      return (
        <div
          className={containerClassName}
          style={{
            width: fill ? '100%' : size,
            height: fill ? '100%' : size,
            background: `linear-gradient(145deg, ${fromColor}, ${toColor})`,
            borderRadius: 'var(--radius-icon)',
            boxShadow: `0 ${Math.round(size * 0.02)}px ${Math.round(size * 0.08)}px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)`,
            overflow: 'hidden',
          }}
        >
          <CustomIcon
            style={{
              width: '100%',
              height: '100%',
              color: textColor,
            }}
            strokeWidth={1.7}
          />
        </div>
      );
    }

    return (
      <div
        className={containerClassName}
        style={{
          width: fill ? '100%' : size,
          height: fill ? '100%' : size,
          background: `linear-gradient(145deg, ${fromColor}, ${toColor})`,
          borderRadius: 'var(--radius-icon)',
          boxShadow: `0 ${Math.round(size * 0.02)}px ${Math.round(size * 0.08)}px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)`,
          overflow: 'hidden',
        }}
      >
        <CustomIcon
          style={{
            width: fill ? '78.5%' : customIconSize,
            height: fill ? '78.5%' : customIconSize,
            color: textColor,
          }}
          strokeWidth={1.7}
        />
      </div>
    );
  }

  // Lucide icon with gradient background
  if (appConfig.icon.startsWith('lucide:')) {
    const iconName = appConfig.icon.replace('lucide:', '');
    const LucideComp = LUCIDE_MAP[iconName];

    return (
      <div
        className={containerClassName}
        style={{
          width: fill ? '100%' : size,
          height: fill ? '100%' : size,
          background: `linear-gradient(145deg, ${fromColor}, ${toColor})`,
          borderRadius: 'var(--radius-icon)',
          boxShadow: `0 ${Math.round(size * 0.02)}px ${Math.round(size * 0.08)}px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)`,
          overflow: 'hidden',
        }}
      >
        {LucideComp ? (
          <LucideComp
            style={{
              width: fill ? '64.3%' : lucideIconSize,
              height: fill ? '64.3%' : lucideIconSize,
              color: textColor,
            }}
            strokeWidth={1.7}
          />
        ) : (
          <span style={{ color: textColor, fontSize: fill ? '35%' : lucideIconSize * 0.65, fontWeight: 700 }}>
            {appConfig.name.charAt(0)}
          </span>
        )}
      </div>
    );
  }

  // SVG/PNG image (priority)
  if (!imgFailed) {
    return (
      <div
        className={containerClassName}
        style={{
          width: fill ? '100%' : size,
          height: fill ? '100%' : size,
          background: `linear-gradient(145deg, ${fromColor}, ${toColor})`,
          borderRadius: 'var(--radius-icon)',
          boxShadow: `0 ${Math.round(size * 0.02)}px ${Math.round(size * 0.08)}px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)`,
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={appConfig.icon}
          alt={appConfig.name}
          width={size}
          height={size}
          className="w-full h-full object-contain"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  // Gradient + letter fallback
  return (
    <div
      className={containerClassName}
      style={{
        width: fill ? '100%' : size,
        height: fill ? '100%' : size,
        background: `linear-gradient(145deg, ${fromColor}, ${toColor})`,
        borderRadius: 'var(--radius-icon)',
        boxShadow: `0 ${Math.round(size * 0.02)}px ${Math.round(size * 0.08)}px rgba(0,0,0,0.35)`,
        overflow: 'hidden',
      }}
    >
      <span style={{ color: textColor, fontSize: size * 0.38, fontWeight: 700 }}>
        {appConfig.name.charAt(0)}
      </span>
    </div>
  );
}
