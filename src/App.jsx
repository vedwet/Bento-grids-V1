import { motion } from 'framer-motion'
import { Legend } from './components/Wire'
import { fadeUp, group } from './components/motion'
import { Design1, Wireframe1 } from './designs/Design1'
import { Design2, Wireframe2 } from './designs/Design2'
import { Design3, Wireframe3 } from './designs/Design3'
import { Design4, Wireframe4 } from './designs/Design4'
import { Design5, Wireframe5 } from './designs/Design5'

const SHOWCASES = [
  {
    id: 'ironvault',
    name: 'Ironvault — Armored cloud backup',
    theme: 'Blaze orange & ember black',
    swatch: ['#170806', '#b52003', '#ee4408', '#ffb08a'],
    bg: '#2a0c04',
    ink: '#ffffff',
    Wire: Wireframe1,
    Design: Design1,
  },
  {
    id: 'shishi',
    name: 'Shishi — Product engineering studio',
    theme: 'Electric blue & stone',
    swatch: ['#0a1230', '#002494', '#0d42c2', '#dbe1f4'],
    bg: '#0b1d6e',
    ink: '#ffffff',
    Wire: Wireframe2,
    Design: Design2,
  },
  {
    id: 'prism',
    name: 'Prism Lab — Generative design community',
    theme: 'Ultramarine & cool grey',
    swatch: ['#000673', '#1f2bd8', '#6789da', '#dadada'],
    bg: '#d9dae0',
    ink: '#000673',
    Wire: Wireframe3,
    Design: Design3,
  },
  {
    id: 'altura',
    name: 'Altura — Alpine storm-shell apparel',
    theme: 'Violet dusk & flame',
    swatch: ['#1c1835', '#48436a', '#5b3fd0', '#ff6a2b'],
    bg: '#302c4d',
    ink: '#ffffff',
    Wire: Wireframe4,
    Design: Design4,
  },
  {
    id: 'duskrider',
    name: 'Duskrider — Open-world knight saga',
    theme: 'Twilight indigo & sunset',
    swatch: ['#110f1c', '#1e2a6b', '#567bc7', '#d37c93'],
    bg: '#1a1830',
    ink: '#ffffff',
    Wire: Wireframe5,
    Design: Design5,
  },
]

export default function App() {
  return (
    <main>
      <motion.header className="intro" variants={group} initial="hidden" animate="show">
        <div>
          <motion.span className="intro__eyebrow" variants={fadeUp}>Bento hero collection · 5 layouts</motion.span>
          <motion.h1 variants={fadeUp}>From wireframe to finished hero section.</motion.h1>
        </div>
        <div>
          <motion.p variants={fadeUp}>
            Each layout is shown twice: first as a colour-coded wireframe so you can see how the blocks fit
            together, then as the finished hero with its own colour theme, stock imagery and animations.
          </motion.p>
          <motion.nav className="intro__index" variants={group}>
            {SHOWCASES.map((s, i) => (
              <motion.a key={s.id} href={`#${s.id}`} variants={fadeUp}>
                0{i + 1} · {s.name.split(' — ')[0]}
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </motion.header>

      {SHOWCASES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="showcase"
          style={{ background: s.bg, '--sc-ink': s.ink, '--sc-bg': s.bg }}
        >
          <div className="showcase__inner">
            <motion.div
              className="showcase__head"
              variants={group}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div>
                <motion.span className="showcase__num" variants={fadeUp}>Design 0{i + 1}</motion.span>
                <motion.h2 className="showcase__title" variants={fadeUp}>{s.name}</motion.h2>
              </div>
              <motion.div className="showcase__theme" variants={fadeUp}>
                {s.swatch.map((c) => <i key={c} style={{ background: c }} />)}
                <span>&nbsp;{s.theme}</span>
              </motion.div>
            </motion.div>

            <div className="stage-label"><b>Step 1</b> Wireframe</div>
            <div style={{ marginBottom: 14 }}><Legend /></div>
            <s.Wire />

            <div className="stage-label"><b>Step 2</b> Final design</div>
            <s.Design />
          </div>
        </section>
      ))}

      <footer className="footer">
        Hero imagery: supplied style images. Supporting imagery: free-to-use photos from Unsplash (Unsplash License). Companies and copy are fictional.
      </footer>
    </main>
  )
}
