let employees = [];

function addEmployee(){

let name = document.getElementById('nameInput').value;
let profession = document.getElementById('professionInput').value;
let age = document.getElementById('ageInput').value;

if(name == '' || profession == '' || age == ''){
    let error = document.getElementById('error');
    error.textContent = 'Error : Please Make sure All the fields are filled before adding in an employee !';
    error.style.color = 'red';

    let success = document.getElementById('success');
    success.textContent = '';
    return;
}


document.getElementById('error').textContent = '';

let employee = {
    id: new Date().getTime(),
    name: name,
    profession: profession,
    age: age
};

employees.push(employee);

displayEmployees();

let success = document.getElementById('success');
success.textContent = 'Success : Employee Added!';
success.style.color = 'green';
}

function displayEmployees(){
    let addEmployeesDiv = document.getElementById('added');
    addEmployeesDiv.innerHTML = '';

    employees.forEach(employee => {
        let employeeDiv = document.createElement('div');
        employeeDiv.id = employee.id;
        employeeDiv.textContent = `Name: ${employee.name}, profession: ${employee.profession}, Age: ${employee.age}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.cssText = `
        background-color: white;
        color: black;
        border-radius: 20px;
        margin-left: 10px;
        `;
        deleteBtn.addEventListener('click', ()=> {
            removeEmployee(employee.id);
            displayEmployees();
        });
        employeeDiv.appendChild(deleteBtn);
        addEmployeesDiv.appendChild(employeeDiv);
    });
}

function removeEmployee(id){
    const index = employees.findIndex(employee => employee.id == id);
    if(index != -1){
        employees.splice(index, 1);
    }
}
displayEmployees();


