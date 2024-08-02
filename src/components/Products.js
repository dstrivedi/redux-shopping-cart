import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cartSlice";

const Products = () => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {carts, totalItemInCart} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log(carts, totalItemInCart);

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);
            try {        
                const response = await fetch("https://dummyjson.com/products");
                if(!response.ok) {
                    throw new Error("Network response is not ok");
                }
                const result = await response.json();
                console.log(result);
                setProducts(result.products);
            } catch(error){
                setError(error);
                console.error("Something went wrong: ",error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    if(isLoading) {
        return <div>isLoading</div>
    }

    if(error) {
        return <p>Error: {error}</p>
    }

    return (
        <div className="row" style={{width: "80%", margin: "30px auto"}}>
            <div className="col-md-12">
                <div className="row">
                    {products && (
                        products.map((item, index) => (
                            <div key={index} className="col-md-2" style={{margin: "50px 20px", boxShadow:"2px 2px 2px 2px black", borderRadius: "4px"}}>
                                <img src={item.thumbnail} className="img-responsive" style={{width: "100%", height:"auto", marginTop: "20px"}} alt="Product"/>
                                <h5 style={{height: "80px", display: "flex", alignItems: "center", justifyContent: "center"}}>{item.title}</h5>
                                <button className="btn btn-light" type="button" onClick={() => dispatch(addToCart(item))} style={{cursor: "pointer", marginBottom: "20px"}}>Add to Cart</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products;