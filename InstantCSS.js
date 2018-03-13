var editbox = document.createElement("editbox");
function openNav() {
	if (document.getElementsByTagName("editbox")[0].style.width == "350px"){
		document.getElementsByTagName("editbox")[0].style.width = "0";
		document.getElementsByTagName("editbox")[0].style.padding = "0";
	} else {
		document.getElementsByTagName("editbox")[0].style.width = "350px";
		document.getElementsByTagName("editbox")[0].style.padding = "5px";
	}
    
}

function closeNav() {
    document.getElementsByTagName("editbox")[0].style.width = "0";
    document.getElementsByTagName("editbox")[0].style.padding = "0";
}
editbox.style = 'height: 100%; width: 0; position: fixed; z-index: 9999; top: 0; left: 0; background-color: rgba(0,0,0,0.7); overflow-x: hidden; transition: 0.5s; padding: 0px; align:center;';
var linkOne = document.createElement("a");
var leftArr = document.createElement("txt");
var txtbox = document.createElement("textarea");
var newline = document.createElement("br");
var linkFou = document.createElement("a");
var linkFiv = document.createElement("a");
linkOne.class = "closebtn";
linkOne.href = "javascript:closeNav()";
linkOne.innerText = "Close Editor";
leftArr.innerText = "<";
txtbox.id = "newcss";
//editbox.innerHtml ='<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>  <a href="#">About</a>  <a href="#">Services</a>  <a href="#">Clients</a>  <a href="#">Contact</a>';
editbox.appendChild(leftArr);
editbox.appendChild(linkOne);
editbox.appendChild(newline);
editbox.appendChild(txtbox);
document.body.appendChild(editbox);
linkOne.style = "margin-left: 10px; padding-left: 10px; color: white; display: inline-block; position: absolute;";
leftArr.style = "color: white; display: inline-block; position: absolute;";
txtbox.style = "height: auto; width: 350px; position: absolute; margin-top: 5px; height: 80vh;";
if(txtbox.addEventListener ) {
    txtbox.addEventListener('keydown',this.keyHandler,false);
} else if(txtbox.attachEvent ) {
    txtbox.attachEvent('onkeydown',this.keyHandler); /* damn IE hack */
}

function keyHandler(e) {
    var TABKEY = 9;
    if(e.keyCode == TABKEY) {
        this.value += "    ";
        if(e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }
}
var css = document.createElement("style");
css.type = "text/css";

document.body.appendChild(css);

document.getElementById("newcss").addEventListener("keyup", function (e) {
	document.body.removeChild(css);
    css.innerHTML = document.getElementById("newcss").value;
    document.body.appendChild(css);
});


var button = document.createElement("Button");
button.innerHTML = "Show/Hide CSS Editor";
button.style = "top:0;right:0;position:absolute;z-index: 9999"
button.onclick = function openNav() {
	if (document.getElementsByTagName("editbox")[0].style.width == "350px"){
		document.getElementsByTagName("editbox")[0].style.width = "0";
		document.getElementsByTagName("editbox")[0].style.padding = "0";
	} else {
		document.getElementsByTagName("editbox")[0].style.width = "350px";
		document.getElementsByTagName("editbox")[0].style.padding = "5px";
	}
    
}
document.body.appendChild(button);