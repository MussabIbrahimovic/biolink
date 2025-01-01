// Example script.js for handling form validation and interactivity on a bio-link website

document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission for bio update
    const bioForm = document.querySelector("form[action='/update_bio']");
    if (bioForm) {
        bioForm.addEventListener("submit", function(event) {
            const bioLinkInput = document.querySelector("textarea[name='bio_link']");
            
            if (!bioLinkInput.value.trim()) {
                alert("Please enter a bio link!");
                event.preventDefault();  // Prevent form submission if empty
            }
        });
    }

    // Handle login form validation
    const loginForm = document.querySelector("form[action='/login']");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            const usernameInput = document.querySelector("input[name='username']");
            const passwordInput = document.querySelector("input[name='password']");
            
            if (!usernameInput.value.trim() || !passwordInput.value.trim()) {
                alert("Both fields are required!");
                event.preventDefault();  // Prevent form submission if fields are empty
            }
        });
    }

    // Handle registration form validation
    const registerForm = document.querySelector("form[action='/register']");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            const usernameInput = document.querySelector("input[name='username']");
            const passwordInput = document.querySelector("input[name='password']");
            
            if (!usernameInput.value.trim() || !passwordInput.value.trim()) {
                alert("Both fields are required!");
                event.preventDefault();  // Prevent form submission if fields are empty
            }
        });
    }
});
