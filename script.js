// script.js
console.log("This is working")

// Form Submission Code 
document.getElementById('contactForm').addEventListener('submit', function(event) { 
    event.preventDefault(); 
    let name = document.getElementById('name').value; 
    let email = document.getElementById('email').value; 
    let message = document.getElementById('message').value; 
let query = document.querySelector('input[name="query"]:checked'); 
// Validate all fields are filled 
if (!name || !email || !message || !query) { 
alert("Please complete all fields."); 
return; 
} 
 
// Validate email format 
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
if (!emailPattern.test(email)) { 
alert("Please enter a valid email address."); 
return; 
} 
 
// Save the data to a CSV file (this part requires a server-side script) 
console.log(`Name: ${name}, Email: ${email}, Message: ${message}, Query: ${query.value}`); 
alert("Thank you for contacting us, " + name + "!"); 
}); 

// Slideshow functionality 
let slideIndex = 0; 
showSlides(); 
 
function showSlides() { 
    let slides = document.getElementsByClassName("slides"); 
    for (let i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    } 
    slideIndex++; 
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds 
console.log("Hitting the function"); 
} 