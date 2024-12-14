
function toggleVisibility(pswdId, IconId) {
    const a = document.getElementById(pswdId);
    const b = document.getElementById(IconId);


    b.addEventListener('click', function () {
        if (a.type === 'password') {
            a.type = 'text';
            b.classList.remove('fa-eye');
           b.classList.add('fa-eye-slash'); // Change icon to 'Hide'
        } else {
            a.type = 'password';
            b.classList.remove('fa-eye-slash');
            b.classList.add('fa-eye'); // Change icon to 'Show'
        }
    });
}



    toggleVisibility('pswd', 'repswd');
    toggleVisibility('confirmpswd', 'reconfirmpswd');



document.querySelector("#signup").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pswd").value.trim();
    const confirmpswrd = document.getElementById("confirmpswd").value.trim();

    let isValid = true;
    let errorMessage = "";
   

    
    if (username.length < 3) {
        isValid = false;
        errorMessage += "1)Username must be at least 3 characters.\n";
    }

   
    const emailReject = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReject.test(email)) {
        isValid = false;
        errorMessage += "2)Enter a valid email address.\n";
    }

   
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%?&])[A-Za-z\d@$!%?&]{6,}$/;
    if (!passwordPattern.test(password)) {
        isValid = false;
        errorMessage +=
            "3)Password must be at least 6 characters, with uppercase, lowercase, number, and special character.\n";
    }

    
    if (password !== confirmpswrd) {
        isValid = false;
        errorMessage += "4)Passwords do not match.\n";
    }

    if (!isValid) {
        alert(errorMessage);
        return;
    }
    const allAdmins = JSON.parse(localStorage.getItem("user")) || [];
    const existingUser = allAdmins.find((admin) => admin.email === email);
    if (existingUser) {
        alert("User already exists!");
        return;
    }

    allAdmins.push({ name: username, email: email, pswd: password });
    localStorage.setItem("user", JSON.stringify(allAdmins));
   
    
    window.location.href = "../signin-page/signin.html";
    
});
