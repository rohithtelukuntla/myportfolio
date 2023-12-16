// Get the menu icon element
let menuIcon = document.querySelector(".menu.icon");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", () => {
    // Toggle the 'active' class on the menu icon
    menuIcon.classList.toggle("active");
});

// Get the text element
let text = document.querySelector(".rotate-text text p");

// Split the text content into an array of characters and apply rotation to each character
text.innerHTML = text.innerHTML.split("").map((char, i) => {
    // Rotate each character by a certain degree based on its index
    return `<b style="transform:rotate(${i * 100}deg)">${char}</b>`;
}).join("");

// Get all buttons with the class 'about-btn'
const buttons = document.querySelectorAll(".about-btn button");

// Get all elements with the class 'content'
const contents = document.querySelectorAll(".content");

// Add a click event listener to each button
// buttons.forEach((button, index) => {
    // button.addEventListener('click', () => {
        // Hide all content elements
        // contents.forEach(content => content.style.display = 'none');
        
        // Display the content element corresponding to the clicked button
        // contents[index].style.display = 'block';
        
        // Remove the 'active' class from all buttons
        // buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add the 'active' class to the clicked button
        // button.classList.add('active');
    // });
// });

function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(contentId).style.display= 'block';
}

// Update the URL hash to reflect the current content
window.location.hash = contentId;

 // Function to handle page load
 window.onload = function () {
    // Check if there's a hash in the URL
    const hash = window.location.hash.substring(1);
    
    if (hash) {
        // If a hash exists, show the corresponding content
        showContent(hash);
    } else {
        // If no hash, default to showing skills
        showContent('skills');
    }
};
