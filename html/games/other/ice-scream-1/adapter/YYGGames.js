(function(){"use strict";class YYGGames{icon={scale:function(){}};yad={scale:function(){}};scrollList={};box_adTwo={scale:function(){},setSpaceX:function(){},setAlpha:function(){}};gameBox={game1:{scale:function(){}},game2:{scale:function(){}},pos:function(){},setBannerSize:function(){},scale:function(){}};gameBanner={games:{spaceX:function(){},spaceY:function(){}},setBannerSize:function(){},};audio=new AudioEngine();toast=new Toast();static create(){return new YYGGames();}
init(str,e){LaggedAPI.init('lagdev_287','ca-pub-8878716159434368');console.log('name--',str);e&&e()}
showReward(e){LaggedAPI.GEvents.reward((isReward,showReward)=>{if(isReward){showReward();}else{console.log("暂时没有广告")}},(rewarded)=>{rewarded&&e&&e()});}
showInterstitial(e){LaggedAPI.APIAds.show(()=>{e&&e()});}
cargamesstartup(e,c){console.log(e);c&&c()}
showSplash(data){console.log(data)}
hideSplash(){}
showTip(str){const view=document.createElement("div");view.id="tipView";document.body.appendChild(view)
view.innerHTML=str;view.style.cssText="position:absolute;top:30%;left:50%;margin-left:-150px;background:black;width:300px;height:40px;font-size:30px;color:white;opacity:0.7;"
setTimeout(()=>{let opacity=0.7;var timeId=setInterval(function(){opacity=opacity-0.1;if(opacity<=0){clearInterval(timeId);view.remove()}
view.style.opacity=opacity;},30);},600);}
canShowForgames(){return false}}
class AudioEngine{pause=false;playMusic(url){}
stopMusic(){}
playSound(url){}
stopSound(){}}
class Toast{showTip(str){console.log(str);}}
window["YYGGames"]=window["YYGMiniGames"]=YYGGames.create()})();