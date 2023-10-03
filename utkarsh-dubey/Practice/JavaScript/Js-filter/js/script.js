let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "Images/white-tshirt.jpg",

      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "Images/short-skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "Images/sporty-smartwatch.jpg",
      },
      {
        productName: "OnePlus Band",
        category: "Watch",
        price: "89",
        image: "Images/OnePlus-band.jpg",
      },
      {
        productName: "Apple i-watch",
        category: "Watch",
        price: "100",
        image: "Images/Apple-watch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "Images/knitted-top.jpg",
      },
      {
        productName: "Hoodie Yellow",
        category: "Hoodie",
        price: "30",
        image: "Images/Hoodie-Yellow.jpeg"
      },
      {
        productName: "Hoodie Black",
        category: "Hoodie",
        price: "30",
        image: "Images/Hoodie-black.jpg"
      },
      {
        productName: "Hoodie White",
        category: "Hoodie",
        price: "30",
        image: "Images/Hoodie-white.png"
      },
      {
        productName: "Multicolor Tshirt",
        category: "Topwear",
        price: "48",
        image: "Images/Multicolor-tshirt.jpg",
      },
      {
        productName: "Sports Jacket",
        category: "Jacket",
        price: "40",
        image: "Images/Jacket-sports.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "Images/black-leather-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "Images/pink-trousers.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "Images/brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "Images/comfy-gray-pants.jpg",
      },
  
      {
        productName: "Converse High",
        category: "Sneeker",
        price: "70",
        image: "Images/Sneeker-white.png"
      },
      {
        productName: "Nike Blue Runner",
        category: "Sneeker",
        price: "50",
        image: "Images/Sneeker-blue-2.png"
      },
      {
        productName: "Power High performance",
        category: "Sneeker",
        price: "60",
        image: "Images/Sneeker-orange.png"
      },
    ],
  };
  
  for (let i of products.data) {

    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });1
  
  let searchBar = document.getElementById('search-input');
  let searchBtn = document.getElementById('search');
  let displaycount = 0;
  
  function showSearch(){
  
    if(displaycount == 1){
      searchBar.style.display = 'block';
      searchBtn.style.display = 'block';
      displaycount = 0;
    }
    else{
      searchBar.style.display = 'none';
      searchBtn.style.display = 'none';
      displaycount = 1;
    }
    
  }
  document.addEventListener('DOMContentLoaded', function(){
    let searchBar = document.getElementById('search-input');
    let searchBtn = document.getElementById('search');
    
        searchBar.style.display = 'none';
        searchBtn.style.display = 'none';
  });
  window.onload = () => {
    filterProduct("all");
  
    
  };