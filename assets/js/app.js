let tab1 = document.getElementById('tab1')
let tab2 = document.getElementById('tab2')
let tab3 = document.getElementById('tab3')
let tab4 = document.getElementById('tab4')
let opentab1 = document.getElementById('opentab1')
let opentab2 = document.getElementById('opentab2')
let opentab3 = document.getElementById('opentab3')
let opentab4 = document.getElementById('opentab4')
let tabpage1 = document.getElementById('tabpage1')
let cross = document.getElementById('closebtn')
tab1.addEventListener("click", function () {
    opentab1.classList.remove("d-none")
    opentab1.classList.add("d-block")
    tabpage1.classList.add("d-none")
});
cross.addEventListener("click", function () {
    opentab1.classList.add("d-none")
    opentab1.classList.remove("d-block")
    tabpage1.classList.remove("d-none")
})

tab2.addEventListener("click", function () {
    opentab1.classList.remove("d-none")
    opentab1.classList.add("d-block")
    tabpage1.classList.add("d-none")
});
tab3.addEventListener("click", function () {
    opentab1.classList.remove("d-none")
    opentab1.classList.add("d-block")
    tabpage1.classList.add("d-none")
});

tab4.addEventListener("click", function () {
    opentab1.classList.remove("d-none")
    opentab1.classList.add("d-block")
    tabpage1.classList.add("d-none")
});







