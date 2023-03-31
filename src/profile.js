var elem2 = document.querySelectorAll('.modal');
document.addEventListener("DOMContentLoaded" , () => {
    var instances = M.Modal.init(elem2  , {})
})

const caruItem = document.getElementsByClassName("carousel-item");
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        onCycleTo : function(data){
        for(let i = 0 ; i< (caruItem.length) ; ++i){
            caruItem[i].style.filter = `blur(10px)`
            console.log("done");
        }
        data.style.filter = `blur(0px)`
        console.log("done");
        } 

    });
  });


document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.fixed-action-btn');
var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false,
});
});

const cllose = document.getElementsByClassName("end")[0];
cllose.addEventListener("click" , ()=> {
    elem2[1].M_Modal.close();  
})


for(let i =0 ; i<caruDbtn.length ; ++i){
    caruDbtn[i].addEventListener("click" , () => {
        elem2[2].M_Modal.open();
    })
}