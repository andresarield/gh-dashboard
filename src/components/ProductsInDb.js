import React, { useState, useEffect } from "react";

function ProductsInDb(){
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch("/api/products/")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            setProducts(data.data.products);
          })
          .catch((error) => console.log(error));
      }, []);

    return (
        <React.Fragment>
                {/* <!-- Categories in DB --> */}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Productos activos</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <ul>
                                {
                                    Object.entries(products).map(([product, a],index)=>{
                                        return (
                                        
                                        
                                        <li>{ product} </li> 
                                            
                                            
                                            )
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )

}
export default ProductsInDb;
