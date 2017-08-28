'use strict';

var setup = document.querySelector('.setup');
var similar = setup.querySelector('.setup-similar');
var similarList = setup.querySelector('.setup-similar-list');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var inputUserName = document.querySelector('.setup-user-name');
var saveSetup = document.querySelector('.setup-submit')

var setupWizzard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizzard.querySelector('.wizard-coat');
var wizardEyes = setupWizzard.querySelector('.wizard-eyes');
var wizzardFireball = document.querySelector('.setup-fireball-wrap');

var fragment = document.createDocumentFragment();

var similarWizzardTemplate = document.querySelector('#similar-wizard-template').content;

var QUANTITY_MAGES = 4;
var KEY_OPEN_SETUP = 13;
var KEY_CLOSE_SETUP = 27;

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

var colorFireballs = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
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

showMages(QUANTITY_MAGES);

function showSetupHandler() {
  setup.classList.remove('hidden');
  similar.classList.remove('hidden');
}

function closeSetupHandler() {
  setup.classList.add('hidden');
  similar.classList.add('hidden');
}

setupOpen.addEventListener('click', showSetupHandler);
setupClose.addEventListener('click', closeSetupHandler);
saveSetup.addEventListener('click', closeSetupHandler);

document.body.addEventListener('keydown', function(evt) {
  if (evt.keyCode === KEY_CLOSE_SETUP) {
    closeSetupHandler();
  }
});

setupOpenIcon.addEventListener('focus', function() {
  this.addEventListener('keydown', function(evt) {
    if (evt.keyCode === KEY_OPEN_SETUP) {
      showSetupHandler();
    }
  });
});

inputUserName.addEventListener('focus', function() {
  this.addEventListener('keydown', function(evt) {
    if (evt.keyCode === KEY_CLOSE_SETUP) {
      showSetupHandler();
      return false;
    }
  });
});

setupClose.addEventListener('focus', function() {
  this.addEventListener('keydown', function(evt) {
    if (evt.keyCode === KEY_OPEN_SETUP) {
      closeSetupHandler();
    }
  });
});

saveSetup.addEventListener('focus', function() {
  this.addEventListener('keydown', function(evt) {
    if (evt.keyCode === KEY_OPEN_SETUP) {
      closeSetupHandler();
    }
  });
});

wizardCoat.addEventListener('click', function(evt) {
  evt.target.style.fill = randomElement(coatColors);
})

wizardEyes.addEventListener('click', function(evt) {
  evt.target.style.fill = randomElement(eyesColors);
});

wizzardFireball.addEventListener('click', function(evt) {
  evt.target.style.backgroundColor =randomElement(colorFireballs);
})
