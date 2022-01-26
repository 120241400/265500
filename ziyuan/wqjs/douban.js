      var url = new URL(window.location.href);
      var wd = url.searchParams.get("wd");
function index(index){
   $("#list").hide();
   $.ajax({
    async: true,
    type: "GET",
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'callbackfunction',
    url:jiekou +'https://movie.douban.com/j/search_subjects?type='+index+'&sort=recommend&page_limit=40&page_start=0',
    data: "",
    timeout: 3000,
          dataType: "jsonp",
    contentType: "application/json;utf-8",
                beforeSend:function(XMLHttpRequest){ 
                  var winNode = $("#loading");  
                      winNode.fadeIn("slow");  
            }, 
                success: function(data) {
                   // console.log(data);
                 if(null != data && "" != data){
                  var Node = $("#loading");  
                      Node.hide(); 
                      var timu="";
                      for (var i=0;i<40;i++)
                      { timu+='<li><a href="so.html?wd='+data.subjects[i].title+'&html=1.html" target="_blank"><img  src="'+data.subjects[i].cover+'"  width="80" height="105"><em><b>豆瓣评分:'+data.subjects[i].rate+'分</b></em><span>'+data.subjects[i].title+'</span></a></li>';}
                      $("#list").html(timu);
                     $("#list").slideDown();

                    
                  }else{
                    alert("无结果,请切换其他资源！");
                  }
                },
                error: function(a) {
                    alert("失败，请检查关键字。");
                }
            })
        }

//苹果接口
function frompg(id){
 var url1=pingguoz[id];
   $("#list").hide();
            $.ajax({
                type: "get",
                url: jiekou+url1,
                data: "ac=detail&wd=" + wd,
                async: true,
                beforeSend:function(XMLHttpRequest){ 
                  var winNode = $("#loading");  
                      winNode.fadeIn("slow");  
            }, 
                  contentType: "application/json;utf-8",
                   dataType: "jsonp",
                 success: function(data) {
                  if(null != data && "" != data){
                  var Node = $("#loading");  
                      Node.hide(); 
                      var jieguo="";
                      for (var i=0;i<data.list.length;i++)
                       { jieguo+='<li><a href="play.html?q='+data.list[i].vod_id+'&id='+id+'&zy=pg&html=1.html" target="_blank"><img  src="'+data.list[i].vod_pic+'" width="120" height="176"><em><b>'+data.list[i].vod_remarks+'</b></em><span>'+data.list[i].vod_name+'</span></a></li>';}
                                
                    $("#list").html(jieguo);
                     $("#list").slideDown();
                  }else{
                    alert("无结果,请切换其他资源！");
                  }
                },
                error: function(a) {
                    alert("失败，请检查关键字。");
                }
            })
        }

//飞飞资源
    function fromff(id){
        //console.log(id);
        var url1=feifeiz[id];
       $("#list").hide();
             $.ajax({
                type: "get",
                url:jiekou+url1,
                data: "wd=" + wd,
                async: true,
                beforeSend:function(XMLHttpRequest){ 
                  var winNode = $("#loading");  
                      winNode.fadeIn("slow");  
            }, 
                    dataType: "jsonp",
                   contentType: "application/json;utf-8",
                success: function(data) {
                  if(null != data && "" != data){
                  var Node = $("#loading");  
                      Node.hide(); 
                      var jieguo="";
                      for (var i=0;i<data.data.length;i++)
                       { jieguo+='<li><a href="play.html?q='+data.data[i].vod_id+'&id='+id+'&zy=ff&html=1.html" target="_blank"><img  src="'+data.data[i].vod_pic+'"  width="120" height="176"><em><b>'+data.data[i].vod_continu+'</b></em><span>'+data.data[i].vod_name+'</span></a></li>';}
                                
                    $("#list").html(jieguo);
                     $("#list").slideDown();
                     }else{
                    alert("无结果,请切换其他资源！");
                  }
                },
                error: function(a) {
                    alert("失败，请检查关键字。");
                }
            })
    }
//2345
function fromlll(id){
    var url1="";
           if (id=="0"){url1="https://tv.2345.com/moviecore/server/search/?ctl=think"}
      $("#list").hide();
               $.ajax({
                   type: "get",
                   url: jiekou+url1,
                   data: "q=" + wd,
                   async: true,
                   beforeSend:function(XMLHttpRequest){ 
                     var winNode = $("#loading");  
                         winNode.fadeIn("slow");  
               }, 
                   success: function(data) {
                     if(null != data && "" != data){
                     var Node = $("#loading");  
                         Node.hide(); 
                         var jieguo="";
                         for (var i=0;i<data.length;i++)
                          { jieguo+='<li><a href="play2.html?q='+data[i].id+'&type='+data[i].ctype+'&id=0" target="_blank"><img  src="'+data[i].img+'"  width="120" height="176"><em><b>'+data[i].cntype+'</b></em><span>'+data[i].title+'</span></a></li>';}
                                   
                       $("#list").html(jieguo);
                        $("#list").slideDown();
                        }else{
                       alert("无结果,请切换其他资源！");
                     }
                   },
                   error: function(a) {
                       alert("失败，请检查关键字。");
                   }
               })
       }
//360
function from2(id){
    var url1="";
           if (id=="1"){url1="http://7080.wang/json/360/so.php"}
      $("#list").hide();
               $.ajax({
                   type: "get",
                   url: jiekou+url1,
                   data: "q=" + wd,
                   async: true,
                   beforeSend:function(XMLHttpRequest){ 
                     var winNode = $("#loading");    
                         winNode.fadeIn("slow");  
               }, 
                   success: function(data) {
                     if(null != data && "" != data){
                     var Node = $("#loading"); 
                         Node.hide(); 
                         var jieguo="";
                         for (var i=0;i<data.id.length;i++)
                          { jieguo+='<li><a href="play2.html?q='+data.id[i]+'&type='+data.type[i]+'&id='+id+'" target="_blank"><img  src="'+data.tu[i]+'"  width="120" height="176"><em><b>'+data.leixing[i]+'</b></em><span>'+data.name[i]+'</span></a></li>';}         
                       $("#list").html(jieguo);
                        $("#list").slideDown();
                        }else{
                       alert("无结果,请切换其他资源！");
                     }
                   },
                   error: function(a) {
                       alert("失败，请检查关键字。");
                   } 
               })
       }
