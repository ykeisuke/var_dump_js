/**
 * @fileOverview var_dump_jsのサンプルコードです。
 *
 * @author KeisukeYamaguchi
 * @license MIT Lisence
 * @version 1.0.0
 */


onload = function(){
    
    // 出力先
    var parent_object = document.getElementById("debug");

    // sample Object
    var sampleObj = new Object();
    var Loop = 3, Loop2th = 20;

    for(var a = 0; a < Loop; a++){
        sampleObj[a] = new Object();
        sampleObj[a][a] = "a : " + a;
    }
    console.log(var_dump(sampleObj));
    var div_element = document.createElement("div");
    div_element.innerHTML = "<pre>" + var_dump(sampleObj) + "</pre>";   
    parent_object.appendChild(div_element);     

    var _add = function(obj, cnt){
        if(cnt < Loop2th)
            obj.push(_add([], cnt+1));
        return obj;
    }
    var obj = [];
    obj = _add(obj,0);
    console.log(var_dump(obj));
    var div_element2 = document.createElement("div");
    div_element2.innerHTML = "<pre>" + var_dump(obj) + "</pre>";   
    parent_object.appendChild(div_element2);       

}

    
