const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Add event listener to the navigation toggle button
document.querySelector('.nav-toggle').addEventListener('click', () => {
  // Toggle the navigation menu
  document.querySelector('.nav-menu').classList.toggle('active');
});

// Add event listener to the window object to handle scroll events
window.addEventListener('scroll', () => {
  // Check if the window has scrolled beyond the hero section
  if (window.scrollY > document.querySelector('.hero').offsetHeight) {
    // Add a class to the navigation bar to make it sticky
    document.querySelector('.nav').classList.add('sticky');
  } else {
    // Remove the class from the navigation bar
    document.querySelector('.nav').classList.remove('sticky');
  }
});

// Get the modal window and its content
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal-content');

// Get the close button
var closeButton = document.querySelector('.close');

// Add event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the modal window
  modal.style.display = 'none';
});

// Add event listener to the window object to handle click events
window.addEventListener('click', (e) => {
  // Check if the click was outside the modal content
  if (e.target == modal) {
    // Hide the modal window
    modal.style.display = 'none';
  }
});

// Add event listener to the navigation menu to open the modal window
document.querySelector('.nav-menu').addEventListener('click', () => {
  // Show the modal window
  modal.style.display = 'block';
});

// Get the contact form
var form = document.querySelector('.contact form');

// Add event listener to the form submission
form.addEventListener('submit', (e) => {
  // Prevent default form submission
  e.preventDefault();
  
  // Get the form data
  var name = document.querySelector('.contact input[name="name"]').value;
  var email = document.querySelector('.contact input[name="email"]').value;
  var message = document.querySelector('.contact textarea').value;
  
  // Send the form data to a server or perform some action
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});

// Account creation form
var createAccountForm = document.querySelector('.account-creation form');
createAccountForm.addEventListener('submit', (e) => {
  e.preventDefault();
  var username = document.querySelector('.account-creation input[name="username"]').value;
  var email = document.querySelector('.account-creation input[name="email"]').value;
  var password = document.querySelector('.account-creation input[name="password"]').value;
  var confirmPassword = document.querySelector('.account-creation input[name="confirmPassword"]').value;
  
  // Validate form data and create account
  if (password === confirmPassword) {
    // Create account logic goes here
    console.log(`Account created for ${username} with email ${email}`);
  } else {
    console.log('Passwords do not match');
  }
});

// Login form
var loginForm = document.querySelector('.login form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  var email = document.querySelector('.login input[name="email"]').value;
  var password = document.querySelector('.login input[name="password"]').value;
  
  // Form validation
  if (email && password) {
    // Authentication logic
    if (authenticate(email, password)) {
      console.log(`Logged in as ${email}`);
    } else {
      console.log('Invalid email or password');
    }
  } else {
    console.log('Please fill out all fields');
  }
});

// Password hashing function
function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}

// User credentials storage
var users = {
  "user1": "password1",
  "user2": "password2"
};

// Authentication function
function authenticate(email, password) {
  var hashedPassword = hashPassword(password);
  if (users[email] && users[email] === hashedPassword) {
    return true;
  } else {
    return false;
  }
}

// Account creation form
var createAccountForm = document.querySelector('.account-creation form');
createAccountForm.addEventListener('submit', (e) => {
  e.preventDefault();
  var email = document.querySelector('.account-creation input[name="email"]').value;
  var password = document.querySelector('.account-creation input[name="password"]').value;
  var confirmPassword = document.querySelector('.account-creation input[name="confirmPassword"]').value;
  
  // Form validation
  if (email && password && confirmPassword) {
    if (password === confirmPassword) {
      // Hash password
      var hashedPassword = hashPassword(password);
      
      // Create account logic goes here
      users[email] = hashedPassword;
      console.log(`Account created for ${email}`);
    } else {
      console.log('Passwords do not match');
    }
  } else {
    console.log('Please fill out all fields');
  }
});


