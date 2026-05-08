'use client';

import { useState } from 'react';
import {
  Folder, SquareTerminal, Settings2, Globe, FileText,
  AppWindow, HelpCircle, Music, Image, Mail, Calendar,
  Calculator, Map, Camera, Phone, Video, MessageSquare,
  Code2, Database, Terminal, Cpu, Layers, type LucideIcon,
} from 'lucide-react';
import { useStore } from '@/store';
import type { AppConfig } from '@/types/app';

const LUCIDE_MAP: Record<string, LucideIcon> = {
  Folder, SquareTerminal, Settings2, Globe, FileText,
  AppWindow, HelpCircle, Music, Image, Mail, Calendar,
  Calculator, Map, Camera, Phone, Video, MessageSquare,
  Code2, Database, Terminal, Cpu, Layers,
};

interface AppIconImageProps {
  appConfig: AppConfig;
  size?: number;
  className?: string;
  fill?: boolean;
}

function getIconBorderRadius(osTheme: string, size: number): number {
  switch (osTheme) {
    case 'windows': return Math.round(size * 0.08);
    case 'android': return Math.round(size * 0.28);
    case 'iphone':
    case 'ipad':    return Math.round(size * 0.225);
    default:        return Math.round(size * 0.22); // macOS squircle approx
  }
}

/**
 * Renders app icon: SVG/PNG image → Lucide icon → letter fallback.
 * Lucide icons are styled with OS-appropriate rounded background.
 */
export function AppIconImage({ appConfig, size = 56, className = '', fill = false }: AppIconImageProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const osTheme = useStore((s) => s.osTheme);

  const fromColor = appConfig.iconColor?.[0] ?? '#0a84ff';
  const toColor = appConfig.iconColor?.[1] ?? '#0055d4';
  const textColor = appConfig.iconTextColor ?? '#ffffff';
  const iconSize = Math.round(size * 0.5);
  const borderRadius = getIconBorderRadius(osTheme, size);

  // Lucide icon with gradient background
  if (appConfig.icon.startsWith('lucide:')) {
    const iconName = appConfig.icon.replace('lucide:', '');
    const LucideComp = LUCIDE_MAP[iconName];

    return (
      <div
        className={`flex items-center justify-center shrink-0 ${className}`}
        style={{
          width: fill ? '100%' : size,
          height: fill ? '100%' : size,
          background: `linear-gradient(145deg, ${fromColor}, ${toColor})`,
          borderRadius,
          boxShadow: `0 ${Math.round(size * 0.06)}px ${Math.round(size * 0.18)}px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)`,
        }}
      >
        {LucideComp ? (
          <LucideComp
            style={{
              width: fill ? '50%' : iconSize,
              height: fill ? '50%' : iconSize,
              color: textColor,
            }}
            strokeWidth={1.7}
          />
        ) : (
          <span style={{ color: textColor, fontSize: fill ? '35%' : iconSize * 0.65, fontWeight: 700 }}>
            {appConfig.name.charAt(0)}
          </span>
        )}
      </div>
    );
  }

  // SVG/PNG image (priority)
  if (!imgFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={appConfig.icon}
        alt={appConfig.name}
        width={size}
        height={size}
        className={`object-contain ${className}`}
        style={{ width: fill ? '100%' : size, height: fill ? '100%' : size }}
        onError={() => setImgFailed(true)}
      />
    );
  }

  // Gradient + letter fallback
  return (
    <div
      className={`flex items-center justify-center shrink-0 ${className}`}
      style={{
        width: fill ? '100%' : size,
        height: fill ? '100%' : size,
        background: `linear-gradient(145deg, ${fromColor}, ${toColor})`,
        borderRadius,
        boxShadow: `0 ${Math.round(size * 0.06)}px ${Math.round(size * 0.18)}px rgba(0,0,0,0.35)`,
      }}
    >
      <span style={{ color: textColor, fontSize: size * 0.38, fontWeight: 700 }}>
        {appConfig.name.charAt(0)}
      </span>
    </div>
  );
}
