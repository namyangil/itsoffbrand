import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Overlay } from './components/Overlay';
import { Scene } from './components/Scene';

function App() {
  return (
    <div className="relative w-full h-screen bg-[#111] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={1}
        className="absolute inset-0 z-0"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Overlay />
    </div>
  );
}

export default App;
