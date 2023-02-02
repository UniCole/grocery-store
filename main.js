
function loadProducts() {

    const allProducts = getProductsFromStorage();
    displayProducts(allProducts);

}

loadProducts();

function addProduct() {
    
    const isValid = validate();
    if (!isValid) {
        return;
    }

    const product = getProductObject();

    const allProducts = getProductsFromStorage();

    allProducts.push(product);

    saveProductsToStorage(allProducts);

    displayProducts(allProducts);

    clearForm();

}

function getProductObject() {

    const product = {
        name: nameBox.value,
        price: +priceBox.value,
        category: categoryBox.value,
        picture: pictureBox.value
    }
    return product;

}

function getProductsFromStorage() {

    const str = localStorage.getItem("Products");
    const products = (str === null) ? [] : JSON.parse(str);
    return products;

}

function saveProductsToStorage(allProducts) {

    const str = JSON.stringify(allProducts);
    localStorage.setItem("Products", str);

}

function displayProducts(allProducts) {
    
    tBody.innerHTML = "";

    for (const product of allProducts) {
        const row = `
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td><img src="${product.picture}" width="135px" height="100px"></td>
        </tr>`

        tBody.innerHTML += row;
    }

}

function clearForm() {
    
    nameBox.value = "";
    priceBox.value = "";
    categoryBox.value = "";
    pictureBox.value = "";
    nameBox.focus();
    
}

function validate() {
    
    const name = nameBox.value;
    const price = +priceBox.value;
    const category = categoryBox.value;
    const picture = pictureBox.value;
    
    nameBox.style.border = "";
    priceBox.style.border = "";
    categoryBox.style.border = "";
    pictureBox.style.border = "";
    
    if (name === "") {
        alert("Missing product name");
        nameBox.style.border = "3px solid palevioletred";
        return false;
    }
    
    if (price === 0) {
        alert("Missing product price");
        priceBox.style.border = "3px solid palevioletred";
        return false;
    }
    
    if (price < 0) {
        alert("Invalid price");
        priceBox.style.border = "3px solid palevioletred";
        return false;
    }
    
    if (category === "") {
        alert("Missing category");
        categoryBox.style.border = "3px solid palevioletred";
        return false;
    }
    
    if (picture === "") {
        alert("Missing product picture");
        pictureBox.style.border = "3px solid palevioletred";
        return false;
    }
    
    return true;
    
}


