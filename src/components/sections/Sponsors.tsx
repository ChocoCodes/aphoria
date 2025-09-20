import sponsorBg from "../../assets/images/sponsors-bg.png";
import fourCircles from "../../assets/svg/four-circles.svg";
import leftBracket from "../../assets/svg/left-bracket.svg";
import rightBracket from "../../assets/svg/right-bracket.svg";

const Sponsors = () => {
    return (
        <section className="relative bg-black w-full min-h-screen h-screen flex items-center justify-center p-4">
            {/* Background image with reduced opacity */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${sponsorBg})` }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-around h-4/5 max-w-6xl mx-auto">
                {/* Header */}
                <div className="relative flex justify-center items-center overflow-visible">
                    <img
                        src={fourCircles}
                        alt="four circles decoration"
                        className="absolute inset-0 w-full h-full pointer-events-none sm:object-cover object-contain overflow-visible"
                    />
                    <h1 className="header-gradient text-header-fs-sm lg:text-header-fs font-roma px-4 sm:px-10 py-2 mt-4 sm:mt-8 text-center">
                        EVENT SPONSORS
                    </h1>
                </div>


                {/* List of sponsors */}
                <div className="flex items-center justify-between w-full md:w-[120%] flex-1 ">
                    <img
                        src={leftBracket}
                        alt="left bracket"
                        className="h-90 md:h-64 lg:h-90"
                    />
                    <h2 className="text-white text-3xl sm:text-4xl md:text-7xl lg:text-header-fs font-roma tracking-widest">
                        SPONSORS
                    </h2>
                    <img
                        src={rightBracket}
                        alt="right bracket"
                        className="h-90 md:h-64 lg:h-90"
                    />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
