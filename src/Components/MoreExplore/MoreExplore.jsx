const MoreExplore = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mx-5">
                <h2 className="text-3xl font-medium">More to Explore</h2>
                <p className='underline'>View All</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 m-5">
                <div>
                    <img className="w-full h-[250px] object-cover rounded-md" src="/src/assets/images/blog (1).jpg" alt="" />
                    <h2 className="text-2xl my-2 bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 hover:text-white px-3 py-2 rounded-md">How to Buy Art You Love</h2>
                </div>
                <div>
                    <img className="w-full h-[250px] object-cover rounded-md" src="/src/assets/images/blog (2).jpg" alt="" />
                    <h2 className="text-2xl my-2 bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 hover:text-white px-3 py-2 rounded-md">Collector Stories</h2>
                </div>
                <div>
                    <img className="w-full h-[250px] object-cover rounded-md" src="/src/assets/images/blog (3).jpg" alt="" />
                    <h2 className="text-2xl my-2 bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 hover:text-white px-3 py-2 rounded-md">Art for Your Style</h2>
                </div>
            </div>
        </div>
    );
};

export default MoreExplore;