import { homeQuantityToggle } from "./quantityToggle.js";

const productContainer =document.getElementById("productContainer");
const productTemplate =document.getElementById("productTemplate");

export const showProductContainer= (products) =>{

    if(!products)
        {
            return false;
        }
      products.forEach((curProd) =>{

const{id, name, category, brand, price, stock, image,description} = curProd;
const productClone = document.importNode(productTemplate.content, true);
productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
productClone.querySelector(".productName").textContent = name;
productClone.querySelector(".category").textContent = category;
productClone.querySelector(".productImage").src = image;
productClone.querySelector(".productImage").alt = name;
productClone.querySelector(".productDescription").textContent = description;
productClone.querySelector(".productStock").textContent = stock;
productClone.querySelector(".productPrice").textContent = `${price}`;
productClone.querySelector(".productActualPrice").textContent = `${price *4}`;

productClone.querySelector(".stockElement").addEventListener("click", (event) =>{
    homeQuantityToggle(event, id, stock);
})


productContainer.append(productClone);
      }) ; 
};