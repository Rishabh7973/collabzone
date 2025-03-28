
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', async () => {
    container.classList.add("sign-up-mode");

    // Example: Send a request to the backend for sign-up
    try {
        const response = await fetch('http://localhost:8000/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ /* Add sign-up data here */ }),
        });
        const data = await response.json();
        console.log('Sign-up response:', data);
    } catch (error) {
        console.error('Error during sign-up:', error);
    }
});

sign_in_btn.addEventListener('click', async () => {
    container.classList.remove("sign-up-mode");

    // Example: Send a request to the backend for sign-in
    try {
        const response = await fetch('http://localhost:8000/api/v1/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ /* Add sign-in data here */ }),
        });
        const data = await response.json();
        console.log('Sign-in response:', data);
        // Redirect to another page after successful login
        window.location.href = 'event.html'; 
    } catch (error) {
        console.error('Error during sign-in:', error);
    }
});

document.querySelector('.sign-up-form').addEventListener('submit', function (e) {
    const emailInput = this.querySelector('input[type="email"]');
    emailInput.value = emailInput.value.toLowerCase(); // Convert to lowercase before submission
  });