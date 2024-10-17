// 1. Document Manipulation with JavaScript

// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { 
        name: "Laptop", 
        price: 999.99, 
        description: "Powerful computing on the go" 
    },
    { 
        name: "Smartphone", 
        price: 699.99, 
        description: "Stay connected wherever you are" 
    },
    { 
        name: "Headphones", 
        price: 149.99, 
        description: "Immersive audio experience" 
    }
];

// Task 2: Write a function to display the product information on the webpage dynamically.

function displayProductInfo() {
    const displayedInfo = document.getElementById("display");
    displayedInfo.innerHTML = "";

    products.forEach(product => {
        // container for product details
        let div = document.createElement("ul");

        // create and add product name, price, description to container
        let pName = document.createElement("b");
        pName.textContent = product.name;

        let pPrice = document.createElement("li");
        pPrice.textContent = "Price: $" + product.price;

        let pDescription = document.createElement("li");
        pDescription.textContent = "Description: " + product.description;

        div.appendChild(pName);
        div.appendChild(pPrice);
        div.appendChild(pDescription);

        // add container to existent HTML section
        displayedInfo.appendChild(div);
    });
}

// Task 3: Implement an event listener to trigger the display of products when the page loads.

addEventListener("load", displayProductInfo())


// 2. Form Manipulation with JavaScript

// Task 1: Create an HTML form with input fields for the user's name, email, and message.

// Task 2: Write JavaScript code to handle form submissions and store user input in an object.

document.getElementById("userForm").addEventListener('submit', function(event) {
    event.preventDefault();

    let userInput = {
        name: document.getElementById('userName').value,
        message: document.getElementById('message').value,
        email: document.getElementById('userEmail').value
    };

    console.log("User Input as an Object:", userInput)
});

//define changeColor()

const box = document.getElementById("box");

function changeBackgroundColor(event) {
    clickedElement = event.target;
    if (clickedElement.style.backgroundColor == "lightblue") {
        clickedElement.style.backgroundColor = "";
    } else {
        clickedElement.style.backgroundColor = "lightblue";
    };
}

function changeColor(event) {
    clickedElement = event.target;
    if (clickedElement.style.color == "blue") {
        clickedElement.style.color = "red";
    } else {
        clickedElement.style.color = "blue";
    };
}

box.addEventListener('click', changeBackgroundColor);

effect2.addEventListener('mouseover', changeColor);

userName.addEventListener('focus', changeBackgroundColor);

userEmail.addEventListener('keydown', changeBackgroundColor);

message.addEventListener('input', changeColor);
