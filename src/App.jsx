import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Overlay } from './components/Overlay';
import { Scene } from './components/Scene';

// Version: 1.0.4 - Force Centering update
function App() {
  return (
    <div id="canvas-container" className="fixed inset-0 w-screen h-screen bg-[#111] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={1}
        style={{ height: '100vh', width: '100vw' }}
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
