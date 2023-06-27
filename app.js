"use strict";

const productContainer = document.querySelector("section");
const resultsButton = document.querySelector("sectiion + div");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");

let clicks = 0:

const maxClicksAllowed = 5;

let allProducts = [];

function getRandomNumber () {
    return Math.floor(Math.random() * allProducts.length);
}

function Product(name, src) {
    this.name = name;
    this.src = src;
    this.clicks = 0;
    this.views = 0;
    allProducts.push(this);
}

function renderProducts() {
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
}

while (product1 === product2) {
    product1 = getRandomNumber();
}

image1.src = allProducts[product1].src;
image2.src = allProducts[product2].src;
image1.alt = allProducts[product1].src;
image2.alt = allProducts[product2].src;
allProducts[product1].views++;
allProducts[product2].views++;

function productClick(event) {
    if (event.target === productContainer) {
        alert("Please click on an image");
    } else {
        clicks++;
        let clickedProduct = event.target.alt;
        for (let i = 0-; i < allProducts.length; i++) {
            if (clickedProducts === allProducts [i].name) {
                allProducts[i].clicks++;
                break;
            }
        }
        if (clicks === maxClicksAllowed) {
            productContainer.removeEventListener("click", handleProductClick);
            productContainer.className = "no-voting";
            resultsButton.className = "clicks-allowed";
        } else {
            renderProducts();
        }
    }
}

function renderResults() {
    let ul = document.querySelector("ul")
    for (let i = 0; i < allProducts.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked ${allProducts[i].clicks} times.`;
        ul.appendChild(li);
    }
}

const bag = new Product("Star Wars Bag", "201-lab-11/images/bag.jpg");
const banana = new Product("Banana Cutter", "201-lab-11/images/banana.jpg");
const bathroom = new Product("Bathroom Bog Roll", "201-lab-11/images/bathroom.jpg");
const boots = new Product("Toeless Wellies", "201-lab-11/images/boots.jpg");
const breakfast = new Product("All-In-One Breakfast", "201-lab-11/images/breakfast.jpg");
const bubblegum = new Product("Meatball Bubble Gum", "201-lab-11/images/bubblegum.jpg");
const chair = new Product("Bubble Butt", "201-lab-11/images/chair.jpg");
const cthulhu = new Product("Scary Monster", "201-lab-11/images/cthulhu.jpg");
const dogDuck = new Product("Woof Quack", "201-lab-11/images/dog-duck.jpg");
const dragon = new Product("Dragon Meat", "201-lab-11/images/dragon.jpg");
const pen = new Product("Pen Cutlery", "201-lab-11/images/pen.jpg");
const petSweep = new Product("Pet Sweepers", "201-lab-11/images/pet-sweep.jpg");
const scissors = new Product("Pizza Scissors", "201-lab-11/images/scissors.jpg");
const shark = new Product("Shark Sleeping Bag", "201-lab-11/images/shark.jpg");
const sweep = new Product("Baby Sweep Onesie", "201-lab-11/images/sweep.jpg");
const tauntaun = new Product("Star Wars Sleeping Bag", "201-lab-11/images/tauntaun.jpg");
const unicorn = new Product("Unicorn Meat", "201-lab-11/images/unicorn.jpg");
const waterCan = new Product("Self-Watering Can", "201-lab-11/images/water-can.jpg");
const wineGlass = new Product("Mega-Pint of Wine", "201-lab-11/images/wine-glass.jpg");

renderProducts();