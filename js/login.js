document.addEventListener('DOMContentLoaded', () => {
      // Login com Google
      const btnGoogle = document.getElementById('btn-google');
      if (btnGoogle && typeof googleLogin === 'function') {
        btnGoogle.addEventListener('click', (e) => {
          e.preventDefault();
          googleLogin();
        });
      }

      // Toggle Password Visibility
      const togglePassword = document.querySelector('.toggle-password');
      const passwordInput = document.getElementById('password');
      const eyeShow = document.querySelector('.eye-icon.show');
      const eyeHide = document.querySelector('.eye-icon.hide');

      if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordInput.setAttribute('type', type);
          
          eyeShow.style.display = type === 'password' ? 'block' : 'none';
          eyeHide.style.display = type === 'password' ? 'none' : 'block';
        });
      }

      // Animação nos inputs ao focar
      const inputs = document.querySelectorAll('.input-field input');
      inputs.forEach(input => {
        input.addEventListener('focus', function() {
          this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
          if (this.value === '') {
            this.parentElement.classList.remove('focused');
          }
        });

        // Mantém focused se já tiver valor
        if (input.value !== '') {
          input.parentElement.classList.add('focused');
        }
      });

      // Animação de entrada
      const loginCard = document.querySelector('.login-card');
      const infoCards = document.querySelectorAll('.info-card');
      
      setTimeout(() => {
        loginCard.classList.add('visible');
      }, 100);

      infoCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, 300 + (index * 100));
      });

      // Ripple effect nos botões sociais
      const socialBtns = document.querySelectorAll('.social-btn, .social-icon');
      socialBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
          const ripple = document.createElement('span');
          const rect = this.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;
          
          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = x + 'px';
          ripple.style.top = y + 'px';
          ripple.classList.add('ripple-effect');
          
          this.appendChild(ripple);
          
          setTimeout(() => ripple.remove(), 600);
        });
      });
    });