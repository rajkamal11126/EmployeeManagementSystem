registerNew = (event) => {
    event.preventDefault()
    let obj = {
        "firstName": $('#firstName').val(),
        "lastName": $('#lastName').val(),
        "email": $('#email').val()
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/employee/addEmployee",
        contentType: "application/json",
        data: JSON.stringify(obj),
        success: function (result, status, xhr) {
            console.log(result);
        },
        error: function (xhr, status, error) {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
        }
    })
}

