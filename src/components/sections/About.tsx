import aboutBg from '../../assets/images/about-bg.jpg';
import threeStars from '../../assets/svg/three-star-pattern.svg';
import astronaut from '../../assets/images/about-astronaut.png';

const About = () => {
    return (
        <section className="relative bg-black w-full min-h-screen flex items-center justify-center p-8">
            {/* Background image with reduced opacity */}
            <img
                src={aboutBg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />


            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center w-full max-w-8xl mx-auto">
                {/* Left content block */}
                <div className="lg:w-1/2 flex flex-col md:justify-evenly py-10 text-center md:text-left gap-6">
                    <h1 className="header-gradient text-header-fs-sm lg:text-header-fs font-roma mb-2">ABOUT APHORIA</h1>
                    <p className="text-about-content text-lg lg:text-[1.875rem] md:w-4/5 font-reddit">
                        An unidentified entity entered Earth’s orbit, and the research team sent to study said entity mysteriously went silent. 
                        A relief crew is dispatched to recover the station’s data and the valuable discovery left behind. 
                        But as they explore the deserted station, paranoia grows. 
                        Something unnatural may be among them, and time is running out.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <img src={threeStars} alt="Three Stars" />
                    </div>
                </div>

                {/* Astronaut image */}
                <aside className="flex items-center justify-center">
                    <img src={astronaut} alt="Astronaut" className="w-3/4 md:w-[400px] lg:w-[677px] max-w-[677px]"/>
                </aside>
            </div>
        </section>
    );
};

export default About;