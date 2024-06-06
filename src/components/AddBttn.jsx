
export default function AddBttn(id) {
    if (!id) return null;

    return (
        <button onClick={(id) => console.log( id  + "added to cart!")} class="">Add to cart</button>
    );
}