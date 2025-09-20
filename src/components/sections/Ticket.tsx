import leftBracket from "../../assets/svg/left-bracket-sm.svg" ;
import rightBracket from "../../assets/svg/right-bracket-sm.svg" ;

const Ticket = () => {
    return (
        <section className="w-full min-h-screen bg-black py-[10em]">
            <div className="container w-4/5 mx-auto">
                <h1 className={"header-gradient text-[3em] md:text-[6em] font-roma text-center"}>EVENT TICKETS</h1>

                <div className="ticket-container md:flex justify-around items-center mt-[4em]">
                    <div className="ticket flex flex-col justify-center items-center w-auto">
                        <div className="ticket-wrapper flex items-center">
                            <img src={leftBracket} alt="" />
                            <img src="" alt="" className="w-[400px] h-[200px]" />
                            <img src={rightBracket} alt="" />
                        </div>
                        <h4 className="font-roma text-gray-300 text-[2em] mt-[1em]">Regular</h4>
                        <h3 className="font-roma text-white text-[4em] mt-[1em]">Perks</h3>
                    </div>

                    <div className="ticket flex flex-col justify-center items-center w-auto">
                         <div className="ticket-wrapper flex items-center">
                            <img src={leftBracket} alt="" />
                            <img src="" alt="" className="w-[400px] h-[200px]" />
                            <img src={rightBracket} alt="" />
                        </div>
                        <h4 className="font-roma text-gray-300 text-[2em] mt-[1em]">Premium</h4>
                        <h3 className="font-roma text-white text-[4em] mt-[1em]">Perks</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ticket;