import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';

export default function ArticlePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/article.html')
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        if (containerRef.current) {
          // Inject styles securely
          const styleId = 'legacy-article-styles';
          if (!document.getElementById(styleId)) {
            const styles = doc.querySelectorAll('style');
            let combinedCSS = '';
            styles.forEach((s) => (combinedCSS += s.innerHTML));
            const styleTag = document.createElement('style');
            styleTag.id = styleId;
            styleTag.innerHTML = combinedCSS;
            document.head.appendChild(styleTag);
          }

          // Inject HTML body
          containerRef.current.innerHTML = doc.body.innerHTML;

          // Override all buttons and links
          const interactables = containerRef.current.querySelectorAll('a, button');
          interactables.forEach((el) => {
            el.addEventListener('click', (e) => {
              e.preventDefault();
              window.open('/enquiry', '_blank');
            });
            // Also update cursor to indicate it's clickable
            if (el instanceof HTMLElement) {
              el.style.cursor = 'pointer';
            }
          });
        }
      })
      .catch((err) => console.error('Failed to load article.html', err));

    return () => {
      // Clean up styles when unmounting
      const styleTag = document.getElementById('legacy-article-styles');
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div ref={containerRef} className="article-container w-full" />
    </div>
  );
}
