// 限制了变量、函数名的定义

var index = 0;
var itemsLength = $(".items").length;
var arr = [0, 1, 2, 3];

/* 
    函数封装：
    1、arr转变
    2、焦点变化
    3、轮播图变化
*/

function arrChange(index) {
    switch (index) {
        case 0:
            arr = [0, 1, 2, 3];
            break;
        case 1:
            arr = [-1, 0, 1, 2];
            break;
        case 2:
            arr = [-2, -1, 0, 1];
            break;
        case 3:
            arr = [-3, -2, -1, 0];
            break;
    }
    return arr;
}

function focusChange() {
    $(".items1").eq(index).css({
        "background-color": "royalblue"
    }).siblings().css({
        "background-color": "rgba(0,0,0,0.5)"
    })
}

function imgChange() {
    for (var i = 0; i < itemsLength; i++) {
        (function () {
            var temp = i;
            $(".items").eq(i).css({
                "left": parseInt(500 * arr[temp]) + 'px'
            })
        })();
    }
}

function action() {
    focusChange();
    arrChange(index);
    imgChange();
}