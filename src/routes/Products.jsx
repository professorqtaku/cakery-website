import { products } from "../data/products.js";
import ProductSection from "../components/ProductSection";

function Products() {
    const cupcakes = products.filter(product => product.type === "cupcake");
    const weddingCakes = products.filter(product => product.type === "wedding-cake");

    return (
        <main className="pt-20 pb-20 px-6 max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="mb-20">
                <div className="overflow-hidden rounded-3xl bg-neutral/20 min-h-[400px] flex flex-col md:flex-row items-center p-8">
                    <div className="flex-1 z-10 max-w-2xl">
                        <span className="font-label text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-4 block">
                            The Artisanal Collection
                        </span>
                        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-[1.1] mb-6 -ml-1">
                            Baked with <br /> <span className="text-primary italic">pure intention.</span>
                        </h1>
                    </div>
                    <div className="flex-1 text-on-surface-variant max-w-md pb-4">
                        <p className="body-lg text-lg text-secondary max-w-md mb-8 leading-relaxed">
                            Every creation at Munamii is a bespoke piece of edible art, handcrafted with the finest ingredients and a touch of poetic elegance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cupcakes Section */}
            <ProductSection
                title="Petite Cupcakes"
                subtitle="Bite-sized masterpieces for every celebration."
                products={cupcakes}
            />

            {/* Wedding Cakes Section */}
            <ProductSection
                title="Grand Wedding Tiers"
                subtitle="Timeless elegance for your most precious moments."
                products={weddingCakes}
                isWeddingCakes={true}
            />
        </main>
    );
}

export default Products;