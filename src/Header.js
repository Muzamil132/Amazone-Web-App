
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import { useStateValue } from './StateProvider';
import {auth} from './firebase'



import {useStateValue} from './StateProvider'




function Header() {
    const [{ basket,user}, dispatch] = useStateValue();

    const handleAuth =()=>{
        if(user){
            auth.signOut()
        }
    }
    return (
        <nav className="header">
        <Link to="/">
        <img className="header_logo" src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png" alt=""/>    
        </Link>
         <div className="header_search">
        <input className="header_searcher"/>
        <SearchIcon className="header_icon"/>
        </div>
        <div className="header_nav">
        <Link to={!user && "/login"}>
        <div   
        onClick={handleAuth}
         className="header_option">
            <span id="hello">Hello</span>
            <span id="sign">{user?'Sign out':'Signin'}</span>
        </div>

        </Link>
        <Link to="/login">
        <div className="header_option">
            <span className="return">Return</span>
            <span className="order">& Orders</span>
        </div>

        </Link>
        <Link to="/login">
        <div className="header_option">
            <span id="your">Your</span>
            <span className="prime">Prime</span>
        </div>

        </Link>
        <Link to="/checkout">
        <div className="header_basket">
          < ShoppingBasketIcon/>
         <span className="basket-count">{basket.length}</span>
        
        </div>

        </Link>
       
        
        
        
        
        
      

        </div>
        </nav>
      
    )
}

export default Header
