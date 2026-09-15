import Bannerimg from './assets/vector2.png'
import Backgroundimg from './assets/vector1.png'
interface BannerProps{
    progress:number,
    resolved:number,
}
const Banner = ({progress, resolved}:BannerProps) => { 
    
    return (
        <div className='flex justify-between items-center mt-20  w-360 mx-auto banner-container'>
            <div className='relative banner-1'>
                <img className="absolute w-400px" src={Backgroundimg} alt="" />
                <img className=' w-177 h-62.5 bg-linear-to-r from-[#632EE3] via-[#7B43EA] to-[#9F62F2] text-white>' src={Bannerimg} alt="" />
                <img className=" absolute bottom-0 right-0 scale-x-[-1] w-400px" src={Backgroundimg} alt="" />
                <h1 className='div-1 absolute bottom-38 left-74 text-[1.5rem] font-medium text-white'>In - Progress</h1>
                <h3 className='div-2 absolute bottom-20 left-82 text-[4rem] font-bold text-white'>{progress}</h3>

            </div>
            <div className='relative banner-2'>
                <img className="absolute bottom-0 w-400px" src={Backgroundimg} alt="" />
                <img className=' w-177 h-62.5  bg-linear-to-r from-[#54CF68] via-[#00827A] to-[#00827A]' src={Bannerimg} alt="" />
                <img className="absolute bottom-0 right-0 scale-x-[-1] w-400px" src={Backgroundimg} alt="" />
                <h1 className='absolute bottom-38 left-74 text-[1.5rem] font-medium text-white div-3'>Resolved</h1>
                <h3 className='absolute bottom-20 left-82 text-[4rem] font-bold text-white div-4'>{resolved}</h3>
            </div>
        </div>
    );
};

export default Banner;