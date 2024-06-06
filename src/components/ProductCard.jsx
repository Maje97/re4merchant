
export default function ProductCard({ products }) {
    if (!products) return null;

    const check = (a) => {
        console.log(a);
    }

    return (
       <ul class="flex flex-row flex-wrap">
            {products.map((product, index) => (
                <li key={index} class="box-border h-52 w-40 p-4 border-4 flex flex-col justify-center">
                    <img src={product.image} alt={product.title} class="object-contain size-max" />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <button onClick={() => check(index)} class="text-xs box-border size-fit p-2 border-solid rounded-3xl border-2 border-stone-500 bg-stone-300">Add to cart</button>
                </li>
            ))}
        </ul> 
    );
}