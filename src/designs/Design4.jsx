import { motion } from 'framer-motion'
import { Frame, Corner, Words, Img, Counter } from '../components/primitives'
import { card, fadeUp, pop, imgReveal, group, slideLeft, fadeIn } from '../components/motion'
import { ArrowUpRight, Chevron, Layers, Menu, User, Sun, Bolt } from '../components/icons'
import './d4.css'

const LINKS = ['Expeditions', 'Gear Guide', 'Field test']
const CELLS = ['', '', '3', '', '', '', '', '12', '', '', '67', '', '', '', '', '32']

export function Design4({ wire = false }) {
  return (
    <Frame className={wire ? 'd4 wf' : 'd4'}>
      {/* nav sits across the image notch and the right column */}
      <motion.header className="d4-nav" variants={group}>
        {LINKS.map((l) => (
          <motion.a key={l} href="#" variants={fadeUp}>{l}</motion.a>
        ))}
        <motion.span className="d4-icon" variants={pop}><Menu size={14} /></motion.span>
        <motion.span className="d4-icon" variants={pop}><User size={14} /></motion.span>
      </motion.header>

      <motion.div className="d4-visual" variants={card}>
        <Img src="/images/style-4.jpg" variants={imgReveal} />

        <motion.button className="d4-products" variants={pop}>
          <Layers /> Products <Chevron size={11} />
        </motion.button>

        <div className="d4-navnotch">
          <Corner r={24} at="0% 100%" style={{ top: 0, left: -24 }} />
          <Corner r={24} at="0% 100%" style={{ top: '100%', right: 0 }} />
        </div>

        <motion.div className="d4-research" variants={slideLeft}>
          <div className="d4-research__txt">
            <span className="d4-research__ico"><ArrowUpRight size={12} /></span>
            <span>Field Testing<br />and Research</span>
          </div>
          <img src="/images/s4-thumb.jpg" alt="" />
        </motion.div>

        <motion.div className="d4-cell" variants={fadeUp}>
          <small>MEMBRANE LAB</small>
          <span>Hydro-Grid 3L</span>
          <div className="d4-cell__grid">
            {CELLS.map((c, i) => <i key={i}>{c}</i>)}
          </div>
        </motion.div>

        <motion.figure className="d4-quote" variants={fadeIn}>
          <span className="d4-quote__mark">“</span>
          <blockquote>Light, breathable, and bone-dry at six thousand meters.</blockquote>
          <figcaption>
            <img src="/images/avatar-6.jpg" alt="" />
            guide Mara Osei
          </figcaption>
        </motion.figure>

        {/* white notches */}
        <div className="d4-title">
          <motion.span className="d4-brand" variants={fadeUp}>Altura</motion.span>
          <h1>
            <Words text="Storm-Shell" />
            <br />
            <Words text="Alpine Gear" />
          </h1>
          <motion.p variants={fadeUp}>
            Our drive to innovate comes from the people who climb in it. From weekend <b>trail runners</b> to{' '}
            <b>high-altitude guides</b>, we build layers that hold up when the weather turns.
          </motion.p>
          <motion.a href="#" className="d4-btn" variants={fadeUp}>Learn more</motion.a>
          <Corner r={30} at="100% 0%" style={{ top: -30, left: 0 }} />
          <Corner r={30} at="100% 0%" style={{ left: '100%', bottom: 'var(--stats-h)' }} />
        </div>
        <div className="d4-stats">
          <motion.div variants={fadeUp}>
            <b><Counter to={2.4} decimals={1} />K</b>
            <span>Summits logged in Altura gear*</span>
            <small>*Community data, March 2026</small>
          </motion.div>
          <motion.div variants={fadeUp}>
            <b><Counter to={18} />K</b>
            <span>Shells shipped per month</span>
          </motion.div>
          <Corner r={30} at="0% 0%" style={{ bottom: '100%', right: 0 }} />
        </div>
      </motion.div>

      <div className="d4-side">
        <motion.p className="d4-lede" variants={fadeUp}>
          We design summit-to-street apparel for <b>alpinists and trail runners</b>, tested from{' '}
          <b>base camp to the ridge</b> so you can move further, for longer.
        </motion.p>

        <motion.div className="d4-card" variants={card}>
          <motion.div className="d4-card__top" variants={fadeUp}>
            <span className="d4-chip">Storm tested</span>
            <span className="d4-icon is-light"><Sun size={14} /></span>
          </motion.div>
          <motion.h3 variants={fadeUp}>Innovation in Alpine Apparel</motion.h3>
          <motion.p variants={fadeUp}>
            Every season Altura pushes the <b>breathability frontier</b> of technical outerwear, building shells with
            advanced membranes that <b>increase</b> comfort on every climb and descent.
          </motion.p>
          <motion.a href="#" className="d4-outline" variants={fadeUp}>Explore more</motion.a>
        </motion.div>

        <motion.div className="d4-peach" variants={card}>
          <motion.div className="d4-card__top" variants={fadeUp}>
            <b>Thermal Layer Design</b>
            <span className="d4-icon is-white"><Bolt size={14} /></span>
          </motion.div>
          <motion.p variants={fadeUp}>
            Clear gains in <b>warmth</b>, <b>wind resistance</b> and <b>packability</b>.
          </motion.p>
          <motion.span className="d4-mini" variants={pop}><i /><i /></motion.span>
        </motion.div>
      </div>
    </Frame>
  )
}

export const Wireframe4 = () => <Design4 wire />
