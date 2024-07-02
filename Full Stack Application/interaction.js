// Referring to the button element
const button_1 = document.querySelector('Home');
const button_2 = document.querySelector('About Us');
const button_3 = document.querySelector('Contact');

// Adds a click event listener.
button_1.addEventListener('click', function() {
    // Gets the element with the ID 'output'
    const output = document.getElementById('output');
    // Updates the elements's text
    output.textContent = 'Home Button Clicked!';
});

button_2.addEventListener('click', function() {
    // Gets the element with the ID 'output'
    const output = document.getElementById('output');
    // Updates the elements's text
    output.textContent = 'About Us Button Clicked!';
});

button_3.addEventListener('click', function() {
    // Gets the element with the ID 'output'
    const output = document.getElementById('output');
    // Updates the elements's text
    output.textContent = 'Contact Button Clicked!';
});
