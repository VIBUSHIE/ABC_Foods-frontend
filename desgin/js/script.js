let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}

function loader(){
   document.querySelector('.loader').style.display = 'none';
}


// UDD USER Function
function saveUser() {
    let name = $('#namereg').val();
    let email = $('#emailreg').val();
    let mobile = $('#mobilereg').val();
    let password = $('#passwordreg').val();

    if (name.trim() !== "" || email.trim() !== "" || password.trim() !== "") {
        $.ajax({
            method: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/user/saveuser",
            async: true,
            data: JSON.stringify({
                "id": "",
                "name": name,
                "email": email,
                "mobile": mobile,
                "password": password
            }),
            success: function (data) {
                alert("User Registered...");
            },
            error: function (xhr, exception) {
                alert("Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}

function userLogin() {
    let email = $('#loginemail').val().trim();
    let password = $('#loginpass').val().trim();

    // Admin login condition
    if (email === "Admin@gmail.com" && password === "123") {
        alert("Admin logged in successfully...");
        window.location.href = "adminpage.html";
    }
    // Non-admin login condition
    else if (email !== "" && password !== "") {
        $.ajax({
            method: "GET",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/user/getEmailAndPassword/" + email + "/" + password,
            async: true,
            success: function (data) {
                alert("User logged in successfully...");
                window.location.href = "index.html";
            },
            error: function (xhr, exception) {
                alert("Login failed...");
            }
        });
    }
    // Validation for empty fields
    else {
        alert("Fields cannot be empty!");
    }
}



// ADD Reservation

function AddReservation() {
    let name = $('#rname').val();
    let time = $('#rtime').val();
    let date = $('#rdate').val();
    let phone = $('#rphone').val();
    let persons_count = $('#rpcount').val();
    let massege = $('#rmsg').val();

    if (name.trim() !== "" || phone.trim() !== "" || date.trim() !== "") {
        $.ajax({
            method: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/reservation/saveReservation",
            async: true,
            data: JSON.stringify({
                "id": "",
                "name": name,
                "time": time,
                "date": date,
                "phone": phone,
                "persons_count": persons_count,
                "massege": massege
            }),
            success: function (data) {
                alert("Reservation Booked...");
            },
            error: function (xhr, exception) {
                alert("Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}





