// let thong_tin_sv_1 = ['1','Nguyễn Văn A','0123456789'];
// let thong_tin_sv_2 = ['2','Nguyễn Văn B','0943223222'];
//biến toàn cục
let danh_sach = [];

//hiển thị danh sách sinh viên
function hien_thi_danh_sach() {
    //console.log('hien_thi_danh_sach');
    //console.log( danh_sach );

    let table_html = '';

    //danh_sach.length: 3
    /*
    for( let i = 0; i < danh_sach.length; i++ ){
        //0 1 2
        table_html += '<tr>';
            table_html += `<td> ${ danh_sach[i][0] } </td>`;
            table_html += `<td> ${ danh_sach[i][1] } </td>`;
            table_html += `<td> ${ danh_sach[i][2] } </td>`;
            table_html += '<td> <span>Sửa</span> | <span>Xóa</span> </td>';
        table_html += '</tr>';
    }
    */

    /*
    for( let thong_tin of danh_sach){
        table_html += '<tr>';
            table_html += `<td> ${ thong_tin[0] } </td>`;
            table_html += `<td> ${ thong_tin[1] } </td>`;
            table_html += `<td> ${ thong_tin[2] } </td>`;
            table_html += '<td> <span>Sửa</span> | <span>Xóa</span> </td>';
        table_html += '</tr>';
    }
    */

    /*
    for( let i = 0; i < danh_sach.length; i++ ){

    }
    */

    /* 
        danh_sach = [ 
            ['1','Nguyễn Văn A','0123456789'], // 0
            // 0      1             2
            ['2','Nguyễn Văn B','0943223222']  // 1
            //0       1             2 
        ];     

        danh_sach.length => 2
    */

    let i = 0;
    while ( i < danh_sach.length ) {
        //0 1

        table_html += '<tr>';
            table_html += `<td> ${ danh_sach[i][0] } </td>`;
            table_html += `<td> ${ danh_sach[i][1] } </td>`;
            table_html += `<td> ${ danh_sach[i][2] } </td>`;
            table_html += `<td> 
                            <span class="btn-sua" onclick="sua_sinh_vien( ${i} );">Sửa</span> | 
                            <span class="btn-xoa" onclick="xoa_sinh_vien( ${i} );">Xóa</span> 
                        </td>`;
        table_html += '</tr>';
        i++;
    }

    let tbody = document.getElementById('danh_sach');//đối tượng
        tbody.innerHTML = table_html;

}

//thêm mới sinh viên
function them_sinh_vien( ma_sv, ten_sv, sdt_sv ) {
    let thong_tin_sv = [ma_sv,ten_sv,sdt_sv];
    //                    0      1      2     

    //đưa mảng thong_tin_sv vào mảng danh sách

    /* 
        danh_sach = [ 
            ['1','Nguyễn Văn A','0123456789'] 
        ];     
    */
    danh_sach.push( thong_tin_sv );//thong_tin_sv đang là 1 mảng
    /* 
        danh_sach = [ 
            ['1','Nguyễn Văn A','0123456789'],
            ['2','Nguyễn Văn B','0943223222']
        ];     
    */

     //làm rỗng các input trong form
     document.getElementById('ma_sv').value          = '';
     document.getElementById('ho_ten').value         = '';
     document.getElementById('so_dien_thoai').value  = '';

    //gọi lại hàm hiển thị danh sách
    hien_thi_danh_sach();
}

//sửa sinh viên
function sua_sinh_vien( chi_so ) {
    // lấy được các giá trị từ mảng có chỉ số mà tham số chi_so nhận được
    let ma_sv           = danh_sach[chi_so][0];
    let ho_ten          = danh_sach[chi_so][1];
    let so_dien_thoai   = danh_sach[chi_so][2];

    //đưa các giá trị đó vào ô input
    document.getElementById('ma_sv').value          = ma_sv;
    document.getElementById('ho_ten').value         = ho_ten;
    document.getElementById('so_dien_thoai').value  = so_dien_thoai;


    //cho nút cập nhật hiện lên, và ẩn nút đăng ký đi
    /*
        nut_cap_nhat, nut_dang_ky
    */
    let nut_cap_nhat = document.getElementById('nut_cap_nhat');
    let nut_dang_ky  = document.getElementById('nut_dang_ky');
    nut_cap_nhat.style.display  = 'inline';
    nut_dang_ky.style.display   = 'none';


    //đưa chỉ số của mảng vào ô input chi_so_cap_nhat
    document.getElementById('chi_so_cap_nhat').value = chi_so;

}

//cập nhật dữ liệu
function cap_nhat_sinh_vien( chi_so, ma_sv, ten_sv, sdt ){
    //kiểm tra các giá trị truyền vào đúng chưa
    console.log( `chi_so: ${chi_so}` );
    console.log( `ma_sv: ${ma_sv}` );
    console.log( `ten_sv: ${ten_sv}` );
    console.log( `sdt: ${sdt}` );

    //cập nhật lại mảng danh_sach;

    /*
    danh_sach = [ 
        ['1','Nguyễn Văn A','0123456789'], // 0
        // 0      1             2
        ['2','Nguyễn Văn B','0943223222']  // 1
        //0       1             2 
    ];     
    */
    //chi_so = 1;
    danh_sach[chi_so][0] = ma_sv;
    danh_sach[chi_so][1] = ten_sv;
    danh_sach[chi_so][2] = sdt;

    //làm rỗng các input trong form
    document.getElementById('ma_sv').value          = '';
    document.getElementById('ho_ten').value         = '';
    document.getElementById('so_dien_thoai').value  = '';

     //cho nút đăng ký hiện lên, và ẩn nút cập nhật đi
    /*
        nut_cap_nhat, nut_dang_ky
    */
    let nut_cap_nhat = document.getElementById('nut_cap_nhat');
    let nut_dang_ky  = document.getElementById('nut_dang_ky');
    
    nut_cap_nhat.style.display  = 'none';
    nut_dang_ky.style.display   = 'inline';

    //gọi lại hàm hiển thị danh sách
    hien_thi_danh_sach();   

}

//xóa sinh vien
function xoa_sinh_vien( chi_so ) {
    /* 
        danh_sach = [ 
            ['1','Nguyễn Văn A','0123456789'],//0 của mảng danh_sach
            //0        1              2   
            ['2','Nguyễn Văn B','0943223222'],//1 của mảng danh_sach
        ];     
    */
    let xac_nhan = confirm('Bạn có chắc chắn xóa hay không ?');
    if( xac_nhan == true ){
        //người dùng đã nhấn vào OK
        //xóa phần tử trong mảng dựa vào chỉ số
        danh_sach.splice(chi_so,1);

        //gọi lại hàm hiển thị danh sách
        hien_thi_danh_sach();
    }
}