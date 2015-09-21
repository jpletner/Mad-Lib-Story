$(document).ready(function() {

  $('.btn').click(function(event) {

    var heroInput = $("input[name='hero']").val();
    var character1Input = $("input[name='character1']").val();
    var character2Input = $("input[name='character2']").val();

    var journeyInput = $("input[name='journey']").val();

    var questInput = $('#quest').val();

    var destinyInput = $("input:radio[name='choice']:checked").val();

    var abilityInput = $("input[name='ability']:checked").val();

    $('.hero').text(heroInput);
    $('.character1').text(character1Input);
    $('.character2').text(character2Input);
    $('.journey').text(journeyInput);
    $('.quest').text(questInput);
    $('.destiny').text(destinyInput);
    $('.ability').text(abilityInput);



    $('.story').removeClass("story");











  event.preventDefault();
  });
});
