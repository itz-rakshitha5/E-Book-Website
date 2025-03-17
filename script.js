document.addEventListener("DOMContentLoaded", function () {
    let signInBtn = document.querySelector("#sign_in_button");
    let signUpBtn = document.querySelector("#sign_up_button");
    let signInForm = document.querySelector(".sign_in_box");
    let signUpForm = document.querySelector(".sign_up_box");

    signInBtn.onclick = function () {
        signInForm.style.display = "block";
        signUpForm.style.display = "none";
    };

    signUpBtn.onclick = function () {
        signInForm.style.display = "none";
        signUpForm.style.display = "block";
    };
});
