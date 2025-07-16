const items = document.querySelectorAll('.item');
const paragraphs = document.querySelectorAll('.paragraph');

let currTab = 0;

function vis(){
    items.forEach(item => {
        item.classList.remove('active');
    });
    paragraphs.forEach(paragraph => {
        paragraph.classList.remove('show');
    });

    items[currTab].classList.add('active');
    paragraphs[currTab].classList.add('show');
}

items.forEach( (item,index) => {
    item.addEventListener("click", () => {
        currTab = index;
        vis();
    });
});