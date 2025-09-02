// Simple form message
const form = document.getElementById('contactForm');
const response = document.getElementById('response');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  response.textContent = "Thanks for contacting me! I'll get back to you soon.";
  form.reset();
});
