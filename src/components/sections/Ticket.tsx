import leftBracket from "../../assets/svg/left-bracket-sm.svg" ;
import rightBracket from "../../assets/svg/right-bracket-sm.svg" ;
import ticketBg from "../../assets/images/ticket-bg.png" ;
import ticketFree from "../../assets/images/ticket-free.png" ;
import ticketVip from "../../assets/images/ticket-vip.png" ;
import { motion } from 'motion/react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1.5,
            staggerChildren: 0.5, // delay between tickets
        },
    },
};

const ticket = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
    },
};


const Ticket = () => {
    return (
        <section className=" relative w-full min-h-screen bg-black py-[10em]" id="tickets">

            {/* Background image with reduced opacity */}
            <img
                src={ticketBg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />


            <motion.div
                className="container w-4/5 mx-auto relative z-10"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
            >
                <h1 className={"header-gradient text-[3em] sm:text-[3.5em] md:text-[4em] lg:text-[6em] font-roma text-center"}>TICKETS</h1>

                <div className="ticket-container md:flex justify-around items-start mt-[4em]">

                    <motion.div
                        className="ticket flex flex-col justify-center items-center w-auto my-[4em]"
                        variants={ticket}
                    >
                        <div className="ticket-wrapper flex items-center justify-between md:justify-around">
                            <img src={leftBracket} alt="" className="w-[5%] md:w-[5%]"/>
                            <img src={ticketFree} alt="" className="max-w-[350px] md:max-w-[700px] w-[90%] md:w-4/5" />
                            <img src={rightBracket} alt="" className="w-[5%] md:w-[5%]"/>
                        </div>
                        <h4 className="font-roma header-gradient text-[2em] md:text-[3em] mt-[1em]">Regular</h4>
                        <h3 className="font-reddit font-semibold text-white text-2xl md:text-4xl mt-[0.5em]">Perks</h3>
                        <ul className="font-reddit text-white text-left text-xl mt-2">
                            <li>Standard Queue</li>
                            <li>Full Booth Access</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="ticket flex flex-col justify-center items-center w-auto my-[4em]"
                        variants={ticket}
                    >
                         <div className="ticket-wrapper flex items-center justify-between md:justify-around">
                            <img src={leftBracket} alt="" className="w-[5%] md:w-[5%]"/>
                            <img src={ticketVip} alt="" className="max-w-[350px] md:max-w-[700px] w-[90%] md:w-4/5" />
                            <img src={rightBracket} alt="" className="w-[5%] md:w-[5%]"/>
                        </div>
                        <h4 className="font-roma header-gradient text-[2em] md:text-[3em] mt-[1em]">VIP</h4>
                        <h3 className="font-reddit font-semibold text-white text-2xl md:text-4xl mt-[0.5em]">Perks</h3>
                        <ul className="font-reddit text-white text-left text-xl mt-2">
                            <li>Skip the Wait</li>
                            <li>Anytime Access</li>
                            <li>Exclusive Freebies (while supplies last!)</li>
                            <li>Same Premium Experience</li>
                        </ul>
                    </motion.div>

                </div>

            </motion.div>
        </section>
    );
};

export default Ticket;