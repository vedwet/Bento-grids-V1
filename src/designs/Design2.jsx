import { motion } from 'framer-motion'
import { Frame, Corner, Words, Img, Counter } from '../components/primitives'
import { card, fadeUp, pop, imgReveal, group, slideLeft, fadeIn } from '../components/motion'
import { ArrowUpRight, ArrowRight, ArrowDown, Caret, Plus, Check } from '../components/icons'
import './d2.css'

const SOCIAL = ['Dribbble', 'Behance', 'LinkedIn']
const DAYS = [
  ['Mon', 11],
  ['Tue', 12],
  ['Wed', 13],
]

export function Design2({ wire = false }) {
  return (
    <Frame className={wire ? 'd2 wf' : 'd2'}>
      {/* nav */}
      <motion.header className="d2-nav" variants={group}>
        <div className="d2-nav__l">
          <motion.button className="d2-pill" variants={fadeUp}>Home <Caret dir="down" /></motion.button>
          <motion.span className="d2-brand" variants={fadeUp}>SHISHI STUDIO</motion.span>
        </div>
        <div className="d2-nav__r">
          {SOCIAL.map((s) => (
            <motion.a key={s} href="#" className="d2-pill" variants={fadeUp}>{s} <Caret /></motion.a>
          ))}
          <motion.a href="#" className="d2-cta" variants={pop}>Book a Call</motion.a>
        </div>
      </motion.header>

      {/* headline */}
      <motion.div className="d2-head" variants={group}>
        <h1>
          <span className="d2-line">
            <Words text="Our crew of senior" />
            <motion.a href="#" className="d2-cases" variants={pop}>
              <span><ArrowRight size={14} /></span> See our cases
            </motion.a>
          </span>
          <span className="d2-line">
            <motion.span className="d2-faces" variants={group}>
              {[2, 3, 1].map((n, i) => (
                <motion.img key={n} src={`/images/avatar-${n}.jpg`} alt="" className={i === 1 ? 'is-ring' : ''} variants={pop} />
              ))}
            </motion.span>
            <Words text="builders craft" />
          </span>
          <span className="d2-line"><Words text="the boldest web platforms" /></span>
        </h1>
      </motion.div>

      {/* meeting card */}
      <motion.div className="d2-meet" variants={card}>
        <Img src="/images/s2-meet.jpg" variants={imgReveal} />
        <motion.div className="d2-meet__glass" variants={slideLeft}>
          <motion.button className="d2-plus" variants={pop}><Plus size={14} /></motion.button>
          <h3>Let’s map out<br />your launch!</h3>
          <p>Bring your roadmap — we’ll shape it together in a free 30-minute strategy call.</p>
        </motion.div>
      </motion.div>

      {/* calendar */}
      <motion.div className="d2-cal" variants={card}>
        <motion.div className="d2-cal__top" variants={fadeUp}>
          <span>Choose a date<br />for the strategy call</span>
          <button className="d2-cal__arrow"><ArrowUpRight size={14} /></button>
        </motion.div>
        <motion.div className="d2-cal__date" variants={fadeUp}>March 12, 2026</motion.div>
        <motion.div className="d2-days" variants={fadeUp}>
          <Caret dir="left" size={7} />
          {DAYS.map(([d, n]) => (
            <div key={n} className={`d2-day ${n === 12 ? 'is-on' : ''}`}>
              <small>{d}</small>
              <b>{n}</b>
            </div>
          ))}
          <Caret size={7} />
        </motion.div>
        <motion.div className="d2-slots" variants={group}>
          <motion.div className="d2-slot is-gone" variants={fadeUp}>
            <span className="d2-slot__t">09:00</span>
            <span className="d2-slot__b"><i />09:00 - 10:00</span>
          </motion.div>
          <motion.div className="d2-slot is-on" variants={fadeUp}>
            <span className="d2-slot__t">10:00</span>
            <span className="d2-slot__b"><i><Check size={10} /></i>10:00 - 11:00</span>
          </motion.div>
          <motion.div className="d2-slot" variants={fadeUp}>
            <span className="d2-slot__t">11:00</span>
            <span className="d2-slot__b"><i />11:00 - 12:00</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* main visual */}
      <motion.div className="d2-main" variants={card}>
        <Img src="/images/style-2.jpg" variants={imgReveal} />

        <div className="d2-team">
          <motion.div className="d2-team__card" variants={fadeUp}>
            <span className="d2-tag">TEAM</span>
            <div className="d2-team__row">
              <b><Counter to={70} />+</b>
              <small>Our studio brings together 70+ engineers across 9 time zones</small>
            </div>
          </motion.div>
          <Corner r={22} at="100% 100%" style={{ top: 0, left: '100%' }} />
          <Corner r={22} at="100% 100%" style={{ top: '100%', left: 0 }} />
        </div>

        <motion.div className="d2-stat" variants={slideLeft}>
          <div className="d2-stat__top">
            <b><Counter to={312} />+</b>
            <span className="d2-stat__btn"><ArrowUpRight size={14} /></span>
          </div>
          <p>More than 312 founders launched faster with our sprint-based delivery</p>
          <div className="d2-stat__faces">
            {[4, 5, 6].map((n) => <img key={n} src={`/images/avatar-${n}.jpg`} alt="" />)}
          </div>
        </motion.div>

        <motion.div className="d2-tags" variants={group}>
          <motion.span variants={pop}>Web Apps</motion.span>
          <motion.span className="is-ghost" variants={pop}>SaaS</motion.span>
          <motion.span variants={pop}>AI Tools</motion.span>
          <motion.span variants={pop}>E-commerce</motion.span>
        </motion.div>

        <div className="d2-about">
          <motion.p variants={fadeIn}>
            Shishi studio is the guardian for <b>Product and Platform engineering.</b> We turn bold roadmaps into shipped software.
          </motion.p>
          <motion.div className="d2-scroll" variants={fadeUp}>
            <span>Scroll</span>
            <i><ArrowDown size={14} /></i>
          </motion.div>
          <Corner r={26} at="0% 0%" style={{ bottom: '100%', right: 0 }} />
          <Corner r={26} at="0% 0%" style={{ bottom: 0, right: '100%' }} />
        </div>
      </motion.div>
    </Frame>
  )
}

export const Wireframe2 = () => <Design2 wire />
