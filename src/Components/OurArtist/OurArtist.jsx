import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const OurArtist = () => {
    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <h2 className="font-semibold text-3xl text-center my-10">Our Artist</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-5">
                <div className="p-3 border rounded-lg hover:bg-[#E7F4F2]">
                    <img className="rounded-md w-full h-[250px]" src="/src/assets/images/artist.webp" alt="" />
                    <h3 className="pt-3 text-2xl font-medium">Kathleen Kemp</h3>
                    <p className="text-xl font-medium py-2">Senior Artist</p>
                    <div className="flex gap-3  text-xl">
                        <button><FaFacebook /></button>
                        <button><FaTwitter /></button>
                        <button><FaLinkedinIn /></button>
                    </div>
                </div>
                <div className="p-3 border rounded-lg hover:bg-[#E7F4F2]">
                    <img className="rounded-md w-full h-[250px]" src="/src/assets/images/artist.png" alt="" />
                    <h3 className="pt-3 text-2xl font-medium">David Powell</h3>
                    <p className="text-xl font-medium py-2">Senior Artist</p>
                    <div className="flex gap-3  text-xl">
                        <button><FaFacebook /></button>
                        <button><FaTwitter /></button>
                        <button><FaLinkedinIn /></button>
                    </div>
                </div>
                <div className="p-3 border rounded-lg hover:bg-[#E7F4F2]">
                    <img className="rounded-md w-full h-[250px]" src="/src/assets/images/artist.jpeg" alt="" />
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