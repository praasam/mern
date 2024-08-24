import React, { useState } from 'react';
import FormValidation from '../FormValidation/FormValidation';

const ProductComponent = () => {
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");


    return (
        <>
            <div className='text-center m-8 bg-slate-400 text-2xl p-2'>
                Add Product
            </div>

            <div>
                {/* <form className='flex flex-col items-center'>
                    <div className='mb-4'>
                        <label className='text-xl p-2' htmlFor='productName'>Product Name</label>
                        <input onChange={(e) => setProduct(e.target.value)} className='border-2 border-black rounded p-2'
                            type='text'
                            name='productName'
                            id='productName'
                            placeholder='Enter product name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='text-xl p-2' htmlFor='productPrice'>Product Price</label>
                        <input onChange={(e) => setPrice(e.target.value)} className='border-2 border-black rounded p-2'
                            type='text'
                            name='productPrice'
                            id='productPrice'
                            placeholder='Enter product price'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='text-xl p-2' htmlFor='productCategory'>Product Category</label>
                        <input onChange={(e) => setCategory(e.target.value)} className='border-2 border-black rounded p-2'
                            type='text'
                            name='productCategory'
                            id='productCategory'
                            placeholder='Enter product category'
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='text-xl p-2' htmlFor='productDate'>Date</label>
                        <input onChange={(e) => setDate(e.target.value)} className='border-2 border-black rounded p-2'
                            type='date'
                            name='productDate'
                            id='productDate'
                        />
                    </div>
                </form> */}

                <FormValidation/>
            </div>

            {/* <div className='mt-8 text-center'>
                <h2 className='text-xl'>Product Information</h2>
                <p><strong>Name:</strong> {product}</p>
                <p><strong>Price:</strong> {price}</p>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Date:</strong> {date}</p>
            </div> */}
        </>
    );
}

export default ProductComponent;
