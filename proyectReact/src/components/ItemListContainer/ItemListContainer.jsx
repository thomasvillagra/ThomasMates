import "./styles.css"
import { Link } from 'react-router-dom'


const ItemListContainer = ({router, handleConsole}) =>{

    return(
        <div className='container'>
            <ul>
                <li><Link to={"/category/:categoryId"}>camionero</Link></li>
                <li><Link to={"/category/:categoryId"}>Mate Torpedo</Link></li>
                <li><Link to={"/category/:categoryId"}>Mate Imperial</Link></li>
            </ul>
            
        </div>
    )
}
export default ItemListContainer