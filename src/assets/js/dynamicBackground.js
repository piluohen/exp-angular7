!function(){
    function n(n,e,t){
        return n.getAttribute(e)||t
    }
    function e(n){
        return document.getElementsByTagName(n)
    }
    function t(){
        var t=e("script"),o=t.length,i=t[o-1];
        return{l:o,z:n(i,"zIndex",-1),o:n(i,"opacity",.1),c:n(i,"color","0,0,0"),n:n(i,"count",99)}
    }
    function o(){
        a=m.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
            c=m.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight
    }
    function i(){
        r.clearRect(0,0,a,c);
        var n,e,t,o,m,l;
        s.forEach(function(i,x){
            for(i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>a||i.x<0?-1:1,i.ya*=i.y>c||i.y<0?-1:1,r.fillRect(i.x-.5,i.y-.5,5,5),e=x+1;e<u.length;e++)n=u[e],
            null!==n.x&&null!==n.y&&(o=i.x-n.x,m=i.y-n.y,
                l=o*o+m*m,l<n.max&&(n===y&&l>=n.max/2&&(i.x-=.03*o,i.y-=.03*m),
                t=(n.max-l)/n.max,r.beginPath(),r.lineWidth=t/2,r.strokeStyle="rgba("+d.c+","+(t+.2)+")",r.moveTo(i.x,i.y),r.lineTo(n.x,n.y),r.stroke()))
        }),
            x(i)
    }
    var a,c,u,m=document.createElement("canvas"),
        d=t(),l="c_n"+d.l,r=m.getContext("2d"),
        x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||
            function(n){
                window.setTimeout(n,1e3/45)
            },
        w=Math.random,y={x:null,y:null,max:2e4};m.id=l,m.style.cssText="position:fixed;top:0;left:0;z-index:"+d.z+";opacity:"+d.o,e("body")[0].appendChild(m),o(),window.onresize=o,
        window.onmousemove=function(n){
            n=n||window.event,y.x=n.clientX,y.y=n.clientY
        },
        window.onmouseout=function(){
            y.x=null,y.y=null
        };
    for(var s=[],f=0;d.n>f;f++){
        var h=w()*a,g=w()*c,v=2*w()-1,p=2*w()-1;s.push({x:h,y:g,xa:v,ya:p,max:6e3})
    }
    u=s.concat([y]),
        setTimeout(function(){i()},100)
}();

// //定义画布宽高和生成点的个数
// var WIDTH = window.innerWidth, HEIGHT = window.innerHeight, POINT = 35;
//
// var canvas = document.getElementById('Mycanvas');
// canvas.width = WIDTH,
//     canvas.height = HEIGHT;
// var context = canvas.getContext('2d');
// context.strokeStyle = 'rgba(0,0,0,0)',
//     context.strokeWidth = 1,
//     context.fillStyle = 'rgba(0,0,0,0.05)';
// var circleArr = [];
//
// //线条：开始xy坐标，结束xy坐标，线条透明度
// function Line (x, y, _x, _y, o) {
//     this.beginX = x,
//         this.beginY = y,
//         this.closeX = _x,
//         this.closeY = _y,
//         this.o = o;
// }
// //点：圆心xy坐标，半径，每帧移动xy的距离
// function Circle (x, y, r, moveX, moveY) {
//     this.x = x,
//         this.y = y,
//         this.r = r,
//         this.moveX = moveX,
//         this.moveY = moveY;
// }
// //生成max和min之间的随机数
// function num (max, _min) {
//     var min = arguments[1] || 0;
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
// // 绘制原点
// function drawCricle (cxt, x, y, r, moveX, moveY) {
//     var circle = new Circle(x, y, r, moveX, moveY)
//     cxt.beginPath()
//     cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
//     cxt.closePath()
//     cxt.fill();
//     return circle;
// }
// //绘制线条
// function drawLine (cxt, x, y, _x, _y, o) {
//     var line = new Line(x, y, _x, _y, o)
//     cxt.beginPath()
//     cxt.strokeStyle = 'rgba(0,0,0,'+ o +')'
//     cxt.moveTo(line.beginX, line.beginY)
//     cxt.lineTo(line.closeX, line.closeY)
//     cxt.closePath()
//     cxt.stroke();
//
// }
// //初始化生成原点
// function init () {
//     circleArr = [];
//     for (var i = 0; i < POINT; i++) {
//         circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
//     }
//     draw();
// }
//
// //每帧绘制
// function draw () {
//     context.clearRect(0,0,canvas.width, canvas.height);
//     for (var i = 0; i < POINT; i++) {
//         drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
//     }
//     for (var i = 0; i < POINT; i++) {
//         for (var j = 0; j < POINT; j++) {
//             if (i + j < POINT) {
//                 var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
//                     B = Math.abs(circleArr[i+j].y - circleArr[i].y);
//                 var lineLength = Math.sqrt(A*A + B*B);
//                 var C = 1/lineLength*7-0.009;
//                 var lineOpacity = C > 0.03 ? 0.03 : C;
//                 if (lineOpacity > 0) {
//                     drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
//                 }
//             }
//         }
//     }
// }
//
// //调用执行
// window.onload = function () {
//         init();
//         setInterval(function () {
//             for (var i = 0; i < POINT; i++) {
//                 var cir = circleArr[i];
//                 cir.x += cir.moveX;
//                 cir.y += cir.moveY;
//                 if (cir.x > WIDTH) cir.x = 0;
//                 else if (cir.x < 0) cir.x = WIDTH;
//                 if (cir.y > HEIGHT) cir.y = 0;
//                 else if (cir.y < 0) cir.y = HEIGHT;
//
//             }
//             draw();
//         }, 16);
//     }
//
