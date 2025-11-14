document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('forgotForm');
      const emailInput = document.getElementById('email');
      const successMessage = document.getElementById('successMessage');
      const errorMessage = document.getElementById('errorMessage');
      const errorText = document.getElementById('errorText');
      const submitBtn = form.querySelector('.submit-btn');

      // Animação de entrada
      const forgotCard = document.querySelector('.forgot-card');
      const infoCards = document.querySelectorAll('.info-card');
      
      setTimeout(() => {
        forgotCard.classList.add('visible');
      }, 100);

      infoCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, 300 + (index * 100));
      });

      // Animação nos inputs ao focar
      const inputField = document.querySelector('.input-field');
      const input = inputField.querySelector('input');

      input.addEventListener('focus', function() {
        inputField.classList.add('focused');
      });

      input.addEventListener('blur', function() {
        if (this.value === '') {
          inputField.classList.remove('focused');
        }
      });

      // Validação de email em tempo real
      emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
          inputField.classList.add('error');
        } else {
          inputField.classList.remove('error');
        }
      });

      // Submit do formulário
      form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validação
        if (!email) {
          showError('Por favor, digite seu email');
          return;
        }

        if (!emailRegex.test(email)) {
          showError('Por favor, digite um email válido');
          return;
        }

        // Adiciona loading ao botão
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simula envio do email (substitua com sua lógica real)
        try {
          // Aqui você colocaria a chamada real para sua API/Firebase
          await new Promise(resolve => setTimeout(resolve, 2000));

          // Simula sucesso (80% de chance)
          const success = Math.random() > 0.2;

          if (success) {
            showSuccess();
            emailInput.value = '';
            inputField.classList.remove('focused');
          } else {
            showError('Email não encontrado em nossa base de dados');
          }
        } catch (error) {
          showError('Erro ao processar solicitação. Tente novamente.');
        } finally {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
        }
      });

      // Função para mostrar mensagem de sucesso
      function showSuccess() {
        errorMessage.classList.remove('show');
        successMessage.classList.add('show');
        
        setTimeout(() => {
          successMessage.classList.remove('show');
        }, 5000);
      }

      // Função para mostrar mensagem de erro
      function showError(message) {
        errorText.textContent = message;
        successMessage.classList.remove('show');
        errorMessage.classList.add('show');
        
        setTimeout(() => {
          errorMessage.classList.remove('show');
        }, 5000);
      }

      // Ripple effect nos links
      const optionLinks = document.querySelectorAll('.option-link');
      optionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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