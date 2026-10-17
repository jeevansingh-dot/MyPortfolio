import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Edges, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

/*
  Full stack architecture in 3D:
  Frontend -> Backend -> Database layers, with request / response
  packets travelling between them. The whole scene follows the mouse.
*/

const LAYERS = [
  { key: 'frontend', label: 'Frontend', tech: 'React · Tailwind', color: '#38bdf8', y: 1.3 },
  { key: 'backend', label: 'Backend', tech: 'Node · Express', color: '#a855f7', y: 0 },
  { key: 'database', label: 'Database', tech: 'MongoDB', color: '#ec4899', y: -1.3 },
]

// x position of each lane and which way its packets travel
// direction -1 = request going down, +1 = response going up
const LANES = [
  { x: -1.1, direction: -1 },
  { x: 0, direction: 1 },
  { x: 1.1, direction: -1 },
]

const TOP = LAYERS[0].y
const BOTTOM = LAYERS[LAYERS.length - 1].y

function usePrefersReducedMotion() {
  return useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )
}

function Label({ layer }) {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 640
    canvas.height = 112
    const ctx = canvas.getContext('2d')

    // pill background
    ctx.fillStyle = 'rgba(5, 8, 22, 0.8)'
    ctx.strokeStyle = layer.color
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.roundRect(4, 4, 632, 104, 52)
    ctx.fill()
    ctx.stroke()

    // text: bold name + lighter tech
    const font = 'system-ui, -apple-system, "Segoe UI", sans-serif'
    const gap = 22
    ctx.textBaseline = 'middle'

    ctx.font = `700 38px ${font}`
    const nameWidth = ctx.measureText(layer.label).width
    ctx.font = `400 34px ${font}`
    const techWidth = ctx.measureText(layer.tech).width

    let x = (640 - (nameWidth + gap + techWidth)) / 2

    ctx.font = `700 38px ${font}`
    ctx.fillStyle = '#ffffff'
    ctx.fillText(layer.label, x, 58)

    x += nameWidth + gap
    ctx.font = `400 34px ${font}`
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
    ctx.fillText(layer.tech, x, 58)

    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
  }, [layer])

  useEffect(() => () => texture.dispose(), [texture])

  return (
    <sprite position={[0, 0.02, 1.25]} scale={[2.7, 0.47, 1]}>
      <spriteMaterial map={texture} transparent toneMapped={false} depthWrite={false} />
    </sprite>
  )
}

function Layer({ layer }) {
  const isDatabase = layer.key === 'database'

  return (
    <group position={[0, layer.y, 0]}>
      {isDatabase ? (
        // Database = stack of discs
        [0.2, 0, -0.2].map((offset) => (
          <mesh key={offset} position={[0, offset * 0.6, 0]}>
            <cylinderGeometry args={[1.15, 1.15, 0.16, 48]} />
            <meshStandardMaterial
              color={layer.color}
              transparent
              opacity={0.35}
              metalness={0.4}
              roughness={0.3}
            />
            <Edges color={layer.color} />
          </mesh>
        ))
      ) : (
        <mesh>
          <boxGeometry args={[3.4, 0.2, 2.1]} />
          <meshStandardMaterial
            color={layer.color}
            transparent
            opacity={0.35}
            metalness={0.4}
            roughness={0.3}
          />
          <Edges color={layer.color} />
        </mesh>
      )}
      <Label layer={layer} />
    </group>
  )
}

function Connector({ x }) {
  const height = TOP - BOTTOM
  return (
    <mesh position={[x, (TOP + BOTTOM) / 2, 0]}>
      <cylinderGeometry args={[0.012, 0.012, height, 8]} />
      <meshBasicMaterial color="#94a3b8" transparent opacity={0.35} />
    </mesh>
  )
}

function Packet({ lane, offset, speed, reduceMotion }) {
  const ref = useRef()
  const color = lane.direction < 0 ? '#38bdf8' : '#34d399'

  useFrame((state) => {
    if (!ref.current) return
    const t = reduceMotion ? offset : (state.clock.elapsedTime * speed + offset) % 1
    const progress = lane.direction < 0 ? t : 1 - t
    ref.current.position.set(lane.x, TOP - progress * (TOP - BOTTOM), 0)
    // fade in / out near the layers so packets do not pop
    const fade = Math.sin(progress * Math.PI)
    ref.current.scale.setScalar(0.6 + fade * 0.6)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.07, 16, 16]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  )
}

function Rig({ reduceMotion, children }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (!group.current || reduceMotion) return
    const { pointer, clock } = state
    const targetY = pointer.x * 0.55 + Math.sin(clock.elapsedTime * 0.4) * 0.2
    const targetX = -pointer.y * 0.25 + 0.12
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 3, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 3, delta)
  })

  return <group ref={group}>{children}</group>
}

function Scene({ reduceMotion }) {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 5]} intensity={1.6} />
      <pointLight position={[-4, -3, 3]} color="#a855f7" intensity={12} />

      <Float
        speed={reduceMotion ? 0 : 1.6}
        rotationIntensity={0.15}
        floatIntensity={reduceMotion ? 0 : 0.6}
      >
        <Rig reduceMotion={reduceMotion}>
          {LAYERS.map((layer) => (
            <Layer key={layer.key} layer={layer} />
          ))}

          {LANES.map((lane) => (
            <group key={lane.x}>
              <Connector x={lane.x} />
              <Packet lane={lane} offset={0} speed={0.28} reduceMotion={reduceMotion} />
              <Packet lane={lane} offset={0.5} speed={0.28} reduceMotion={reduceMotion} />
            </group>
          ))}

          {/* thin orbit ring */}
          <mesh rotation={[Math.PI / 2.4, 0, 0]}>
            <torusGeometry args={[2.7, 0.008, 8, 160]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
          </mesh>
        </Rig>
      </Float>

      {!reduceMotion && (
        <Sparkles count={40} scale={[7, 4.5, 3]} size={2} speed={0.3} color="#38bdf8" />
      )}
    </>
  )
}

export default function Hero3D() {
  const reduceMotion = usePrefersReducedMotion()
  const wrapper = useRef(null)
  const [visible, setVisible] = useState(true)

  // Stop rendering when the 3D block is off screen (saves battery on mobile)
  useEffect(() => {
    const el = wrapper.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.05,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={wrapper}
      className="relative h-80 w-full sm:h-[26rem]"
      role="img"
      aria-label="3D diagram of a full stack architecture: frontend, backend and database layers with data flowing between them"
    >
      <Canvas
        frameloop={visible ? 'always' : 'never'}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.4, 7.4], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  )
}