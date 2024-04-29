import blog1 from '../../assets/images/blog (1).jpg';
import blog2 from '../../assets/images/blog (2).jpg';
import blog3 from '../../assets/images/blog (3).jpg';

const MoreExplore = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mx-5">
                <h2 className="text-3xl font-medium">More to Explore</h2>
                <p className='underline'>View All</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 m-5">
                <div className="bg-[#f2f2f2] p-2 rounded hover:cursor-pointer">
                    <img className="w-full h-[250px] object-cover rounded-md" src={blog1} alt="" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl my-2 py-2 rounded-md">How to Buy Art You Love</h2>
                        <p>Read more </p>
                    </div>
                </div>
                <div className="bg-[#f2f2f2] p-2 rounded hover:cursor-pointer">
                    <img className="w-full h-[250px] object-cover rounded-md" src={blog2} alt="" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl my-2 py-2 rounded-md">Collector Stories</h2>
                        <p>Read more </p>
                    </div>
                </div>
                <div className="bg-[#f2f2f2] p-2 rounded hover:cursor-pointer">
                    <img className="w-full h-[250px] object-cover rounded-md" src={blog3} alt="" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl my-2 py-2 rounded-md">Art for Your Style</h2>
                        <p>Read more </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreExplore;