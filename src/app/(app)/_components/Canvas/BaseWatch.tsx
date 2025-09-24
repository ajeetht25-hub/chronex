"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/seiko_watch/scene.gltf");

export type WatchProps = {
  scale?: number;
};

export function BaseWatch({
  scale = 0.2,
  ...props
}: WatchProps) {
  const { nodes, materials } = useGLTF("/seiko_watch/scene.gltf");

  const labels = useTexture("/img/scenario.jpg");

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, 0, 0]}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial as THREE.Mesh).geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_1 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_2 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_3 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_4 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_5 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_6 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_7 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_8 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_9 as THREE.Mesh).geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_10 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_11 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_12 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_13 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_14 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_15 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_16 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_17 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_18 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_19 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_20 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_21 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_22 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_23 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_24 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_25 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_26 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_27 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_28 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_29 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_30 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_31 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_32 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_33 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_34 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_35 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_36 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_37 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_38 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_39 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_40 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_41 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_42 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_43 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_44 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_45 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_46 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_47 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_48 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_49 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_50 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_51 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_52 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_53 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_54 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.defaultMaterial_55 as THREE.Mesh).geometry}
          material={materials.metal}
        />
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={labels} />
      </group>
    </group>
  )
}