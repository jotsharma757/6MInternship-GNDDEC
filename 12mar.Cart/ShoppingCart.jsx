import { useDispatch } from "react-redux";
import { addCart } from "./1Cart";

function Products() {

    const dispatch = useDispatch();

    const products = [
        { id: 1, title: "Laptop", description: "Dell Laptop", price: 50000 },
        { id: 2, title: "Phone", description: "Samsung Phone", price: 20000 },
        { id: 3, title: "Headphones", description: "Sony Headphones", price: 5000 }
    ];

    return (
        <div>

            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>

                    <button onClick={() => dispatch(addCart(product))}>
                        Add To Cart
                    </button>

                </div>
            ))}

        </div>
    );
}

export default Products;