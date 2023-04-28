function scrolling(elem){
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}
let historybutton = document.querySelector('.historybutton')
let historyblock = document.querySelector('.historyblock')

historybutton.addEventListener('click', function(){
    scrolling(historyblock)
})