        //function that will constantly check user input for password strength
document.getElementById("main-body-user-input-input").addEventListener("input", function () {
    const password = this.value;
    const strengthIndicator = document.getElementById("strength-level");
    
    // Password strength criteria
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const lengthCriteria = password.length >= 10;

    // Determine strength
    let strength = "Weak";
    let strengthScore = 0;

    if(hasUpperCase) strengthScore++
    if(hasLowerCase) strengthScore++
    if(hasNumbers) strengthScore++
    if(hasSpecialChars) strengthScore++
    if(lengthCriteria) strengthScore++  

    // Map score to strength level
    if (strengthScore < 3) {
        strength = "Weak";
    } else if (strengthScore < 4){
        strength = "Medium";
    } else if(strengthScore < 5){
        strength = "Strong"
    } else {
        strength = "Very Strong"
    }

    // Update strength indicator
    strengthIndicator.textContent = strength;

    // Optionally change the text color based on strength
    switch (strength) {
        case "Weak":
            strengthIndicator.style.color = "red";
            strengthIndicator.style.fontWeight = "bold"
            break;
        case "Medium":
            strengthIndicator.style.color = "orange";
            strengthIndicator.style.fontWeight = "bold"
            break;
        case "Strong":
            strengthIndicator.style.color = "green";
            strengthIndicator.style.fontWeight = "bold"
            break;
        case "Very Strong":
            strengthIndicator.style.color = "blue";
            strengthIndicator.style.fontWeight = "bold"
            break;
    }
});
