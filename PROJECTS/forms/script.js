document.getElementById("signUpForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var message = document.getElementById("message")

    console.log(password.length)
   
    if (username == "" || password == "" || email == ""){
        message.textContent = "All input fields need to be filled"
        return;
    }
    else{
        if(password.length < 8){
            message.textContent = "Password is too short"
            return;
        }
        message.style.color = 'green'
        message.textContent = "you have signed up successfuly"
    document.getElementById("signUpForm").reset()

        return;
        
    }
    

}
)
