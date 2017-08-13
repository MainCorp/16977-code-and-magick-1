'use strict';

function createStatistic(ctx, name, time, indent) {
  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(170 + indent, 125, 40, 100);
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillText(name, 170 + indent, 245);
    ctx.fillText(Math.ceil(time), 170 + indent, 120);
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(170 + indent, 125, 40, 100);
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillText(name, 170 + indent, 245);
    ctx.fillText(Math.ceil(time), 170 + indent, 120);
  }
}

window.renderStatistics = function (ctx, names, times) {
  var indent = 0;

  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 400, 250);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Ура вы победили!', 130, 50);
  ctx.fillText('Список результатов:', 130, 70);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.fillRect(130, 100, 360, 150);

  for (var i = 0; i < names.length; i++) {
    createStatistic(ctx, names[i], times[i], indent);
    indent += 80;
  }
};
