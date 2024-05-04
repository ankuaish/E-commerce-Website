import { getCartProductFromLS } from "./getCartProduct";

export const removeProdFromCart =(id) =>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id != id);
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv){
        removeDiv.remove();

    }

    updateCartValue(cartProducts);
};