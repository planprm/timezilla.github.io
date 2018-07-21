/*
   Author: Ismagilov A.Z.
   email: progamailism@gmail.com
   https://twitter.com/AmirIsmagilov
*/

$(function(){
  //var today = new Date();
  //$("#date").html(today.getDate()+"."+(parseInt(today.getMonth())+1)+"." + today.getFullYear());
  //$('#content').html('Text');
  
  $(document).ready(function () {
       //$('div.name').hide();
       
	   
	   news();
	   
	   tweakWidthForScrollbar();
	   
	   setTimeout(function()
	   {
	      nextmatch();
	   }, 500);
	   
	   //simple_tooltip("a","tooltip");
	   //table();
	   //calendar();
	   
	   //$(this).tooltip();
  });
  
  //$('#countdown').hide();
 
  
  function tweakWidthForScrollbar() {
    var db = document.body;
    var scrollBarWidth = db.scrollHeight > db.clientHeight ?
      db.clientWidth - db.offsetWidth : 0;
    db.style.paddingRight = scrollBarWidth + "px";

  }
  
  var ex_table = false;
  var ex_calendar = false;
   /* function simple_tooltip(target_items, name){
    $(target_items+"[title]").each(function(i){
        $("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
        var my_tooltip = $("#"+name+i);

        $(this).removeAttr("title").mouseover(function()
		{
          my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
        }).mousemove(function(kmouse){
          my_tooltip.css({left:kmouse.pageX-105, top:kmouse.pageY+35});
        }).mouseout(function(){
          my_tooltip.fadeOut(400);
        });
    });
  } */
  
  //var nextgame = $('#nextmatch').val();
  //$('.name a').attr('title','Следующий матч</br>asasa'); 
  
  $('#news').click(function() {

       tweakWidthForScrollbar();
	   
	   $('#tableteam').hide();
	   $('#calendarteam').hide();
	   $('#content').show();
	   //$('#nextmatch').show();	   
	   
	   //location.reload();
  });
  
  var my_tooltip = $("#nextmatch");
  $('.name_btn').mouseover(function()
  {
    
    my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
    }).mousemove(function(kmouse){
        my_tooltip.css({left:kmouse.pageX-105, top:kmouse.pageY+35});
    }).mouseout(function(){
        my_tooltip.fadeOut(400);
				
  });
  
  $('#table').click(function() {
       
	   if(ex_table == true) 
	   {
	     
	     $('#tableteam').show();
	      //$('#nextmatch').hide();
	     $('#calendarteam').hide();
	     $('#content').hide();
	   }
	   else
	   {
	     table();
		 ex_table = true;
	     $('#tableteam').show();
	      //$('#nextmatch').hide();
	     $('#calendarteam').hide();
	     $('#content').hide();
	   }
  });

  $('#calendar').click(function() {
       if(ex_calendar == true) 
	   {
	     
	     $('#tableteam').hide();
	     //$('#nextmatch').hide();
	     $('#calendarteam').show();
	     $('#content').hide();
	   }
	   else
	   {
	     calendar();
	     ex_calendar = true;
		 $('#tableteam').hide();
	     //$('#nextmatch').hide();
	     $('#calendarteam').show();
	     $('#content').hide(); 
	   }
  });
  
  function calendar()
  {
     $('.modal').show();
     
     $.get("http://fcufa.pro/index.php/sezon/fnl", function(data) {
	    
		var elementInResponse = $("<div>").html(data).find('.jsnoborders');
		var tr = elementInResponse.find('table.jsnoborders > tr');
		
		elementInResponse.find('td img').remove();
		//elementInResponse.find('td:eq(3),td:eq(5)').remove();
		
		var ptr = elementInResponse.find("tr");
        ptr.find("td:eq(3),td:eq(5)").remove();
		
		$('#calendarteam').html(elementInResponse);
		$('#calendarteam').append("<div class='all-calendar'><a href='http://fcufa.pro/index.php/sezon/fnl' target='_blank'>Смотреть календарь</a></div>");
	    $('.modal').hide();
	 });

  }
  
  function nextmatch()
  {
     $.get("http://fcufa.pro/", function(data) {
		
	    var nextmatch = $("<div>").html(data).find('.jsm_nextmtable');
		
		var ptr = nextmatch.find("tr:eq(2)");
        ptr.find("td:eq(0),td:eq(1),td:eq(2)").css('color','#fff');
		
	    $('#nextmatch').append(nextmatch);
		
	 });
  }
  
  function table()
  {
     $('.modal').show();
     
     $.get("http://fcufa.pro/", function(data) {
	    
	    var elementInResponse = $("<div>").html(data).find('.tblview');
		
		elementInResponse.find("tr:eq(1)").css('background','#FFFFCC');
		elementInResponse.find("tr:eq(2)").css('background','#FFFFCC');
		
		elementInResponse.find("tr:eq(3)").css('background','#E0FFEB');
		elementInResponse.find("tr:eq(4)").css('background','#E0FFEB');
		
		elementInResponse.find("tr:eq(18)").css('background','#E8E8E8');
		elementInResponse.find("tr:eq(19)").css('background','#E8E8E8');
		
		$('#tableteam').html(elementInResponse);
		$('#tableteam').append("<div class='all-table'><a href='http://fcufa.pro/index.php/sezon/fnl' target='_blank'>Смотреть таблицу</a></div>");
	    $('.modal').hide();

	 });
  }
  
  
  function news() {
  
  $('.modal').show();

  //var i = 0;
  
  $.get("http://fcufa.pro/", function(data)
  {
       
       var elementInResponse = $("<div>").html(data).find('.junewsultra');
		
	   var link1 = elementInResponse.find('.jn a').attr('href');
	   var newlink1 = 'http://fcufa.pro/' + link1;

	   elementInResponse.find('.jn a').attr('href', newlink1);
	   elementInResponse.find('.jn a').attr('target','_blank');
	   //elementInResponse.find('.junewsultra').attr('class','junewsultra-'+i);
	   
	   var link2 = elementInResponse.find('.jn-small a').attr('href');
	   var newlink2 = 'http://fcufa.pro' + link2;
	   
	   elementInResponse.find('.jn-small a').attr('href', newlink2);
	   elementInResponse.find('.jn-small a').attr('target','_blank');	   
	   
	   $('#content').html(elementInResponse);
	   
	   //$('#content').append("<div class='all-news'><a href='http://fcufa.pro/index.php/main' target='_blank'>Смотреть все новости</a></div>");
	   
	   $('.modal').hide();

	   //++i;

  });
  }
  
  
});
