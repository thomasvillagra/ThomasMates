import { useEffect,useState } from "react";
import "../ItemListContainer/styles.css"

import { useParams } from "react-router-dom";
import { collection, getDocs} from "firebase/firestore"
import {db} from "../../db/db"

// const Item = ({ id, nombre, precio, descripcion, imgUrl }) => {
  


const Item = ({ id, nombre, precio, descripcion, imgUrl }) => { 
    const handleClick = (event) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(id,nombre,precio,descripcion)
  } 
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
    const { idCategory } = useParams();
  
    useEffect(() => {
  
      const productsRef = collection (db,"productos")
      getDocs(productsRef).then((response)=>{
        const productFirebase = response.docs.map((product)=>(
          {id: product.id, ...product.data()}
        ))
        console.log(productFirebase)
      })
    }
    )
    

    return (
    <div>
      <img style={{width:"200px", height:"120px"}} src={imgUrl} />
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <p>{precio}</p>
      {/* <Link to={`/item/${id}`}>Ver detalle</Link> */}
    </div>
  );
}

export default Item;