    //smoothly transition from user password choice
// Select all choice buttons
const choiceButtons = document.querySelectorAll('.choice-btn');

// Set up event listeners for each button
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the 'active' class from all buttons
        choiceButtons.forEach(btn => btn.classList.remove('active'));

        // Add the 'active' class to the clicked button
        button.classList.add('active');
    });
});
    

    //this will change the value for the password-length-slider
// Select the slider and the span for displaying the value
const slider = document.getElementById("range");
const output = document.getElementById("slider-value");

// Update the span with the slider's initial value
output.textContent = slider.value;

// Add an event listener to update the value as the slider is moved
slider.addEventListener("input", () => {
    output.textContent = slider.value;
});


    // moves the height on the container based on user choice
const container = document.querySelector('.container-for-user-choice');
const randomButton = document.getElementById('Random-password');
const pinButton = document.getElementById('Pin-password');

randomButton.addEventListener('click', () => {
    container.classList.add('random-active');
    container.classList.remove('pin-active'); // Remove PIN-specific styles
});

pinButton.addEventListener('click', () => {
    container.classList.remove('random-active'); // Remove Random-specific styles
    container.classList.add('pin-active');
});



    //this will make the checboxes(in the container) disappear when choosing PIN # option
document.addEventListener("DOMContentLoaded", () => {
    const randomBtn = document.getElementById("random-btn");
    const pinBtn = document.getElementById("pin-btn");
    const checkboxSection = document.getElementById("checkbox-section");
    const thirdUnderline = document.getElementById("third-underline");
    const container = document.querySelector(".container-for-user-choice");

    // Event listener for the "Random" button
    randomBtn.addEventListener("click", () => {
        checkboxSection.style.display = "flex"; // Show checkboxes
        thirdUnderline.style.display = "block"; // Show underline
        container.style.height = "100vh"; // Reset height
        randomBtn.classList.add("active");
        pinBtn.classList.remove("active");
    });

    // Event listener for the "PIN #" button
    pinBtn.addEventListener("click", () => {
        checkboxSection.style.display = "none"; // Hide checkboxes
        thirdUnderline.style.display = "none"; // Hide underline
        container.style.height = "85vh"; // Shorten height
        pinBtn.classList.add("active");
        randomBtn.classList.remove("active");
    });
});


//generates the final password, taking into account user preferences
document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const generateBtn = document.getElementById("generate-another-password-btn");
    const passwordBox = document.querySelector(".final-password-box");
    const slider = document.getElementById("range");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const pinButton = document.getElementById("pin-btn"); // For PIN option
    const randomButton = document.getElementById("random-btn"); // For Random option

    // Character sets
    const charSets = {
        numbers: "0123456789",
        symbols: "!@#$%*&()_?",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz"
    };

    // Generate password on button click
    generateBtn.addEventListener("click", () => {
        const length = parseInt(slider.value, 10); // Password length
        let charPool = "";

        // Check if the PIN # button is active
        if (pinButton.classList.contains("active")) {
            charPool = charSets.numbers; // Use only numbers for PIN
        } else if (randomButton.classList.contains("active")) {
            // Build character pool based on user choices
            if (numbersCheckbox.checked) charPool += charSets.numbers;
            if (symbolsCheckbox.checked) charPool += charSets.symbols;
            if (uppercaseCheckbox.checked) charPool += charSets.uppercase;
            if (lowercaseCheckbox.checked) charPool += charSets.lowercase;
        }

        // Ensure the character pool is not empty
        if (charPool.length === 0) {
            return;
        }

        // Generate random password
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            password += charPool[randomIndex];
        }

        // Display password in the box
        passwordBox.textContent = password;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const copyBtn = document.getElementById("copy-password-btn");
    const passwordBox = document.querySelector(".final-password-box");

    // Event listener for the "Copy" button
    copyBtn.addEventListener("click", () => {
        const password = passwordBox.textContent.trim(); // Get the password text

        if (password) {
            // Copy password to clipboard
            navigator.clipboard.writeText(password).then(() => {
                alert("Password copied to clipboard!");
            }).catch(err => {
                alert("Failed to copy password. Please try again.");
                console.error("Copy error:", err);
            });
        } else {
            alert("No password to copy! Generate a password first.");
        }
    });
});
