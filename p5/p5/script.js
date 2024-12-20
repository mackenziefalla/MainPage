document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the click count from localStorage, or initialize it to 0 if not found
    let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

    // Display the current click count
    document.getElementById('click-count').textContent = 'Links Clicked: ' + clickCount;

    // Get all the links inside the list
    document.querySelectorAll('ul li a').forEach(function(link) {
        link.addEventListener('click', function() {
            // Increment the click count when a link is clicked
            clickCount++;

            // Save the updated click count to localStorage
            localStorage.setItem('clickCount', clickCount);

            // Update the displayed click count
            document.getElementById('click-count').textContent = 'Links Clicked: ' + clickCount;
        });
    });
});
