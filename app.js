const panels = document.querySelectorAll('.panel')

function addOpen(){
    this.classList.add('open')
    this.classList.add('open-active')
}
function remvOpen(){
    this.classList.remove('open')
    this.classList.remove('open-active')
}
// function addActive(e){
//     if(e.propertyName.includes('flex')){
//         this.classList.add('open-active')
//     }
// }
// function remvActive(e){
//     if(e.propertyName.includes('flex')){
//         this.classList.remove('open-active')
//     }
// }


panels.forEach(panel => panel.addEventListener('mouseover', addOpen,false));
//panels.forEach(panel => panel.addEventListener('transitionend', addActive,false));
panels.forEach(panel => panel.addEventListener('mouseout', remvOpen, false))
//panels.forEach(panel => panel.addEventListener('transitioned', remvActive, false))