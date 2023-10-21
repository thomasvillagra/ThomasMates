import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../Layout/Layout";



const CategoryDetail = () =>{
    const {categoryId   } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const searchProductCategory = productos.filter(
        (productos) => productos.categoria === (categoryId)
    );
    
    useEffect(()=>{
        setTimeout(()=>{
            console.log(searchProductCategory);
            setProduct(searchProductCategory);
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
