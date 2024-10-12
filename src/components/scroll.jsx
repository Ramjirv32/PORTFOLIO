import React, { useCallback, useEffect, useRef, createContext, useContext } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

const Scroll = ({ children }) => {
  const lenisRef = useRef(null);

  const handleClick = useCallback((targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement);
    }
  }, []);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });
    }

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ handleClick }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default Scroll;