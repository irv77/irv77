var LOCALSTORAGE_SCORE = "score";

function CLocalStorage(szName){
    
    var _szName = szName;
    
    this.init = function(){
        var bFlag = window.localStorage.getItem(_szName);
        
        if(bFlag === null || bFlag === undefined || s_bStorageAvailable === false){   
            this.resetAllData();   
        }
        
    };
    
    this.setItem = function(szKey, szValue){
        if(s_bStorageAvailable){
            _bDirty = true;
            window.localStorage.setItem(_szName+"_"+szKey, szValue);
        }
    };
    
    this.getItem = function(szKey){
        return window.localStorage.getItem(_szName+"_"+szKey);
    };
    
    this.setItemJson = function(szKey, jsonObj){
        if(s_bStorageAvailable){
            localStorage.setItem(_szName+"_"+szKey, JSON.stringify(jsonObj));
        }
    };
    
    this.getItemJson = function(szKey){
        var oRet = JSON.parse(localStorage.getItem(_szName+"_"+szKey));
        
        if(oRet === null){
            var aLevelScore = new Array();
            for(var i=0;i<NUM_HOLES;i++){
                aLevelScore[i] = 0;
            }
            return aLevelScore;
        }else{
            return oRet;
        }
    };
    
    this.isDirty = function(){
        var aLevelScore = s_oLocalStorage.getItemJson(LOCALSTORAGE_SCORE);
        if(!s_bStorageAvailable || aLevelScore === null){
            return false;
        }
        
        for (var i = 0; i <aLevelScore.length; i++) {
            if(aLevelScore[i] > 0){
                return true;
            }
        }
        return false;
    };

    this.resetAllData = function(){        
        window.localStorage.setItem(_szName, true);
            
        var aScore = new Array();
        for(var i=0; i<NUM_HOLES; i++){
            aScore[i] = 0;
        }
        this.setItemJson(LOCALSTORAGE_SCORE,aScore);
    };
    
}