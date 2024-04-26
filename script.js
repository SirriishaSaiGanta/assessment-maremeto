// creating requries varaibles
let uniqueId = 1;
let imageUrl = "https://plus.unsplash.com/premium_photo-1682090786689-741d60a11384";
let title="mens kurta";
let vendor = "manyvar";
let price=1199.00;
let comparedPrice = 2999.00;
let discount = "50% Off";
let categoryId  = 0;
let badge = " ";
// end of creating requries varaibles

//creating cards container
function createCards(){
    let isClicked = true;
    let cards = document.createElement('div');
    // let categoryId  = i;
    // let cardsId = ;
    cards.id = "cardsId";
    cards.classList.add("cards");
    document.body.appendChild(cards);
}


function removingCards(){
    // let cardsIDD = "cardsId" + i;
    let isClicked = false;
    let removeCards = document.getElementById("cardsId");
    document.body.removeChild(removeCards);
}

//creating product cards
function creatingProductCard(){
    
    let productCard = "productCard"+uniqueId;
    productCard = document.createElement('div');
    productCard.classList.add("product-card");

    let productImage = document.createElement('img');
    productImage.src=imageUrl;
    productImage.alt = "product image";
    productImage.classList.add("product-image");
    productCard.appendChild(productImage);

    if(badge){
        let badgeEle = document.createElement('span');
        badgeEle.classList.add('badge');
        console.log(badge);
        badgeEle.textContent = badge;
        productCard.appendChild(badgeEle);
    }
    

    let productTitleCard = document.createElement('div');
    productTitleCard.classList.add("product-title-card");

    let productTitle = document.createElement('p');
    productTitle.innerText=title;
    productTitle.classList.add("product-title");
    productTitleCard.appendChild(productTitle)

    let dotELe = document.createElement('p');
    dotELe.innerText=".";
    dotELe.classList.add("product-title-space");
    productTitleCard.appendChild(dotELe);

    let productVendor = document.createElement('p');
    productVendor.innerText=vendor;
    productVendor.classList.add("product-vendor");
    productTitleCard.appendChild(productVendor);

    productCard.appendChild(productTitleCard);

    let productPriceCard = document.createElement('div');
    productPriceCard.classList.add("product-price-card");

    let productPrice = document.createElement('p');
    productPrice.innerText=price;
    productPrice.classList.add("product-price");
    productPriceCard.appendChild(productPrice);

    let productComparedPrice = document.createElement('p');
    productComparedPrice.innerText=comparedPrice;
    productComparedPrice.classList.add("compare-at-price");
    productPriceCard.appendChild(productComparedPrice);

    let productDiscount = document.createElement('p');
    productDiscount.innerText="50% Off";
    productDiscount.classList.add("offer");
    productPriceCard.appendChild(productDiscount);

    productCard.appendChild(productPriceCard);

    let addtoCartBtnELe = document.createElement('button');
    addtoCartBtnELe.innerText="Add to Cart";
    addtoCartBtnELe.classList.add("add-to-cart-button");
    productCard.appendChild(addtoCartBtnELe);

    
    // let cardsId =  ;
    let cardsEle = document.getElementById("cardsId");
    cardsEle.appendChild(productCard);

}

//fetching data from the given api
function fetchData(i){
    fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json").then((response)=>response.json())
    .then((data)=> {
        console.log(data.categories[i].category_products)
        // console.log(data.categories[0].category_products[1])
        let category_products_array = data.categories[i].category_products;
        category_products_array.map((dataRequired)=>{
            uniqueId = dataRequired.id;
            imageUrl = dataRequired.image;
            title=dataRequired.title;
            vendor = dataRequired.vendor;
            price="Rs "+dataRequired.price+".00";
            comparedPrice = dataRequired.compare_at_price+".00";
            badge = dataRequired.badge_text;
            creatingProductCard();
        }
        )
           
    }
    )
    .catch(err=> console.log(err))
}


//creating inital stage
createCards(0);
fetchData(0);
let ele = document.getElementById("categories-men");
ele.classList.remove("category-not-selected")
ele.classList.add("category-selected");


// dynamically generating product  cards based on tab switching
let categoriesMenEle = document.getElementById("categories-men");
let categoriesWomenEle = document.getElementById("categories-women");
let categoriesKidsEle = document.getElementById("categories-kids");

categoriesMenEle.addEventListener('click',()=>{
    categoriesMenEle.innerText
    categoriesMenEle.classList.add("category-selected");
    categoriesMenEle.classList.remove("category-not-selected");
    categoriesWomenEle.classList.add("category-not-selected");
    categoriesWomenEle.classList.remove("category-selected");
    categoriesKidsEle.classList.add("category-not-selected");
    categoriesKidsEle.classList.remove("category-selected");
    removingCards();
    createCards();
    fetchData(0);
})
categoriesWomenEle.addEventListener('click',()=>{
    categoriesMenEle.classList.add("category-not-selected");
    categoriesMenEle.classList.remove("category-selected");
    categoriesWomenEle.classList.add("category-selected");
    categoriesWomenEle.classList.remove("category-not-selected");
    categoriesKidsEle.classList.add("category-not-selected");
    categoriesKidsEle.classList.remove("category-selected");
    removingCards();
    createCards();
    fetchData(1);
})
categoriesKidsEle.addEventListener('click',()=>{
    categoriesMenEle.classList.add("category-not-selected");
    categoriesMenEle.classList.remove("category-selected");
    categoriesWomenEle.classList.add("category-not-selected");
    categoriesWomenEle.classList.remove("category-selected");
    categoriesKidsEle.classList.add("category-selected");
    categoriesKidsEle.classList.remove("category-not-selected");
    removingCards();
    createCards();
    fetchData(2);
})


