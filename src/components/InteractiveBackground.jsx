import { useEffect, useRef } from 'react'

/*
  Network background: small nodes drifting slowly and connecting with
  thin lines (like services talking to each other). Lines also reach
  toward the mouse. Plain 2D canvas: no extra libraries, no WebGL.
*/

const COLORS = {
  dark: { rgb: '56, 189, 248', nodeAlpha: 0.7, lineAlpha: 0.25 },
  light: { rgb: '37, 99, 235', nodeAlpha: 0.6, lineAlpha: 0.3 },
}

const LINK_DISTANCE = 130
const MOUSE_DISTANCE = 170

export default function InteractiveBackground({ lightMode = false }) {
  const canvasRef = useRef(null)
  const lightRef = useRef(lightMode)

  // keep the latest theme available to the animation loop without restarting it
  useEffect(() => {
    lightRef.current = lightMode
  }, [lightMode])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let nodes = []
    let rafId = 0
    const mouse = { x: -9999, y: -9999 }

    const createNodes = () => {
      const count = Math.max(20, Math.min(90, Math.floor((width * height) / 16000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.2 + 0.8,
      }))
    }

    const draw = () => {
      const theme = lightRef.current ? COLORS.light : COLORS.dark
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]

        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${theme.rgb}, ${theme.nodeAlpha})`
        ctx.fill()

        // lines to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * theme.lineAlpha
            ctx.strokeStyle = `rgba(${theme.rgb}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        // lines to the mouse
        const mx = a.x - mouse.x
        const my = a.y - mouse.y
        const mouseDist = Math.sqrt(mx * mx + my * my)
        if (mouseDist < MOUSE_DISTANCE) {
          const alpha = (1 - mouseDist / MOUSE_DISTANCE) * 0.5
          ctx.strokeStyle = `rgba(${theme.rgb}, ${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
    }

    const update = () => {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
    }

    const loop = () => {
      update()
      draw()
      rafId = requestAnimationFrame(loop)
    }

    const start = () => {
      if (reduceMotion || rafId) return
      rafId = requestAnimationFrame(loop)
    }

    const stop = () => {
      cancelAnimationFrame(rafId)
      rafId = 0
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const widthChanged = window.innerWidth !== width
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // on phones the address bar changes the height while scrolling,
      // so only rebuild nodes when the width really changed
      if (widthChanged || nodes.length === 0) createNodes()
      if (reduceMotion) draw()
    }

    const onPointerMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onPointerLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    resize()
    start()

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    if (!reduceMotion) {
      window.addEventListener('pointermove', onPointerMove)
      document.documentElement.addEventListener('pointerleave', onPointerLeave)
    }

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}