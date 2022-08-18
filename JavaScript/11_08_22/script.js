function addElements(){
    var newphone = $("#addphone").val();
    var newcolour = $("#addcolour").val(); 
    $('.table tr:last').after('<tr> <td id="newphone" class="phones">  </td> <td id="newcolour" class="colours"> </td></tr>');
    $("#newphone:last").text(newphone);
    $("#newcolour:last").text(newcolour);
    $("#newphone").each(function(){
          this.id = this.id+"1";
      });
    $("#newcolour").each(function(){
        this.id = this.id+"1";
    });
    $('select#phoneFilter').append('<option id="opt"></option>');
    $("option#opt").text(newphone);
    $("option#opt").each(function(){
        this.id = this.id+"1";
    });
}
function filter(){
    if ($("select").val() == "All"){
        $("td.phones").each(function (){
                $(this).parent().show();})}
    else {$("td.phones").each(function (){
    if ($(this).text() !== $("select").val())
        $(this).parent().hide()
    else
        $(this).parent().show();
})}}
