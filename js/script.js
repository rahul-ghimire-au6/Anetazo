var Shuffle = window.Shuffle;
var jQuery = window.jQuery;

var myShuffle = new Shuffle(document.querySelector('.my-shuffle'), {
  itemSelector: '.image-item',
  sizer: '.my-sizer-element',
  buffer: 1,
});

jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
  var input = evt.currentTarget;
  if (input.checked) {
    myShuffle.filter(input.value);
  }
});
// Step 3 - Instilize the plugin by #id selector
VANTA.BIRDS({
  el: "#vantajs",
  backgroundColor: 0xffffff,

})

VANTA.BIRDS('#vantajs')