// JavaScript Document
$(document).ready(function(e) {
    $('#principal').height($('#page').height()); //calcular el alto de la pantalla del dispositivo
	     document.addEventListener("deviceready",function(){
			 //precarga el sonido
			 audio=window.plugins.LowLatencyAudio;
			 audio.preloadFX('perro','audio/Son1_Perro.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('gato','audio/Son2_Gato.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('vaca','audio/Son3_Vaca.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('gallina','audio/Son4_Gallina.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('caballo','audio/Son5_Caballo.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('conejo','audio/Son6_Conejo.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('leon','audio/Son7_Leon.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('elefante','audio/Son8_Elefant.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('mono','audio/Son9_Mono.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('oso','audio/Son10_Oso.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('cebra','audio/Son11_Cebra.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('cocodrilo','audio/Son12_Cococdrilo.mp3',function(){},function(e){alert('Error '+e);});
			 
			 //reproducir las notas
			 
			 $('.nota').bind('touchstart',function(){$(this).addClass('tocada');
			 audio.play ($(this).attr('id'));});
			 $('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		 },false); //deviceready
			 
}); //ready