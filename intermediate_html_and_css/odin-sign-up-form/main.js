document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.getElementById("form");
  
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let senha1 = document.getElementById("password").value;
      let senha2 = document.getElementById("confirmpassword").value;
  
      if (senha1 === senha2) {
        document.getElementById("error").textContent = "";
        formulario.submit();
      } else {
        let passwordBox = document.getElementById('password');
        let confirmBox = document.getElementById('confirmpassword');
        passwordBox.classList.add('error-box');
        confirmBox.classList.add('error-box');
        document.getElementById("error").textContent = "*Passwords do not match.";
      }
    });
  });