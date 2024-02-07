import Image from "next/image";
import img1 from '../../../public/carousel/img1.jpg'
import img2 from '../../../public/carousel/img2.jpeg'
import img3 from '../../../public/carousel/img3.jpg'
import img4 from '../../../public/carousel/img5.jpg'
// import img5 from '../../../public/carousel/img6.png'

const Carousel = () => {
  return (
    <div className="carousel w-full  h-[70vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={img1} className='w-full'/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle text-blue-300 bg-blue-700 text-xl font-bold ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle text-blue-300 bg-blue-700 text-xl font-bold ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image src={img2} className='w-full'/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle text-blue-300 bg-blue-700 text-xl font-bold ">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle text-blue-300 bg-blue-700 text-xl font-bold ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image src={img3} className='w-full bg-cover'/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle text-blue-300 bg-blue-700 text-xl font-bold ">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle text-blue-300 bg-blue-700 text-xl font-bold ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image src={img4} className='w-full bg-cover'/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle text-blue-300 bg-blue-700 text-xl font-bold ">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle text-blue-300 bg-blue-700 text-xl font-bold ">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Carousel;
