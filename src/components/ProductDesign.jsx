import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  left: 100px;

  @media only screen and (max-width: 768px) {
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
      Wir entwickeln Produkte mit starkem Fokus auf erstklassiges Design und garantieren den Erfolg Ihres Produkts auf dem Markt.
      </Desc>
    </>
  );
};

export default ProductDesign;
