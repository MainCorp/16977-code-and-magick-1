'use strict';

var setup = document.querySelector('.setup');
var similar = setup.querySelector('.setup-similar');
var similarList = setup.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

var similarWizzardTemplate = document.querySelector('#similar-wizard-template').content;

var QUANTITY_MAGES = 4;

var collectionNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var collectionLastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var collectionCoatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var collectionEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var mages = {
  name: collectionNames,
  lastName: collectionLastNames,
  coatColor: collectionCoatColor,
  eyesColor: collectionEyesColor
};

function random(num) {
  return Math.ceil(Math.random() * num);
}

function createMage() {
  var mageElement = similarWizzardTemplate.cloneNode(true);

  mageElement.querySelector('.setup-similar-label').textContent = mages.name[random(collectionNames.length - 1)] + ' ' + mages.lastName[random(collectionLastNames.length - 1)];
  mageElement.querySelector('.wizard-coat').style.fill = mages.coatColor[random(collectionCoatColor.length - 1)];
  mageElement.querySelector('.wizard-eyes').style.fill = mages.eyesColor[random(collectionEyesColor.length - 1)];


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
