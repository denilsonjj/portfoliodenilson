import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const columnCount = Math.floor(window.innerWidth / 20);
    const characters = '01';

    // Create matrix columns
    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${(i * 20)}px`;
      
      // Random animation duration and delay for variety
      const duration = 8 + Math.random() * 12; // 8-20 seconds
      const delay = Math.random() * 5; // 0-5 seconds delay
      column.style.animationDuration = `${duration}s`;
      column.style.animationDelay = `${delay}s`;

      // Create column text (binary numbers)
      let text = '';
      const height = 15 + Math.floor(Math.random() * 15); // 15-30 characters high
      for (let j = 0; j < height; j++) {
        text += characters[Math.floor(Math.random() * characters.length)] + '\n';
      }
      column.textContent = text;

      container.appendChild(column);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};

export default MatrixBackground;
