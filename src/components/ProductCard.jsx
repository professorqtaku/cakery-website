import { useState } from "react";

const ProductCard = ({ product, isLarge = false, isStaggered = false }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    if (isLarge) {
        // Large wedding cake cards - featured style
        return (
            <div className="md:col-span-2 grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3 aspect-[16/9] rounded-lg overflow-hidden bg-neutral/10">
                    <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                <div className="md:col-span-2 space-y-6">
                    <span className="text-tertiary font-bold tracking-widest text-xs uppercase">Signature Design</span>
                    <h4 className="font-headline text-4xl font-bold text-secondary">{product.name}</h4>
                    <p className="text-secondary text-lg">{product.description}</p>
                    <div className="flex items-center justify-between pt-4">
                        <span className="text-2xl font-bold text-primary">From ${product.price}</span>
                        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                            Consult Now
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Regular cupcake/wedding cake cards
    const isBestSeller = product.name.toLowerCase().includes('vanilla');
    const isSeasonal = product.name.toLowerCase().includes('lemon');

    return (
        <div className={`group cursor-pointer ${isStaggered ? 'md:mt-8' : ''}`}>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-6 bg-neutral/10">
                <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setImageLoaded(true)}
                />
                {isBestSeller && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-tertiary text-secondary px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                            Best Seller
                        </span>
                    </div>
                )}
                {isSeasonal && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                            Seasonal
                        </span>
                    </div>
                )}
            </div>
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="font-headline text-xl font-bold text-secondary mb-1">{product.name}</h4>
                    <p className="text-sm text-secondary font-medium">{product.description}</p>
                </div>
                <span className="text-primary font-bold text-lg">${product.price}</span>
            </div>
        </div>
    );
};

export default ProductCard;