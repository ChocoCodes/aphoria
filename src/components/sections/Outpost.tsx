import sponsorBg from "../../assets/images/sponsors-bg.png";
import fourCircles from "../../assets/svg/four-circles.svg";
import Map from "../../assets/images/outline-map.png";
import { motion } from 'motion/react';

const Outpost = () => {
    return (
        <section className="relative bg-black w-full min-h-screen h-screen flex items-center justify-center p-4" id="outposts">
            {/* Background image with reduced opacity */}
            <img
                src={sponsorBg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />


            {/* Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center justify-around max-w-6xl mx-auto gap-5 md:gap-15"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {/* Header */}
                <div className="relative flex justify-center items-center overflow-visible">
                    <img
                        src={fourCircles}
                        alt="four circles decoration"
                        className="absolute inset-0 w-full h-full pointer-events-none sm:object-cover object-contain overflow-visible"
                    />
                    <h1 className="text-header-fs-sm lg:text-header-fs font-roma leading-none px-4 sm:px-10 py-2 mt-4 sm:mt-8 text-center">
                        <span className="inline-block header-gradient">OUTPOST</span>
                    </h1>
                </div>
                {/* Room Info Content */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-25 justify-center items-center">
                    <div className="relative">
                        <img src={ Map } alt="Outline Map"  className="rounded-full w-90 md:w-110 h-90 md:h-110 object-fit"/>
                        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transform">
                            <div className="absolute inset-0 rounded-full border-2 border-white animate-ping"></div>
                        </div>
                    </div>

                    <div className="flex flex-col text-white font-reddit gap-4 md:gap-8">
                        <a href='https://maps.app.goo.gl/E9tD7WT7A8N6po5W9' target='_blank' className="font-bold text-4xl md:text-5xl md:tracking-wide text-center">OUTPOST <span className="underline">MM23</span></a>
                        <div className="flex flex-col gap-1 md:gap-2">
                            <p className="font-semibold text-2xl md:text-3xl">SECTOR COORDINATES:</p>
                            <p className="text-md md:text-xl">LAT 10°40'42.0"N | LON 122°57'44.9"E</p>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-2">
                            <p className="font-semibold text-2xl md:text-3xl">MISSION WINDOW:</p>
                            <p className="font-semibold text-2xl md:text-3xl">Sept 22–26, 2025</p>
                            <p className="text-md md:text-xl"><span className="font-bold">10:00AM - 17:00PM</span>, Earth Standard Time</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Outpost;
