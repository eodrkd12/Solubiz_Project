var test = new Vue({
    el: '#id-lang',
    data: {
        selected: 'zzzz'
    },
    aaa : function(){
        alert(selected)
    }
});

function chageLangSelect() {
    var langSelect = document.getElementById("id-lang");
    // select element에서 선택된 option의 value가 저장된다.
    var selectValue = langSelect.options[langSelect.selectedIndex].value;
    alert(selectValue);
    // select element에서 선택된 option의 text가 저장된다.
    var selectText = langSelect.options[langSelect.selectedIndex].text;
    alert(selectText);
    test.selected = selectText;
}
new Vue({
    el: '#tabs',
    data: { activetab: 1 },
});



new Vue({
    el: '#btn',
    data: {
        message: '검색'
    },

    methods: {
        test: function () {
            alert("검색");
        }
    },
});