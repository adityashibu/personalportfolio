import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { developer } from '../assets';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: developer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center pt-[0px] md:pt-0 md:mt-[50px] mt-[50px]">
      {/* This section will now show on all screen sizes */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ffffff]" />
          <div className="w-1 sm:h-80 h-40 white-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="opacity-60">Hi, I am</span> <span className='text-[#ffffff]'>Aditya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop python programs for automation <br className='sm:block hidden' />
            and research on AI and ML projects to work on.
          </p>
        </div>
      </div>

      {/* Display Lottie animation */}
      <motion.div
        variants={fadeIn('up', 'spring', 0.5)}
        initial="hidden"
        animate="show"
        className="relative flex-shrink-0 md:opacity-100 z-10 mb-[50px] md:mt-[400px]"
      >
        <div className="lottie-container md:w-[600px] md:h-[600px] w-[350px] h-[350px] pointer-events-none">
          <Lottie
            options={defaultOptions}
            width="100%"
            height="100%"
          />
        </div>
      </motion.div>

      {/* Display this part only on small screens */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center md:hidden">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white opacity-50 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-4 h-4 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
