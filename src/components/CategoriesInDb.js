import React, { useState, useEffect } from "react";
import Category  from './Category';

function CategoriesInDb(){
    const [categories, setCategories] = useState({});

    useEffect(() => {
        fetch("/api/products/")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
              console.log(data)
            setCategories(data.data.countByCategory);
          })
          .catch((error) => console.log(error));
      }, []);

    return (
        <React.Fragment>
                {/* <!-- Categories in DB --> */}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Totales por categorías</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <ul>
                                {
                                    Object.entries(categories).map(([categoryName, productCount],index)=>{
                                        return <li>{ categoryName } : { productCount }</li> 
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
export default CategoriesInDb;
