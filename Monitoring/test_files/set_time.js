function set_now(){
    var min_date=new Date();
    min_date.setDate(min_date.getDate()-1);
    document.getElementById('min_date').value= min_date.toISOString().slice(0, 16);
    document.getElementById('max_date').value= new Date().toISOString().slice(0, 16);
}

$(document).ready(function(){
    set_now();
})