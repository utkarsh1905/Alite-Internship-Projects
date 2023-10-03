let data = JSON.parse(localStorage.getItem('data')) || []
let index;
let i;
let employeeTable = document.getElementById('empDisplayTbl');
let tblData;
let row = null;


function submitFrmData(){

    event.preventDefault();

    let email = document.getElementById('inputEmail4').value;
    let userName = document.getElementById('inputUserName4').value;
    let phoneNumber = document.getElementById('phoneNumber4').value;
    let department =  document.getElementById('department').value;
    let empCode = document.getElementById('employeeCode').value;
    let address2 = document.getElementById('inputAddress2').value;
    let city = document.getElementById('inputCity').value;
    let state = document.getElementById('inputState').value;


    let emailErr = document.getElementById('emailError');
    let userNameErr = document.getElementById('uNameError');
    let phoneNumberErr = document.getElementById('phoneError');
    let departmentErr = document.getElementById('departmentError');
    let employeeCodeErr = document.getElementById('empCodeError');
    let addressErr = document.getElementById('addressError');
    let cityErr = document.getElementById('cityError');
    let stateErr = document.getElementById('stateError');
    

    if(email.length == 0 && userName.length == 0 && phoneNumber.length == 0 && department.length == 0 && empCode.length == 0 && address2.length == 0 && city.length == 0 && state.length == 0){
       
        employeeCodeErr.innerText = ("Enter Employee Code");
        userNameErr.innerText = ("Enter Employee Name");
        emailErr.innerText = ("Enter Mail Id");
        phoneNumberErr.innerText = ("Enter Phone Number");
        departmentErr.innerText = ("Enter Department");
        addressErr.innerText = ("Enter Address");
        cityErr.innerText = ("Enter City");
        stateErr.innerText = ("Enter State");
    }
    else if(empCode.length == 0){
        employeeCodeErr.innerText = ("Enter Employee Code");
    }
    else if(userName.length == 0){
        userNameErr.innerText = ("Enter Employee Name");
    }
    else if(email.length == 0){
       emailErr.innerText = ("Enter Mail Id");
    }
    else if(phoneNumber.length == 0){
        phoneNumberErr.innerText = ("Enter Phone Number");
    }
    else if(department.length == 0){
        departmentErr.innerText = ("Enter Department");
    }
    else if(address2.length == 0){
        addressErr.innerText = ("Enter Address");
    }
    else if(city.length == 0){
        cityErr.innerText = ("Enter City");
    }
    else if(state.length == 0){
        stateErr.innerText = ("Enter State");
    }   
    else{
        data.push({
            EmployeeCode:empCode,
            UserName:userName,
            Department:department,
            Email:email,
            Phone: phoneNumber,
            Address:address2,
            City:city,
            State:state
        })      

        
        emailErr.innerText = "";
        userNameErr.innerText = "";
        phoneNumberErr.innerText = "";
        departmentErr.innerText = "";
        employeeCodeErr.innerText = "";
        addressErr.innerText = "";
        cityErr.innerText = "";
        stateErr.innerText = "";

        localStorage.setItem("data",JSON.stringify(data));
        
        alert("Employee Details Added")

        console.log(employeeTable)
        employeeTable.innerHTML = "";
        dispEmpForm()

    }

}

function dispEmpForm() {

    let empTable = document.getElementById('empDisplayTbl');
    tblData = JSON.parse(localStorage.getItem('data'));

    for (i = 0; i < tblData.length; i++) {
        let obj = tblData[i];
        let row = empTable.insertRow();
        row.setAttribute('id', `row-${i}`); 
        for (let key in obj) {
            let cell = row.insertCell();
            cell.innerHTML = obj[key];
        }

        let editCell = row.insertCell();
        let editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.setAttribute('onclick',`editEmpDetails(${i})`)
        editCell.appendChild(editBtn);
        
        let deleteCell = row.insertCell();
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.setAttribute('onclick', `deleteEmpDetails(${i})`); 
        deleteCell.appendChild(deleteBtn);
    }
    let form = document.getElementById('employeeForm').reset()
    console.warn(form);
    
}

  function showUpdateBtn(i) {
    let update = document.querySelector('#update')
    let updateBtn = document.createElement('button');
    let updateButtons = document.getElementById('update');

    updateBtn.setAttribute("id", `${i}`)
    updateBtn.innerHTML = `Update, ${i}`;
    updateBtn.setAttribute('onclick', `saveEmpDetails(${i},event)`); 
    update.appendChild(updateBtn);
    
    if(updateButtons.children.length > 1){

        updateButtons.innerHTML = "";
 
        updateBtn.setAttribute("id", `${i}`)
        updateBtn.innerHTML = `Update, ${i}`;
        updateBtn.setAttribute('onclick', `saveEmpDetails(${i},event)`); 
        update.appendChild(updateBtn);      
    }

 }


function editEmpDetails(index) {
    let  data = JSON.parse(localStorage.getItem('data'));

    let d = data[index];

    let cells = document.getElementById("empDisplayTbl");
    for (let i = 0; i < cells.length - 2; i++) {
      let key = cells[i].getAttribute("data-key");
      let value = cells[i].innerHTML;
      data[key] = value;
    }
    showUpdateBtn(index);


    document.getElementById("employeeCode").value = d.EmployeeCode;
    document.getElementById("inputUserName4").value = d.UserName;
    document.getElementById("department").value = d.Department;
    document.getElementById("inputEmail4").value = d.Email;
    document.getElementById("phoneNumber4").value = d.Phone;
    document.getElementById("inputAddress2").value = d.Address;
    document.getElementById("inputCity").value = d.City;
    document.getElementById("inputState").value = d.State;
    
    
}
  

  function saveEmpDetails(index) {
    event.preventDefault();

    let  data = JSON.parse(localStorage.getItem('data'));

    let d = data[index];
    
    d = {
      EmployeeCode: document.getElementById("employeeCode").value,
      UserName: document.getElementById("inputUserName4").value,
      Department: document.getElementById("department").value,
      Email: document.getElementById("inputEmail4").value,
      Phone: document.getElementById("phoneNumber4").value,
      Address: document.getElementById("inputAddress2").value,
      City: document.getElementById("inputCity").value,
      State: document.getElementById("inputState").value,
    };
    
    let newData = JSON.parse(localStorage.getItem("data"));
    newData[index] = d;
    localStorage.setItem("data", JSON.stringify(newData));
    document.querySelector('#empDisplayTbl').innerHTML = "";
    
    dispEmpForm();
    
    alert("Employee Details Updated");

    let form = document.getElementById('employeeForm').reset()
    console.warn(form);

    let updateButtons = document.getElementById('update');
    updateButtons.innerHTML = "";
  }
  

function deleteEmpDetails(index) {
    let empTable = document.getElementById('empDisplayTbl');
    let row = document.getElementById(`row-${index}`);

   if( confirm("Do you want to delete Employee Details?")){
    
    empTable.deleteRow(index);
    tblData.splice(index, 1);
    data.splice(index, 1);

    if(index === -1|| index === 1){
        localStorage.clear();
        document.getElementById('empDisplayTbl').value = "";
    }

    localStorage.setItem('data', JSON.stringify(tblData)); 

    window.location.reload();
    

   }
}   

document.addEventListener('DOMContentLoaded', dispEmpForm())