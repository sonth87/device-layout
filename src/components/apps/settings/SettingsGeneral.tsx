'use client';

export function SettingsGeneral() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold mb-1">General</h2>
        <p className="text-sm text-black/50 dark:text-white/50 mb-5">
          Manage your overall setup and preferences, such as software version, language, and more.
        </p>
      </div>

      <div className="space-y-3">
        {[
          { label: 'About', description: 'Desktop Layout v1.0.0' },
          { label: 'Software Update', description: 'Up to date' },
          { label: 'Language & Region', description: 'English (US)' },
          { label: 'Date & Time', description: new Date().toLocaleDateString('en-US', { dateStyle: 'long' }) },
          { label: 'AirDrop & Continuity', description: 'Configured for nearby devices' },
          { label: 'Sharing', description: 'Hostname: desktop-layout' },
          { label: 'Startup Disk', description: 'Macintosh HD' },
        ].map(({ label, description }) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-[var(--radius-card)] bg-white dark:bg-neutral-700/50 px-4 py-3"
          >
            <span className="text-sm font-medium">{label}</span>
            <span className="text-sm text-black/40 dark:text-white/40 flex items-center gap-1">
              {description}
              <svg className="w-3.5 h-3.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
