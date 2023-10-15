var screen = document.getElementById("screen").value

function add(x) {
    var screen= document.getElementById("screen").value +=x;
}
function equal() {
    var screen = document.getElementById("screen").value=eval( document.getElementById("screen").value)
    // var sin = document.getElementById("sin")
    // var eva = document.getElementById("sin")= Math.sin(Document.getElementById("screen").value)

}

function del() {
    var del = document.getElementById("screen").value=""
}
function clean() {
    var screen = document.getElementById("screen").value = (screen.length(-1))
}
function on() {
    var scre = document.getElementById( "screen" ).value= Math.in(document.getElementById( "screen" ).value)

    // var sho= document.getElementById("screen").innerHTML = ad
    // var log = document.getElementById("screen").innerHTML += ad
}
function sqrt() {
    var scre = document.getElementById( "screen" ).value= Math.sqrt(document.getElementById( "screen" ).value)

    // var sho= document.getElementById("screen").innerHTML = ad
    // var log = document.getElementById("screen").innerHTML += ad
}
function rp() {
    var scre = document.getElementById( "screen" ).value= (document.getElementById( "screen" ).value)* document.getElementById( "screen" ).value

    // var sho= document.getElementById("screen").innerHTML = ad
    // var log = document.getElementById("screen").innerHTML += ad
}
function hyp() {
    var scre = document.getElementById( "screen" ).value= Math.hypot(document.getElementById( "screen" ).value)

    // var sho= document.getElementById("screen").innerHTML = ad
    // var log = document.getElementById("screen").innerHTML += ad
}

function log() {
    var scre = document.getElementById( "screen" ).value= Math.log10(document.getElementById( "screen" ).value)

    // var sho= document.getElementById("screen").innerHTML = ad
    // var log = document.getElementById("screen").innerHTML += ad
}
function sin() {
    // var scre = document.getElementById( "screen" ).value= "sin"
  var scre = document.getElementById( "screen" ).value= Math.sin(document.getElementById( "screen" ).value)
//   var dis = document.getElementById("screen").value=scre;
}




function cos() {
    // var scre = document.getElementById( "screen" ).value= "sin"
  var scre = document.getElementById( "screen" ).value= Math.cos(document.getElementById( "screen" ).value)
//   var dis = document.getElementById("screen").value=scre;
}
function dec() {
    // var scre = document.getElementById( "screen" ).value= "sin"
  var scre = document.getElementById( "screen" ).value= parseInt(document.getElementById( "screen" ).value)
//   var dis = document.getElementById("screen").value=scre;
}
function tan() {
    // var scre = document.getElementById( "screen" ).value= "sin"
  var scre = document.getElementById( "screen" ).value= Math.tan(document.getElementById( "screen" ).value)
//   var dis = document.getElementById("screen").value=scre;
}