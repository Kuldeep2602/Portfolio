import { useEffect, useState } from 'react';

const interactiveSelector = 'a, button, input, textarea, select, [role="button"], [data-cursor-hover]';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    if (!finePointer) {
      return undefined;
    }

    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
      setIsInteractive(Boolean((event.target as Element | null)?.closest(interactiveSelector)));
    };

    const handlePointerLeave = () => setVisible(false);
    const handlePointerEnter = () => setVisible(true);

    window.addEventListener('pointermove', handlePointerMove);
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);
    document.documentElement.addEventListener('pointerenter', handlePointerEnter);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      document.documentElement.removeEventListener('pointerenter', handlePointerEnter);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor ${visible ? 'custom-cursor-visible' : ''} ${isInteractive ? 'custom-cursor-active' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    />
  );
};

export default CustomCursor;
