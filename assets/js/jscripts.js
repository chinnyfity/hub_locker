
var site_urls = $('#url').val();
var page_name = $('#page_name').val();


$(document).ready(function(){

  setTimeout(function(){
    var count = $('#tbl_search').DataTable().rows().eq(0).length;
    $('.count_items div').html(count + ' Open Lockers Available');
  
    
    // if ($(window).width() <= 900) {
    //   $('.mb-none').addClass('none');
    // }else{
    //   $('.mb-none').addClass('none');
    // }

    // var dataTable = $('#tbl_search').DataTable();
    // dataTable.clear().draw();

    

   
  },2000);

});



  function autocomplet() {
    var keyword = $('#txtsearchs').val();
    
    var datastring='keyword='+keyword;
    // +'&txtlocs='+txtlocs
    // +'&txtcats='+txtcats;
      if (keyword != "") {
      $.ajax({
        url : site_urls+"node/getSearches",
        type: 'POST',
        data: datastring,
        success:function(data){
          //alert(data);
          if(data != ""){
            $('#country_list_id').show();
            $('#country_list_id').html(data);
          }else{
            $('#country_list_id').hide();
            $('#country_list_id').html('');
          }

          /* var count=0;
          $('#tbl_name tr').each(function(){
              count++;
          }); */

          setTimeout(function(){
            var count = $('#tbl_search').DataTable().rows().eq(0).length;
            $('.count_items div').html(count + ' Open Lockers Available');
          },300);

        },error : function(data){
          
        }
      });
    } else {
      $('#country_list_id').hide();
    }
  }


  function set_item(item) {
    $('#txtsearchs').val(item);
    $('#txtsearchs1').val(item);
    $('#country_list_id').hide();
  }


  $(document).click(function(e) {
    $("#country_list_id").hide();
  });


  $('body').on('keyup', '.txtsearchs', function(e) {
    var searchTerm = $('.txtsearchs').val();
    if(searchTerm != "")
      $('.close-icon').fadeIn('fast');
    else
      $('.close-icon').fadeOut('fast');
  });
  


  $('body').on('click', '.close-icon', function(e) {
    e.preventDefault();
    $('.txtsearchs').val('');
    $('.txtsearchs').focus();
    $(this).fadeOut('fast');
    
    $('.dataTables_filter input').val('');
    $('.dataTables_filter input').trigger('keyup');

    setTimeout(function(){
      var count = $('#tbl_search').DataTable().rows().eq(0).length;
      $('.count_items div').html(count + ' Open Lockers Available');
    },300);
  });



  $('body').on('change', '.txt_size', function (e) {
    var txt_size = $(this).val();
    $('.dataTables_filter input').val(txt_size);
    $('.dataTables_filter input').trigger('keyup');
  });


  $('body').on('change', '.txtsort', function (e) {
    var txtsort = $(this).val();
    $('.dataTables_filter input').val(txtsort);
    $('.dataTables_filter input').trigger('keyup');
  });


  $('body').on('keyup', '.txtsearchs', function (e) {
    var txtsearchs = $(this).val();
    $('.txtsearchs1').val(txtsearchs);
    $('.dataTables_filter input').val(txtsearchs);
    $('.dataTables_filter input').trigger('keyup');
  });


  function autocomplet1() {
    var keyword = $('#txtsearchs1').val();
    var datastring='keyword='+keyword;
      if (keyword != "") {
      $.ajax({
        url : site_urls+"node/getSearches",
        type: 'POST',
        data: datastring,
        success:function(data){
          //alert(data);
          if(data != ""){
            $('#country_list_id').show();
            $('#country_list_id').html(data);
          }else{
            $('#country_list_id').hide();
            $('#country_list_id').html('');
          }
          
          setTimeout(function(){
            var count = $('#tbl_search').DataTable().rows().eq(0).length;
            $('.count_items div').html(count + ' Open Lockers Available');
          },300);

        },error : function(data){
          
        }
      });
    } else {
      $('#country_list_id').hide();
    }
  }



  $('body').on('keyup', '.txtsearchs1', function(e) {
    var searchTerm = $(this).val();
    $('.txtsearchs').val(searchTerm);
    if(searchTerm != "")
      $('.close-icon').fadeIn('fast');
    else
      $('.close-icon').fadeOut('fast');
  });


  $('body').on('click', '.close-icon1', function(e) {
    e.preventDefault();
    $('.txtsearchs1').val('');
    $('.txtsearchs1').focus();
    $(this).fadeOut('fast');
    
    $('.dataTables_filter input').val('');
    $('.dataTables_filter input').trigger('keyup');

    setTimeout(function(){
      var count = $('#tbl_search').DataTable().rows().eq(0).length;
      $('.count_items div').html(count + ' Open Lockers Available');
    },300);
  });


  
function create_cookie(name, value, days2expire, path) {
  var date = new Date();
  date.setTime(date.getTime() + (days2expire * 24 * 60 * 60 * 1000));
  var expires = date.toUTCString();
  document.cookie = name + '=' + value + ';' +
                   'expires=' + expires + ';' +
                   'path=' + path + ';';
}


function retrieve_cookie(name) {
  var cookie_value = "",
    current_cookie = "",
    name_expr = name + "=",
    all_cookies = document.cookie.split(';'),
    n = all_cookies.length;
 
  for(var i = 0; i < n; i++) {
    current_cookie = all_cookies[i].trim();
    if(current_cookie.indexOf(name_expr) == 0) {
      cookie_value = current_cookie.substring(name_expr.length, current_cookie.length);
      break;
    }
  }
  return cookie_value;
}

