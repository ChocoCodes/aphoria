import heroWave from '../../assets/images/hero-wave.png';
import gdgLogo from '../../assets/images/gdg-logo.png';
import ring from '../../assets/images/ring.png';
import astronaut from '../../assets/images/hero-astronaut.png';
import satellite from '../../assets/images/hero-satellite.png';
import stars from '../../assets/images/stars.png';
import Button from "../Button.tsx";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-black">
            {/* Background image */}
            <img src={heroWave} className="absolute inset-0 h-full w-full object-cover" alt="hero background" />
            {/* Stars */}
            <img src={stars} className="absolute inset-0 h-full object-cover" alt="star background" />

            <div className="w-11/12 max-w-8xl min-h-screen flex flex-col justify-start items-center mx-auto pt-4 md:pt-16">
                <div className="w-full">
                    <img src={gdgLogo} className="w-16" alt="gdg logo"/>
                </div>
                <div className="w-full flex-grow flex flex-col justify-center lg:justify-evenly items-center gap-20 z-10">
                    {/* Hero text */}
                    <div className="relative w-fit flex justify-center items-center">
                        <img src={satellite} className="absolute bottom-[100px] right-[100px] sm:bottom-[250px] sm:right-[300px] lg:bottom-[200px] lg:right-[500px] w-48 sm:w-64" alt="satellite" />
                        <h1 className="text-[3rem] sm:text-[6rem] lg:text-[8rem] font-bold font-roma header-gradient z-20">APHORIA</h1>
                        <hr className="absolute bottom-[15px] sm:bottom-[35px] w-[250px] sm:w-[500px] lg:w-[650px] border-white"></hr>
                        <img src={ring} className="absolute w-full md:w-5/6" alt="ring" />
                        <img src={astronaut} className="absolute w-36 sm:w-64 md:w-72 bottom-[10px] left-[150px] sm:bottom-[30px] sm:left-[300px] lg:bottom-[60px] lg:left-[420px]" alt="astronaut"/>
                    </div>
                    {/* Button container */}
                    <div className="w-full lg:w-2/3 max-w-3xl flex justify-center lg:justify-between items-center gap-4">
                        <Button href="#about">
                            ABOUT
                        </Button>
                        <Button href="#contact">
                            CONTACT
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;