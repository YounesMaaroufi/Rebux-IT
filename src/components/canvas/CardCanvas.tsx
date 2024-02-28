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
import CanvasLoader from "./CanvasLoader";

/**
 *  this component is ment to render the 3d card
 *  the ambient light is optional
 *  other props
 *  this component is dynamic : you can map custom texture | logo | qrCode
 * @param customized @param props
 *
 */
const Card: FC<CardCanvasProps> = ({ customized, ...props }) => {
  const snap = useSnapshot(state);
  // the default logo
  const knowMe = useTexture("/logo.png");
  // for customizing the card
  const CardLogo = useTexture(snap.logo);
  const qrCode = useTexture(snap.qrCode);
  const texture = useTexture(snap.texture);

  const orbitRef = useRef(null);

  useFrame((state) => {
    if (!!orbitRef.current) {
      const { x, y } = state.pointer;
      // @ts-ignore
      orbitRef.current.setAzimuthalAngle(-x * angleToRadians(10));
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
          color="white"
          side={THREE.DoubleSide}
          map={customized ? texture : null}
        />
        {!customized && (
          <Decal
            position={[-1.6, 0.5, 0.2]}
            scale={1.5}
            rotation={[0, 0, 0]}
            map={knowMe}
          />
        )}
        {customized && (
          <Decal
            position={[-1.7, 0.4, 0.2]}
            scale={1}
            rotation={[0, 0, 0]}
            map={CardLogo}
          />
        )}
        {customized && (
          <Decal
            position={[1.8, -0.5, 0.2]}
            rotation={[0, 0, 0]}
            map={qrCode}
          />
        )}
      </mesh>
      <spotLight args={["#fff", 10, 20, 1, 1, 2]} position={[-3, 5, 5]} />
    </>
  );
};

interface CardCanvasProps {
  customized?: boolean;
}

const CardCanvas: FC<CardCanvasProps> = ({ customized, ...props }) => {
  return (
    <Canvas
      style={{
        maxWidth: 500,
        minWidth: 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Card {...props} customized={customized} />
      </Suspense>
    </Canvas>
  );
};
export default CardCanvas;
