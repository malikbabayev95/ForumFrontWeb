/////////////////////////////////////////////////////////////////////////////
var widthLog = $(".Logo").width();
var widthUsr = $(".Logo").width();
var margin = 90;
var widthMenu = $(".Header").width() - ($(".Logo").width() * 2) - (margin * 2);
$(".Menu").width(widthMenu);
/////////////////////////////////////////////////////////////////////////////
var widthSB = $(".SearchBox").width();
var widthSI = $(".SearchIcon").width();
var widthSearch = widthSB - widthSI;
$(".SearchInput").width(widthSearch);
////////////////////////////////////////////////////////////////////////////

var un = $("#usrName").val();
var up = $("#usrPassword").val()
var unl = $.trim(un).split("");
var upl = $.trim(up).split("");
const adiv = $("#usrButton");

$("#usrName").on("keyup", function () {
    un = $("#usrName").val();
    unl = $.trim(un).split("");
})
$("#usrPassword").on("keyup", function () {
    up = $("#usrPassword").val();
    upl = $.trim(up).split("");
})
setInterval(()=>{
    if(unl.length>5 && upl.length>5){
        adiv.css({color:"rgb(223, 196, 43)"})
    }else{
        adiv.css({color:"#116bbb"})
    }
})


// $("#usrPassword").on("keyup", usrLogin())

////////////////////////////////////////////////////////////////////////////
$("#Search").on("keyup", function () {
    var value = $("#Search").val();
    var words = $.trim(value).split(" ");
    if (words < 1) {
        $(".SearchIcon").css({
            'background-color': 'white',
            'color': 'rgb(34, 154, 175)',
            'border-radius': '0'
        })
        $(".SearchInput").css({
            'border-radius': '0',
            'border-color': 'white'
        })
    } else {
        value = $("#Search").val()
        $(".SearchIcon").css({
            'background-color': 'rgb(223, 196, 43)',
            'color': 'white',
            'border-bottom-left-radius': '15px',
            'border-bottom-right-radius': '15px'
        })
        $(".SearchInput").css({
            'border-color': 'rgb(223, 196, 43)',
            'border-top-right-radius': '15px',
            'border-bottom-right-radius': '15px'
        })
    }
})
/////////////////////////////////////////////////////////////////
$(".fh-OnOf").on("click", function (e) {
    var fors = $(this).parent()
    var forum = fors.next()
    e = $(this).find(".fh-Expand")
    if (e.height() == 4) {
        e.css({
            height: "16px"
        })
        forum.slideDown(1000)
    } else {
        e.css({
            height: "4px"
        })
        forum.slideUp(500)
    }
})
/////////////////////////////////////////
var dayWidth = $(".cln-day").width() / 7
$(".cln-wd").width(dayWidth)
var dd = $(".cln-wd").width()
$(".cln-dd").width($(".cln-day").width() / 7)
///////////////////////////////////////////
var fullDate = new Date()
var month = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1); // ayin 2 reqemli formasi (01, 02, 03, 04....., 12)
var spanMonth = $("span.month")
var sYear = $("span.year")
var sDay = parseInt(fullDate.getDate()) //ayin gununu gosteren
var sWeek = parseInt(fullDate.getDay()) // heftenin necenci gunu oldugunu gosteren
var sMonth = parseInt(fullDate.getMonth()) //ayi gosteren
var currentWeek = $(".cln-wd")
var currentDay = $(".cln-dd")
sYear.text(fullDate.getFullYear())
var t = parseInt(sDay / 7)
switch (month) {
    case "01":
        spanMonth.text("Yanvar - 2020")
        break;
    case "02":
        spanMonth.text("Fevral - 2020")
        break;
    case "03":
        spanMonth.text("Mart - 2020")
        break;
    case "04":
        spanMonth.text("Aprel - 2020")
        break;
    case "05":
        spanMonth.text("May - 2020")
        break;
    case "06":
        spanMonth.text("Iyun - 2020")
        break;
    case "07":
        spanMonth.text("Iyul - 2020")
        break;
    case "08":
        spanMonth.text("Avqust - 2020")
        break;
    case "0 9":
        spanMonth.text("Sentyabr - 2020")
        break;
    case "10":
        spanMonth.text("Oktyabr - 2020")
        break;
    case "11":
        spanMonth.text("Noyabr - 2020")
        break;
    case "12":
        spanMonth.text("Dekabr - 2020")
        break;
    default:
        break;
}
var search = $(".cln-day .cln-dd").filter(function () {
    return $(this).text().toLowerCase().indexOf(sDay) >= 0;
}).first();
search.css({
    "background-color": "#00bfff",
    "border-radius": "3px"
})

/////////////////////////////////////////////////////////////
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const digClock = $("#digital-clock");

setInterval(() => {
    var day = new Date();
    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * deg;
    var ss = day.getSeconds() * deg;
    var dhh = day.getHours();
    var dmm = day.getMinutes();
    var dss = day.getSeconds();
    if (dhh < 10) {
        dhh = "0" + dhh
    }
    if (dmm < 10) {
        dmm = "0" + dmm
    }
    if (dss < 10) {
        dss = "0" + dss
    }
    digClock.text(dhh + ":" + dmm + ":" + dss)

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


})