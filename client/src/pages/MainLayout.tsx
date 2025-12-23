import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
  videoUrl?: string;
}

export function MainLayout({ children, videoUrl = 'https://r2.guns.lol/cb266527-84f4-4c15-833c-8c6dc327af31.mp4' }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-30"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/70 -z-10" />

      {/* Content */}
      {children}
    </div>
  );
}
