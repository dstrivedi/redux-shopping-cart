
import { useSelector } from 'react-redux';
import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const totalItemInCart = useSelector(state => state.cart.totalItemInCart);
    console.log(totalItemInCart)
    return (
        <div className="header row">
            <div className="col-md-12">
                <nav className="navbar navbar-light bg-light">
                    <ul className="nav">
                        <li className="nav-item"><NavLink className='nav-link' to="/" style={({isActive}) => ({textDecoration: isActive ?  "underline": "none", color: "black"})}>Products</NavLink></li>
                        <li className="nav-item"><NavLink  className='nav-link' to="/cart" style={({isActive}) => ({textDecoration: isActive ?  "underline": "none", color: "black"})}>Cart ({totalItemInCart})</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;