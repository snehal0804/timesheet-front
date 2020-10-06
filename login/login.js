
      const loginForm = document.getElementById("login");
const loginButton = document.getElementById("btn");
const loginErrorMsg = document.getElementById("error");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const Uname = loginForm.Uname.value;
    const Pass = loginForm.Pass.value;

    if (Uname === "user" && Pass === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})