let list = [];
displaytbodyList();
function displaytbodyList() {

    let table_html = '';
    for (let i = 0; i < list.length; i++) {
        table_html += "<tr>";
        table_html += `<td>${list[i][0]} </td>`;
        table_html += `<td>${list[i][1]} </td>`;
        table_html += `<td>${list[i][2]} </td>`;
        table_html += `<td>${list[i][3]} </td>`;
        table_html += `<td> Edit </td>`;;
        table_html += `<td> Delete </td>`;;
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
        let phone_number_value      = phone_number.value;
        let mail_value              = email.value;
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
function SelectedRowtoInputEdit() {
    let student_code            = list[index ][0];
    let surname                 = list[index ][1];
    let phone_number            = list[index ][2];
    let email                   = list[index ][3];
   console.log(student_code);
    document.getElementById('student_code').value           = student_code;
    document.getElementById('surname ').value               = surname ;
    document.getElementById('phone_number').value           = phone_number;
    document.getElementById('email ').value                 = email ;


    //cho nút cập nhật hiện lên, và ẩn nút đăng ký đi
    /*
        nut_cap_nhat, nut_dang_ky
    */
    let btn_update = document.getElementById('btn_update');
    let btn_register  = document.getElementById('btn_register');
    btn_update.style.display  = 'inline';
    btn_register.style.display   = 'none';


    //đưa chỉ số của mảng vào ô input chi_so_cap_nhat
    document.getElementById('updateIndex').value = index;

}

// //cập nhật dữ liệu
// function cap_nhat_sinh_vien( index , ma_sv, ten_sv, sdt ){
//     //kiểm tra các giá trị truyền vào đúng chưa
//     console.log( `chi_so: ${index }` );
//     console.log( `ma_sv: ${ma_sv}` );
//     console.log( `ten_sv: ${ten_sv}` );
//     console.log( `sdt: ${sdt}` );

//     //cập nhật lại mảng danh_sach;

//     /*
//     danh_sach = [ 
//         ['1','Nguyễn Văn A','0123456789'], // 0
//         // 0      1             2
//         ['2','Nguyễn Văn B','0943223222']  // 1
//         //0       1             2 
//     ];     
//     */
//     //chi_so = 1;
//     danh_sach[index ][0] = ma_sv;
//     danh_sach[index ][1] = ten_sv;
//     danh_sach[index ][2] = sdt;

//     //làm rỗng các input trong form
//     document.getElementById('ma_sv').value          = '';
//     document.getElementById('ho_ten').value         = '';
//     document.getElementById('so_dien_thoai').value  = '';

//      //cho nút đăng ký hiện lên, và ẩn nút cập nhật đi
//     /*
//         nut_cap_nhat, nut_dang_ky
//     */
//     let nut_cap_nhat = document.getElementById('nut_cap_nhat');
//     let nut_dang_ky  = document.getElementById('nut_dang_ky');
    
//     nut_cap_nhat.style.display  = 'none';
//     nut_dang_ky.style.display   = 'inline';

//     //gọi lại hàm hiển thị danh sách
//     hien_thi_danh_sach();   

// }

// //xóa sinh vien
// function xoa_sinh_vien(index) {
//     /* 
//         danh_sach = [ 
//             ['1','Nguyễn Văn A','0123456789'],//0 của mảng danh_sach
//             //0        1              2   
//             ['2','Nguyễn Văn B','0943223222'],//1 của mảng danh_sach
//         ];     
//     */
//     let xac_nhan = confirm('Bạn có chắc chắn xóa hay không ?');
//     if( xac_nhan == true ){
//         //người dùng đã nhấn vào OK
//         //xóa phần tử trong mảng dựa vào chỉ số
//         danh_sach.splice(index ,1);

//         //gọi lại hàm hiển thị danh sách
//         hien_thi_danh_sach();
//     }
// }