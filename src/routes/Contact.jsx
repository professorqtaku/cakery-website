import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <div className="bg-[var(--neutral)] text-[var(--on-surface)]">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
                <ContactHero />

                {/* Info Grid: Delivery, Pickup, Hours */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {/* Delivery Area Card */}
                    <div className="bg-[var(--surface-container-low)] p-10 rounded-2xl flex flex-col justify-between min-h-[320px]">
                        <div>
                            <span className="material-icons text-[var(--primary)] text-4xl mb-6">local_shipping</span>
                            <h3 className="font-headline text-2xl font-bold text-[var(--primary)] mb-4">Home Delivery</h3>
                            <p className="text-[var(--on-surface-variant)] leading-relaxed">
                                We offer premium doorstep delivery across <strong>Stockholm</strong> and <strong>Malmö</strong>. Freshly baked, safely transported.
                            </p>
                        </div>
                        <div className="mt-8">
                            <span className="text-[10px] uppercase tracking-widest text-[var(--on-secondary-fixed-variant)] font-bold block">Service Area</span>
                            <p className="font-bold text-[var(--primary)]">Sweden Region South & Center</p>
                        </div>
                    </div>

                    {/* Studio Pickup Card */}
                    <div className="bg-[var(--surface-container-lowest)] p-10 rounded-2xl patisserie-shadow flex flex-col justify-between min-h-[320px] border border-[var(--outline)]/15">
                        <div>
                            <span className="material-icons text-[var(--primary)] text-4xl mb-6">storefront</span>
                            <h3 className="font-headline text-2xl font-bold text-[var(--primary)] mb-4">Studio Pickup</h3>
                            <p className="text-[var(--on-surface-variant)] leading-relaxed">
                                Prefer to collect your treats? Visit our artisanal studio for a personal pickup.
                            </p>
                            <p className="mt-4 font-bold text-[var(--primary)] italic">Via la Costa Avenue</p>
                        </div>
                        <div className="mt-8">
                            <a
                                href="#"
                                className="text-[var(--primary)] font-bold inline-flex items-center gap-2 group hover:gap-3 transition-all"
                            >
                                Get Directions
                                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Operating Hours Card */}
                    <div className="bg-[var(--secondary-container)] p-10 rounded-2xl flex flex-col justify-between min-h-[320px]">
                        <div>
                            <span className="material-icons text-[var(--on-secondary-container)] text-4xl mb-6">schedule</span>
                            <h3 className="font-headline text-2xl font-bold text-[var(--on-secondary-container)] mb-4">Baking Hours</h3>
                            <ul className="space-y-3 text-[var(--on-secondary-container)]">
                                <li className="flex justify-between border-b border-[var(--on-secondary-container)]/10 pb-1">
                                    <span>Tuesday - Saturday</span>
                                    <span className="font-bold">9am - 2pm</span>
                                </li>
                                <li className="flex justify-between border-b border-[var(--on-secondary-container)]/10 pb-1 opacity-60">
                                    <span>Sunday - Monday</span>
                                    <span className="font-bold italic">Closed</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 bg-[var(--surface-container-lowest)]/50 p-4 rounded-lg">
                            <p className="text-xs text-[var(--on-secondary-container)] leading-tight">
                                *Closed on public holidays to allow our team to recharge their creativity.
                            </p>
                        </div>
                    </div>
                </div>

                <ContactForm />
            </div>

            {/* Map Section */}
            <section className="w-full h-96 grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity duration-700 overflow-hidden mt-24">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOXCpudAkUP10SVUdDu3w654XHLuYk35X20c553bW5N7FA1x7bfmICq8_-3QIe7MZsEwzJ5R29_p1MdcjnVo0OI0pcdJgQ_mjr4naDuAp24SYBZoELG-Vr52RxajmycAy9tj4Z7pv8mutKht3K9kpc-Q7QjQrrHY5ctd9smxxRzsocXhDP17uZTPXEef20R1njFP-Fs0TRZaNhRL7ivdvjeYSfoiH-83xhXiu2_ANKL4SgobcL4bCGZZiOE6OmJ0NbPpx6tsmaeqSP"
                    alt="Street map of Stockholm"
                    className="w-full h-full object-cover"
                />
            </section>
        </div>
    );
}

export default Contact;
