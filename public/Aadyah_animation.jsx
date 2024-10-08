/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 Aadyah_animation.glb -T -R 3072 
Files: Aadyah_animation.glb [22.21MB] > /Users/jashwanthsupercode/superCode projects/aadyah/public/Aadyah_animation-transformed.glb [2.76MB] (88%)
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Aadyah_animation-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera name="Camera" makeDefault={false} far={1000} near={0.001} fov={22.895} position={[1.601, 0.129, 0]} rotation={[-1.571, 1.557, 1.571]} />
        <mesh name="Mars" geometry={nodes.Mars.geometry} material={materials['Material.001']} position={[-10.158, -0.407, -0.001]} rotation={[2.355, -0.563, 2.155]} scale={0.046} />
        <mesh name="Earth001" geometry={nodes.Earth001.geometry} material={materials['Material.003']} position={[-7.545, 0, 0]} rotation={[-1.125, -1.122, -1.001]} scale={1.079} />
        <mesh name="Moon" geometry={nodes.Moon.geometry} material={materials.Material} position={[-8.671, 0.541, 0.007]} rotation={[0.263, 0.153, 0.689]} scale={0.039} />
      </group>
    </group>
  )
}

useGLTF.preload('/Aadyah_animation-transformed.glb')
