$(function () {

  $(document).on('click', '.test' + ' .ton', function(e) {
    e.preventDefault();
    $(this).closest('.ton').toggleClass('selected');
  });
});
