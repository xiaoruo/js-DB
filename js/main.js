var pageStyle = {
    line: document.getElementsByTagName('p'),
    init: function () {
        this.changeColor();
    },
    changeColor: function () {
        for(var i = 0, len = this.line.length; i < len; i++) {
            if(i%2 === 0) {
                // console.log()
                this.line[i].className += "odd-color";
            }
            this.line[i].innerHTML += '<a href="#" class="button">删除</a><a href="#" class="button">修改</a>';
        }
    }
}
pageStyle.init();