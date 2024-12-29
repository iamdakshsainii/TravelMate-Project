// Function to show the popup and pass the booking URL
function openPopup(url) {
    window.bookingUrl = url;  // Store the booking URL for later use
    document.getElementById('popup').style.display = 'block';  // Show the popup
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';  // Hide the popup
    }
}
    // Function to show popup with URL passed as argument
    function showPopup(url) {
        document.getElementById('popup').style.display = 'flex';
        // Store the URL to redirect after user chooses a booking site
        window.bookingUrl = url;
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}