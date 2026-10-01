import { motion } from 'framer-motion'
import { Frame, Corner, Words } from '../components/primitives'
import { card, fadeUp, pop, imgReveal, group, slideLeft, fadeIn } from '../components/motion'
import { ArrowUpRight, Plus, Search, Heart, Bag } from '../components/icons'
import './d5.css'

const LINKS = ['Games', 'Editions', 'About us', 'Journal', 'Contacts']
// The wide image is split into three capsules that share one continuous photo.
const SEGMENTS = [
  { w: 17, x: 0 },
  { w: 17, x: 17 },
  { w: 66, x: 34 },
]
const SWATCHES = ['#1e2a6b', '#567bc7', '#d37c93', 'outline']

function Glyph() {
  return (
    <svg className="d5-glyph" viewBox="0 0 60 50" aria-hidden>
      {[4, 16, 28, 40, 52].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${i % 2 ? 6 : 2}c4 0 4 6 0 10s-4 8 0 12 4 8 0 12-4 6 0 ${i % 2 ? 6 : 10}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

export function Design5({ wire = false }) {
  return (
    <Frame className={wire ? 'd5 wf' : 'd5'}>
      <div className="d5-main">
        {/* nav */}
        <motion.header className="d5-nav" variants={group}>
          <div className="d5-nav__group">
            <motion.span className="d5-logo" variants={pop}>
              <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 2c3 3 4.5 6.3 4.5 10S15 19 12 22c-3-3-4.5-6.3-4.5-10S9 5 12 2Zm-8 6c3 0 5.5 1.6 6.5 4.6C8 13 5.5 12.6 4 8Zm16 0c-1.5 4.6-4 5-6.5 4.6 1-3 3.5-4.6 6.5-4.6Z" /></svg>
            </motion.span>
            <motion.nav className="d5-links" variants={group}>
              {LINKS.map((l) => (
                <motion.a key={l} href="#" variants={fadeUp}>{l}</motion.a>
              ))}
            </motion.nav>
          </div>
          <motion.div className="d5-nav__icons" variants={group}>
            <motion.a href="#" variants={pop} aria-label="Search"><Search /></motion.a>
            <motion.a href="#" variants={pop} aria-label="Wishlist"><Heart /></motion.a>
            <motion.a href="#" variants={pop} aria-label="Cart"><Bag /></motion.a>
          </motion.div>
        </motion.header>

        {/* headline */}
        <h1 className="d5-h1">
          <span className="d5-line">
            <motion.span variants={pop}><Glyph /></motion.span>
            <Words text="DUSKRIDER IS AN" />
          </span>
          <span className="d5-line"><Words text="OPEN-WORLD RIDE" /></span>
          <span className="d5-line">
            <Words text="INTO TWILIGHT" />
            <motion.span className="d5-thumbs" variants={group}>
              <motion.img src="/images/s5-thumb.jpg" alt="" variants={pop} />
              <motion.img src="/images/style-5.jpg" alt="" variants={pop} />
            </motion.span>
          </span>
        </h1>

        {/* segmented image */}
        <motion.div className="d5-strip" variants={card}>
          {SEGMENTS.map((s) => (
            <div key={s.x} className="d5-seg" style={{ width: `${s.w}%` }}>
              <motion.img
                src="/images/style-5b.jpg"
                alt=""
                variants={imgReveal}
                style={{ width: `${(100 / s.w) * 100}%`, left: `${(-s.x / s.w) * 100}%` }}
              />
            </div>
          ))}
          <div className="d5-swatches">
            {SWATCHES.map((c) => (
              <motion.i key={c} variants={pop} className={c === 'outline' ? 'is-outline' : ''} style={c === 'outline' ? null : { background: c }} />
            ))}
            <Corner r={16} at="0% 0%" style={{ bottom: '100%', right: 0 }} />
            <Corner r={16} at="0% 100%" style={{ top: '100%', right: 0 }} />
          </div>
        </motion.div>

        {/* CTA + copy */}
        <div className="d5-bottom">
          <motion.div className="d5-cta" variants={group}>
            <motion.a href="#" className="d5-cta__pill" variants={fadeUp}>PRE-ORDER NOW</motion.a>
            <motion.a href="#" className="d5-cta__circle" variants={pop} aria-label="Pre-order"><ArrowUpRight size={46} /></motion.a>
          </motion.div>
          <motion.p variants={fadeIn}>
            As open worlds have grown louder and busier, the need for quiet, cinematic adventure has grown with
            them. Duskrider is a slow-paced knight saga with a painterly sunset world, a soft ambient score and
            a lone, contemplative ride.
          </motion.p>
        </div>
      </div>

      {/* tall product card */}
      <motion.div className="d5-tall" variants={card}>
        <motion.img src="/images/style-5.jpg" alt="" className="fill-img" variants={imgReveal} />
        <motion.div className="d5-tag" variants={slideLeft}>
          <div>
            <span>Collector’s Ed.</span>
            <b><i><Plus size={11} /></i>89$</b>
          </div>
          <img src="/images/style-5.jpg" alt="" />
          <svg className="d5-tag__line" viewBox="0 0 40 40" aria-hidden>
            <path d="M34 2 6 34" stroke="#fff" strokeWidth="1" fill="none" />
            <circle cx="6" cy="34" r="4" fill="#fff" />
          </svg>
        </motion.div>
        <motion.form className="d5-news" variants={fadeUp} onSubmit={(e) => e.preventDefault()}>
          <h3>NEWS<sup>®</sup></h3>
          <p>Sign up and stay up to date on patch notes and pre-order drops.</p>
          <label>
            <input type="email" placeholder="Email" />
            <button type="submit">Enter</button>
          </label>
        </motion.form>
      </motion.div>
    </Frame>
  )
}

export const Wireframe5 = () => <Design5 wire />
