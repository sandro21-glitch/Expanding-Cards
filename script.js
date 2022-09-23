'use strict';

const cards = document.querySelectorAll('.card');


cards.forEach(card => card.addEventListener('click', function(){
    classlistRemove();
    card.classList.add('active');
}))

function classlistRemove(){
    cards.forEach(card => card.classList.remove('active'))
}