//音乐按钮
$("#audio_btn").click(function(){
	var music = document.getElementById("music");
	if(music.paused){
		music.play();
		$("#music_btn").attr("src","img/play.png");
		$("#music_btn").addClass("animate-rotateCircle");		
	}else{
		music.pause();
		$("#music_btn").attr("src","img/pause.png");
		$("#music_btn").removeClass("animate-rotateCircle");	
	}
});

function playPause() {
    var music = document.getElementById('music2');
    var music_btn = document.getElementById('music_btn2');
    if (music.paused){
        music.play();
        music_btn.src = 'play.png';
    }
    else{
        music.pause();
        music_btn.src = 'pause.png'; 
    }
}

//选择类型
    $(function(){
	$('.kind img').click(function(){
		$('.kind img').removeClass("selected");
		$(this).addClass("selected"); 
		});
	});
	    $(function(){
	$('#facekind').click(function(){
		$('.face_chose').siblings().addClass("hide");
		$('.face_chose').removeClass("hide"); 
		});
	});
	$(function(){
	$('#hairkind').click(function(){
		$('.hair_chose').siblings().addClass("hide");
		$('.hair_chose').removeClass("hide"); 
		});
	});
		$(function(){
	$('#eyebrowkind').click(function(){
		$('.eyebrow_chose').siblings().addClass("hide");
		$('.eyebrow_chose').removeClass("hide"); 
		});
	});
	$(function(){
	$('#eyekind').click(function(){
		$('.eye_chose').siblings().addClass("hide");
		$('.eye_chose').removeClass("hide"); 
		});
	});
	$(function(){
	$('#nosekind').click(function(){
		$('.nose_chose').siblings().addClass("hide");
		$('.nose_chose').removeClass("hide"); 
		});
	});
	$(function(){
	$('#mouthkind').click(function(){
		$('.mouth_chose').siblings().addClass("hide");
		$('.mouth_chose').removeClass("hide"); 
		});
	});
	$(function(){
	$('#glasskind').click(function(){
		$('.glass_chose').siblings().addClass("hide");
		$('.glass_chose').removeClass("hide"); 
		});
	});
		$(function(){
	$('#hatkind').click(function(){
		$('.hat_chose').siblings().addClass("hide");
		$('.hat_chose').removeClass("hide"); 
		});
	});
	
	
	$(function(){
	$('.chose').click(function(){
		$(this).siblings().removeClass("chosed");
		$(this).addClass("chosed");
		});
	});
//捏脸

function changeface(id) {
var element = document.getElementById('face');
var facekind="img/face/"+id+".png";
 element.src =facekind;
 var tt='face'
 face=id;
 face=face.replace("face","");;
 }
 function changehair(id) {

 var element = document.getElementById('hair');
var hairkind="img/hair/"+id+".png";
 element.src =hairkind;
  face=face.replace("face","");;
 var element = document.getElementById('hairback');
var hairbackkind="img/hair/"+id+"-1.png";
 element.src =hairbackkind;
 hair=id;
  hair=hair.replace("hair","");;
 }
 function changeeyebrow(id) {

 var element = document.getElementById('eyebrow');
var eyebrowkind="img/eyebrow/"+id+".png";
 element.src =eyebrowkind;
 eyebrow=id;
  eyebrow=eyebrow.replace("eyebrow","");;
 }
 function changeeye(id) {

 var element = document.getElementById('eye');
var eyekind="img/eye/"+id+".png";
 element.src =eyekind;
 eye=id;
  eye=eye.replace("eye","");;
 }
 function changenose(id) {

 var element = document.getElementById('nose');
var nosekind="img/nose/"+id+".png";
 element.src =nosekind;
 nose=id;
  nose=nose.replace("nose","");;
 }
 function changemouth(id) {

 var element = document.getElementById('mouth');
var mouthkind="img/mouth/"+id+".png";
 element.src =mouthkind;
 mouth=id;
   mouth= mouth.replace("mouth","");;
 }
 function changeglass(id) {

 var element = document.getElementById('glass');
var glasskind="img/glass/"+id+".png";
 element.src =glasskind;
 glass=id;
  glass=glass.replace("glass","");;
 }
function changehat(id) {

 var element = document.getElementById('hat');
var hatkind="img/hat/"+id+".png";
 element.src =hatkind;
 hat=id;
  hat=hat.replace("hat","");;
 }
 
 
