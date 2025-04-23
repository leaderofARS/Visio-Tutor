// Password visibility toggle
function togglePasswordVisibility(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(iconId);
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        toggleIcon.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

// Password strength meter functionality
function updatePasswordStrength(password) {
    const strengthMeter = document.getElementById('password-strength-meter');
    const strengthText = document.getElementById('password-strength-text');
    
    if (!strengthMeter || !strengthText) return;
    
    // Calculate password strength
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Character variety checks
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase
    if (/[a-z]/.test(password)) strength += 1; // Lowercase
    if (/[0-9]/.test(password)) strength += 1; // Numbers
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Special characters
    
    // Update the strength meter
    const percent = (strength / 6) * 100;
    strengthMeter.style.width = `${percent}%`;
    
    // Update color and text based on strength
    if (strength < 2) {
        strengthMeter.style.backgroundColor = '#ef4444'; // Red
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#ef4444';
    } else if (strength < 4) {
        strengthMeter.style.backgroundColor = '#f97316'; // Orange
        strengthText.textContent = 'Moderate';
        strengthText.style.color = '#f97316';
    } else if (strength < 6) {
        strengthMeter.style.backgroundColor = '#3b82f6'; // Blue
        strengthText.textContent = 'Good';
        strengthText.style.color = '#3b82f6';
    } else {
        strengthMeter.style.backgroundColor = '#10b981'; // Green
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#10b981';
    }
}

// Initialize password strength meter on signup page
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    
    // Add event listeners for password strength meter
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            updatePasswordStrength(this.value);
        });
    }
    
    // Add event listeners for password validation
    if (passwordInput && confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            if (this.value !== passwordInput.value) {
                this.setCustomValidity('Passwords do not match');
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    // Initialize show/hide password buttons
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const iconId = this.getAttribute('id');
            togglePasswordVisibility(targetId, iconId);
        });
    });
});

// Handle social authentication options
document.addEventListener('DOMContentLoaded', function() {
    const googleAuth = document.getElementById('google-auth');
    const appleAuth = document.getElementById('apple-auth');
    
    if (googleAuth) {
        googleAuth.addEventListener('click', function(e) {
            e.preventDefault();
            // This would be replaced with actual Google OAuth implementation
            console.log('Google authentication initiated');
            // window.location.href = '/auth/google';
        });
    }
    
    if (appleAuth) {
        appleAuth.addEventListener('click', function(e) {
            e.preventDefault();
            // This would be replaced with actual Apple OAuth implementation
            console.log('Apple authentication initiated');
            // window.location.href = '/auth/apple';
        });
    }
});

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('remember-me').checked;
            
            // This would be replaced with actual login API call
            console.log('Login submitted:', { email, password, rememberMe });
            // simulateLogin(email, password, rememberMe);
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const agreeTerms = document.getElementById('agree-terms').checked;
            
            // This would be replaced with actual signup API call
            console.log('Signup submitted:', { firstName, lastName, email, password, agreeTerms });
            // simulateSignup(firstName, lastName, email, password, agreeTerms);
        });
    }
});

// Function to simulate successful authentication (demo purposes only)
function simulateAuthSuccess(isLogin = true) {
    // Show success message
    const messageContainer = document.createElement('div');
    messageContainer.className = 'auth-success-message';
    messageContainer.textContent = isLogin ? 'Login successful! Redirecting...' : 'Account created successfully! Redirecting...';
    document.querySelector('.auth-form').appendChild(messageContainer);
    
    // Redirect after delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
} 