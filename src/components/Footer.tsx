import footerLogo from "../assets/images/footer-logo.png"
import footerRadar from "../assets/svg/footer-radar.svg"
import footerBtnBg from "../assets/images/footer-btn-bg.png"
import footerBg from "../assets/images/footer-bg.png"
import footerInfo from "../assets/images/footer-info.png"
import footerContact from "../assets/images/footer-contact.png"

const Footer = () => {
    return (
        <footer className="w-full bg-black relative" id="contact">

            {/* Background image with reduced opacity */}
            <img
                src={footerBg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-75"
            />


            <div className="container w-9/10 mx-auto pt-[1em] pb-[3em] px-4 z-10 relative md:flex justify-between">

                <div className="first-group">
                    <img src={footerLogo} alt="" />
                    
                    <a href="https://m.me/dsc.usls" target="blank" className="font-roma inline-block relative transition-transform duration-500 hover:scale-110">
                        <div className="relative w-[200px] flex items-center justify-center px-[1em] py-[0.5em] rounded-full overflow-hidden">
                            {/* background image */}
                            <img
                            src={footerBtnBg}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            />

                            {/* content above */}
                            <div className="relative z-10 flex items-center">
                            <img src={footerRadar} alt="" />
                            <h3 className="text-white mb-[-5px] ml-[0.75em]">Ask a Question</h3>
                            </div>
                        </div>
                    </a>

                </div>

                <div className="second-group flex items-start justify-between mt-[2em] md:mt-[0] gap-15">
                    <div className="">
                        <img src={footerInfo} alt="info-text" />
                        <ul className="font-inter font-semibold mt-2">
                            <li><a href="#about" className="text-white/90 text-[1.25em]">About</a></li>
                            <li><a href="#tickets" className="text-white/90 text-[1.25em]">Tickets</a></li>
                            <li><a href="#sponsors" className="text-white/90 text-[1.25em]">Sponsors</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src={footerContact} alt="info-text" />
                        <ul className="md:text-right font-inter font-semibold mt-2">
                            <li><a href="https://www.facebook.com/dsc.usls/" className="text-white/90 text-[1.25em]" target="blank">Facebook</a></li>
                            <li><a href="https://www.instagram.com/gdg.usls/" className="text-white/90 text-[1.25em]" target="blank">Instagram</a></li>
                            <li><a href="mailto:gdg@usls.edu.ph" className="text-white/90 text-[1.25em]" target="blank">Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;