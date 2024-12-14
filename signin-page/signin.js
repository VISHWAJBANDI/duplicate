
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



    toggleVisibility('pswrd', 'repswd');
const login = document.querySelector("#login");


login.addEventListener("submit", (e) => {
    e.preventDefault();

    let a = document.getElementById("email").value.trim();
    let b = document.getElementById("pswrd").value.trim();
   
    
    if(a===""&&b===""){
        alert("Please Enter The Email and Password To Continue")
    }else{

    const allAdminsdata = JSON.parse(localStorage.getItem("user")) || [];
    console.log(allAdminsdata); 

    const all = allAdminsdata.find(x => x.email === a && x.pswd === b); 
    console.log(all);  

    if (all) {
        console.log("Logged in successfully");
        window.location.href = "../weather-project/home-page.html";
    } else {
        alert("Login failed. Please Enter Valid Credentials.");
    }
}
});
