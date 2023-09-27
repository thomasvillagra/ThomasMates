import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../../components/Layout/Layout";



const ItemDetail = () =>{
    const {idProduct} = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const searchProduct = productos.find(
        (productos) => productos.id === parseInt(idProduct)
    );
    
    useEffect(()=>{
        setTimeout(()=>{
            console.log(searchProduct);
            setProduct(searchProduct);
            setIsLoading(false);
        },1000);
    },[]);

    return(
        <Layout>
            {isLoading
            ?(<p>El producto esta cargando...</p>)
            :(
            <>
                <h1>{product.nombre}</h1><br/>
                <p> volver al <Link to={"/"}>inicio</Link></p>

            </>
            )
            }
        </Layout>
    );
};

export default ItemDetail;
