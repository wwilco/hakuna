// hide side nav accordians
$('#accordian-care-recip').collapse("hide");
$('#accordian-care-giver').collapse("hide");
$('#accordian-nurse').collapse("hide");
// change Tab from alternate link
$(function(){
    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
      e.preventDefault()
      $('ul.nav li a[href="' + $(this).attr('href') + '"]').tab('show');
   })
 });
