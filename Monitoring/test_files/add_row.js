//자바 스크립트를 이용한 테이블 ROW 생성 예제 (동적 가능)
function add_row() {
    var log_tbody = document.getElementById('log_tbody');
    var row = log_tbody.insertRow(log_tbody.rows.length);
    var cells = new Array();

    for (var i = 0; i < 6; i++) {
        cells[i] = row.insertCell(i);
        cells[i].innerHTML = Math.floor(Math.random() * 100);
    }
}
$(document).ready(function(){
    //조건문을 DB테이블의 행 개수로 해야함
    for (var i = 0; i < 100; i++) {
        add_row();
    }
})