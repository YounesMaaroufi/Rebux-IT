import { angleToRadians } from "@/lib/utils";
import { state } from "@/store";
import {
  Decal,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { FC, Suspense, useRef } from "react";
import * as THREE from "three";
import { useSnapshot } from "valtio";

/**
 *  this component is ment to render the 3d card
 *  the ambient light is optional
 *  other props
 *  this component is dynamic : you can map custom texture | logo | qrCode
 * @param ambientLight @param props
 *
 */
const Card: FC<cardCanvasProps> = ({ ambientLight, ...props }) => {
  const snap = useSnapshot(state);

  const CardLogo = useTexture(snap.logo || "logo.png");
  // checking if the texture exists
  const orbitRef = useRef(null);

  useFrame((state) => {
    if (!!orbitRef.current) {
      const { x, y } = state.pointer;
      // @ts-ignore
      orbitRef.current.setAzimuthalAngle(-x * angleToRadians(30));
      // @ts-ignore
      orbitRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      // @ts-ignore
      orbitRef.current.update();
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        maxAzimuthAngle={angleToRadians(20)}
        minAzimuthAngle={angleToRadians(30)}
        ref={orbitRef}
        enableZoom={false}
        maxPolarAngle={angleToRadians(90)}
        minPolarAngle={angleToRadians(90)}
      />
      <mesh {...props} scale={1.5} rotation={[0, 0, 0]}>
        <planeGeometry args={[5, 2.5]} />
        <meshStandardMaterial
          color={snap.color || "white"}
          side={THREE.DoubleSide}
          // map={mapTexture}
        />
        <Decal
          position={[-1.3, 0.2, 0.2]}
          scale={1.5}
          rotation={[0, 0, 0]}
          map={CardLogo}
        />
        {/* <Decal position={[1.8, -0.5, 0.2]} rotation={[0, 0, 0]} map={qr} /> */}
      </mesh>
      <spotLight args={["#fff", 10, 20, 1, 1, 2]} position={[-3, 5, 5]} />
      {ambientLight && <ambientLight />}
    </>
  );
};

interface cardCanvasProps {
  ambientLight?: boolean;
}

const CardCanvas: FC<cardCanvasProps> = ({ ambientLight, ...props }) => {
  return (
    <Canvas
      style={{
        maxWidth: 500,
        minWidth: 300,
      }}
    >
      <Suspense fallback={null}>
        <Card {...props} ambientLight={ambientLight} />
      </Suspense>
    </Canvas>
  );
};
export default CardCanvas;
