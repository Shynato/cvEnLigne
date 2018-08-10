let sections = $('section');
function showMenu(sectionFrom) {
    sections.first().show(1500,);
   sections.eq(sectionFrom).hide(500);
};
function showSec(sectionToShow, sectionToHide=0){
     sections.eq(sectionToShow).show(1500);
     sections.eq(sectionToHide).hide(500);
    sections.first().hide(500);
};