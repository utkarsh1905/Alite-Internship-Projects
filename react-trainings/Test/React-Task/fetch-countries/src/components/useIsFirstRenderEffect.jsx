import { useEffect, useRef } from "react";

function useIsFirstRenderEffect() {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return isFirstRender.current;
}

export default useIsFirstRenderEffect;
