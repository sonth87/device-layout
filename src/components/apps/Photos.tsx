'use client';

import { useState, useMemo, useRef } from 'react';
import { Search, Grid3X3, List, Heart, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppLayout } from '@/hooks/useAppLayout';
import { AppGrid } from '@/components/apps/ui';

const PHOTO_COLORS: [string, string][] = [
  ['#667eea','#764ba2'],['#f093fb','#f5576c'],['#4facfe','#00f2fe'],['#43e97b','#38f9d7'],
  ['#fa709a','#fee140'],['#a18cd1','#fbc2eb'],['#fccb90','#d57eeb'],['#a1c4fd','#c2e9fb'],
  ['#fd7043','#ff8f00'],['#26c6da','#00acc1'],['#ab47bc','#7b1fa2'],['#66bb6a','#388e3c'],
  ['#ef5350','#c62828'],['#42a5f5','#1565c0'],['#ec407a','#880e4f'],['#26a69a','#004d40'],
  ['#ff7043','#bf360c'],['#7e57c2','#4527a0'],['#29b6f6','#0277bd'],['#9ccc65','#558b2f'],
  ['#ffa726','#e65100'],['#26c6da','#006064'],['#d4e157','#827717'],['#78909c','#37474f'],
];
const EMOJIS = ['🌅','🌊','🏔','🌸','🌙','🦋','🌺','🦚','🌴','🎆','🏙','🌮','🌻','🦁','🏝','🌈','❄️','🌿','🎭','🦋','🎨','🏛','🌉','🍂'];
const ALBUMS = ['Favorites','Recents','Screenshots','Wallpapers','Nature','City'];

interface Photo {
  id: string; emoji: string; colors: [string, string];
  liked: boolean; date: Date; album?: string;
}

function generatePhotos(): Photo[] {
  return PHOTO_COLORS.map((colors, i) => ({
    id: String(i + 1), emoji: EMOJIS[i % EMOJIS.length], colors,
    liked: i % 5 === 0, date: new Date(Date.now() - i * 86400000 * 3),
    album: ALBUMS[i % ALBUMS.length],
  }));
}
const ALL_PHOTOS = generatePhotos();

