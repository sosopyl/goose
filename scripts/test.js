
let img1 = document.querySelector('.testimg1')
let img11 = document.querySelector('.testimg11')
let img2 = document.querySelector('.testimg2')
let img22 = document.querySelector('.testimg22')

img1.addEventListener('click', function testres1(){
    img11.classList.add('unvisible')
    let res = document.createElement('p');
    res.textContent = ('увы, это был гусь :(')
    img1.appendChild(res);
    img2.setAttribute('disabled', '');
    img1.removeEventListener('click', testres1)
}
    ),
img2.addEventListener('click', function testres2(){
    img22.classList.add('unvisible')
    let res = document.createElement('p');
    res.textContent = ('Молодец, это и правда утка :)')
    img2.appendChild(res)
    img1.setAttribute('disabled', '');
    img2.removeEventListener('click', testres2)
})
