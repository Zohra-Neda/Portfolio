import { motion } from 'framer-motion';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff] bg' />
          <div className='w-1 sm:h-80 h-40 violet-gradient bg'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span>Zohra</span></h1>
          <h2 className={`${styles.heroSubText} mt-2 text-white-100 capitalize text-3xl font-extrabold`}>Front-End Developer</h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100 capitalize`}>
            turning ideas into interactive reality
          </p>
        </div>
      </div>

      <div className='absolute bottom-40 lg:bottom-28 sm:mt-26 lg:mb-5 w-full flex justify-center items-center'>
        <button className='btn btn-download'>
          <a target="_blank" rel="noopener noreferrer" href="http://localhost:5173/images/Zohra_Neda_Resume.pdf" type="button">Get My Resume</a>
        </button>
      </div>

      
      <div className='absolute xs:bottom-12 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
