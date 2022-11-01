// import dependencies
import { writable } from 'svelte/store';
import {supabase} from "$lib/supabase.js";

// two writable stores for products and categories
export const products = writable([]);
export const categories = writable([]);

// Function to get all products
// This uses the Supabase client to query the product table
export const getAllProducts = async () => {
        
    const {data, error} = await supabase
        .from('product')
        .select()
        .order('product_name', {ascending: true});

    if(error) {
        return console.error(error);
    }

    // @ts-ignore
    products.set(data);
}

// Function to get all categories
// This uses the Supabase client to query the category table
export const getAllCategories= async () => {
        
    const {data, error} = await supabase
        .from('category')
        .select()
        .order('category_name', {ascending: true});

    if(error) {
        return console.error(error);
    }

    // @ts-ignore
    categories.set(data);
}

// Get products by category id
export const getProductsByCat = async (cat_id = 0) => {

    if (cat_id > 0) {

        const {data, error} = await supabase
            .from('product')
            .select()
            .eq('category_id', cat_id)
            .order('product_name', {ascending: true});

        if(error) {
            return console.error(error);
        }
    
        // @ts-ignore
        products.set(data);

    } else {
        getAllProducts();
    }
}

// initialise the store
// getAllProducts();
// getAllCategories();
