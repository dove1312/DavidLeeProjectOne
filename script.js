// making functional mobile hamburger menu

const navElement = document.querySelector('nav');
const ulElement = document.querySelector('ul');
console.log(navElement);

navElement.addEventListener('click', function(){
    console.log(document.querySelector('ul'));
    
    if(ulElement.style.opacity == 0){
        ulElement.style.opacity = 1;
    } else{
        ulElement.style.opacity = 0;
    }
});

// ulElement.classList.toggle();



// making gallery carousel

const liElement = document.getElementsByClassName('galleryList')
console.log(liElement);
const left = document.querySelector('.leftArrow');
console.log(left);
const right = document.querySelector('.rightArrow');
let counter = 1;
// console.log(left[0])
if(left && right){

    left.addEventListener('click', function(){
        if(counter > 0){
            counter = counter - 1;
            console.log(counter);
            document.querySelector('.results').innerHTML = liElement[counter].innerHTML;
        }
    });
    console.log(right[0])
    right.addEventListener('click', function(){
        if(counter < 2){
            counter = counter + 1;
            console.log(counter);
            document.querySelector('.results').innerHTML = liElement[counter].innerHTML;
        }
    });
}





// adding functionality to form submit button

const formElement = document.querySelector('form');
if(formElement){
    formElement.addEventListener('submit', function(e){
    e.preventDefault();
    alert('thanks for submitting form!');
})
}