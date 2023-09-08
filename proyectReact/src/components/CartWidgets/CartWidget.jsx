import {BsCartCheckFill} from 'react-icons/bs'
import {Badge} from '@mui/material'

const CartWidget = () =>{

    return(
        <div>
            <Badge badgeContent={1} color="primary">
            <BsCartCheckFill size={30} color="action" />
            </Badge>
        </div>
    )
}
export default CartWidget




