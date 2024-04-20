let uniqueId = 1;
let imageUrl = "https://plus.unsplash.com/premium_photo-1682090786689-741d60a11384";
let title="mens kurta";
let vendor = "manyvar";
let price=1199.00;
let comparedPrice = 2999.00;
let discount = "50% Off";
let categoryId  = 0;



function createCards(i){
    let cards = document.createElement('div');
    let categoryId  = i;
    let cardsId = "cardsId" +  categoryId;
    cards.id = cardsId;
    cards.classList.add("cards");
    document.body.appendChild(cards);
}

function creatingProductCard(i){
    let categoryId = i;
    let isClicked = false;
    
    let productCard = "productCard"+uniqueId;
    productCard = document.createElement('div');
    productCardId = "productCard"+i;
    productCard.classList.add("product-card");

    let productImage = document.createElement('img');
    productImage.src=imageUrl;
    productImage.alt = "product image";
    productImage.classList.add("product-image");
    productCard.appendChild(productImage);

    let productTitleCard = document.createElement('div');
    productTitleCard.classList.add("product-title-card");

    let productTitle = document.createElement('p');
    productTitle.innerText=title;
    productTitle.classList.add("product-title");
    productTitleCard.appendChild(productTitle)

    let dotELe = document.createElement('p');
    dotELe.innerText=".";
    dotELe.classList.add("product-title");
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

    
    let cardsId = "cardsId" + i;
    let cardsEle = document.getElementById(cardsId);
    cardsEle.appendChild(productCard);

}
function removingCards(i){
    let cardsIDD = "cardsId" + i;
    let removeCards = document.getElementById(cardsIDD);
    document.body.removeChild(removeCards);
}


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
            creatingProductCard(i)
        }
        )
           
    }
    )
    .catch(err=> console.log(err))
}

fetchData(0);
createCards(0);



let ele = document.getElementById("categories-men");
ele.classList.remove("category-not-selected")
ele.classList.add("category-selected");

for(let i=0;i<3;i++){
    let categories = {"0":"men","1":"women","2":"kids"};
    let string_i = i.toString();
    console.log(`categories-${categories[string_i]}`);
    let selectedCategory = document.getElementById(`categories-${categories[string_i]}`);
     selectedCategory.addEventListener('click',()=>{
        selectedCategory.classList.remove("category-not-selected")
        selectedCategory.classList.add("category-selected");
        removingCards(i);
        fetchData(i);
    })
}

let categoriesWomen = document.getElementById("categories-women");
categoriesWomen.onclick = function(){
    fetchData(i);
    selectedCategory.classList.remove("category-not-selected")
    selectedCategory.classList.add("category-selected");
}


