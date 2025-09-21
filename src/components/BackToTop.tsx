import { FaAngleDoubleUp } from 'react-icons/fa'

const BackToTop = () => {
    return (
        <a href="#hero" className='w-12 h-12 bg-black border-2 border-white rounded-full fixed bottom-5 right-5 flex justify-center items-center'> <FaAngleDoubleUp className='text-white text-2xl text-center'/> </a>
    )
}

export { BackToTop };