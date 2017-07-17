(function(){

  $('#submitbutton').click(function(e){
    e.preventDefault();
    var name = $('#name').val()
    var password = $('#password').val()

    var r1 = $('input[name=r1]:checked').val()
    var r2=  $('input[name=r2]:checked').val()
    var c1=  $("input[type='checkbox']:checked").val()
    var c2 = $("input[type='checkbox']:checked").val()
    var c3=  $("input[type='checkbox']:checked").val()
    $('#t1').text(name);
    $('#t2').text(password);
    $('#t3').text(r1);
    $('#t4').text(r2);
    $('#t5').text(c1);
    $('#t6').text(c2);
    $('#t7').text(c3);
  });

}());
