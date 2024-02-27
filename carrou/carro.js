var fondomover=document.querySelector('.padre')
var humo=document.querySelector('.humo')
var luz=document.querySelector('.luz')
var llanta = document.querySelector('.llanta')
var llanta = document.querySelector('.llanta2')


fondomover.addEventListener('click',dad)

function dad(){
    fondomover= classList.add('padre')
    humo=classList.remove('humito')
    luz=classList.remove('luz-mover')
    llanta = classList.add('llanta')
    llanta = classList.add('llanta2')

}