const storedProducts = localStorage.getItem('cartProducts');
const cartProducts = storedProducts ? JSON.parse(storedProducts) : [];

const productContainer = document.getElementById("products");
console.log(cartProducts);
// Rendering the products
function render(products) {
    productContainer.innerHTML = ''; // Clearing existing content
    products.forEach(product => {if(product.isInCart){
        const cardContainer = document.createElement("div");
        cardContainer.classList.add(
            "card",
            "card-vertical",
            "d-flex",
            "direction-column",
            "relative",
            "shadow"
        );

        // Image Container
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card-image-container");
        const image = document.createElement("img");
        image.classList.add("card-image");
        image.setAttribute("src", product.img);
        image.setAttribute("alt", product.name);
        imageContainer.appendChild(image);
        cardContainer.appendChild(imageContainer);

        // Card Details Container
        const cardDetailsContainer = document.createElement("div");
        cardDetailsContainer.classList.add("card-details");

        // Brand
        const brandContainer = document.createElement("div");
        brandContainer.classList.add("card-title");
        brandContainer.innerText = product.brand;
        cardDetailsContainer.appendChild(brandContainer);

        // Description
        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("card-description");

        // Product Name
        const name = document.createElement("p");
        name.classList.add("card-des");
        name.innerText = product.name;
        descriptionContainer.appendChild(name);

        // Price
        const price = document.createElement("p");
        price.classList.add("card-price");
        const newPrice = document.createElement("span");
        newPrice.innerText = `Rs. ${product.newPrice}`;
        price.appendChild(newPrice);
        const oldPrice = document.createElement("span");
        oldPrice.classList.add("price-strike-through");
        oldPrice.innerText = `Rs. ${product.oldPrice}`;
        price.appendChild(oldPrice);
        const discount = document.createElement("span");
        discount.classList.add("discount");
        discount.innerText = `${product.discount}% OFF`;
        price.appendChild(discount);
        descriptionContainer.appendChild(price);

        // Ratings
        const ratings = document.createElement("p");
        ratings.classList.add("d-flex", "align-center");
        const rating = document.createElement("span");
        rating.innerText = product.rating;
        ratings.appendChild(rating);
        const star = document.createElement("span");
        star.classList.add("fa", "fa-star", "fa-1x", "checked", "star");
        ratings.appendChild(star);
        descriptionContainer.appendChild(ratings);
        cardDetailsContainer.appendChild(descriptionContainer);

        // CTA Button
        const ctaButton = document.createElement("div");
        ctaButton.classList.add("cta-btn");
        const cartButton = document.createElement("button");
        cartButton.classList.add(
            "button",
            "btn-primary",
            "btn-icon",
            "cart-btn",
            "d-flex",
            "align-center",
            "justify-center",
            "gap",
            "cursor",
            "btn-margin"
        );
        cartButton.setAttribute("id", product.id);
        const cartIcon = document.createElement("span");
        cartIcon.classList.add("material-icons-outlined");
        cartIcon.innerText = "shopping-cart";
        cartButton.appendChild(cartIcon);
        const cartText = "Remove from cart";
        cartButton.innerText = cartText;
        ctaButton.appendChild(cartButton);
        cardDetailsContainer.appendChild(ctaButton);

        // Append card details to card container
        cardContainer.appendChild(cardDetailsContainer);

        // Append card container to product container
        productContainer.appendChild(cardContainer);
}});
}

// Initial rendering of products
render(cartProducts);


productContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart-btn")) {
        const productId = event.target.id;
        const clickedProduct = cartProducts.find(product => product.id === productId);
        console.log(clickedProduct)
        if (clickedProduct) {
            clickedProduct.isInCart = !clickedProduct.isInCart;
            updateLocalStorage(cartProducts);

            render(cartProducts); // Update after modifying product
        }
    }
});



function updateLocalStorage(products) {
    localStorage.setItem('cartProducts', JSON.stringify(products));
}
