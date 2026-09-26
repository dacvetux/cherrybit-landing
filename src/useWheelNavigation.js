import { useEffect, useRef } from 'react';
import { swipeDestination } from './useSwipeNavigation.js';

export function wheelDelta(event, pageHeight) {
  const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? pageHeight : 1;
  // Shift + wheel also provides horizontal navigation on a regular mouse.
  return event.shiftKey && !event.deltaX
    ? { x: event.deltaY * unit, y: 0 }
    : { x: event.deltaX * unit, y: event.deltaY * unit };
}

export default function useWheelNavigation(ref, view, enabled, navigate) {
  const lockedUntil = useRef(0);
  const lastWheel = useRef(0);
  const awaitingPause = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;
    let x = 0;
    let y = 0;
    let lastEvent = 0;
    const wheel = (event) => {
      // Preserve browser zoom and native editing controls.
      if (event.ctrlKey || event.metaKey || event.target.closest('input, textarea, select, [contenteditable]')) return;
      const now = performance.now();
      const idle = now - lastWheel.current > 220;
      lastWheel.current = now;
      if (now < lockedUntil.current) {
        if (event.cancelable) event.preventDefault();
        return;
      }
      const delta = wheelDelta(event, element.clientHeight);
      const panel = view === 'top'
        ? element.querySelector('.home-panel')
        : element.querySelector(`#${view} .destination-content`);
      const canScrollUp = view !== 'top' && panel && panel.scrollTop > 2;
      const canScrollDown = view !== 'top' && panel && panel.scrollTop + panel.clientHeight < panel.scrollHeight - 2;
      // Let vertical content scrolling finish before interpreting a fresh gesture.
      if (Math.abs(delta.y) >= Math.abs(delta.x)
        && (delta.y < 0 ? canScrollUp : canScrollDown)) {
        x = 0;
        y = 0;
        lastEvent = 0;
        awaitingPause.current = true;
        return;
      }
      if (event.cancelable) event.preventDefault();
      if (awaitingPause.current && !idle) return;
      awaitingPause.current = false;
      if (now - lastEvent > 180 || x * delta.x < 0 || y * delta.y < 0) {
        x = 0;
        y = 0;
      }
      lastEvent = now;
      x += delta.x;
      y += delta.y;
      if (Math.max(Math.abs(x), Math.abs(y)) < 100) return;
      // Wheel deltas describe scrolling, opposite to a finger dragging a panel.
      const destination = swipeDestination(view, -x, -y, Boolean(canScrollUp), Boolean(canScrollDown));
      if (!destination) return;
      lockedUntil.current = now + 1000;
      awaitingPause.current = true;
      x = 0;
      y = 0;
      navigate(destination);
    };
    element.addEventListener('wheel', wheel, { passive: false });
    return () => element.removeEventListener('wheel', wheel);
  }, [ref, view, enabled, navigate]);
}
