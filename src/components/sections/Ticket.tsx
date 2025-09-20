import leftBracket from "../../assets/svg/left-bracket-sm.svg" ;
import rightBracket from "../../assets/svg/right-bracket-sm.svg" ;
import ticketBg from "../../assets/images/ticket-bg.png" ;

const Ticket = () => {
    return (
        <section className=" relative w-full min-h-screen bg-black py-[10em]">

            {/* Background image with reduced opacity */}
            <img
                src={ticketBg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />


            <div className="container w-4/5 mx-auto relative z-10">
                <h1 className={"header-gradient text-[3.5em] md:text-[6em] font-roma text-center"}>EVENT TICKETS</h1>

                <div className="ticket-container md:flex justify-around items-center mt-[4em]">

                    <div className="ticket flex flex-col justify-center items-center w-auto my-[4em]">
                        <div className="ticket-wrapper flex items-center">
                            <img src={leftBracket} alt="" />
                            <img src="" alt="" className="w-[400px] h-[200px]" />
                            <img src={rightBracket} alt="" />
                        </div>
                        <h4 className="font-roma header-gradient text-[2em] mt-[1em]">Regular</h4>
                        <h3 className="font-roma text-white text-[2em] md:text-[4em] mt-[1em]">Perks</h3>
                    </div>

                    <div className="ticket flex flex-col justify-center items-center w-auto my-[4em]">
                         <div className="ticket-wrapper flex items-center">
                            <img src={leftBracket} alt="" />
                            <img src="" alt="" className="w-[400px] h-[200px]" />
                            <img src={rightBracket} alt="" />
                        </div>
                        <h4 className="font-roma header-gradient text-[2em] mt-[1em]">Premium</h4>
                        <h3 className="font-roma text-white text-[2em] md:text-[4em] mt-[1em]">Perks</h3>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Ticket;