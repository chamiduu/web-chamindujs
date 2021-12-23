emailjs.init('user_dloeHZwDsUNj0KsKAOWQq');

window.onload = function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('chamindu_gmail', 'gmail', this)
          .then(function() {
              console.log('SUCCESS!');
              
              
          }, function(error) {
              console.log('FAILED...', error);
          });
          this.user_name.value = '';
                this.user_email.value = '';
                this.message.value = '';
  });
}