import React, { useState } from 'react'

type Props = {}

type Product = {
    name: string,
    price: number,
    quantity: number
}

const Practice32 = (props: Props) => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [list, setList] = useState<Product[]>([]);


    function processForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        let formProducts = e.currentTarget;

        const name = formProducts.nameProduct.value ?? "";
        const price = Number(formProducts.priceProduct.value) ?? 0;
        const quantity = Number(formProducts.quantityProduct.value) ?? 0;
        const newProduct: Product = { name, price, quantity };
        setProductList([...productList, newProduct]);
        setList([...list, newProduct]);
    }


    /**
     * Function to find a product by its name
     * @param e input change 
     * @returns product
     */
    function filterProducts(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();

        const filterProducts = e.currentTarget.value;
        if (filterProducts === " "){
            setProductList([...productList]);
            return;
        } 

        setProductList([... productList.filter(includeProduct(filterProducts))]);
    }


    /**
     * Function to include a product from the search
     * @param filter to apply
     * @returns product from the search
     */

    function includeProduct(filter: string) {
        return (product: Product) =>
             product.name.toLowerCase().includes(filter.toLowerCase());
    }

  return (
  
    <>
        <h3>Product's info</h3>
        <form onSubmit={processForm}>
            <label htmlFor="nameId">Name</label>
            <input type="text" name='nameProduct' id='nameId'/>
            <label htmlFor="priceId">Price</label>
            <input type="number" name='priceProduct' id='priceId'/>
            <label htmlFor="quantityId">Quantity</label>
            <input type="number" name='quantityProduct' id='quantityId'/>
            <button type='submit'>Add</button>
        </form>
        <div>
            <input type="text" name='filterProduct' id='filterProductId' onChange={filterProducts} />
        </div>


        <textarea value={JSON.stringify(productList, null, 2)} cols={100} rows={30}></textarea>
    </>
  )
}

export default Practice32