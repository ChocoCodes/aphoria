import decodeBg from '../../assets/images/decode.jpg';
import hints from '../../assets/images/hints.png';
import { motion} from 'motion/react';

const Decode = () => {
    const str = "“= ^#6{> =, ,=> {6= ;>67 $,) ^{7>6+. "
    return (
        <section className="relative bg-black w-full min-h-screen flex items-center justify-center p-8" id="about">
            {/* Background image with reduced opacity */}
            <img
                src={ decodeBg }
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <motion.div
                className="flex flex-col items-center justify-center gap-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <img src={ hints } alt="Hint Table" className='w-full md:w-1/2 h-1/2'/>
                <div className="z-10 flex flex-col gap-5 text-white font-reddit w-full mx-auto px-4 md:px-8">
                    <p className='text-lg md:text-xl'>Not everything in this website is as it seems.</p>
                    <p className='bg-black/70 border-2 border-white/15 text-3xl p-5 rounded-xl text-center'>{ str }</p>
                    <p className='text-lg md:text-xl'>The <span className="font-bold underline">first three (3)</span> to comment the decoded message on the website to our <span className='font-bold underline'><a href="https://www.facebook.com/photo/?fbid=1112482047761640&set=a.384589173884268" target='_blank'>2025 official website posting reveal</a></span> post will win a <span className="font-bold">free ticket</span> inside our booth.</p>
                </div>
            </motion.div>
        </section>
    )
}

export { Decode }