window.onscroll = function() {scroll()};

function scroll(){
  let head = document.getElementById('head')
  let pos = 200;
  if (document.body.scrollTop > pos || document.documentElement.scrollTop > pos){
    head.classList.add("active");
  } else {
    head.classList.remove("active");
  }
}
