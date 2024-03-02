function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');

    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.appendChild(script);
  });
}

export { loadScript };

export function videoLoop() {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      const videoElement = document.getElementById('videoLoop') as HTMLMediaElement;
      // Vérifier si la vidéo est en pause ou a fini de jouer, puis la rejouer
      if (videoElement && (videoElement.paused || videoElement.ended)) {
        videoElement.play().catch((error) => {
          console.error('Erreur lors de la tentative de lecture de la vidéo: ', error);
        });
      }
    }
  });
}
