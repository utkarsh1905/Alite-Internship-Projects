import { useEffect, useRef, useState } from "react";

function useHover() {
  //   Code for Reference Alternate Logic
  //   const [isHover, setIsHover] = useState(false);

  //   const bindEvents = () => {
  //     return {
  //       onMouseEnter: () => setIsHover(true),
  //       onMouseLeave: () => setIsHover(false),
  //     };
  //   };

  //   return {
  //     bindEvents,
  //     isHover,
  //   };

  const [isMouseInside, setIsMouseInside] = useState(false);
  const ref = useRef(null);

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return [ref, isMouseInside];
}

export default useHover;
