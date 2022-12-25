import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const ManageProducts = () => {
    const [products,setProducts]=useProducts();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            // const url =`http://localhost:5000/product/${id}`;
            const url =`https://bookworms-server.up.railway.app/product/${id}`;
            fetch(url,{
                method:'DELETE',
                
                // body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            });
        }
    }
    return (
        // <div>
            
        //     {
        //         products.map(product => <div key={product.id}>
        //             <h4>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h4>
        //         </div>)
        //     }
        // </div>
        <div className="manageProducts">
        <div className="d-flex manageProductsColName" style={{ paddingTop: "10px" }}>
            <div className="col-6 ps-3">Name</div>
            <div className="col-3">Weight</div>
            <div className="col-2">Price</div>
            <div className="col-1">Action</div>
        </div>
        <div className="manageProductsItems mt-3">
            {
                products ?
                    <>
                        {
                            products?.map(product =>
                                <div className="d-flex mb-3">
                                    <div className="col-6 ps-3">{product?.name}</div>
                                    <div className="col-3">{product?.weight}</div>
                                    <div className="col-2 ps-2">{product?.price}</div>
                                    <div className="col-1 d-flex">
                                        <Link to="/admin/edit-product" className="btn btn-sm btn-outline-success me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                                            </svg>
                                        </Link>
                                        <button onClick={() => handleDelete(product?._id)} className="btn btn-sm btn-outline-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </>
                    :
                    <div className="manageProductItemsLoader">
                        <div className="text-center">
                            {/* <img style={{width: "60px", marginTop: "160px"}} src={loader} alt="" className="img-fluid" /> 
                            */}
                        </div>
                    </div>
            }
        </div>
    </div>
    );
};

export default ManageProducts;