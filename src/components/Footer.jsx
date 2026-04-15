import { NavLink } from "react-router-dom";

function Footer({ className = "" }) {
    return (
        <footer className={`mt-auto w-full rounded-t-[3rem] bg-neutral/20 px-8 md:px-12 py-16 ${className}`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 max-w-7xl mx-auto">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="text-lg font-semibold text-secondary">Munamii Cakery</div>
                    <p className="font-body text-sm text-primary text-center md:text-left opacity-80">© 2024 Munamii Cakery. Handcrafted with love.</p>
                </div>
                <div className="flex gap-8">
                    <a className="text-secondary hover:opacity-70 transition-opacity font-body text-sm" href="#">Instagram</a>
                    <a className="text-secondary hover:opacity-70 transition-opacity font-body text-sm" href="#">Facebook</a>
                    <a className="text-secondary hover:opacity-70 transition-opacity font-body text-sm" href="#">Contact Us</a>
                </div>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-neutral flex items-center justify-center text-primary cursor-pointer hover:scale-95 transition-transform">
                        <span className="material-icons text-sm">location_on</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neutral flex items-center justify-center text-primary cursor-pointer hover:scale-95 transition-transform">
                        <span className="material-icons text-sm">mail</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;