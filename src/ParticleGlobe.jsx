
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function ParticleGlobe() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const globe = new THREE.Group()
    scene.add(globe)

    const count = 2200
    const positions = []
    const colors = []

    const blue = new THREE.Color('#38bdf8')
    const purple = new THREE.Color('#a855f7')

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const angle = Math.PI * (3 - Math.sqrt(5)) * i

      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius

      positions.push(x * 1.45, y * 1.45, z * 1.45)

      const color = blue.clone().lerp(purple, (x + 1) / 2)
      colors.push(color.r, color.g, color.b)
    }

    const geometry = new THREE.BufferGeometry()

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    )

    geometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(colors, 3)
    )

    const material = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    globe.add(new THREE.Points(geometry, material))

    const animate = () => {
      globe.rotation.y += 0.002
      globe.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08
      renderer.render(scene, camera)
    }

    renderer.setAnimationLoop(animate)

    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight

      if (!width || !height) return

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', resize)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
      renderer.setAnimationLoop(null)
      geometry.dispose()
      material.dispose()
      renderer.dispose()

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="particle-globe" />
}

export default ParticleGlobe
