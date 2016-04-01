var $box = $('.box');
var $btnShowHide = $('.btn-show-hide');
var $diamond = $('.diamond');
var $btnMoveInOut = $('.btn-move');
var $panel = $('.panel');
var $btnCollapse = $('.btn-collapse-expand');
var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');
var $btnAppend = $('.btn-append');
var $list = $('.list');
var $li = $('<li>');

$btnShowHide.on('click', function (e) {
  $box.toggleClass('is-clicked');
});

$btnMoveInOut.on('click', function (e) {
  $diamond.toggleClass('diamond-clicked');
});

$btnCollapse.on('click', function (e) {
  $panel.toggleClass('panel-clicked');
});

$btnBounce.on('click', function (e) {
  $circle.addClass('circle-clicked');
});

$btnBounce.on('animationend', '.circle-clicked', function () {
  $(this).removeClass();
});

$btnAppend.on('click', function (e) {
  $list.append($li);
});
