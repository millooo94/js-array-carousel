const arrImg = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];


const eleSlider = document.querySelector('.slider');

const eleThumbContainer = document.querySelector('.thumbnail-img-container')

const eleThumb = document.querySelector('.thumbnail');

const eleBtnUp = document.querySelector('.btn-up');

const eleBtnDown = document.querySelector('.btn-down');

const eleLayover = document.querySelector('.layover')





// console.log(arrImg.lenght)

for (let i = 0; i < arrImg.length; i++) {

    const eleImg = document.createElement('img');
    eleImg.src = arrImg[i];
    eleImg.classList.add('slider-img');

    if (i === 0) {
        eleImg.classList.add('active');
        eleLayover.classList.remove('layover')

    }

    eleSlider.append(eleImg);
}


const listEleImg = document.querySelectorAll('.slider-img')
const listEleImgLayover = document.querySelectorAll('.layover')



let activeIndex = 0


eleBtnUp.addEventListener('click', function () {

    listEleImg[activeIndex].classList.remove('active');


    if (activeIndex === 0) {
        activeIndex = listEleImg.length - 1

    } else {
        activeIndex--
    }

    listEleImg[activeIndex].classList.add('active');


    listEleImgLayover[activeIndex].classList.add('layover');

    if (activeIndex === 0) {
        activeIndex = listEleImg.length - 1

    } else {
        activeIndex--
    }

    listEleImgLayover[activeIndex].classList.remove('layover');


});


eleBtnDown.addEventListener('click', function() {

    listEleImg[activeIndex].classList.remove('active');

    if (activeIndex === listEleImg.length - 1) {

        activeIndex = 0
    } else {
        activeIndex++
    }

    listEleImg[activeIndex].classList.add('active');


    listEleImgLayover[activeIndex].classList.remove('layover');

    if (activeIndex === listEleImgLayover.length - 1) {

        activeIndex = 0
    } else {
        activeIndex++
    }

    listEleImgLayover[activeIndex].classList.add('layover');

});









eleBtnDown.addEventListener('click', function() {


})
