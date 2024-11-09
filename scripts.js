document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // You can handle form submission here (e.g., send data to a server)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Optionally, reset the form
    document.getElementById('contact-form').reset();
  });
  