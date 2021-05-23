let danh_sach = [
    ['1', 'Nguyễn Văn A', '0123456000'],
    ['2', 'Nguyễn Văn B', '0123456001'],
    ['3', 'Nguyễn Văn C', '0123456002'],
    ['4', 'Nguyễn Văn D', '0123456003']
];
function hien_thi_danh_sach() {
    // var bien_cuc_bo = a;
    // // console.log('hien_thi_danh_sach');
    console.log('danh_sach');
    let table_html = '';
    for (let i = 0; i < danh_sach.length; i++) {
        // console.log('hien_thi_danh_sach');
        table_html += "<tr>";
        table_html += `<td>${danh_sach[i][0]} </td>`;
        table_html += `<td>${danh_sach[i][1]} </td>`;
        table_html += `<td>${danh_sach[i][2]} </td>`;
        table_html += '<td> <span>Sửa</span> | <span>Xóa</span></td>';
        table_html += '</tr >';
    }
    let tbody = document.getElementById('danh_sach');
    tbody.innerHTML = table_html;

    let nut_dang_ki = document.getElementById('nut_dang_ki');
    nut_dang_ki.addEventListener('click', function () {

        let ma_sv = document.getElementById('ma_sv');
        let ho_ten = document.getElementById('ho_ten');
        let so_dien_thoai = document.getElementById('so_dien_thoai');

        let gia_tri_ma_sv = ma_sv.value;
        let gia_tri_ho_ten = ho_ten.value;
        let gia_tri_so_dien_thoai = so_dien_thoai.value;
        // console.log(gia_tri_ma_sv)
        them_sinh_vien(gia_tri_ma_sv, gia_tri_ho_ten, gia_tri_so_dien_thoai);
    })
}
function them_sinh_vien(ma_sv, ho_ten, so_dien_thoai) {
    let thong_tin_sv = [ma_sv, ho_ten, so_dien_thoai];
    // console.log(thong_tin_sv);
    danh_sach.push(thong_tin_sv);
    console.log(danh_sach);
}
function sua_sinh_vien() {

}
function xoa_sinh_vien() {

}
them_sinh_vien(ma_sv, ho_ten, so_dien_thoai);

