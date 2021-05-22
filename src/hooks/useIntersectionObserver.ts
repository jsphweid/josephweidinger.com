import React from "react";

// TODO: type this code or use a lib
// I copied and pasted it from https://react-query.tanstack.com/examples/load-more-infinite-scroll
export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px",
  enabled = true
}: any) {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled]);
}
