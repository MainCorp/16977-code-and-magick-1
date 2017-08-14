'use strict';

var maxHeightColumn = 100;

function randomValue(min, max) {
  return Math.random(max - min) + min;
}

function calculateHeight(time, maxTime) {
  var columnHeight = time / maxTime * maxHeightColumn;

  return columnHeight;
}

function createStatistic(ctx, name, time, indent, maxTime) {
  var restColumn = maxHeightColumn - calculateHeight(time, maxTime);
  time = Math.ceil(time);

  ctx.fillStyle = name === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(0, 0, 255, ' + randomValue(0.25, 1) + ')';
  ctx.fillRect(170 + indent, 125 + restColumn, 40, calculateHeight(time, maxTime));
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText(name, 170 + indent, 245);
  ctx.fillText(time, 170 + indent, 120);
}

window.renderStatistics = function (ctx, names, times) {
  var indent = 0;
  var maxTime = 0;

  ctx.fillStyle = 'rgba(0, 0, 0, .7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 130, 50);
  ctx.fillText('Список результатов:', 130, 70);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.fillRect(130, 100, 360, 150);

  for (var j = 0; j < times.length; j++) {
    if (times[j] > maxTime) {
      maxTime = times[j];
    }
  }

  for (var i = 0; i < names.length; i++) {
    createStatistic(ctx, names[i], times[i], indent, maxTime);
    indent += 80;
  }
};
