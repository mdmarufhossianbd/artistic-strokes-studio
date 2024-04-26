
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {





    return (
        <div className='max-w-7xl mx-auto py-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}

                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper" new
            >
                <SwiperSlide>
                    <img className='rounded' src="/src/assets/images/painting.png
                    " alt="" />
                    <div className='absolute left-[20%] bottom-[40%] border-3 flex flex-col gap-5'>
                        <span className='font-semibold text-3xl'> Welcome to Artistic Strokes Studio <br />
                            <span className='text-5xl'>
                                <Typewriter
                                    cursor      
                                    cursorBlinking
                                    cursorColor="#e649a0"
                                    delaySpeed={1000}
                                    deleteSpeed={25}
                                    loop={0}
                                    typeSpeed={75}
                                    words={[
                                        ' Where Art Comes Alive!',           
                                        ' From Canvas to Reality',           
                                    ]}
                                />
                            </span>
                        </span>
                        <Link to={'/'}>
                            <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-10 rounded text-white font-semibold hover:bg-pink-500'>Explore</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded' src="/src/assets/images/painting 3.png
                    " alt="" />
                    <div className='absolute left-[20%] bottom-[40%] border-3 flex flex-col gap-5'>
                        <span className='font-semibold text-3xl'> Welcome to Artistic Strokes Studio <br />
                            <span className='text-5xl'>
                                <Typewriter
                                    cursor      
                                    cursorBlinking
                                    cursorColor="#e649a0"
                                    delaySpeed={1000}
                                    deleteSpeed={25}
                                    loop={0}
                                    typeSpeed={75}
                                    words={[
                                        ' Where Art Comes Alive!',           
                                        ' From Canvas to Reality',           
                                    ]}
                                />
                            </span>
                        </span>
                        <Link to={'/'}>
                            <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-10 rounded text-white font-semibold hover:bg-pink-500'>Explore</button></Link>
                    </div>
                </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded' src="/src/assets/images/painting 4.png
                        " alt="" />
                        <div className='absolute left-[20%] bottom-[40%] border-3 flex flex-col gap-5'>
                            <span className='font-semibold text-3xl'> Welcome to Artistic Strokes Studio <br />
                                <span className='text-5xl'>
                                    <Typewriter
                                        cursor      
                                        cursorBlinking
                                        cursorColor="#e649a0"
                                        delaySpeed={1000}
                                        deleteSpeed={25}
                                        loop={0}
                                        typeSpeed={75}
                                        words={[
                                            ' Where Art Comes Alive!',           
                                            ' From Canvas to Reality',           
                                        ]}
                                    />
                                </span>
                            </span>
                            <Link to={'/'}>
                                <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-10 rounded text-white font-semibold hover:bg-pink-500'>Explore</button></Link>
                        </div>
                    </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;