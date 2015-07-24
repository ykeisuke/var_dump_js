# var_dumper_jsとは
PHPのvar_dumpの用にJavascriptのオブジェクトを表示するためのライブラリです。<br/>
<br/>
GoogleChrome等のブラウザでは、console.logでオブジェクトを出力するとオブジェクトの中が見られますが、<br/>
組み込み機器等の低スペック機器上で動作するブラウザや、簡単にWebkitだけを使っているアプリで簡単にログを出力するために用意しました。<br/>
var_dumper_jsを使うことにより、オブジェクトの中身を整形し簡単に文字列に変換できます。<br/>
変換した文字列(String)はconsole.logやHTMLに書き出す等して使ってください。<br/>


***
# 使い方
　1. 「.src/var_dumper.js」を読み込ませてください。
> < script type="text/javascript" src=".src/var_dumper.js"/>

<br/>

　2.「var_dump(hoge)」して使ってください。<br/>
<br/>

***
# 使い方(そのほか)

* 文字下げの文字列を変更したいときはLV_SPACERとLV_SPACER_COUNTを調節してください。
* 「level_limit」(再帰処理時に階層の上限を示す文字列)があまりにも早くに表示されている場合は、LV_LIMIT の数を修正してください。
　


***

#サンプル
　.sample/index.html
