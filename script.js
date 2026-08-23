
function signup(event) {
    event.preventDefault();

    let email = document.getElementById("signupEmail").value;

    localStorage.setItem("userEmail", email);

    alert("Account created!");

    location.href = "Login.html";
}

function login(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let savedEmail = localStorage.getItem("userEmail");

    if (email === savedEmail) {
        alert("Login successful!");
        location.href = "Third.html";
    } else {
        alert("Invalid email");
    }
}