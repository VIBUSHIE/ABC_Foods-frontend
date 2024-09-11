// Load ALL Tables

getallUserstbl()
getallReservationstbl()
getallfeedbackstbl()
getallPaymentstbl()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////     USER PART     ///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VIEW ALL USERS
function getallUserstbl() {
    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/user/getusers",
        async: true,
        success: function (data) {
            $('#usertblbody').empty();
            for (let usr of data) {
                let usrid = usr.id;
                let usrname = usr.name;
                let usremail = usr.email;
                let usrmobile = usr.mobile;
                let usrpassword = usr.password;

                var row = `<tr>
                    <td>${usrid}</td>
                    <td>${usrname}</td>
                    <td>${usremail}</td>
                    <td>${usrmobile}</td>
                    <td>${usrpassword}</td>
                </tr>`;

                $('#usertblbody').append(row);
            }
        },
        error: function (xhr, exception) {
            alert("Error fetching users");
        }
    });
}

// UDD USER Function
function addUser() {
    let name = $('#usrname').val();
    let email = $('#usrname').val();
    let mobile = $('#usrmobile').val();
    let password = $('#usrpassword').val();

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
                alert("User Added...");
                getallUserstbl()
            },
            error: function (xhr, exception) {
                alert("Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}


// UPDATE USER Function
function updateUser() {
    let id = $('#usrid').val();
    let name = $('#usrname').val();
    let email = $('#usrname').val();
    let mobile = $('#usrmobile').val();
    let password = $('#usrpassword').val();

    if (name.trim() !== "" || email.trim() !== "" || password.trim() !== "") {
        $.ajax({
            method: "PUT",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/user/updateuser",
            async: true,
            data: JSON.stringify({
                "id": id,
                "name": name,
                "email": email,
                "mobile": mobile,
                "password": password
            }),
            success: function (data) {
                alert("User Updated...");
                getallUserstbl()
            },
            error: function (xhr, exception) {
                alert("Update Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}

// DELETE USER Function
function deleteUser() {
    let id = $('#usrid').val();

    if (id.trim() !== "") {
        $.ajax({
            method: "DELETE",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/user/deleteuser/"+id,
            async: true,
            success: function (data) {
                alert("User Deleted...");
                getallUserstbl()
            },
            error: function (xhr, exception) {
                alert("Delete Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}


$(document).ready(function () {
    $(document).on('click', '#usertblbody tr', function () {

        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();
        var col4 = $(this).find('td:eq(4)').text();

        $('#usrid').val(col0);
        $('#usrname').val(col1);
        $('#usremail').val(col2);
        $('#usrmobile').val(col3);
        $('#usrpassword').val(col4);
    });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////     RESERVATION PART     ///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VIEW ALL RESERVATIONS
function getallReservationstbl() {
    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/reservation/getReservations",
        async: true,
        success: function (data) {
            $('#reservationtblbody').empty();
            for (let res of data) {
                let resid = res.id;
                let resname = res.name;
                let resmassege = res.massege;
                let respcount = res.persons_count;
                let resphone = res.phone;
                let resdate = res.date;
                let restime = res.time;


                var row = `<tr>
                    <td>${resid}</td>
                    <td>${resname}</td>
                    <td>${resmassege}</td>
                    <td>${respcount}</td>
                    <td>${resphone}</td>
                    <td>${resdate}</td>
                    <td>${restime}</td>
                </tr>`;

                $('#reservationtblbody').append(row);
            }
        },
        error: function (xhr, exception) {
            alert("Error fetching users");
        }
    });
}


function updateReservation() {
    let id = $('#resid').val();
    let name = $('#resname').val();
    let massege = $('#resMassege').val();
    let pcount = $('#resPCount').val();
    let phone = $('#resPhone').val();
    let date = $('#resDate').val();
    let time = $('#resTime').val();

    if (name.trim() !== "" || phone.trim() !== "" || date.trim() !== "") {
        $.ajax({
            method: "PUT",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/reservation/updateReservation",
            async: true,
            data: JSON.stringify({
                "id": id,
                "name": name,
                "time": time,
                "date": date,
                "phone": phone,
                "persons_count": pcount,
                "massege": massege
            }),
            success: function (data) {
                alert("Reservation Updated...");
                getallReservationstbl();
            },
            error: function (xhr, exception) {
                alert("Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}


// DELETE Reservation Function
function deleteReservation() {
    let id = $('#resid').val();

    if (id.trim() !== "") {
        $.ajax({
            method: "DELETE",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/reservation/deleteReservation/"+id,
            async: true,
            success: function (data) {
                alert("Reservation Deleted...");
                getallReservationstbl();
            },
            error: function (xhr, exception) {
                alert("Delete Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}



$(document).ready(function () {
    $(document).on('click', '#reservationtblbody tr', function () {

        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();
        var col4 = $(this).find('td:eq(4)').text();
        var col5 = $(this).find('td:eq(5)').text();
        var col6 = $(this).find('td:eq(6)').text();

        $('#resid').val(col0);
        $('#resname').val(col1);
        $('#resMassege').val(col2);
        $('#resPCount').val(col3);
        $('#resPhone').val(col4);
        $('#resDate').val(col5);
        $('#resTime').val(col6);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////     FEEDBACK PART     //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// VIEW ALL FEEDBACKS
function getallfeedbackstbl() {
    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/feedback/getFeedbacks",
        async: true,
        success: function (data) {
            $('#feedbacktblbody').empty();
            for (let feed of data) {
                let feedid = feed.id;
                let feedname = feed.name;
                let feedback = feed.feedback;

                var row = `<tr>
                    <td>${feedid}</td>
                    <td>${feedname}</td>
                    <td>${feedback}</td>
                </tr>`;

                $('#feedbacktblbody').append(row);
            }
        },
        error: function (xhr, exception) {
            alert("Error fetching users");
        }
    });
}


function addFeedback() {
    let name = $('#feedname').val();
    let feedback = $('#Feedback').val();

    if (name.trim() !== "") {
        $.ajax({
            method: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/feedback/saveFeedback",
            async: true,
            data: JSON.stringify({
                "id": "",
                "name": name,
                "feedback": feedback,
            }),
            success: function (data) {
                alert("Feedback Added...");
                getallfeedbackstbl()
            },
            error: function (xhr, exception) {
                alert("Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}

function updateFeedback() {
    let id = $('#feedid').val();
    let name = $('#feedname').val();
    let feedback = $('#Feedback').val();

    if (name.trim() !== "") {
        $.ajax({
            method: "PUT",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/feedback/updateFeedback",
            async: true,
            data: JSON.stringify({
                "id": id,
                "name": name,
                "feedback": feedback,
            }),
            success: function (data) {
                alert("Feedback Updated...");
                getallfeedbackstbl()
            },
            error: function (xhr, exception) {
                alert("Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}



// DELETE Feedback Function
function deleteFeedback() {
    let id = $('#feedid').val();

    if (id.trim() !== "") {
        $.ajax({
            method: "DELETE",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/feedback/deleteFeedback/"+id,
            async: true,
            success: function (data) {
                alert("Feedback Deleted...");
                getallfeedbackstbl()
            },
            error: function (xhr, exception) {
                alert("Delete Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}



$(document).ready(function () {
    $(document).on('click', '#feedbacktblbody tr', function () {

        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();


        $('#feedid').val(col0);
        $('#feedname').val(col1);
        $('#Feedback').val(col2);

    });
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////    PAYMENT PART     ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// VIEW ALL Payments
function getallPaymentstbl() {
    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/payment/getPayments",
        async: true,
        success: function (data) {
            $('#paymenttblbody').empty();
            for (let pay of data) {
                let id = pay.id;
                let name = pay.customerName;
                let date = pay.paymentDate;
                let amount = pay.amount;
                let qty = pay.quantity;
                let status = pay.status;

                var row = `<tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${date}</td>
                    <td>${amount}</td>
                    <td>${qty}</td>
                    <td>${status}</td>
                </tr>`;

                $('#paymenttblbody').append(row);
            }
        },
        error: function (xhr, exception) {
            alert("Error fetching users");
        }
    });
}


function addPayment() {
    let id = $('#payid').val();
    let name = $('#payname').val();
    let date = $('#paydate').val();
    let amount = $('#payamount').val();
    let qty = $('#payqty').val();
    let status = $('#paystatus').val();

    if (name.trim() !== "" || amount.trim() !== "") {
        $.ajax({
            method: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/payment/savePayment",
            async: true,
            data: JSON.stringify({
                "id": "",
                "customerName": name,
                "paymentDate": date,
                "amount": amount,
                "quantity": qty,
                "status": status,
            }),
            success: function (data) {
                alert("Payment Added...");
                getallPaymentstbl()()
            },
            error: function (xhr, exception) {
                alert("Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}


function updatePayment() {
    let id = $('#payid').val();
    let name = $('#payname').val();
    let date = $('#paydate').val();
    let amount = $('#payamount').val();
    let qty = $('#payqty').val();
    let status = $('#paystatus').val();

    if (name.trim() !== "" || amount.trim() !== "") {
        $.ajax({
            method: "PUT",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/payment/updatePayment",
            async: true,
            data: JSON.stringify({
                "id": id,
                "customerName": name,
                "paymentDate": date,
                "amount": amount,
                "quantity": qty,
                "status": status,
            }),
            success: function (data) {
                alert("Payment Updated...");
                getallPaymentstbl()
            },
            error: function (xhr, exception) {
                alert("Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}


// DELETE Payment Function
function deletePayment() {
    let id = $('#payid').val();

    if (id.trim() !== "") {
        $.ajax({
            method: "DELETE",
            contentType: "application/json",
            url: "http://localhost:8080/api/v1/payment/deletePayment/"+id,
            async: true,
            success: function (data) {
                alert("Payment Deleted...");
                getallPaymentstbl()
            },
            error: function (xhr, exception) {
                alert("Delete Failed...");
            }
        });
    } else {
        alert("field cannot be empty!");
    }
}


$(document).ready(function () {
    $(document).on('click', '#paymenttblbody tr', function () {

        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();
        var col4 = $(this).find('td:eq(4)').text();
        var col5 = $(this).find('td:eq(5)').text();

        $('#payid').val(col0);
        $('#payname').val(col1);
        $('#paydate').val(col2);
        $('#payamount').val(col3);
        $('#payqty').val(col4);
        $('#paystatus').val(col5);
    });
});