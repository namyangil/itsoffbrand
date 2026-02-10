import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { FluidSphere } from './FluidSphere';

export function Scene() {
    const { viewport } = useThree();

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <FluidSphere />
        </>
    );
}
