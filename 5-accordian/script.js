const accordianItems = document.querySelectorAll(".accordian-item");
const accordianHeader = document.querySelectorAll(".accordian-header");
const accordianContent = document.querySelectorAll(".accordian-content");
// Ionicon
const accordianIcon = document.getElementsByTagName("ion-icon");

// let activeIndex;


function deactive(index){

    accordianItems.forEach((item, i) => {
        if(index !== i){
            // item.classList.remove("content-active");
            accordianIcon[i].classList.remove("icon-active");
            accordianHeader[i].classList.remove("header-active");
            accordianContent[i].classList.remove("content-active");
        }
    })
}
    

accordianItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        accordianIcon[index].classList.toggle("icon-active");
        accordianHeader[index].classList.toggle("header-active");
        accordianContent[index].classList.toggle("content-active");
        deactive(index);
    });
})