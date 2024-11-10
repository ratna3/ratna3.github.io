// Add event listener to the contact form for submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const description = document.getElementById('description').value;
  
  // Handle form submission here (e.g., send data to a server)
  // For now, we'll simply show an alert message
  alert(`Thank you, ${name}! Your message has been sent.`);
  
  // Optionally, reset the form after submission
  document.getElementById('contact-form').reset();
});
