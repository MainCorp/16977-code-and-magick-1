'use strict';

var setup = document.querySelector('.setup');
var similar = setup.querySelector('.setup-similar');
var similarList = setup.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

var similarWizzardTemplate = document.querySelector('#similar-wizard-template').content;

var QUANTITY_MAGES = 4;

var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var lastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

function randomElement(el) {
  var random = Math.floor(Math.random() * el.length);

  return el[random];
}

function createMage() {
  var mageElement = similarWizzardTemplate.cloneNode(true);

  mageElement.querySelector('.setup-similar-label').textContent = randomElement(firstNames) + ' ' + randomElement(lastNames);
  mageElement.querySelector('.wizard-coat').style.fill = randomElement(coatColors);
  mageElement.querySelector('.wizard-eyes').style.fill = randomElement(eyesColors);


  return mageElement;
}

function showMages(num) {
  for (var i = 0; i < num; i++) {
    fragment.appendChild(createMage());
  }

  similarList.appendChild(fragment);
}

setup.classList.remove('hidden');
showMages(QUANTITY_MAGES);
similar.classList.remove('hidden');
