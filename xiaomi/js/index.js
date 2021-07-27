var olist_btn = document.getElementsByClassName("list_btn");
var opage = document.getElementsByClassName("page");
var ominibtn = document.getElementsByClassName("minibtn")[0];
var oiconfont = document.getElementsByClassName("iconfont")[0];
var oshopping = document.getElementsByClassName("shopping")[0];
var ocar = document.getElementsByClassName("car")[0];
var osearch = document.getElementsByClassName("search")[0];
var osearch_img = document.getElementsByClassName("search_img")[0];
var osearch_box = document.getElementsByClassName("search_box")[0];
// 最上方导航购物车脚本
ominibtn.onmouseover = function(){
    oiconfont.src="img/img1/ia_200000364.png";
    oshopping.style.display = "block";
    ocar.className="list_active";
}
ominibtn.onmouseout = function(){
    oiconfont.src="img/img1/ia_200000363.png";
    oshopping.style.display = "none";
    ocar.className="";
}
var osearch_text =document.getElementsByClassName("search_text");
// logo导航搜索框脚本
osearch.onclick = function(){
    if (osearch_box.style.display == "block"){
        osearch_box.style.display = "none";
        osearch.style.border = "";
        osearch_img.style.border = "";
    }else{
        osearch_box.style.display = "block";
        osearch.style.border = "1px solid #ff6700";
        osearch_img.style.border = "1px solid #ff6700";
        for(var i=0;i<osearch_text.length;i++){
            osearch_text[i].index = i
            osearch_text[i].onmouseover = function(){
                this.style.background = "#f5f5f5"
            }
            osearch_text[i].onmouseout = function(){
                this.style.background = "white"
            }
        }
    }
}
osearch_img.onmouseover = function(){
    osearch_img.style.background = "#ff6700";
    osearch_img.style.color = "white"
}
osearch_img.onmouseout = function(){
    osearch_img.style.background = "";
    osearch_img.style.color = "#333"
}
// logo导航选项卡实现脚本
for(var i=0;i<olist_btn.length;i++){
    olist_btn[i].index = i
    olist_btn[i].onmouseover = function () {
        this.className = "list_btn active";
        opage[this.index].style.display = "block";
        opage[this.index].onmouseover = function(){
            this.style.display = "block";
        }
        opage[this.index].onmouseout = function(){
            this.style.display = "none";
        }
    }
    olist_btn[i].onmouseout = function () {
        this.className = "list_btn";
        opage[this.index].style.display = "none";
    }
}

//轮播图部分

    var img = document.getElementById('ratate');
    var box = document.querySelector('.home');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var imgArr = ['ia_200000223.webp', 'ia_200000224.webp', 'ia_200000225.webp', 'ia_200000226.webp', 'ia_200000227.jpg'];
    var oul = document.getElementsByClassName('reb')[0];
    var li = oul.children;
    var index = 0;
    function change() {
        img.src = 'img/img1/' + imgArr[index];
        for (let i = 0; i< li.length; i++) {
            li[i].className=''
        }
        li[index].className='liMove'
    }
    //自动切换 定时器跳转
    var timer = setInterval(nextImg,2000)

    function nextImg() {
        index++;
        if (index === imgArr.length) {
            index = 0;
        }
        change()
    }

    //向右
    right.onclick = next;
    function next() {
        //切换最小
        index++;
        if (index >=5) {
            index = 0;
        }
        change()
    }
    //向左
    left.onclick = last;
    function last() {
        index--;
        //切换最大
        if (index < 0) {
            index = imgArr.length-1;
        }
        change()
    }

    //鼠标移入暂停
    box.onmouseover = function () {
        clearTimeout(timer);
    };
    //移走继续
    box.onmouseout = function () {
        timer = setInterval(nextImg, 2000);
    };

//给li加鼠标移入事件

    for (let i = 0; i< li.length; i++) {
        li[i].id=i;
        li[i].onclick = function () {
            index=this.id
            change()
        };
        li[i].onmouseover = function () {
            li[i].className = 'liMove';
        }
        li[i].onmouseout = function () {
            li[i].className = '';
        }
    }

var oaside_list = document.getElementsByClassName("aside_list");
var oconent_list = document.getElementsByClassName("conent_list");

// 侧边导航选项卡实现脚本
for(var i=0;i<oaside_list.length;i++){
    oaside_list[i].index = i
    oaside_list[i].onmouseover = function () {
        this.className = "aside_list aside_active";
        oconent_list[this.index].style.display = "block";
        oconent_list[this.index].onmouseover = function(){
            this.style.display="block";
        }
        oconent_list[this.index].onmouseout = function(){
            this.style.display="none";
        }
    }
    oaside_list[i].onmouseout = function () {
        this.className = "aside_list";
        oconent_list[this.index].style.display = "none";
    }
}


// 家电商品展示选项卡
var ospan = document.getElementsByClassName("more_list");
var omain_right = document.getElementsByClassName("main_right1");
for(var i=0;i<ospan.length;i++){
    ospan[i].index = i
    ospan[i].onmouseover = function () {
        for(var j=0;j<ospan.length;j++){
            ospan[j].className="more_list";
            omain_right[j].style.display = "none";
        }
        this.className = "more_list more_active";
        omain_right[this.index].style.display = "block";
    }
}

