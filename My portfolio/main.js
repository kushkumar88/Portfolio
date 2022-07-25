// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function (){
	if(document.documentElement.scrollTop>20){
	nav.classlist.add("header-scrolled");
	}else{
	  nav.classlist.remove("header-scrolled");
	}
}