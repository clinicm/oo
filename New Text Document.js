<script>
 function whatsapp() {
      
     var name = document.getElementById("name").value;
     var phone = document.getElementById("phone").value;
     var email = document.getElementById("email").value;
     var message = document.getElementById("message").value;
  
     var url = "https://wa.me/%2B201154624698"
     + "Name: " + name + "%0a"
     + ",Phone: " + phone + "%0a"
     + ",Email: " + email  + "%0a"
     + ",Message: " + message; 
  
     window.open(url, '_blank').focus();
 }
 </script>