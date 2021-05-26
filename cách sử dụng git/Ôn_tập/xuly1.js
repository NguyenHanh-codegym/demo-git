
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

