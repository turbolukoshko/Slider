let images = document.querySelectorAll('.slider__img');
let slider = document.querySelector('.slider__content');
let buttonPrev = document.querySelector('.slider__control-prev');
let buttonNext = document.querySelector('.slider__control-next');
let current = 0;
infinitySlider();

function infinitySlider(){
  for(i = 0; i < images.length; i++){
    images[i].classList.add('slider__img-opacity');
  }
  images[current].classList.remove('slider__img-opacity');
}

buttonPrev.addEventListener('click', function(){
  if(current - 1 == -1){
    current = images.length - 1;
  }else{
    current--;
  }
  infinitySlider();
});

buttonNext.addEventListener('click', function(){
  if(current+1 == images.length){
    current = 0;
  }else{
    current++;
  }
  infinitySlider();
});