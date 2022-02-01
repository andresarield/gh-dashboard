import React, { useState, useEffect } from "react";
import CategoriesInDb from './CategoriesInDb';
// import imagenFondo from '../assets/images/mandalorian.jpg';
import ContentRowGames from './ContentRowGames';

function ContentRowTop(){

    const [lastProduct, setProduct] = useState(0);
    let latestProd;

	useEffect(() => {
        fetch("/api/products/latest/")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            setProduct(data.data);
          })
          .catch((error) => console.log(error));
    }, [lastProduct]);
	


    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">GH Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Games-->*/}
					<ContentRowGames />
					{/*<!-- End games in Data Base -->*/}

					{/*<!-- Content Row Last Game in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Game in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<h4><b>{lastProduct.name}</b></h4>
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.url} alt={lastProduct.name}/>
									</div>
									<p>{lastProduct.description}</p>
									<ul>
										<li>Precio: ${lastProduct.price}</li>
										<li>Rubro: {lastProduct.rubro}</li>

									</ul>
									{/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View Game detail</a> */}
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Categories in DB -->*/}
						< CategoriesInDb />

					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;