const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");


// Select tab content item
function selectItem(e) {
    console.log("I am here")
    removeBorder();
    removeShow();
    // Add border to the current tab
    this.classList.add('tab-border');
    // Grab the id from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // Add the show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
tabItems.forEach(item => item.addEventListener('click', selectItem));