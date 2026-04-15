import ProductCard from "./ProductCard";

const ProductSection = ({ title, subtitle, products, isWeddingCakes = false }) => {
    if (isWeddingCakes) {
        // Wedding cakes layout: 2 large cards + grid of smaller ones
        const largeCakes = products.slice(0, 2);
        const smallCakes = products.slice(2);

        return (
            <section className="mb-20" id="wedding-cakes">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="font-headline text-4xl font-bold text-primary mb-2">{title}</h2>
                        <p className="text-secondary font-medium">{subtitle}</p>
                    </div>
                    <div className="h-[2px] flex-grow bg-outline-variant opacity-15 mx-8 hidden md:block"></div>
                    <span className="font-label text-sm font-bold text-tertiary tracking-widest uppercase">02 / Collection</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Large Feature Cards */}
                    {largeCakes.map((cake) => (
                        <ProductCard key={cake.name} product={cake} isLarge={true} />
                    ))}

                    {/* Mini Wedding Items Grid */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {smallCakes.map((cake) => (
                            <div key={cake.name} className="flex flex-col">
                                <img
                                    src={cake.image}
                                    alt={cake.name}
                                    className="w-full aspect-square object-cover rounded-2xl mb-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                                />
                                <h4 className="font-headline text-xl font-bold text-on-background">{cake.name}</h4>
                                <p className="text-primary font-bold mt-2">${cake.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Cupcakes layout: grid
    return (
        <section className="mb-32" id="cupcakes">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="font-headline text-4xl font-bold text-primary mb-2">{title}</h2>
                    <p className="text-on-surface-variant font-medium">{subtitle}</p>
                </div>
                <div className="h-[2px] flex-grow bg-outline-variant opacity-15 mx-8 hidden md:block"></div>
                <span className="font-label text-sm font-bold text-tertiary tracking-widest uppercase">01 / Collection</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {products.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;