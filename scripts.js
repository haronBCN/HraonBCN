document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const loginPopup = document.getElementById('login-popup');
    const closePopup = document.getElementById('close-login-popup');
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginBtn.addEventListener('click', () => {
        loginPopup.style.display = 'flex'; // Affiche le popup
    });

    closePopup.addEventListener('click', () => {
        loginPopup.style.display = 'none'; // Cache le popup
    });

    loginPopup.addEventListener('click', (e) => {
        if (e.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
    });

    // Validation du mot de passe
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('password').value;

        if (password === 'codingschool24') {
            alert('Connexion réussie !');
            loginPopup.style.display = 'none'; // Cache le popup
            window.location.href = 'index2.html'; // Redirige vers le deuxième portfolio
        } else {
            errorMessage.textContent = 'Mot de passe incorrect. Veuillez réessayer.';
        }
    });

    // Bouton "Log Out"
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        alert('Déconnecté !');
        window.location.href = 'index.html'; // Redirige vers index.html
    });
}
});

  
let index = 0;
  let charIndex = 0;
  
  function typeText() {
    const element = document.getElementById("typewriter");
    if (charIndex < typewriterText[index].length) {
      element.textContent += typewriterText[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(() => {
        element.textContent = "";
        charIndex = 0;
        index = (index + 1) % typewriterText.length;
        typeText();
      }, 2000);
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    typeText();
    
    const contactForm = document.querySelector('#contact form');
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Validation dynamique des champs
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.type === 'email') {
                if (validateEmail(this.value)) {
                    this.classList.add('valid');
                    this.classList.remove('invalid');
                } else {
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                }
            } else {
                if (this.value.trim() !== '') {
                    this.classList.add('valid');
                    this.classList.remove('invalid');
                } else {
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                }
            }
        });
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;
        inputs.forEach(input => {
            if (input.type === 'email') {
                if (!validateEmail(input.value)) {
                    input.classList.add('invalid');
                    isValid = false;
                }
            } else if (input.value.trim() === '') {
                input.classList.add('invalid');
                isValid = false;
            }
        });

        if (isValid) {
            alert('Formulaire valide ! Envoyé !');
            contactForm.reset();
            inputs.forEach(input => input.classList.remove('valid', 'invalid'));
        } else {
            alert('Veuillez remplir correctement tous les champs.');
        }
    });
});