import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../../components/Layout/Layout";



const CategoryDetail = () =>{
    const {categoryProduct} = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const searchProduct = productos.filter(
        (productos) => productos.categoria === (categoryProduct)
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
                <img src={product.urlImage}/>
                <p> volver al <Link to={"/category/:categoryProduct"}>inicio</Link></p>

            </>
            )
            }
        </Layout>
    );
};

export default CategoryDetail;
