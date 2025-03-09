import { useEffect, useRef } from "react";
import { analytics, logEvent } from "../firebaseConfig";

const useSectionTracking = (sectionName: string) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            logEvent(analytics, "section_viewed", { section: sectionName });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [sectionName]);

  return ref;
};

export default useSectionTracking;
