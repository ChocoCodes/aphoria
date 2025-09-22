import decodeBg from '../../assets/images/decode.jpg'
import hints from '../../assets/images/hints.png'

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
            <div className="flex flex-col items-center justify-center gap-20">
                <img src={ hints } alt="Hint Table" className='w-1/2 h-1/2'/>
                <div className="z-10 flex flex-col gap-5 text-white font-reddit w-1/2 mx-auto">
                    <p className='text-xl'>Not everything in this website is as it seems.</p>
                    <p className='bg-black/70 border-2 border-white/15 text-3xl p-5 rounded-xl text-center'>{ str }</p>
                    <p className='text-xl'>The first to comment the decoded message on the website to our <span className='font-bold underline'> 2025 official website posting reveal</span> post will win a <span className="font-bold">free ticket</span> inside our booth.</p>
                </div>
            </div>
        </section>
    )
}

export { Decode }