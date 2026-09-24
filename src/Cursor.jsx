import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const element = cursor.current;
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let visible = false;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const hide = () => {
      visible = false;
      element.classList.remove('is-visible', 'is-hovering');
      document.documentElement.classList.remove('custom-cursor-active');
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const draw = () => {
      const blend = reducedMotion.matches ? 1 : .35;
      x += (targetX - x) * blend;
      y += (targetY - y) * blend;
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      // Hit-test during page transitions, even if the mouse stays still.
      const target = document.elementFromPoint(targetX, targetY);
      element.classList.toggle('is-hovering', Boolean(target?.closest('a, button, [role="button"]')));
      frame = requestAnimationFrame(draw);
    };
    const move = (event) => {
      if (!pointer.matches || event.pointerType === 'touch') {
        hide();
        return;
      }
      targetX = event.clientX;
      targetY = event.clientY;
      if (!visible) {
        x = targetX;
        y = targetY;
        visible = true;
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        element.classList.add('is-visible');
        document.documentElement.classList.add('custom-cursor-active');
        frame = requestAnimationFrame(draw);
      }
    };
    const leave = (event) => { if (!event.relatedTarget) hide(); };
    const keyboard = (event) => { if (event.key === 'Tab') hide(); };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerout', leave);
    window.addEventListener('blur', hide);
    window.addEventListener('keydown', keyboard);
    document.addEventListener('visibilitychange', hide);
    pointer.addEventListener('change', hide);
    return () => {
      hide();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', hide);
      window.removeEventListener('keydown', keyboard);
      document.removeEventListener('visibilitychange', hide);
      pointer.removeEventListener('change', hide);
    };
  }, []);

  return <div className="custom-cursor" ref={cursor} aria-hidden="true"><span /></div>;
}
