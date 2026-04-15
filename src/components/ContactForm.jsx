function ContactForm() {
    return (
        <div className="bg-[var(--surface-container-high)] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 patisserie-shadow">
            <div className="p-12 md:p-16 lg:p-20">
                <h2 className="font-headline text-4xl font-bold text-[var(--primary)] mb-6">Send a Message</h2>
                <p className="text-[var(--on-surface-variant)] mb-12 leading-relaxed">
                    Have a special request or a custom design in mind? Fill out the form and our head pâtissier will get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-[var(--on-surface-variant)] font-bold block">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Jane Doe"
                                className="w-full bg-[var(--surface-container-lowest)] border-none rounded-lg p-4 focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-[var(--on-surface-variant)] font-bold block">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="hello@example.com"
                                className="w-full bg-[var(--surface-container-lowest)] border-none rounded-lg p-4 focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-[var(--on-surface-variant)] font-bold block">
                            Service Type
                        </label>
                        <select className="w-full bg-[var(--surface-container-lowest)] border-none rounded-lg p-4 focus:ring-2 focus:ring-[var(--primary)] focus:outline-none">
                            <option>Home Delivery (Stockholm)</option>
                            <option>Home Delivery (Malmö)</option>
                            <option>Pickup (Via la Costa)</option>
                            <option>Custom Inquiry</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-[var(--on-surface-variant)] font-bold block">
                            Your Message
                        </label>
                        <textarea
                            placeholder="Tell us about your celebration..."
                            rows="4"
                            className="w-full bg-[var(--surface-container-lowest)] border-none rounded-lg p-4 focus:ring-2 focus:ring-[var(--primary)] focus:outline-none resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-[var(--primary)] text-[var(--on-primary)] font-headline font-bold uppercase tracking-widest rounded-lg hover:bg-[var(--primary-container)] transition-all flex justify-center items-center gap-3 patisserie-shadow"
                    >
                        Send Inquiry
                        <span className="material-icons text-sm">send</span>
                    </button>
                </form>
            </div>

            <div className="relative hidden md:block">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGd0rn7BEYGRg8grSzd_UnSPo94SLRnVDd6xT22s-zoDR6AwIBXGzSyyWc5qR43TzXQKJn7Yd11dzFUuQGaKbXrXzMrSr-ffpNx--zXM9dSMzKwOKl_gEAJGKnwn4szipnVE0aLHW48mYW6XDgDfRtXbolhhI7KulBSPYqvUxaSkTPMSprLRUi1HbVJ1JubgsOK3mlfKSBuGiMFon9ymM_8ijODePNGDk4olMxfrUUrVSdQgsxDcI8LjNEohXhKKf7-K_YdndipS4L"
                    alt="Artisanal baker at work"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--primary)]/20 mix-blend-multiply" />
                <div className="absolute bottom-12 left-12 right-12">
                    <p className="font-headline text-2xl text-white font-bold leading-tight">
                        "Baking is a science, but decorating is an art."
                    </p>
                    <p className="text-white/80 mt-2">— The Munamii Philosophy</p>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
