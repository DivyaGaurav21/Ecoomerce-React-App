export const add_cart = 'ADD_CART';
// export const Add_cart = "Add_cart";
// export const Product_view = "Product_view";
// export const Cart_items = "Cart_items";
// export const Delete_cart = "Delete_cart";
// export const Update_cart = "Update_cart";


// --------------Function to add a food Item----------------//
export default ADD = (item) => {
    return {
        type: add_cart,
        payload : item
    }
}