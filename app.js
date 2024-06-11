
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Log the data that will be sent
  console.log("Sending email with data:", { from_name: name, from_email: email, message: message });

  emailjs.send("service_qtdr5vj", "template_30g3niv", {
    from_name: name,
    from_email: email,
    message: message,
  })
  .then(function(response) {
    console.log("Email sent successfully:", response);
    alert("Your message has been sent successfully!");
    showPopup(); // Show the popup on successful email sending
  })
  .catch(function(error) {
    console.error("Email failed to send:", error);

    // Check the error status to determine the source of the issue
    if (error.status === 404) {
      alert("Oops! The Email.js API endpoint was not found. Please check your service ID and template ID.");
    } else {
      alert("Oops! There was an error sending your message. Please try again later.");
    }
  });
}
// Function to handle LinkedIn click
function handleLinkedInClick() {
    alert("I'm sorry, I don't have a LinkedIn profile because I'm not yet 18. Thank you for your understanding.");
}
function handleContactClick() {
  alert("I'm sorry, Contact me form has been taken down for improvements. It will be there soon please contact via github or mail at mzkhan886@gmail.com");
}
// Function to handle Twitter click
function handleTwitterClick() {
    alert("No public Twitter account active. Thank you for your understanding.");
}

// Get the LinkedIn and Twitter elements
var linkedin = document.querySelector('.red img[alt="Linkedin"]');
var twitter = document.querySelector('.red img[alt="Twitter"]');

// Add event listeners
if (linkedin) {
    linkedin.addEventListener('click', handleLinkedInClick);
}

if (twitter) {
    twitter.addEventListener('click', handleTwitterClick);
}
//Name hover// Get the element
var nameElement = document.getElementById("nameHover");

// Define the full name
var fullName = "Muhammad Zahooruddin Nizamani";

// Variable to track hover timeout
var hoverTimeout;

// Event listener for mouse hover
nameElement.addEventListener("mouseover", function() {
    // Delay the change in text using setTimeout
    hoverTimeout = setTimeout(function() {
        // Change the text to the full name
        nameElement.textContent = fullName;
    }, 400); // 0.4 seconds delay
});

// Event listener for mouse out (hover out)
nameElement.addEventListener("mouseout", function() {
    // Clear the timeout if the mouse leaves before the delay
    clearTimeout(hoverTimeout);
    // Change the text back to the original name
    nameElement.textContent = "Zahooruddin";
});
