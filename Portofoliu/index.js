const skilbox = document.getElementById("hiddeskilboxes");
const skildbtn = document.getElementById("skilbtn");
console.log(skildbtn);
skildbtn.addEventListener('click',()=>{
    skilbox.classList.remove("d-none");
    skilbox.classList.add("d-flex", "flex-row", "justify-content-around")

});