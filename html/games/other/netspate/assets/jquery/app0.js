var __Y={
    type:'mainstream',
    country:'US',
    countries: ['ALL'],
    countries2: 'ALL',
    timer:null,
    init:function(){
        this.firstP();
        this.firstI();
        this.secondI();
    },
    firstP:function(){
        var link;
        if(this.countries.includes(this.country)) {
            if(this.type != 'mainstream') {
                link = '//lorswhowishe.com/redirect?tid=1015119';
            } else {
                link = '//lorswhowishe.com/redirect?tid=1015120';
            }
        } else {
            if(this.type != 'mainstream') {
                link = '//5vbs96dea.com/2002028/';
            } else {
                link = '//ak.zougreek.com/4/5982507';
            }
        }
        this.clickLayer(link, function(){__Y.jsP()})
        try{clientSide.player.pause()} catch(e){}
    },
    secondP:function(){
        var link;
        if(this.countries2.includes(this.country)) {
            if(this.type != 'mainstream') {
                link = '//lorswhowishe.com/redirect?tid=1015119';
            } else {
                link = '//lorswhowishe.com/redirect?tid=1015120';
            }
        } else {
            if(this.type != 'mainstream') {
                link = '//ak.stoorgel.com/4/5982507';
            } else {
                link = '//ak.jeekomih.com/4/6204438';
            }
        }
        setTimeout(function(){__Y.clickEvent(link, function(){__Y.secondII()})},200);
    },
    secondII:function(){
        var link = '//documentaryselfless.com/zb6xv3wq3?key=7d97c59b01609403b69703edff36934b';
        if(this.type != 'mainstream') {
            link = '//documentaryselfless.com/rqze5n95rx?key=c51ba4862f40c95e06df56c57a79b554';
        }
        setTimeout(function(){__Y.clickEvent(link, function(){__Y.secondP()})},300000);
    },
    firstI:function(){
        var tag = '//hj.favorskhivan.com/go96md4ymojwcFR9/40913';
        if(this.type != 'mainstream') {
            tag = '//hj.favorskhivan.com/go96md4ymojwcFR9/40913';
        }
        this.timer = setTimeout(function(){__Y.ippTag(tag)},150000);
    },
    secondI:function(){
        var tag = '//mutcheng.net/400/6962259';
        if(this.type != 'mainstream') {
            tag = '//mutcheng.net/400/6962259';
        }
        setTimeout(function(){__Y.ippTag(tag)}, 300000);
    },
    firstII:function(){
        var tag = '//ossmightyenar.net/401/6962295';
        if(this.type != 'mainstream') {
            tag = '//ossmightyenar.net/401/6962295';
        }
        setTimeout(function(){__Y.ippTag(tag)}, 300000);
    },
    ippTag:function(tag){
        var a=document.createElement('script');
        a.src=tag;
        document.body.appendChild(a);
    },
    jsP:function() {
        var link = '//documentaryselfless.com/1a/e3/f5/1ae3f55b50e377378493f825fc172467.js';
        if(this.type != 'mainstream') {
            link = '//documentaryselfless.com/8e/bc/9d/8ebc9de27f10bb5257014c327d0501db.js';
        }
        var a=document.createElement('script');
        a.onerror=function(){__Y.secondP()};
        a.onload=function(){__Y.secondII()};
        a.src=link;
        document.body.appendChild(a);
    },
    jsADB:function() {
        var link = '/js/mainpc.js?v=1';
        if(this.type != 'mainstream') {
            link = '/js/adultpc.js?v=1';
        }
        var a=document.createElement('script');
        a.onerror=function(){__Y.secondP()};
        a.onload=function(){__Y.secondII()};
        a.src=link;
        document.body.appendChild(a);
    },
    clickLayer:function(link, callback){
        var div = document.createElement('div');
        var h = window.innerHeight, w = window.innerWidth;
        div.setAttribute('style', 'position:fixed;inset:0px;z-index:2147483647;background:black;opacity:0.01;height:'+h+'px;width:'+w+'px;cursor:pointer');
        div.onclick = function () {
            this.parentNode.removeChild(this);
            window.open(link, '_blank');
            typeof callback === 'function' && callback()
        };
        document.body.appendChild(div);
    },
    clickEvent:function(link, callback){
        document.addEventListener('click', function fn() {
            document.removeEventListener('click', fn);
            window.open(link, '_blank');
            typeof callback === 'function' && callback();
        });
    },
    detectSandbox:function(){
        function r(){window.location.href='/sandboxed.html?v=2.1#'+encodeURIComponent(window.location.href)}
        try{if(window.frameElement.hasAttribute("sandbox"))r();return}catch(t){}
        try{document.domain=document.domain}catch(t){try{if(-1!=t.toString().toLowerCase().indexOf("sandbox"))r();return}catch(t){}}
        try{if(!window.navigator.plugins["namedItem"]("Chrome PDF Viewer")) return false}catch(e){return false}
        var e = document.createElement('object');
        e.data = "data:application/pdf;base64,aG1t";
        e.style = "position:absolute;top:-500px;left:-500px;visibility:hidden;";
        e.onerror = function(){r()};
        e.onload = function(){e.parentNode.removeChild(e)};
        document.body.appendChild(e);
        setTimeout(function(){e.parentNode.removeChild(e)},150);
    }

};
__Y.init();