export function Photos() {
  const [view, setView]           = useState<'grid' | 'albums' | 'photo'>('grid');
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [liked, setLiked]         = useState<Set<string>>(new Set(ALL_PHOTOS.filter(p => p.liked).map(p => p.id)));
  const [search, setSearch]       = useState('');
  const [zoom, setZoom]           = useState(1);
  const [pan, setPan]             = useState({ x: 0, y: 0 });
  const panDragRef = useRef<{ startX: number; startY: number; panX: number; panY: number } | null>(null);

  const { isNarrow, cols } = useAppLayout();

  const openPhoto = (photo: Photo) => { setSelectedPhoto(photo); setView('photo'); setZoom(1); setPan({ x: 0, y: 0 }); };
  const toggleLike = (id: string) => setLiked(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const photos = useMemo(() => {
    let list = selectedAlbum ? ALL_PHOTOS.filter(p => p.album === selectedAlbum) : ALL_PHOTOS;
    if (search) list = list.filter(p => p.emoji.includes(search) || p.album?.includes(search));
    return list;
  }, [selectedAlbum, search]);

  const albumCounts = ALBUMS.reduce<Record<string, number>>((acc, a) => {
    acc[a] = ALL_PHOTOS.filter(p => p.album === a).length; return acc;
  }, {});

  // ── Photo viewer ──────────────────────────────────────────────────────────
  if (view === 'photo' && selectedPhoto) {
    // Responsive photo size
    const photoSize = isNarrow ? 240 : 288;
    return (
      <div className="h-full flex flex-col bg-black">
        <div className="flex items-center justify-between px-4 py-3 shrink-0">
          <button onClick={() => setView('grid')} className="flex items-center gap-1 text-blue-400 text-sm">
            <ChevronLeft className="w-4 h-4" /> All Photos
          </button>
          <button onClick={() => toggleLike(selectedPhoto.id)}>
            <Heart className={cn('w-5 h-5', liked.has(selectedPhoto.id) ? 'fill-red-500 text-red-500' : 'text-white/60')} />
          </button>
        </div>
        <div
          className="flex-1 flex items-center justify-center overflow-hidden"
          onWheel={(e) => { if (e.ctrlKey) setZoom(z => Math.min(6, Math.max(0.5, z * (1 - e.deltaY * 0.008)))); }}
          onPointerDown={(e) => { if (zoom <= 1) return; panDragRef.current = { startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y }; e.currentTarget.setPointerCapture(e.pointerId); }}
          onPointerMove={(e) => { if (!panDragRef.current) return; setPan({ x: panDragRef.current.panX + e.clientX - panDragRef.current.startX, y: panDragRef.current.panY + e.clientY - panDragRef.current.startY }); }}
          onPointerUp={() => { panDragRef.current = null; }}
          style={{ cursor: zoom > 1 ? 'grab' : 'default' }}
        >
          <div
            className="rounded-2xl flex items-center justify-center shadow-2xl select-none"
            style={{
              width: photoSize, height: photoSize,
              fontSize: isNarrow ? 80 : 120,
              background: `linear-gradient(135deg, ${selectedPhoto.colors[0]}, ${selectedPhoto.colors[1]})`,
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              transformOrigin: 'center',
              transition: panDragRef.current ? 'none' : 'transform 0.05s ease-out',
            }}
          >
            {selectedPhoto.emoji}
          </div>
        </div>
        <div className="p-4 text-white/60 text-sm text-center shrink-0">
          {zoom !== 1 && (
            <button className="text-blue-400 text-xs mr-3" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}>
              Reset zoom
            </button>
          )}
          {selectedPhoto.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          {selectedPhoto.album && ` • ${selectedPhoto.album}`}
        </div>
      </div>
    );
  }

  // ── Grid / Albums ─────────────────────────────────────────────────────────
  return (
    <div className="h-full flex flex-col bg-white dark:bg-[#0F1115] text-black dark:text-white">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 shrink-0">
        <div className="flex-1 flex items-center gap-1.5 px-2 py-1 bg-black/5 dark:bg-white/10 rounded-lg">
          <Search className="w-3.5 h-3.5 text-black/40 dark:text-white/40" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search photos"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-black/30 dark:placeholder:text-white/30" />
        </div>
        <div className="flex border border-black/15 dark:border-white/15 rounded-md overflow-hidden">
          {(['grid', 'albums'] as const).map((v) => (
            <button key={v} onClick={() => setView(v)}
              className={cn('px-2.5 py-1 text-xs transition-colors',
                view === v ? 'bg-blue-500 text-white' : 'text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/10')}>
              {v === 'grid' ? <Grid3X3 className="w-3.5 h-3.5" /> : <List className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {view === 'grid' && (
        <div className="px-3 py-2 shrink-0 flex items-center justify-between">
          <h3 className="text-xs font-semibold text-black/50 dark:text-white/50 uppercase tracking-wide">
            {selectedAlbum ?? 'All Photos'} — {photos.length}
          </h3>
          {selectedAlbum && (
            <button onClick={() => setSelectedAlbum(null)} className="text-xs text-blue-500">Show all</button>
          )}
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        {view === 'albums' ? (
          <div className="p-3">
            {/* Albums: 2 cols narrow, 3 wide */}
            <AppGrid narrow={2} medium={3} wide={4} gap="12px">
              {ALBUMS.map((album) => {
                const cover = ALL_PHOTOS.find(p => p.album === album);
                return (
                  <button key={album}
                    onClick={() => { setSelectedAlbum(album); setView('grid'); }}
                    className="text-left rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:scale-[1.02] transition-transform">
                    <div className="h-20 flex items-center justify-center text-3xl"
                      style={{ background: cover ? `linear-gradient(135deg, ${cover.colors[0]}, ${cover.colors[1]})` : '#ccc' }}>
                      {cover?.emoji}
                    </div>
                    <div className="px-2.5 py-2">
                      <p className="text-sm font-medium truncate">{album}</p>
                      <p className="text-xs text-black/40 dark:text-white/40">{albumCounts[album]} photos</p>
                    </div>
                  </button>
                );
              })}
            </AppGrid>
          </div>
        ) : (
          /* Photo grid: 3 cols narrow, 4 medium, 5 wide */
          <div className="p-1" style={{ display: 'grid', gap: '2px', gridTemplateColumns: `repeat(${cols(3, 4, 5)}, minmax(0, 1fr))` }}>
            {photos.map((photo) => (
              <button key={photo.id} onClick={() => openPhoto(photo)} className="relative aspect-square group">
                <div className="w-full h-full flex items-center justify-center text-2xl"
                  style={{ background: `linear-gradient(135deg, ${photo.colors[0]}, ${photo.colors[1]})` }}>
                  {photo.emoji}
                </div>
                {liked.has(photo.id) && (
                  <Heart className="absolute bottom-1 right-1 w-3 h-3 fill-white text-white opacity-90" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
