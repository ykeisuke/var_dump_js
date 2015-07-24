/**
 * @fileOverview PHPのファイルのようにObjectの中を整形し、文字列におこすためのJavascriptです。
 *
 * @author KeisukeYamaguchi
 * @license MIT Lisence
 * @version 1.0.0
 */

/**
 * オブジェクトをPHPのvar_dumpのような文字列に変換する。<br/>
 * 階層がLV_LIMITより上のときはそれ以上変換をおこなわない。<br/>
 * 1階層あたりの文字下げで使用する文字列はLV_SPACERとLV_SPACER_COUNTで定義する。<br/>
 *
 * @param {Object} arr 分解対象のオブジェクト
 * @param {Number} lv 階層(指定しなくてよい)
 * @param {String} key キー(指定しなくてよい)
 * @return {String} ObjectをStringに変換した結果
 */
function var_dump(arr, lv, key) {

    // 階層上限(再帰的に処理しすぎないように上限を設ける)
    var LV_LIMIT = 10, LV_LIMIT_NOTICE = "level_limit";

    // 1階層あたりの半角スペース数と、1階層あたりに文字下げで使用する文字(1文字)
    var LV_SPACER_COUNT = 2, LV_SPACER = " ";

    // 変換結果
    var dumptxt = "", lv_idt = "";

    // arrの種類を取得する
    var type = Object.prototype.toString.call(arr).slice(8, -1);

    /**
     * 階層の数に応じて文字下げの文字列を返す
     * @param {Number} _lv 階層数
     * @return {String} 文字下げの文字列
     */
    var _createLvIdt = function(_lv){
        var _lv_idt = "";
        for(var i = 0;　i < _lv;　i++){
            for(var s = 0; s < LV_SPACER_COUNT; s++){
                _lv_idt += LV_SPACER;
            }
        }
        return _lv_idt;
    }

    // 階層指定が無ければ0とする
    if(!lv){
        lv = 0;
    }else{
    }

    // 階層指定分、先頭に空白を追加する
    lv_idt = _createLvIdt(lv)

    // Keyを変換結果につける
    if(key){
        dumptxt += lv_idt + "[" + key + "] => ";
    }else{
    }
    
    // arrの種類に応じて処理を変更する
    if(arr == null){

        // null もしくは undefined
        dumptxt += arr + '\n';

    } else if(type == "Array" || type == "Object"){

        // 階層上限に達していないときに再帰的に分解する。上限に達している時は再帰処理をおこなわない
        dumptxt += type + "...{\n";
        if(LV_LIMIT > lv){

            // ArrayもしくはObjectのため再帰的に分解する
            for(var item in arr){
                dumptxt += var_dump(arr[item],　lv　+　1,　item);
            }

        }else{

            // 階層上限に達している場合はNoticeを追加する
            dumptxt += _createLvIdt(lv + 1) + LV_LIMIT_NOTICE + " ()\n";

        }
        dumptxt += lv_idt + "}\n";

    } else if(type == "String"){

        // String
        dumptxt += '"' + arr + '" ('+ type +')\n';

    }  else if(type == "Number"){

        // Number
        dumptxt += arr + " (" + type + ")\n";

    } else {

        // そのほか(Boolean等)
        dumptxt += arr + " (" + type + ")\n";

    }

    return dumptxt;

}
