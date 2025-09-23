import heroWave from '../../assets/images/hero-wave.png';
import gdgLogo from '../../assets/images/gdg-logo.png';
import ring from '../../assets/images/ring.png';
import astronaut from '../../assets/images/hero-astronaut.png';
import satellite from '../../assets/images/hero-satellite.png';
import stars from '../../assets/images/stars.png';
import Button from "../Button.tsx";
import { motion } from 'motion/react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4, // delay between children
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    },
};

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-black" id="hero">
            {/* Background image */}
            <motion.img
                src={ heroWave }
                alt="hero background"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            {/* Stars */}
            <motion.img
                src={ stars }
                className="absolute inset-0 h-full object-cover"
                alt="star background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
            />

            <div className="w-11/12 max-w-8xl min-h-screen flex flex-col justify-start items-center mx-auto pt-4 md:pt-16">
                <div className="w-full">
                    <img src={gdgLogo} className="w-16" alt="gdg logo"/>
                </div>
                <motion.div
                    className="w-full flex-grow flex flex-col justify-center lg:justify-evenly items-center gap-20 z-10"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Hero text */}
                    <motion.div
                        className="relative w-fit flex justify-center items-center"
                        variants={ item }
                    >
                        <img src={satellite} className="absolute bottom-[100px] right-[100px] sm:bottom-[250px] sm:right-[300px] lg:bottom-[200px] lg:right-[500px] w-48 sm:w-64 orbit" alt="satellite" />
                        <h1 className="text-[3rem] sm:text-[6rem] lg:text-[9rem] font-bold font-roma header-gradient z-20">APHORIA</h1>
                        <hr className="absolute bottom-[15px] sm:bottom-[35px] w-[250px] sm:w-[500px] lg:w-[650px] border-white"></hr>
                        <img src={ring} className="absolute w-full md:w-5/6" alt="ring" />
                        <img src={astronaut} className="absolute w-36 sm:w-64 md:w-72 bottom-[10px] left-[150px] sm:bottom-[30px] sm:left-[300px] lg:bottom-[80px] lg:left-[480px] hero-float" alt="astronaut"/>
                    </motion.div>
                    {/* Button container */}
                    <motion.div
                        className="w-full lg:w-2/3 max-w-3xl flex justify-center items-center gap-4 lg:gap-32"
                        variants={ item }
                    >
                        <Button href="#about">
                            ABOUT
                        </Button>
                        <Button href="#contact">
                            CONTACT
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;