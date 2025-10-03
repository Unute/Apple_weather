import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cloud, Environment, FirstPersonControls } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'


function AnimateCloud({ position, scale, speed }) {
  const cloudRef = useRef()

  useFrame((state) => {
    cloudRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed) * 2
    cloudRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.5
    cloudRef.current.rotation.y = state.clock.elapsedTime * speed * 0.1
  })

  return (
    <Cloud
      ref={cloudRef}
      position={position}
      scale={scale}
      opacity={0.4}
      speed={0.4}
      width={10}
      depth={1.5}
      segments={20}
      color="#ffffffff"
    />
  )
}

function CloudScene() {
  const clouds = useMemo(() => [
    { position: [-8, 5, -5], scale: 1.2, speed: 0.3 },
    { position: [8, 1, -8], scale: 0.8, speed: 0.2 },
    { position: [-4, -1, -10], scale: 1.5, speed: 0.25 },
    { position: [6, 3, -6], scale: 1.0, speed: 0.35 },
    { position: [0, -2, -12], scale: 2.0, speed: 0.15 },
    { position: [-12, 6, -4], scale: 0.9, speed: 0.4 },
    { position: [12, 6, -7], scale: 1.3, speed: 0.18 }
  ], [])

  return (
    <>
      <Environment preset='sunset' />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />

      {clouds.map((cloud, index) => (
        <AnimateCloud
          key={index}
          position={cloud.position}
          scale={cloud.scale}
          speed={cloud.speed}
        />
      ))}
    </>

  )
}



const FloatingClouds = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas
        gl={{ alpha: true }}
        camera={{ position: [0, 0, 10], fov: 75 }}
        // style={{ background: 'transparent' }}
        dpr={[1, 1.2]}
      >
        <CloudScene />
        <FirstPersonControls />
      </Canvas>
    </div>
  )
}

export default FloatingClouds