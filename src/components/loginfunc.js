
console.log('lkspoiajsd');

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }

var fType = getUrlVars()["type"];

alert('oiasjd');
console.log("ljansdkjnsd");

/*


const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === "admin" && password === "admin") {
            alert("aosdlksjad");
            window.location.replace("http://localhost:3000/create");

        } else {
            loginErrorMsg.style.opacity = 1;
    }
        
}) const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === "admin" && password === "admin") {
            window.location.replace("http://localhost:3000/create");

        } else {
            loginErrorMsg.style.opacity = 1;
    }
})

*/