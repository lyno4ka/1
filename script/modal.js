const modal = document.getElementById('myModal');
const openModal = document.getElementById('open-modal');
let span = document.querySelector('.close');


openModal.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}