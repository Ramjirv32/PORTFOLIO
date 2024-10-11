import React, { useCallback, useEffect, useRef, createContext, useContext } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext();

const raf = (lenis) => (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf(lenis));
};

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
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        infinite: false,
        smooth: true,
      });
      requestAnimationFrame(raf(lenisRef.current));
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ handleClick }}>
      <div className="bg-[#030014]">
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default Scroll;