import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-base-200">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10 py-10 text-base-content max-w-7xl mx-auto px-10">
                <nav className="flex flex-col">
                    <Link to={'/'}><h2 className="text-3xl font-medium pb-5">Artistic Strokes Studio</h2></Link>
                    <p>Artistic Strokes Studio offers a unique blend of creativity and expertise, providing unparalleled arts and drawing services to bring your visions to life.</p>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Important Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <Link to={'/painting-and-drawing'}><button className="hover:underline">Arts & Crafts</button></Link>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Contacts</h6>
                    <p className="font-medium py-1">Office Address</p>
                    <p>2799 Stone Lane <br />
                        Plymouth Meeting, PA 19462</p>
                    <p className="font-medium py-1">Social Link</p>
                    <div className="text-xl flex gap-5">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
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