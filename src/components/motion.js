// Shared Framer Motion variants. Every element in a frame uses one of these,
// so the whole bento "assembles" itself when it scrolls into view.
export const ease = [0.22, 1, 0.36, 1]

export const frame = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

// Card containers: appear, then reveal their own children one by one.
export const card = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease, staggerChildren: 0.07, delayChildren: 0.2 },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
}

export const pop = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 20 } },
}

export const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const imgReveal = {
  hidden: { opacity: 0, scale: 1.18, filter: 'blur(14px)' },
  show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.5, ease } },
}

// Inline groups (nav links, avatar stacks, tags)
export const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

export const wordWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

export const word = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.9, ease } },
}
