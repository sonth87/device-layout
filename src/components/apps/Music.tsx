'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Play, Pause, SkipBack, SkipForward, Repeat, Shuffle,
  Heart, Volume2, VolumeX, ListMusic,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppLayout } from '@/hooks/useAppLayout';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number; // seconds
  color: [string, string];
  emoji: string;
}

const TRACKS: Track[] = [
  { id: '1', title: 'Midnight Drive', artist: 'Synthwave Dreams', album: 'Neon Nights', duration: 214, color: ['#667eea', '#764ba2'], emoji: '🌙' },
  { id: '2', title: 'Ocean Breeze', artist: 'Chill Collective', album: 'Summer Vibes', duration: 183, color: ['#11998e', '#38ef7d'], emoji: '🌊' },
  { id: '3', title: 'Urban Jungle', artist: 'City Noise', album: 'Metropolitan', duration: 247, color: ['#f7971e', '#ffd200'], emoji: '🌆' },
  { id: '4', title: 'Starlight', artist: 'Cosmic Echo', album: 'Galaxies', duration: 196, color: ['#a18cd1', '#fbc2eb'], emoji: '⭐' },
  { id: '5', title: 'Coffee & Rain', artist: 'Lo-fi Beats', album: 'Rainy Days', duration: 228, color: ['#4facfe', '#00f2fe'], emoji: '☕' },
  { id: '6', title: 'Desert Wind', artist: 'Ambient Traveler', album: 'Landscapes', duration: 312, color: ['#fa709a', '#fee140'], emoji: '🌵' },
  { id: '7', title: 'Pixel Dreams', artist: 'Chiptune Warriors', album: '8-Bit World', duration: 167, color: ['#30cfd0', '#330867'], emoji: '🎮' },
  { id: '8', title: 'Golden Hour', artist: 'Indie Folk Co.', album: 'Warm Light', duration: 241, color: ['#f093fb', '#f5576c'], emoji: '🌅' },
];

function fmt(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function Music() {
  const [trackIdx, setTrackIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [view, setView] = useState<'player' | 'library'>('player');

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const track = TRACKS[trackIdx];
  const { isNarrow } = useAppLayout();
  const artSize = isNarrow ? 160 : 192;

  // Simulate playback progress
  useEffect(() => {
    if (!playing) { if (intervalRef.current) clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= track.duration) {
          next();
          return 0;
        }
        return p + 1;
      });
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, trackIdx]);

  const next = () => {
    setProgress(0);
    setTrackIdx((i) => {
      if (shuffle) return Math.floor(Math.random() * TRACKS.length);
      return (i + 1) % TRACKS.length;
    });
  };

  const prev = () => {
    setProgress(0);
    setTrackIdx((i) => (i - 1 + TRACKS.length) % TRACKS.length);
  };

  const selectTrack = (idx: number) => {
    setTrackIdx(idx);
    setProgress(0);
    setPlaying(true);
  };

  const pct = track ? (progress / track.duration) * 100 : 0;

  return (
    <div className="h-full flex flex-col" style={{
      background: `linear-gradient(160deg, ${track.color[0]}22, ${track.color[1]}11, #000)`,
    }}>
      {/* Tab bar */}
      <div className="flex gap-3 px-4 pt-3 pb-2 border-b border-white/10 shrink-0">
        {(['player', 'library'] as const).map((v) => (
          <button key={v} onClick={() => setView(v)}
            className={cn('text-sm font-medium capitalize transition-colors',
              view === v ? 'text-white' : 'text-white/40 hover:text-white/70')}>
            {v === 'player' ? 'Now Playing' : 'Library'}
          </button>
        ))}
      </div>

      {view === 'player' ? (
        <div className="flex-1 flex flex-col items-center justify-between p-6 overflow-hidden">
          {/* Album art */}
          <div
            className="rounded-2xl shadow-2xl flex items-center justify-center"
            style={{
              width: artSize, height: artSize,
              fontSize: isNarrow ? 60 : 80,
              background: `linear-gradient(135deg, ${track.color[0]}, ${track.color[1]})`,
            }}
          >
            {track.emoji}
          </div>

          {/* Track info */}
          <div className="w-full text-center mt-4">
            <div className="flex items-center justify-between w-full px-1">
              <div className="text-left">
                <p className="text-white font-semibold text-lg leading-tight">{track.title}</p>
                <p className="text-white/60 text-sm">{track.artist}</p>
              </div>
              <button onClick={() => setLiked((s) => { const n = new Set(s); n.has(track.id) ? n.delete(track.id) : n.add(track.id); return n; })}>
                <Heart className={cn('w-5 h-5 transition-colors', liked.has(track.id) ? 'fill-red-500 text-red-500' : 'text-white/40')} />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full mt-3">
            <div
              className="relative h-1.5 rounded-full bg-white/20 cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pct = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(pct * track.duration));
              }}
            >
              <div className="h-full rounded-full bg-white transition-all" style={{ width: `${pct}%` }} />
            </div>
            <div className="flex justify-between mt-1 text-[11px] text-white/50 tabular-nums">
              <span>{fmt(progress)}</span>
              <span>{fmt(track.duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-5 mt-2">
            <button onClick={() => setShuffle(s => !s)}>
              <Shuffle className={cn('w-4 h-4 transition-colors', shuffle ? 'text-white' : 'text-white/40')} />
            </button>
            <button onClick={prev} className="text-white/80 hover:text-white transition-colors">
              <SkipBack className="w-6 h-6" />
            </button>
            <button
              onClick={() => setPlaying(p => !p)}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            >
              {playing
                ? <Pause className="w-5 h-5 text-black" />
                : <Play className="w-5 h-5 text-black ml-0.5" />
              }
            </button>
            <button onClick={next} className="text-white/80 hover:text-white transition-colors">
              <SkipForward className="w-6 h-6" />
            </button>
            <button onClick={() => setRepeat(r => !r)}>
              <Repeat className={cn('w-4 h-4 transition-colors', repeat ? 'text-white' : 'text-white/40')} />
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3 w-full mt-2">
            <button onClick={() => setMuted(m => !m)}>
              {muted ? <VolumeX className="w-4 h-4 text-white/50" /> : <Volume2 className="w-4 h-4 text-white/50" />}
            </button>
            <input type="range" min={0} max={1} step={0.01} value={muted ? 0 : volume}
              onChange={(e) => { setVolume(parseFloat(e.target.value)); setMuted(false); }}
              className="flex-1 accent-white h-1" />
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-2">
          {TRACKS.map((t, i) => (
            <button key={t.id} onClick={() => selectTrack(i)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors',
                i === trackIdx ? 'bg-white/15' : 'hover:bg-white/10',
              )}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                style={{ background: `linear-gradient(135deg, ${t.color[0]}, ${t.color[1]})` }}>
                {t.emoji}
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className={cn('text-sm font-medium truncate', i === trackIdx ? 'text-white' : 'text-white/80')}>{t.title}</p>
                <p className="text-xs text-white/50 truncate">{t.artist}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {liked.has(t.id) && <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />}
                <span className="text-xs text-white/40 tabular-nums">{fmt(t.duration)}</span>
                {i === trackIdx && playing && (
                  <div className="w-3 h-3 flex items-end gap-px">
                    {[1, 2, 3].map((b) => (
                      <div key={b} className="w-0.5 bg-green-400 rounded-full animate-pulse"
                        style={{ height: `${(b % 3 + 1) * 4}px`, animationDelay: `${b * 0.15}s` }} />
                    ))}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