var ospan2 = document.getElementsByClassName("more_list2");
var omain_right2 = document.getElementsByClassName("main_right2");
for(var i=0;i<ospan2.length;i++){
    ospan2[i].index = i
    ospan2[i].onmouseover = function () {
        for(var j=0;j<ospan2.length;j++){
            ospan2[j].className="more_list2";
            omain_right2[j].style.display = "none";
        }
        this.className = "more_list2 more_active";
        omain_right2[this.index].style.display = "block";
    }
}

var ospan3 = document.getElementsByClassName("more_list3");
var omain_right3 = document.getElementsByClassName("main_right3");
for(var i=0;i<ospan3.length;i++){
    ospan3[i].index = i
    ospan3[i].onmouseover = function () {
        for(var j=0;j<ospan3.length;j++){
            ospan3[j].className="more_list3";
            omain_right3[j].style.display = "none";
        }
        this.className = "more_list3 more_active";
        omain_right3[this.index].style.display = "block";
    }
}

var ospan4 = document.getElementsByClassName("more_list4");
var omain_right4 = document.getElementsByClassName("main_right4");
for(var i=0;i<ospan4.length;i++){
    ospan4[i].index = i
    ospan4[i].onmouseover = function () {
        for(var j=0;j<ospan4.length;j++){
            ospan4[j].className="more_list4";
            omain_right4[j].style.display = "none";
        }
        this.className = "more_list4 more_active";
        omain_right4[this.index].style.display = "block";
    }
}
var ospan5 = document.getElementsByClassName("more_list5");
var omain_right5 = document.getElementsByClassName("main_right5");
for(var i=0;i<ospan5.length;i++){
    ospan5[i].index = i
    ospan5[i].onmouseover = function () {
        for(var j=0;j<ospan5.length;j++){
            ospan5[j].className="more_list5";
            omain_right5[j].style.display = "none";
        }
        this.className = "more_list5 more_active";
        omain_right5[this.index].style.display = "block";
    }
}
// 视频部分
var obtn = document.getElementsByClassName("btn");
var oplay_hide = document.getElementsByClassName("play_hide");
var odis = document.getElementsByClassName("dis");
for(var i = 0;i<obtn.length;i++){
    obtn.index = i;
    obtn[i].onmouseover = function(){
        this.style.background = "#ff6400"
    }
    obtn[i].onmouseout = function(){
        this.style.background = "#665E57"
    }
    
    obtn[i].onclick=function(){
        for(var j = 0;j<oplay_hide.length;j++){
            oplay_hide[j].index = j;
            oplay_hide[j].style.display = "block";
            for(var k = 0;k<odis.length;k++){
                odis[k].index = k;
                odis[k].onclick=function(){
                    oplay_hide[this.index].style.display = "none";
                } 
            }
            oplay_hide[this.index].style.display = "none";
        }
    }
    
}

// 右侧导航
var oitem = document.getElementsByClassName("item");
var oerwei = document.getElementsByClassName("erwei")[0];
var ofirst = document.getElementsByClassName("first");
for(var i=0;i<oitem.length;i++){
    oitem[i].index = i;
    window.onscroll = function (){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop>=500){
            oitem[5].style.display = "block";
        }else{
            oitem[5].style.display = "none";
        }
        oitem[5].onclick = function(){
            document.documentElement.scrollTop = document.body.scrollTop = 0
        }
    }
    for(var j=0;j<ofirst.length;j++){
        ofirst[j].index = j;
        oitem[i].onmouseover=function(){
            if(this.index == 1){
               ofirst[this.index].src = "img/img1/ia_200000358.png";
               this.style.color = "#ff6700";
            }else if(this.index == 2){
                ofirst[this.index].src = "img/img1/ia_200000360.png";
                this.style.color = "#ff6700";
            }else if(this.index == 3){
                ofirst[this.index].src = "img/img1/ia_200000362.png";
                this.style.color = "#ff6700";
            }else if(this.index == 4){
                ofirst[this.index].src = "img/img1/ia_200000364.png";
                this.style.color = "#ff6700";
            }else if(this.index == 5){
                ofirst[this.index].src = "img/img1/ia_200005401.png";
                this.style.color = "#ff6700";
            }else if(this.index == 0){
                ofirst[this.index].src = "img/img1/ia_200000355.png";
                this.style.color = "#ff6700";
                oerwei.style.display = "block";
            }
        }
        oitem[i].onmouseout=function(){
            if(this.index == 1){
               ofirst[this.index].src = "img/img1/ia_200000357.png";
               this.style.color = "#757575";
            }else if(this.index == 2){
                ofirst[this.index].src = "img/img1/ia_200000359.png";
                this.style.color = "#757575";
            }else if(this.index == 3){
                ofirst[this.index].src = "img/img1/ia_200000361.png";
                this.style.color = "#757575";
            }else if(this.index == 4){
                ofirst[this.index].src = "img/img1/ia_200000363.png";
                this.style.color = "#757575";
            }else if(this.index == 5){
                ofirst[this.index].src = "img/img1/ia_200005400.png";
                this.style.color = "#757575";
            }else if(this.index == 0){
                ofirst[this.index].src = "img/img1/ia_200000354.png";
                this.style.color = "#757575";
                oerwei.style.display = "none";
            }
        }
    }
    
}

