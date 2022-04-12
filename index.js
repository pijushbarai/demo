var signupDiv = document.getElementById("signup");
var loginDiv = document.getElementById("login");

document.getElementById("loginInSignup").addEventListener("click", ()=>{
    signupDiv.style.display = "none";
    loginDiv.style.display = "inline";
})

document.getElementById("signupInLogin").addEventListener("click", ()=> {
    loginDiv.style.display = "none";
    signupDiv.style.display = "inline";
})