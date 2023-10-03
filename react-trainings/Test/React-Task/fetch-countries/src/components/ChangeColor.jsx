import useHover from "./usePlayMedia";
import useIsFirstRenderEffect from "./useIsFirstRenderEffect";

function ChangeColor() {
  const [ref, isMouseInside] = useHover();
  const isFirstRender = useIsFirstRenderEffect();
  console.log(isMouseInside);

  if (isFirstRender) {
    console.log("First Render");
  } else {
    console.log("Not a First Render");
  }
  return (
    <div
      ref={ref}
      className={`h-40 ${isMouseInside ? "bg-yellow-50" : "bg-red-50"}  `}
    >
      Hello
    </div>
  );
}

export default ChangeColor;
