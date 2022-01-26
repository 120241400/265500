
//内容开始
url4=qtplay[id];
$(function(){
 $.ajax({
 async: true,
 type: "GET",
 dataType: 'jsonp',
  cache: true,
 jsonp: 'callback',
 jsonpCallback: 'callbackfunction',
 url: appqt+url4+lianjie,
 data: "",
 timeout: 8000,
 contentType: "application/json;utf-8",
 success: function(data) {
  console.log(data);
  var bolie=new Array();
  bolie=data.data.vod_play_from.split("$$$");
  var bolie1="";
  var neirong1='';
  var neirong='';
  var dianbo=data.data.vod_play_url;
  var dianbo1=dianbo.replace(/\r\n/g,"#") ;
  var dianbo2=dianbo1.replace(/\$/g,"#") ;
  var strs= new Array();
  strs=dianbo2.split("###");
 console.log(strs);
  var str1= new Array();
  for (h=0;h<strs.length ;h++){
    var strr=strs[h].replace(/\#\#/g,"#") ;
    str1[h]=strr.split("#");
    if(h==0){var neinei="am-tab-panel am-fade am-in am-active";var boliee='am-active';}else{var neinei="am-tab-panel am-fade tv-res"; var boliee='am';}
  bolie1 +='<li class="'+boliee+'" ><a href="#'+bolie[h]+'">'+bolie[h]+'</a></li>';
    for (i=0;i<str1[h].length ;i+=2)
    {
        neirong1 +='<li class="am-btn am-btn-sm btn-play-source"><a href="./jx/index.html?url='+str1[h][i+1]+'"  target="ajax" onclick="GetHref(this);return false;">'+str1[h][i]+'</a>';
    }
  neirong +='<div class="'+neinei+'" id="'+bolie[h]+'">'+neirong1+'</div>';
  var neirong1="";
  }
  //console.log(str1);
  var vide1=str1[0][0];
  var vide=str1[0][1];  
  document.getElementById("demo1").innerHTML=vide1;
  document.getElementById("video").src="./jx/index.html?url="+vide ;
  document.getElementById("bolie2").innerHTML =bolie1;
  document.getElementById("neirong").innerHTML =neirong;
  document.getElementById("name").innerHTML =data.data.vod_name;
  document.getElementById("tu").src=data.data.vod_pic;
  document.getElementById("nian").innerHTML =data.data.vod_year;
  document.getElementById("diqu").innerHTML =data.data.vod_area;
  document.getElementById("daoyan").innerHTML =data.data.vod_director;
  document.getElementById("fenlei").innerText=data.data.vod_class;
  document.getElementById("yanyuan").innerText=data.data.vod_actor;
  document.getElementById("jiesao").innerText=data.data.vod_blurb;
  document.getElementById("jiesao1").innerText=data.data.vod_content;
   }
   });
  })
