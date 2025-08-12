const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const pages = document.querySelectorAll('.page');

let currPage = 0;


function updateMove(){
    pages.forEach((page) => {
        page.classList.remove('active');
    });

    pages[currPage].classList.add('active');

    if (currPage === 0) {
        prev.disabled = true;
        prev.style.opacity = '0.3';
    } else {
        prev.disabled = false;
        prev.style.opacity = '1';
    }

    if (currPage === pages.length - 1) {
        next.disabled = true;
        next.style.opacity = '0.3';
    } else {
        next.disabled = false;
        next.style.opacity = '1';
    }
}

updateMove();

function prevMove(){
    if(currPage > 0){
        currPage--;
        updateMove();
    }    
}
function nextMove(){
    if(currPage < pages.length - 1){
        currPage++;
        updateMove();
    }
}

prev.addEventListener('click', prevMove);
next.addEventListener('click', nextMove);

pages.forEach((page, idx) => {
    
    page.addEventListener('click', () =>{
        currPage = idx;
        updateMove();
    });
});