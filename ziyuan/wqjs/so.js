	//苹果接口
function frompg(id){
  var url1=pingguoz[id];
  $("#list").hide();
        $.ajax({
            type: "get",
            url: jiekou +url1 +"?ac=detail&wd=" + lianjie1,
      error: function (XMLHttpRequest, textStatus, errorThrown) {
                   alert(textStatus);
                   alert(errorThrown);
                   this; // 调用本次AJAX请求时传递的options参数
               },
          data: "",
               dataType: "jsonp",
          cache: true,
          async: true,
            jsonp: 'callback',
  jsonpCallback: 'callback1',
    contentType: "application/json;utf-8",
             success: function(data) {
              if(null != data && "" != data){
              var Node = $("#loading");  
                  Node.hide(); 
                  var jieguo1="";
          if(data.list.length==0){jieguo1='<P style="font-size:15px;"><SPAN><b style="color:#CC0033" >暂无资源，请查看其他资源！</b></SPAN></P>'} else{
                  for (var i=0;i<data.list.length;i++)
                   { jieguo1+='<li><a class="movie-item" href="./play.html?q='+data.list[i].vod_id+'&id='+id+'&zy=pg" target="_blank"><div class="movie-cover"><img src="'+data.list[i].vod_pic+'" ><span class="movie-description"><i class="description-bg"></i><p>状态：'+data.list[i].vod_remarks+'</p><p>年代：'+data.list[i].vod_year+'</p><p>&gt; 在线观看</p></span></div><div class="movie-title"><p class="movie-name">'+data.list[i].vod_name+'</p><p class="movie-tags">'+data.list[i].vod_actor+'</p></div></a></li>';}
         } 
                $("#list").html(jieguo1);
                 $("#list").slideDown();
              }else{
                alert("无结果,请切换其他资源！");
              }
            },
            error: function(a) {
                alert("失败，请检查关键字。");
            }
        })
        document.getElementById("bolei").innerHTML =pingguow[id]; 
    }
  
//其他资源接口1080tv
function zy2(id){
  var url3=appqt +qtzy[id]+ lianjie1;
  $(function (){
  $.ajax({
  async: true,
  type: "GET",
  dataType: 'jsonp',
   cache: true,
          async: true,
  jsonp: 'callback',
  jsonpCallback: 'callback2',
  url: url3,
  data: "",
  timeout: 8000,
  contentType: "application/json;utf-8",
  success: function(data)  {
      
    var jieguo2="";
    if(data.data.list.length==0){jieguo2='<P style="font-size:15px;"><SPAN><b style="color:#CC0033" >暂无资源，请查看其他资源！</b></SPAN></P>'} else{
  
          for (var i=0;i<data.data.list.length;i++)
			       { jieguo2+='<li><a class="movie-item" href="./play.html?q='+data.data.list[i].vod_id+'&id='+id+'&zy=qt" target="_blank"><div class="movie-cover"><img src="'+data.data.list[i].vod_pic+'" ><span class="movie-description"><i class="description-bg"></i><p>状态：'+data.data.list[i].vod_remarks+'</p><p>年代：'+data.data.list[i].vod_year+'</p><p>&gt; 在线观看</p></span></div><div class="movie-title"><p class="movie-name">'+data.data.list[i].vod_name+'</p><p class="movie-tags" title="演员">'+data.data.list[i].vod_actor+'</p></div></a></li>';} 

  }
   document.getElementById("list2").innerHTML =jieguo2;
  }
 })
})}
//其他资源接口HG
function zy3(id){
  var url3=appqt +qtzy[id]+ lianjie1;
  $(function (){
  $.ajax({
  async: true,
  type: "GET",
  dataType: 'jsonp',
   cache: true,
          async: true,
  jsonp: 'callback',
  jsonpCallback: 'callback3',
  url: url3,
  data: "",
  timeout: 8000,
  contentType: "application/json;utf-8",
  success: function(data)  {
      
    var jieguo3="";
    if(data.data.list.length==0){jieguo3='<P style="font-size:15px;"><SPAN><b style="color:#CC0033" >暂无资源，请查看其他资源！</b></SPAN></P>'} else{
  
          for (var i=0;i<data.data.list.length;i++)
			  { jieguo3+='<li><a class="movie-item" href="./play.html?q='+data.data.list[i].vod_id+'&id='+id+'&zy=qt" target="_blank"><div class="movie-cover"><img src="'+data.data.list[i].vod_pic+'" ><span class="movie-description"><i class="description-bg"></i><p>状态：'+data.data.list[i].vod_remarks+'</p><p>年代：'+data.data.list[i].vod_year+'</p><p>&gt; 在线观看</p></span></div><div class="movie-title"><p class="movie-name">'+data.data.list[i].vod_name+'</p><p class="movie-tags" title="演员">'+data.data.list[i].vod_actor+'</p></div></a></li>';} 
  }
   document.getElementById("list3").innerHTML =jieguo3;
  }
 })
})}
   //苹果接口番茄资源
  function zy4(id){
  var url4=fqzy[id];
        $.ajax({
            type: "get",
       dataType: 'jsonp',
            url: appfq +url4 +"?ac=detail&wd=" + lianjie1,
            data: "", 
			cache: true,
          async: true,
		  jsonp: 'callback',
  jsonpCallback: 'callback4',
          timeout: 8000,
    contentType: "application/json;utf-8",
             success: function(data) {
      
                  var jieguo4="";
            if(data.list.length==0){jieguo4='<P style="font-size:15px;"><SPAN><b style="color:#CC0033" >暂无资源，请查看其他资源！</b></SPAN></P>'} else{
          
                  for (var i=0;i<data.list.length;i++)
                   { jieguo4+='<li><a class="movie-item" href="./play.html?q='+data.list[i].vod_id+'&id='+id+'&zy=fq" target="_blank"><div class="movie-cover"><img src="'+data.list[i].vod_pic+'" ><span class="movie-description"><i class="description-bg"></i><p>状态：'+data.list[i].vod_remarks+'</p><p>年代：'+data.list[i].vod_year+'</p><p>&gt; 在线观看</p></span></div><div class="movie-title"><p class="movie-name">'+data.list[i].vod_name+'</p><p class="movie-tags">'+data.list[i].vod_actor+'</p></div></a></li>';}
            }
                 document.getElementById("list4").innerHTML =jieguo4;
             
             
            }
        })
    }
