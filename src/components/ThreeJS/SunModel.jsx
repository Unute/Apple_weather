import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSun() {
  const sunRef = useRef()
  const coronaRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (sunRef.current) {
      // Медленное вращение солнца
      sunRef.current.rotation.y = state.clock.elapsedTime * 0.1
      sunRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }

    if (coronaRef.current) {
      // Пульсация короны
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      coronaRef.current.scale.set(scale, scale, scale)
      coronaRef.current.rotation.y = -state.clock.elapsedTime * 0.05
    }

    if (glowRef.current) {
      // Дополнительное свечение
      const glowScale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.15
      glowRef.current.scale.set(glowScale, glowScale, glowScale)
    }
  })

  // Создаём более яркий материал для солнца
  const sunMaterial = new THREE.MeshBasicMaterial({
    color: '#ffff00',
    emissive: '#ff8800',
    emissiveIntensity: 0.8,
  })

  // Материал для короны
  const coronaMaterial = new THREE.MeshBasicMaterial({
    color: '#ffdd00',
    transparent: true,
    opacity: 0.4,
    emissive: '#ff6600',
    emissiveIntensity: 0.3,
  })

  // Материал для внешнего свечения
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: '#ffaa00',
    transparent: true,
    opacity: 0.15,
    emissive: '#ffaa00',
    emissiveIntensity: 0.2,
  })

  return (
    <group>
      {/* Внешнее свечение */}
      <Sphere ref={glowRef} args={[3.5, 32, 32]} material={glowMaterial} />

      {/* Корона солнца */}
      <Sphere ref={coronaRef} args={[2.5, 32, 32]} material={coronaMaterial} />

      {/* Основное тело солнца */}
      <Sphere ref={sunRef} args={[1.8, 32, 32]} material={sunMaterial} />

      {/* Более яркий точечный свет от солнца */}
      <pointLight position={[0, 0, 0]} intensity={4} color="#ffff00" distance={25} />

      {/* Дополнительное освещение */}
      <ambientLight intensity={0.5} color="#ffeeaa" />
    </group>
  )
}

const SunModel = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '8%',
      right: '8%',
      width: '250px',
      height: '250px',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        gl={{ alpha: true }}
      >
        <AnimatedSun />
      </Canvas>
    </div>
  )
}

export default SunModel