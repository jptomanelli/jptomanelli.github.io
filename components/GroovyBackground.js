import React, { useRef } from "react"
import { useFrame, Canvas } from "@react-three/fiber"
import * as THREE from "three"
import { fragmentShader } from "../shaders/fragmentShader"
import { vertexShader } from "../shaders/vertextShader"

const Mesh = () => {
  const mesh = useRef()
  const material = useRef()

  useFrame(({ clock, camera, mouse }) => {
    material.current.uniforms.uTime.value = clock.elapsedTime
    material.current.uniforms.uHue.value = (clock.elapsedTime * 0.25) % 1
    camera.lookAt(mesh.current.position)

    const mouseAdjusted = new THREE.Vector2(
      (mouse.x + 1) / 2,
      (mouse.y + 1) / 2
    )

    material.current.uniforms.uMousePosition.value = mouseAdjusted
  })

  return (
    <mesh ref={mesh} rotation={[0, 0, 0]}>
      <planeGeometry args={[2, 2, 1, 1]} />
      <rawShaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { type: "f", value: 0 },
          uHue: { type: "f", value: 10 },
          uHueVariation: { type: "f", value: 1 },
          uGradient: { type: "f", value: 10 },
          uDensity: { type: "f", value: 1 },
          uDisplacement: { type: "f", value: 5 },
          uMousePosition: { type: "v2", value: new THREE.Vector2(0.5, 0.5) }
        }}
        transparent
      />

    </mesh>
  )
}

const GroovyBackground = () => {
  return (
      <Canvas
       style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        left: 0,
        top: 0,
      }}
      >
        <Mesh />
      </Canvas>
  )
}

export default GroovyBackground