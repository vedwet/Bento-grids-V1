const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ArrowUpRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const ArrowDown = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
)
export const Chevron = ({ size = 12, dir = 'down' }) => {
  const r = { down: 0, right: -90, left: 90, up: 180 }[dir]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${r}deg)` }} {...base} strokeWidth={2.2}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
export const Caret = ({ size = 8, dir = 'right' }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" style={{ transform: dir === 'left' ? 'rotate(180deg)' : dir === 'down' ? 'rotate(90deg)' : 'none' }}>
    <path d="M2 1l6 4-6 4z" fill="currentColor" />
  </svg>
)
export const Plus = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M12 5v14M5 12h14" /></svg>
)
export const User = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
)
export const Gift = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="3" y="8" width="18" height="5" rx="1" /><path d="M5 13v8h14v-8M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8Zm0 0s2-5 4.5-3.5S15 8 12 8Z" /></svg>
)
export const Menu = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M4 8h16M4 16h16" /></svg>
)
export const Layers = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>
)
export const Sun = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
)
export const Bolt = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
)
export const Check = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.6}><path d="m5 12 5 5 9-10" /></svg>
)
export const Users = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5" /><circle cx="17" cy="9" r="2.5" /><path d="M17 14.5c2.3 0 4 1.3 4.7 4" /></svg>
)
export const Spark = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"><path d="M12 1c.8 6 4.9 10.2 11 11-6.1.8-10.2 5-11 11-.8-6-4.9-10.2-11-11 6.1-.8 10.2-5 11-11Z" fill={color} /></svg>
)
export const Calendar = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
)
export const Box = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z" /><path d="m3 7 9 5 9-5M12 12v10" /></svg>
)
export const Social = {
  X: () => (
    <svg width="13" height="13" viewBox="0 0 24 24"><path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" /></svg>
  ),
  Insta: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
  ),
  Discord: () => (
    <svg width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 5.3A16 16 0 0 0 15.6 4l-.5 1a15 15 0 0 0-6.2 0l-.5-1a16 16 0 0 0-3.9 1.3C2 9 1.4 12.7 1.7 16.3a16 16 0 0 0 4.8 2.4l1-1.6-1.6-.8.4-.3a11.4 11.4 0 0 0 11.4 0l.4.3-1.6.8 1 1.6a16 16 0 0 0 4.8-2.4c.4-4.2-.6-7.9-2.8-11ZM8.7 14.1c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.8.9 1.7 2c0 1.1-.7 2-1.7 2Zm6.6 0c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.8.9 1.7 2c0 1.1-.7 2-1.7 2Z" /></svg>
  ),
}
export const Logo = {
  Kobalt: () => (
    <svg width="22" height="22" viewBox="0 0 24 24"><circle cx="6" cy="16" r="3" fill="currentColor" /><circle cx="12" cy="9" r="3" fill="currentColor" /><circle cx="18" cy="14" r="3" fill="currentColor" /><path d="M6 16 12 9l6 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
  ),
}
export const Search = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
)
export const Heart = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M12 20s-7.5-4.6-9-9.3C2 7.5 4.2 4.5 7.4 4.5c2 0 3.6 1.2 4.6 2.8 1-1.6 2.6-2.8 4.6-2.8 3.2 0 5.4 3 4.4 6.2-1.5 4.7-9 9.3-9 9.3Z" /></svg>
)
export const Bag = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8.5 8.5a3.5 3.5 0 0 0 7 0" /></svg>
)
