import VanillaTilt from "vanilla-tilt";
// import "vanilla-tilt/dist/vanilla-tilt.css";
import "./VanillaTiltComponent.css";
import { useEffect, useRef } from "react";

// function VanillaTiltComponent() {
//   return (
//     <>
//       <VanillaTilt tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} gyroscope={true}>
//         <div className="card">
//           <h3>Tilting Card</h3>
//           <p>This is a tilting card example.</p>
//         </div>
//       </VanillaTilt>
//     </>
//   );
// }

// export default VanillaTiltComponent;

function VanillaTiltComponent() {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;

    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 20,
        perspective: 1000,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        glare: true,
        // "max-glare": 0.5,
      });

      return () => {
        tiltNode.vanillaTilt.destroy();
      };
    }
  }, []);

  return (
    <div ref={tiltRef} className="card">
      <h3>Card</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, maiores!.</p>
    </div>
  );
}

export default VanillaTiltComponent;
