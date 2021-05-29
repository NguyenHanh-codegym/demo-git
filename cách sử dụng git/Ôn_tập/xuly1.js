
function addHtmlTableRow() {
    var table = document.getElementById('list');
    newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);       
    cell5 = newRow.insertCell(4);       
    cell6 = newRow.insertCell(5);       

    studCode = document.getElementById("student_code").value;
    surName = document.getElementById("surname").value;
    Email = document.getElementById("email").value;
    telePhone = document.getElementById("phone_number").value;
    btnEdit = document.getElementById("btn_edit").value;
    btnDelete = document.getElementById("btn_delete").value;

    cell1.innerHTML= studCode;
    cell2.innerHTML = surName;
    cell3.innerHTML = Email;
    cell4.innerHTML = telePhone;
    cell5.innerHTML = btnEdit;
    cell6.innerHTML = btnDelete;

};

function validate() {

    let status;
    if (student_code.value.length < 1) {
        document.getElementById("msv_er_msg").innerHTML =
            "Please enter your student code";
        status = false;
    } else {
        document.getElementById("msv_er_msg").innerHTML =
            " ";
        status = true;
    }
    if (surname.value.length < 1) {
        document.getElementById("surname_er_msg").innerHTML =
            "Please enter your Surname ";
        status = false;
    } else {
        document.getElementById("surname_er_msg").innerHTML =
            " ";
    }
    if (email.value.length < 1) {
        document.getElementById("email_er_msg").innerHTML =
            "Please enter your Email ";
        status = false;
    } else {
        document.getElementById("email_er_msg").innerHTML =
            " ";
    }
    if (phone_number.value.length < 1) {
        document.getElementById("phone_er_msg").innerHTML =
            "Please enter your Phone ";
        status = false;
    } else {
        document.getElementById("surname_er_msg").innerHTML =
            " ";
    }
    return status;
}