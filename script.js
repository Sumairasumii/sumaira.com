// function sendMail(){
				
//     let parms = {
       
//         from_name : document.getElementById("name").value,
//         email_id : document.getElementById("email").value,	
//         message : document.getElementById("message").value
//     }
//     emailjs.send("service_hvpbh6x","template_7rz3wof",parms).then(alert("Email Sent !"));

    
//     let clear = document.getElementById("myFoam").reset();
    
// }
(function() {
    emailjs.init("2mA0lvLU-9vZ2Db5h"); // Initialize with public key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    let formData = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("your-message").value
    };

    // Send email using EmailJS
    emailjs.send("service_hvpbh6x", "template_7rz3wof", formData)
        .then(function(response) {
            alert("Email Sent!");
            // Reset the form after sending
            document.getElementById("contactForm").reset();
        }, function(error) {
            alert("Failed to send email. Please try again.");
        });
});


