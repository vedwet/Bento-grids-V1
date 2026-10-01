import { motion } from 'framer-motion'
import { Frame, Corner, Words, Img } from '../components/primitives'
import { card, fadeUp, pop, imgReveal, group, fadeIn } from '../components/motion'
import { ArrowRight, Users, Spark, Calendar, Box, Social } from '../components/icons'
import './d3.css'

const LINKS = ['Templates', 'Solutions', 'Use cases', 'Articles', 'About us', 'Contact us']

export function Design3({ wire = false }) {
  return (
    <Frame className={wire ? 'd3 wf' : 'd3'}>
      {/* nav */}
      <motion.header className="d3-nav" variants={group}>
        <motion.div className="d3-logo" variants={pop}>
          <img src="/images/s3-small.jpg" alt="" />
        </motion.div>
        <motion.nav className="d3-links" variants={group}>
          {LINKS.map((l) => (
            <motion.a key={l} href="#" className={l === 'About us' ? 'is-on' : ''} variants={fadeUp}>{l}</motion.a>
          ))}
        </motion.nav>
        <motion.a href="#" className="d3-signup" variants={pop}>Sign up <ArrowRight size={15} /></motion.a>
      </motion.header>

      {/* headline */}
      <div className="d3-head">
        <h1>
          <span className="d3-line"><Words text="Prism lab: where generative" /></span>
          <span className="d3-line">
            <motion.span className="d3-inline-img" variants={pop}>
              <img src="/images/s3-left.jpg" alt="" />
            </motion.span>
            <Words text="design meets" />
            <motion.span className="d3-faces" variants={group}>
              <motion.img src="/images/avatar-5.jpg" alt="" variants={pop} />
              <motion.img src="/images/avatar-3.jpg" alt="" variants={pop} />
              <motion.span className="d3-spark" variants={pop}><Spark size={20} color="#1f2bd8" /></motion.span>
            </motion.span>
          </span>
          <span className="d3-line d3-line--last">
            <motion.small variants={fadeIn}>
              Discover how generative design adapts to any medium and opens up a whole new range of styles
            </motion.small>
            <Words text="spatial reality" />
          </span>
        </h1>
      </div>

      {/* left visual + cases */}
      <motion.div className="d3-left" variants={card}>
        <Img src="/images/s3-left.jpg" variants={imgReveal} />
        <div className="d3-quote">
          <motion.div className="d3-quote__card" variants={fadeUp}>
            Generative art is about the logic behind the form
            <span className="d3-dots"><i /><i /></span>
          </motion.div>
          <Corner r={22} at="0% 100%" style={{ top: 0, left: -22 }} />
          <Corner r={22} at="0% 100%" style={{ top: '100%', right: 0 }} />
        </div>
        <motion.div className="d3-cases" variants={fadeUp}>
          <h3>Stories worth reading</h3>
          {[
            ['Inside the noise field', '/images/style-3.jpg'],
            ['The rise of spatial canvases', '/images/s3-small.jpg'],
          ].map(([t, src]) => (
            <a key={t} href="#" className="d3-case">
              <img src={src} alt="" />
              <span>{t}</span>
              <ArrowRight size={15} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* middle card */}
      <motion.div className="d3-mid" variants={card}>
        <div className="d3-mid__top">
          <motion.b variants={fadeUp}>01</motion.b>
          <motion.div className="d3-mid__btns" variants={group}>
            <motion.span variants={pop}><Users size={14} /></motion.span>
            <motion.span className="is-dark" variants={pop}><ArrowRight size={15} /></motion.span>
          </motion.div>
        </div>
        <motion.div variants={fadeUp}>
          <small>Guides and toolkits</small>
          <h3>Shader basics</h3>
        </motion.div>
      </motion.div>

      {/* tall visual */}
      <motion.div className="d3-tall" variants={card}>
        <Img src="/images/style-3.jpg" variants={imgReveal} />
        <div className="d3-tall__shade" />
        <motion.div className="d3-tall__body" variants={fadeUp}>
          <h3>Join the collective</h3>
          <p>Connect with 40k generative artists worldwide!</p>
          <div className="d3-tall__row">
            <div className="d3-socials">
              <span><Social.X /></span>
              <span><Social.Discord /></span>
              <span><Social.Insta /></span>
            </div>
            <a href="#" className="d3-ring"><ArrowRight size={16} /></a>
          </div>
        </motion.div>
      </motion.div>

      {/* meet card */}
      <motion.div className="d3-meet" variants={card}>
        <Img src="/images/s3-left.jpg" className="d3-meet__img" variants={fadeIn} />
        <motion.div className="d3-meet__top" variants={fadeUp}>
          <div className="d3-meet__tags">
            <span>#Showcase</span>
            <span>#This week</span>
          </div>
          <motion.span className="d3-toggle" variants={pop}><i /></motion.span>
        </motion.div>
        <motion.h3 variants={fadeUp}>Meet our creators</motion.h3>
      </motion.div>

      {/* events */}
      <motion.div className="d3-ev" variants={card}>
        {[
          [Calendar, 'Live sessions', 'Weekly streams with resident artists'],
          [Box, 'Our library', 'Browse thousands of open presets'],
        ].map(([Icon, t, d]) => (
          <motion.a key={t} href="#" className="d3-ev__item" variants={fadeUp}>
            <span className="d3-ev__icon"><Icon /></span>
            <span>
              <b>{t} <Spark size={14} color="#1f2bd8" /></b>
              <small>{d}</small>
            </span>
          </motion.a>
        ))}
      </motion.div>
    </Frame>
  )
}

export const Wireframe3 = () => <Design3 wire />
