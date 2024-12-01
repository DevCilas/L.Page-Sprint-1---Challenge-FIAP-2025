// Smooth Scrolling
function smoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = smoothScroll;
  });


// Accordion

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const textElement = document.getElementById(targetId);
        if (textElement.style.display === 'block') {
            textElement.style.display = 'none';
            button.textContent = button.textContent.replace('v', '>'); 
        } else {
            textElement.style.display = 'block';
            button.textContent = button.textContent.replace('>', 'v'); 
        }
    });
});


// Validar Contatos

function submitContato() {
    const username = document.getElementById('nome').value.trim(); 
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('telefone').value.trim();

    let validar = true;
    const usernameVerify = /([0-9_&\-\.\,\!\?@']+)/g; // Uma maluquice que verifica nome
    const emailVerify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Outra maluquice pra email
    const phoneVerify = /^(\(?\d{2}\)?\s?)?\d{4,5}[-]?\d{4}$/; // Essa aqui nn pede por "+55"

    if (!username || !email || !phoneNumber) {
        alert('Preencha todos os campos!');
        validar = false;
    } 

    else if (usernameVerify.test(username)) {
        alert('Por favor, insira um nome válido!');
        validar = false;
    }

    else if (!emailVerify.test(email)) {
        alert('Por favor, insira um email válido!');
        validar = false;
    } 

    else if (!phoneVerify.test(phoneNumber)) {
        alert('Por favor, insira um número válido!');
        validar = false;
    }

    if (validar) {
        alert(`
            Contato enviado com sucesso!
            Nome: ${username}
            Email: ${email}
            Número de telefone: ${phoneNumber}    
        `);
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
    }
}