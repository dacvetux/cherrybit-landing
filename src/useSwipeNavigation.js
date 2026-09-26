import { useEffect } from 'react';

export function swipeDestination(view, dx, dy, canScrollUp = false, canScrollDown = false, threshold = 64) {
  if (Math.max(Math.abs(dx), Math.abs(dy)) < threshold) return null;
  const horizontal = Math.abs(dx) > Math.abs(dy) * 1.4;
  const vertical = Math.abs(dy) > Math.abs(dx) * 1.4;
  if (vertical && (dy > 0 ? canScrollUp : canScrollDown)) return null;
  if (view === 'top') {
    if (horizontal) return dx > 0 ? 'work' : 'expertise';
    if (vertical) return dy > 0 ? 'contact' : 'services';
  }
  if (view === 'work' && horizontal && dx < 0) return 'top';
  if (view === 'expertise' && horizontal && dx > 0) return 'top';
  if (view === 'services' && vertical && dy > 0) return 'top';
  if (view === 'services' && vertical && dy < 0) return 'top';
  if (view === 'contact' && vertical && dy < 0) return 'top';
  return null;
}

export default function useSwipeNavigation(ref, view, enabled, navigate) {
  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;
    let gesture = null;
    let suppressClickUntil = 0;
    const cancel = () => { gesture = null; };
    const start = (point, target) => {
      if (target.closest('a, button, input, textarea, select, label, [contenteditable], [role="button"]')) return;
      const scroller = view === 'top'
        ? element.querySelector('.home-panel')
        : element.querySelector(`#${view} .destination-content`);
      gesture = {
        x: point.clientX, y: point.clientY, time: performance.now(),
        canScrollUp: Boolean(scroller && scroller.scrollTop > 2),
        canScrollDown: Boolean(scroller && scroller.scrollTop + scroller.clientHeight < scroller.scrollHeight - 2),
      };
    };
    const destination = (point, threshold = 64) => gesture && swipeDestination(view,
      point.clientX - gesture.x, point.clientY - gesture.y,
      gesture.canScrollUp, gesture.canScrollDown, threshold);
    const finish = (point) => {
      const next = destination(point);
      const timely = gesture && performance.now() - gesture.time < 1200;
      cancel();
      if (next && timely) {
        suppressClickUntil = performance.now() + 400;
        navigate(next);
      }
    };
    const touchStart = (event) => {
      cancel();
      if (event.touches.length === 1) start(event.touches[0], event.target);
    };
    const touchMove = (event) => {
      if (event.touches.length !== 1) return cancel();
      // Intercept only a navigation gesture; ordinary panel scrolling stays native.
      // Claim boundary swipes early, before the browser starts overscroll.
      // Navigation still requires the full distance at touchend.
      if (destination(event.touches[0], 8) && event.cancelable) event.preventDefault();
    };
    const touchEnd = (event) => {
      if (!event.touches.length && event.changedTouches.length === 1) finish(event.changedTouches[0]);
      else cancel();
    };
    const pointerDown = (event) => {
      if (event.pointerType === 'touch') return;
      cancel();
      if (event.button === 0 && event.isPrimary) start(event, event.target);
    };
    const pointerMove = (event) => {
      if (event.pointerType !== 'touch' && gesture && destination(event)) {
        event.preventDefault();
        window.getSelection()?.removeAllRanges();
      }
    };
    const pointerUp = (event) => {
      if (event.pointerType !== 'touch') finish(event);
    };
    // Native touch scrolling cancels pointer events, but touchend still follows.
    const pointerCancel = (event) => { if (event.pointerType !== 'touch') cancel(); };
    const click = (event) => {
      if (performance.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    const drag = (event) => { if (gesture) event.preventDefault(); };
    element.addEventListener('touchstart', touchStart, { passive: true });
    element.addEventListener('touchmove', touchMove, { passive: false });
    element.addEventListener('touchend', touchEnd);
    element.addEventListener('touchcancel', cancel);
    element.addEventListener('pointerdown', pointerDown);
    element.addEventListener('dragstart', drag);
    element.addEventListener('click', click, true);
    window.addEventListener('pointermove', pointerMove);
    window.addEventListener('pointerup', pointerUp);
    window.addEventListener('pointercancel', pointerCancel);
    window.addEventListener('blur', cancel);
    return () => {
      element.removeEventListener('touchstart', touchStart);
      element.removeEventListener('touchmove', touchMove);
      element.removeEventListener('touchend', touchEnd);
      element.removeEventListener('touchcancel', cancel);
      element.removeEventListener('pointerdown', pointerDown);
      element.removeEventListener('dragstart', drag);
      element.removeEventListener('click', click, true);
      window.removeEventListener('pointermove', pointerMove);
      window.removeEventListener('pointerup', pointerUp);
      window.removeEventListener('pointercancel', pointerCancel);
      window.removeEventListener('blur', cancel);
    };
  }, [ref, view, enabled, navigate]);
}
