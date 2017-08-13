'use strict';

function randomInteger(min, max) {
  var rand = Math.abs(min - 0.5 + Math.random() * (max - min + 1));

  return rand;
}

function calculateHeight(time, times) {
  var maxHeightColumn = 100;
  var columnHeight = time / times[times.length - 1] * maxHeightColumn;

  return columnHeight;
}

function createStatistic(ctx, name, time, indent, times) {
  time = Math.ceil(time);

  ctx.fillStyle = name === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(0, 0, 255, ' + randomInteger(0.25, 1) + ')';

  ctx.fillRect(170 + indent, 125, 40, calculateHeight(time, times));
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText(name, 170 + indent, 245);
  ctx.fillText(time, 170 + indent, 120);
}

window.renderStatistics = function (ctx, names, times) {
  var indent = 0;
  times = times.sort(function (a, b) {
    return Math.ceil(a) - Math.ceil(b);
  });

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

  for (var i = 0; i < names.length; i++) {
    createStatistic(ctx, names[i], times[i], indent, times);
    indent += 80;
  }
};
