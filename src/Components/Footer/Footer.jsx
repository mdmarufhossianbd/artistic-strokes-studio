
const Footer = () => {
    return (
        <div className="bg-base-200">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10 py-10 text-base-content max-w-7xl mx-auto px-10">
                <nav className="flex flex-col">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="footer-center p-4 bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500">
                <aside>
                    <p className="text-white">Copyright © 2024 - All right reserved by Artistic Strokes Studio.</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;