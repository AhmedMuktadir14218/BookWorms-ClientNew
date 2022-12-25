import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import "../AddService/AddService.css";
import Header from '../Header/Header';

const AddService = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {         
        console.log(data)
        // const url =`http://localhost:5000/product`;
        const url =`https://bookworms-server.up.railway.app/product`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result));
        reset();
    };

    
    return (
        <>
        <div className='w-50 mx-auto'> 
                 
           <h1 className='heading'>Add Books</h1>
           <form className='d-flex flex-column mb-5 add_form' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 100 })} />
                <input className='mb-2' placeholder='Writer' type="text" {...register("writer")} />
                <input className='mb-2' placeholder='Catagory' type="text" {...register("catagory")} />
                <input className='mb-2' placeholder='Publisher' type="text" {...register("publisher")} />
                <input className='mb-2' placeholder='Language' type="text" {...register("language")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Stock' type="number" {...register("stock")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />                
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input type="submit" value="Add Book"  className='login_btn'/>              
                
            </form>
        </div>
        </>
    );
};
   
export default AddService;
