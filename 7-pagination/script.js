const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const pages = document.querySelectorAll('.page');

let currPage = 0;


function updateMove(){
    pages.forEach((page) => {
        page.classList.remove('active');
    });

    pages[currPage].classList.add('active');
}

function prevMove(){
    currPage = (currPage - 1 + pages.length) % pages.length;
    updateMove();
}
function nextMove(){
    currPage = (currPage + 1) % pages.length;
    updateMove();
}

prev.addEventListener('click', prevMove);
next.addEventListener('click', nextMove);

pages.forEach((page, idx) => {
    
    page.addEventListener('click', () =>{
        currPage = idx;
        updateMove();
    });
});