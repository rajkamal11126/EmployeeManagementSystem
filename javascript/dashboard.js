$(document).ready(function () {
  $.ajax({
      type: "get",
      url: "http://localhost:3000/employee/getAllData",
      success: function (result, status, xhr) {
          valueEnter(result.data);
          console.log(result.data);
      },
      error: function (xhr, status, error){
          alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
      }
  })
const valueEnter = (result) => {  
  let employee = ''  
  $.each(result, function (key, tableValues) {
      employee += `<tr> 
  <td>${tableValues.firstName}</td> 
  <td>${tableValues.lastName}</td>  
  <td>${tableValues.email}</td>   
  <td><a href="/EmployeeManagementBackend/EditEmployee/editEmployee.html" class = "fas fa-user-edit .btn-block">Edit</td>
  <td><button name='${tableValues}' onClick = "deleteEmployee(this)" class = "fas fa-remove">Delete</button></td>
</tr>`
      })
      $('#tablebody').append(employee);
  }
})
deleteEmployee = (object) => {
  console.log("delete", object)
}