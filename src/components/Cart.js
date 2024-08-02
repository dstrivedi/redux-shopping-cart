import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteCart, increaseQuantity } from "../slice/cartSlice";
import { current } from "@reduxjs/toolkit";


const Cart = () => {
    const carts = useSelector(state => state.cart.carts);
    const totalPriceInCart = useSelector(state => state.cart.totalPriceInCart);
    const dispatch = useDispatch();
    const totalCart = 0;

    console.log(totalPriceInCart);

    const total = carts.reduce((accumulator, item) => {
        return accumulator + (item.price * item.quantity);
    }, 0)

    const totalPricePerProduct = (price, quantity) => {
        return Number(price * quantity).toLocaleString('en-Us');
    }
    
    return (
        <div className="row">
            <div className="col-md-12">
                <table className="table" style={{height: "100%"}}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((item, index) => {
                                return (
                                   <tr key={index}>
                                        <td><i className="badge badge-danger" onClick={()=>dispatch(deleteCart(index))}>X</i></td>
                                        <td>{item.title}</td>
                                        <td><img src={item.thumbnail} style={{width:'100px',height:'80px'}}/></td>
                                        <td>{item.price} $</td>
                                        <td>
                                            <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>dispatch(decreaseQuantity(index))}>-</span>
                                            <span className="btn btn-info">{item.quantity}</span>
                                            <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>dispatch(increaseQuantity(index))}>+</span>
                                        </td>
                                        <td>{Number(item.totalPrice).toLocaleString('en-US')}</td>
                                   </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan="5">Total</td>
                            <td>$ {Number(total).toLocaleString('en-US')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart;