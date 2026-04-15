function ContactHero() {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] md:gap-10 mb-24 items-center">
            <div className="md:col-span-1 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-secondary-fixed-variant)] mb-4">
                    Get in Touch
                </span>
                <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-[var(--primary)] leading-[0.9] mb-8">
                    Let's make life <br /> a little <span className="italic text-[var(--tertiary)]">sweeter</span>.
                </h1>
                <p className="text-lg text-[var(--on-surface-variant)] max-w-lg leading-relaxed">
                    Whether it's a birthday in Stockholm or a celebration in Malmö, our artisanal cakes are ready to travel to your doorstep.
                </p>
            </div>

            <div className="md:col-span-1 relative">
                <div className="aspect-[4/5] bg-[var(--surface-container-highest)] rounded-2xl overflow-hidden patisserie-shadow transform rotate-2">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvczN7LF-T02YmkknQfs1-8yreXGMjJQd6jclybeSdykib0_HxPaYVxaEsnnA_M4ob5-7fJdGPwfp2-wxXG88GRnTZQW83dgmJJZrNkUbxYPo9GQ4G9b5dAU7OXhYmmpfWEpbfAMx1ni4Z42_ytfgcLX7YjI2TzGYXAL0on75ZBVN4jvAXDgvkfI5VrSOSpe8TbL0jgd7gkXNv6AvgrCwVTGCn1dAqaewo5mn1bIWoadKP7WgBdZFvc9PauDw9esqrCfqno3RKa4bu"
                        alt="Elegant tiered pastel cake"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute -bottom-8 -left-8 bg-[var(--tertiary-container)] text-[var(--on-tertiary)] p-8 rounded-lg shadow-[0_20px_40px_-15px_rgba(29,27,23,0.08)] max-w-[240px] hidden md:block transform -rotate-3">
                    <p className="font-headline text-xl font-bold mb-2">Notice Required</p>
                    <p className="text-sm opacity-90">All orders require at least a 2-day notice for the perfect bake.</p>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
