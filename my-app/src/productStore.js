// want all components to have acccess to this products page
// Replace COFFEE_PRODUCT_KEY in line 9
// Replace SUNGLASSES_PRODUCT_KEY in line 9
// Replace CAMERA_PRODUCT_KEY in line 9

const productsArray = [
    {
        id: "COFFEE_PRODUCT_KEY",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "SUNGLASSES_PRODUCT_KEY",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "CAMERA_PRODUCT_KEY",
        title: "Camera",
        price: 39.99
    },
]

// given a certain product id, and return the product object
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);
    if (productData === undefined) {
        console.log("Product does not exist for ID: " + id);
    }
    return productData;
}

export { productsArray, getProductData };