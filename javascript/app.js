const menuBar = document.getElementById('menu-bar');
const sideMenu = document.getElementById('menu-option');
const overLay = document.getElementById('overlay');
const menuItem = document.getElementById('menu-option-item');
const allService = document.getElementById('all-service');
const viewBtn = document.getElementById('view-more-btn');


document.onclick = function(e){    
    if(e.target.id === 'menu-option-item' || e.target.id === 'overlay'){
        console.log('it works');
        menuBar.classList.remove('active');
        sideMenu.classList.remove('active');
        overLay.classList.remove('active');
    }
}

menuBar.onclick = function (){
    menuBar.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overLay.classList.toggle('active');
}

viewBtn.onclick = function (){
    viewBtn.classList.toggle('show');
    allService.classList.toggle('show');
}

