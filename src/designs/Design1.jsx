import { motion } from 'framer-motion'
import { Frame, Corner, Words, Img, Counter } from '../components/primitives'
import { card, fadeUp, pop, imgReveal, group, slideLeft } from '../components/motion'
import { ArrowUpRight, User, Gift, Logo } from '../components/icons'
import './d1.css'

const NAV = ['About', 'Plans', 'Security', 'Login']

export function Design1({ wire = false }) {
  return (
    <Frame className={wire ? 'd1 wf' : 'd1'}>
      {/* Hero image card */}
      <motion.div className="d1-hero" variants={card}>
        <Img src="/images/style-1.jpg" variants={imgReveal} />
        <div className="d1-hero__tint" />

        <motion.div className="d1-logo" variants={pop}>
          <Logo.Kobalt />
        </motion.div>

        <motion.nav className="d1-nav" variants={group}>
          {NAV.map((n) => (
            <motion.a key={n} href="#" variants={fadeUp}>{n}</motion.a>
          ))}
          <motion.a href="#" className="d1-nav__go" variants={pop}><ArrowUpRight size={11} /></motion.a>
          <Corner r={20} at="0% 100%" style={{ top: 0, left: -20 }} />
          <Corner r={20} at="0% 100%" style={{ top: '100%', right: 0 }} />
        </motion.nav>

        <div className="d1-title">
          <motion.div className="d1-title__pill" variants={fadeUp}>
            <span className="d1-pill"><User size={13} /> Your armored data vault</span>
            <Corner r={24} at="100% 0%" style={{ top: -24, left: 0 }} />
            <Corner r={24} at="100% 0%" style={{ bottom: 0, left: '100%' }} />
          </motion.div>
          <div className="d1-title__main">
            <h1>
              <Words text="Data" />
              <br />
              <Words text="Vault" />
            </h1>
            <Corner r={28} at="100% 0%" style={{ bottom: 0, left: '100%' }} />
          </div>
        </div>
      </motion.div>

      {/* Offer card */}
      <motion.div className="d1-offer" variants={card}>
        <div className="d1-offer__top">
          <motion.span className="d1-chip" variants={fadeUp}><Gift size={13} /> Free trial</motion.span>
          <motion.div className="d1-clients" variants={group}>
            <div className="d1-avatars">
              {[1, 2, 3].map((i) => (
                <motion.img key={i} src={`/images/avatar-${i}.jpg`} alt="" variants={pop} />
              ))}
            </div>
            <motion.small variants={fadeUp}><i /> 22k teams protected</motion.small>
          </motion.div>
        </div>
        <motion.div className="d1-offer__big" variants={fadeUp}>
          +<Counter to={2} />TB
        </motion.div>
        <div className="d1-offer__notch">
          <motion.a href="#" className="d1-roundbtn" variants={pop}><ArrowUpRight size={18} /></motion.a>
          <Corner r={22} at="0% 0%" style={{ bottom: '100%', right: 0 }} />
          <Corner r={22} at="0% 0%" style={{ bottom: 0, right: '100%' }} />
        </div>
      </motion.div>

      {/* Side image + info */}
      <motion.div className="d1-side" variants={card}>
        <Img src="/images/s1-side.jpg" variants={imgReveal} />
        <motion.div className="d1-info" variants={slideLeft}>
          <span className="d1-info__plus">+</span>
          <p>
            Armor-grade encryption for every file you own. Sync, share and roll back any version in seconds,
            and reach your vault from any device — wherever the battle takes you.
          </p>
        </motion.div>
      </motion.div>
    </Frame>
  )
}

export const Wireframe1 = () => <Design1 wire />
