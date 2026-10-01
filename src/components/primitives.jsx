import { motion, useInView, animate } from 'framer-motion'
import { Fragment, useEffect, useRef, useState } from 'react'
import { frame, word, wordWrap } from './motion'

// The root of every bento: orchestrates the staggered reveal on scroll.
export function Frame({ className = '', children, style }) {
  return (
    <motion.div
      className={`frame ${className}`}
      style={style}
      variants={frame}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

// Inverted ("concave") corner used where a white tab cuts into an image card.
// `at` is the position of the circle centre inside the r×r square.
export function Corner({ r = 22, at, style }) {
  return (
    <span
      className="ic"
      aria-hidden
      style={{
        width: r,
        height: r,
        background: `radial-gradient(circle at ${at}, transparent ${r - 0.5}px, var(--frame) ${r}px)`,
        ...style,
      }}
    />
  )
}

// Headline whose words slide up from behind a mask.
export function Words({ text, as: Tag = 'span', className = '' }) {
  const M = motion[Tag]
  return (
    <M className={`words ${className}`} variants={wordWrap}>
      {text.split(' ').map((w, i) => (
        <Fragment key={i}>
          <span className="word-mask">
            <motion.span className="word" variants={word}>
              {w}
            </motion.span>
          </span>{' '}
        </Fragment>
      ))}
    </M>
  )
}

// Number that counts up once visible.
export function Counter({ to, decimals = 0, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: setVal })
    return () => c.stop()
  }, [inView, to])
  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function Img({ src, alt = '', className = '', variants }) {
  return <motion.img src={src} alt={alt} className={`fill-img ${className}`} variants={variants} draggable={false} />
}
