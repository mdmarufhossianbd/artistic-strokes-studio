import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import artist3 from '../../assets/images/artist.jpeg';
import artist2 from '../../assets/images/artist.png';
import artist1 from '../../assets/images/artist.webp';

const OurArtist = () => {
    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <h2 className="font-semibold text-3xl text-center my-10">Our Artist</h2>
            <p className="text-center mb-10">Explore Our Artist Section to discover a vibrant array of captivating creations, each piece crafted with passion and creativity by talented artisans from around the world.</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-5">
                <div className="p-3 border rounded-lg hover:bg-[#f2f2f2]">
                    <img className="rounded-md w-full h-[250px]" src={artist1} alt="" />
                    <h3 className="pt-3 text-2xl font-medium">Kathleen Kemp</h3>
                    <p className="text-xl font-medium py-2">Senior Artist</p>
                    <div className="flex gap-3  text-xl">
                        <button><FaFacebook /></button>
                        <button><FaTwitter /></button>
                        <button><FaLinkedinIn /></button>
                    </div>
                </div>
                <div className="p-3 border rounded-lg hover:bg-[#f2f2f2]">
                    <img className="rounded-md w-full h-[250px]" src={artist2} alt="" />
                    <h3 className="pt-3 text-2xl font-medium">David Powell</h3>
                    <p className="text-xl font-medium py-2">Senior Artist</p>
                    <div className="flex gap-3  text-xl">
                        <button><FaFacebook /></button>
                        <button><FaTwitter /></button>
                        <button><FaLinkedinIn /></button>
                    </div>
                </div>
                <div className="p-3 border rounded-lg hover:bg-[#f2f2f2]">
                    <img className="rounded-md w-full h-[250px]" src={artist3} alt="" />
                    <h3 className="pt-3 text-2xl font-medium">Maxine Lewis</h3>
                    <p className="text-xl font-medium py-2">Senior Artist</p>
                    <div className="flex gap-3 text-xl">
                        <button><FaFacebook /></button>
                        <button><FaTwitter /></button>
                        <button><FaLinkedinIn /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurArtist;