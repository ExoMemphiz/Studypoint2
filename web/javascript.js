var database = [
    {name: "Christopher Poul Rosendorf",
     email: "Chris@Rosendorf.dk",
     phone: "12345678",
     category: "Green",
     group: "N/A"
    }
];

var addStudentForm = document.getElementById("newForm");
var testButton = document.getElementById("Button1");

function deleteStudent() {
    var arg = deleteStudent.arguments[0];
    database.splice(arguments[0], 1);
    updateTable();
}

function updateTable() {
    var table = document.getElementById("table");
    table.innerHTML = "";
    for (var i = 0; i < database.length; i++){
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = database[i].name;
        row.insertCell(1).innerHTML = database[i].email;
        row.insertCell(2).innerHTML = database[i].phone;
        row.insertCell(3).innerHTML = database[i].category;
        row.insertCell(4).innerHTML = database[i].group;
        var btn = document.createElement("button");
        btn.className = "btn btn-danger";
        btn.setAttribute("onClick", "javascript: deleteStudent(" + i + ")");
        btn.appendChild(document.createTextNode("Delete #" + i));
        row.insertCell(5).appendChild(btn);
    }
}

function submitNewStudent() {
    var name = addStudentForm.elements["name"].value;
    var email = addStudentForm.elements["email"].value;
    var phone = addStudentForm.elements["phone"].value;
    var category = addStudentForm.elements["category"].value;
    var group = addStudentForm.elements["group"].value;
    var newStudent = {};
    newStudent.name = name;
    newStudent.email = email;
    newStudent.phone = phone;
    newStudent.category = category;
    newStudent.group = group;
    database.push(newStudent);
    updateTable();
}

function RemoveAll() {
    for (var i = database.length; i >= 0; i--) {
        deleteStudent(i);
    }
    updateTable();
}

updateTable();