const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('userr');
const passwordError = document.getElementById('passs');
const submitBtn = document.getElementById('btn');



function validateUsername() {
    const username = usernameInput.value.trim();

    if (username === '') {
        usernameError.textContent = 'Username cannot be empty.';
        return false;
    } else if (username.length < 4) {
        usernameError.textContent = 'Username cannot be less than 4 characters.';
        return false;
    } else if (!isNaN(username)) {
        usernameError.textContent = 'Username cannot be numeric.';
        return false;
    } else {
        usernameError.textContent = '';
        return true;
    }
}


function validatePassword() {
    const password = passwordInput.value.trim();

    if (password === '') {
        passwordError.textContent = 'Password cannot be empty.';
        return false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password cannot have less than 8 characters.';
        return false;
    } else if (password.search(/[0-9]/)==-1) {
        passwordError.textContent = 'Password must have one number';
        return false;
    }
    else if (password.search(/[A_Z]/)==-1) {
        passwordError.textContent = 'Password must have one Upper Case';
        return false;
    }
    else if (password.search(/[a-z]/)==-1) {
        passwordError.textContent = 'Password must have one Lower Case';
        return false;
    }
    else if (password.search(/[!\@\#\$\%\^\&\*\(\)]/)==-1) {
        passwordError.textContent = 'Password must have one Special Character';
        return false;
    }
    else {
        passwordError.textContent = '';
        return true;
    }
}


function validateForm() {
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();

    submitBtn.disabled = !(isUsernameValid  && isPasswordValid);
    return isUsernameValid  && isPasswordValid;
}

usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

document.getElementById('myForm').addEventListener('submit', function (e) {
    if (!validateForm()) {
        e.preventDefault(); // Prevent form submission if validation fails
    
    }
});


