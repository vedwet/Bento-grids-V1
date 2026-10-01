export const WIRE_TYPES = {
  heading: { label: 'Heading / text', hint: 'Headlines & copy' },
  image: { label: 'Image', hint: 'Main & supporting visuals' },
  card: { label: 'Info card', hint: 'Stats, text, widgets' },
  ui: { label: 'Nav / UI', hint: 'Links, buttons, pills' },
}

export function Legend() {
  return (
    <div className="legend">
      {Object.entries(WIRE_TYPES).map(([k, v]) => (
        <span key={k} className={`legend__item legend__item--${k}`}>
          <i />
          <b>{v.label}</b>
          <em>{v.hint}</em>
        </span>
      ))}
    </div>
  )
}
