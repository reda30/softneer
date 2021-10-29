var a = document.getElementById("navbar"),
navheight = a.offsetHeight;

window.onscroll = function(){
    var y = window.scrollY;
    if (y > navheight ){
        a.style.opacity = '0.8';
    }
    else {
        a.style.opacity = '1';

    }
}

var item = document.querySelectorAll(".tab-switch li "); 
var tab = document.querySelectorAll(".tab-section .tab-content .tabs "); 


for(let i = 0; i<item.length;i++){

    item[i].onclick = function(){

        for(let k=0;k<i;k++){
            item[k].classList.remove('selected');
            tab[k].style.display='none';
        }

        for(let k=i+1;k<item.length;k++){
            item[k].classList.remove('selected');
            tab[k].style.display='none';
        }
       item[i].classList.add("selected");
        tab[i].style.display='block';

        }

  }



