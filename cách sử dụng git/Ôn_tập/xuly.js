let list = [];
function hien_thi_danh_sach() {

    let table_html = '';
    for (let i = 0; i < list.length; i++) {
        table_html += "<tr>";
        table_html += `<td>${list[i][0]} </td>`;
        table_html += `<td>${list[i][1]} </td>`;
        table_html += `<td>${list[i][2]} </td>`;
        table_html += `<td>${list[i][3]} </td>`;
        table_html += '<td> <span>Sửa</span> | <span>Xóa</span></td>';
        table_html += '</tr >';

    }

    let tbody = document.getElementById('list');
    tbody.innerHTML = table_html;

}

hien_thi_danh_sach();

function insert() {

    let student_code    = document.getElementById('student_code');
    let surname         = document.getElementById('surname');
    let phone_number    = document.getElementById('phone_number');
    let email           = document.getElementById('email');

    let kiem_tra = validate();

    if (kiem_tra == true) {
        let student_code_value      = student_code.value;
        let surname_value           = surname.value;
        let phone_number_value      = phone_number.value;
        let mail_value              = email.value;
        function display_student(student_code_value, surname_value, mail_value, phone_number_value) {

            let display_content = [student_code_value, surname_value, mail_value, phone_number_value];
            list.push(display_content);
            hien_thi_danh_sach();
        }
        display_student(student_code_value, surname_value, mail_value, phone_number_value);
    }

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