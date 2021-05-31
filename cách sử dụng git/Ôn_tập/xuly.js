let list = [];
let updateIndex;
displaytbodyList();
function displaytbodyList() {

    let table_html = '';
    for (let i = 0; i < list.length; i++) {
        table_html += "<tr>";
        table_html += `<td>${list[i][0]} </td>`;
        table_html += `<td>${list[i][1]} </td>`;
        table_html += `<td>${list[i][2]} </td>`;
        table_html += `<td>${list[i][3]} </td>`;
        table_html += `<td> <a class = "btn_edit" href="javascript:;" onclick="Edit(${i})">Edit</a> </td>`;;
        table_html += `<td> <a class = "btn_delete" href="javascript:;" onclick="Delete(${i})">Delete</a> </td>`;;
        table_html += '</tr >';

    }

    let tbody = document.getElementById('list');
    tbody.innerHTML = table_html;

}
function insert() {

    let student_code    = document.getElementById('student_code');
    let surname         = document.getElementById('surname');
    let phone_number    = document.getElementById('phone_number');
    let email           = document.getElementById('email');

    let kiem_tra = validate();

    if (kiem_tra == true) {
        let student_code_value      = student_code.value;
        let surname_value           = surname.value;
        let mail_value              = email.value;
        let phone_number_value      = phone_number.value;
       
        function display_student(student_code_value, surname_value, mail_value, phone_number_value) {

            let display_content = [student_code_value, surname_value, mail_value, phone_number_value];
            list.push(display_content);
            displaytbodyList();
        }
        display_student(student_code_value, surname_value, mail_value, phone_number_value);
    }

};

function validate() {

    let status;
    let student_code    = document.getElementById('student_code');
    let surname         = document.getElementById('surname');
    let phone_number    = document.getElementById('phone_number');
    let email           = document.getElementById('email');
    
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
        document.getElementById("phone_er_msg").innerHTML =
            " ";
    }
    return status;
}
function Edit(index) {
    let student_code            = list[index ][0];
    let surname                 = list[index ][1];
    let email                   = list[index ][2];
    let phone_number            = list[index ][3];
   
    document.getElementById('student_code').value           = student_code;
    document.getElementById('surname').value                = surname ;
    document.getElementById('email').value                  = email ;
    document.getElementById('phone_number').value           = phone_number;
    
    let btn_update                                          = document.getElementById('btn_update');
    let btn_register                                        = document.getElementById('btn_register');
    btn_update.style.display                                = 'inline';
    btn_register.style.display                              = 'none';

    document.getElementById('updateIndex').value            = index;
    updateIndex = index;
}
function updateStudent(){
    student_code    = document.getElementById('student_code').value;
    surname         = document.getElementById('surname').value;
    email           = document.getElementById('email').value;
    phone_number    = document.getElementById('phone_number').value;

    index           = document.getElementById('updateIndex').value;

    list[index][0] = student_code;
    list[index ][1] = surname;
    list[index ][2] = email;
    list[index ][3] = phone_number;
 
    document.getElementById('student_code').value       = '';
    document.getElementById('surname').value            = '';
    document.getElementById('email').value              = '';
    document.getElementById('phone_number').value       = '';

    let btn_update = document.getElementById('btn_update');
    let btn_register  = document.getElementById('btn_register');
    
    btn_update.style.display  = 'none';
    btn_register.style.display   = 'inline';

    displaytbodyList();   
}

function Delete(index) {

    let cfMsg = confirm('Delete information of Student ?');
    if( cfMsg == true ){
        list.splice(index ,1);
        displaytbodyList();
    }
}