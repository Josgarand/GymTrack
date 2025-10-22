

export function TailwindBackground() {
  return (
    // <div
    //   className="fixed inset-0 -z-10 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    // />

    <div className="fixed absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
    <svg className="absolute inset-0 h-full w-full opacity-20 dark:opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,20 Q25,40 50,20 Q75,0 100,20 V100 H0 Z" className="fill-blue-100 dark:fill-blue-900/30" />
    <path d="M0,30 Q25,50 50,30 Q75,10 100,30 V100 H0 Z" className="fill-blue-200 dark:fill-blue-800/30" />
    <path d="M0,40 Q25,60 50,40 Q75,20 100,40 V100 H0 Z" className="fill-blue-300 dark:fill-blue-700/30" />
    <path d="M0,50 Q25,70 50,50 Q75,30 100,50 V100 H0 Z" className="fill-blue-400 dark:fill-blue-600/30" />
    <path d="M0,60 Q25,80 50,60 Q75,40 100,60 V100 H0 Z" className="fill-blue-500 dark:fill-blue-500/30" />
    <path d="M0,70 Q25,90 50,70 Q75,50 100,70 V100 H0 Z" className="fill-blue-600 dark:fill-blue-400/30" />
    <path d="M0,80 Q25,100 50,80 Q75,60 100,80 V100 H0 Z" className="fill-blue-700 dark:fill-blue-300/30" />
 
  </svg>
</div>
  );
}