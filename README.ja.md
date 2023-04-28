[en](./README.md)

# JS.Convert.Case.Chain.Constant.Pascal.Snake.Camel.Title

　文字列のケースを相互変換する（チェーン、コンスタント、パスカル、スネーク、キャメル、タイトル（キャピタライズ））

　以下を拡張したもの。

* https://github.com/ytyaru/Html.Convert.Case.Snake.Camel.Chain.20220717084321

英名|和名|絵|区切|字種|例(動詞)|例(名詞)|用途
----|----|--|----|----|--------|--------|----
Chain|チェーン|⛓️|`-`|Lower|`get-id`|`my-id`|HTML要素ID, CSSクラス名
Snake|スネーク|🐍|`_`|Lower|`get_id`|`my_id`|Python変数名
Camel|キャメル|🐫||２単語目から先頭字Upper、他Lower|`getId`|`myId`|JavaScript変数名、関数名
Constant|コンスタント|🐍|`_`|Upper|`GET_ID`|`MY_ID`|SQLiteテーブル名、列名
Pascal|パスカル|🐫||１単語目から先頭字Upper、他Lower|`GetId`|`MyId`|JavaScriptクラス名
Title|タイトル|🐢|` `|１単語目の先頭字のみUpper、他Lower|`Get id`|`My id`|英文、HTMLラベル名

　以下のような別名がある。

名前|別英名|別和名|表記ゆれ
----|------|------|-------
Chain|Kebab|ケバブ|チェイン
Snake|Lower Snake|ローワースネーク|
Constant|Upper Sake|アッパースネーク|
Camel|Lower Camel|ローワーキャメル|
Pascal|Upper Camel|アッパーキャメル|

<!--
# デモ

* [デモ](https://ytyaru.github.io/Html.JS.Convert.Case.Chain.Constant.Pascal.Snake.Camel.Title.20230428143334/)
-->

# 特徴

* `String`クラスを拡張した

# 開発環境

* <time datetime="2023-04-28T14:33:27+0900">2023-04-28</time>
* [Raspbierry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 4 Model B Rev 1.2
* [Raspberry Pi OS](https://ja.wikipedia.org/wiki/Raspbian) buster 10.0 2020-08-20 <small>[setup](http://ytyaru.hatenablog.com/entry/2020/10/06/111111)</small>
* bash 5.0.3(1)-release
* Chromium 92

```sh
$ uname -a
Linux raspberrypi 5.10.103-v7l+ #1529 SMP Tue Mar 8 12:24:00 GMT 2022 armv7l GNU/Linux
```

# インストール

```sh
git clone https://github.com/ytyaru/Html.JS.Convert.Case.Chain.Constant.Pascal.Snake.Camel.Title.20230428143334
```

# 使い方

## 単体テスト実行

```sh
cd Html.JS.Convert.Case.Chain.Constant.Pascal.Snake.Camel.Title.20230428143334/docs/js/
./test.html
```

## ライブラリ参照

```html
<script src="case.js"></script>
```

　`String`クラスにメソッドが追加される。

メソッド|説明
--------|----
`toケース名()`|文字列を指定のケースに変換して返す
`isケース名()`|文字列が指定のケースなら真を返す
`caseName()`|文字列が何かのケースであれば対応するstaticクラス名を返す
`caseType()`|文字列が何かのケースであれば対応するstaticクラスを返す

### is系

メソッド|説明
--------|----
`isChain()`|文字列がチェーン・ケースなら真を返す
`isConstant()`|文字列がコンスタント・ケースなら真を返す
`isPascal()`|文字列がパスカル・ケースなら真を返す
`isSnake()`|文字列がスネーク・ケースなら真を返す
`isCamel()`|文字列がキャメル・ケースなら真を返す
`isTitle()`|文字列がタイトル・ケースなら真を返す

```js
console.assert('java-script'.isChain())
console.assert('JAVA_SCRIPT'.isConstant())
console.assert('JavaScript'.isPascal())
console.assert('java_script'.isSnake())
console.assert('javaScript'.isCamel())
console.assert('Java script'.isTitle())
```

### to系

メソッド|説明
--------|----
`toChain()`|文字列をチェーン・ケースにした新しい文字列を返す
`toConstant()`|文字列をコンスタント・ケースにした新しい文字列を返す
`toPascal()`|文字列をパスカル・ケースにした新しい文字列を返す
`toSnake()`|文字列をスネーク・ケースにした新しい文字列を返す
`toCamel()`|文字列をキャメル・ケースにした新しい文字列を返す
`toTitle()`|文字列をタイトル・ケースにした新しい文字列を返す

#### from Chain

```js
console.assert('java-script'.toConstant()==='JAVA_SCRIPT')
console.assert('java-script'.toPascal()==='JavaScript')
console.assert('java-script'.toSnake()==='java_script')
console.assert('java-script'.toCamel()==='javaScript')
console.assert('java-script'.toTitle()==='Java script')
```

'java-script', 'JAVA_SCRIPT', 'JavaScript', 'java_script', 'javaScript', 'Java script'

#### from Constant

```js
console.assert('JAVA_SCRIPT'.toChain()==='java-script')
console.assert('JAVA_SCRIPT'.toPascal()==='JavaScript')
console.assert('JAVA_SCRIPT'.toSnake()==='java_script')
console.assert('JAVA_SCRIPT'.toCamel()==='javaScript')
console.assert('JAVA_SCRIPT'.toTitle()==='Java script')
```

#### from Pascal

```js
console.assert('JavaScript'.toChain()==='java-script')
console.assert('JavaScript'.toConstant()==='JAVA_SCRIPT')
console.assert('JavaScript'.toSnake()==='java_script')
console.assert('JavaScript'.toCamel()==='javaScript')
console.assert('JavaScript'.toTitle()==='Java script')
```

#### from Snake

```js
console.assert('java_script'.toChain()==='java-script')
console.assert('java_script'.toConstant()==='JAVA_SCRIPT')
console.assert('java_script'.toPascal()==='JavaScript')
console.assert('java_script'.toCamel()==='javaScript')
console.assert('java_script'.toTitle()==='Java script')
```

#### from Camel

```js
console.assert('javaScript'.toChain()==='java-script')
console.assert('javaScript'.toConstant()==='JAVA_SCRIPT')
console.assert('javaScript'.toPascal()==='JavaScript')
console.assert('javaScript'.toSnake()==='java_script')
console.assert('javaScript'.toTitle()==='Java script')
```

#### from Title

```js
console.assert('Java script'.toChain()==='java-script')
console.assert('Java script'.toConstant()==='JAVA_SCRIPT')
console.assert('Java script'.toPascal()==='JavaScript')
console.assert('Java script'.toSnake()==='java_script')
console.assert('Java script'.toCamel()==='javaScript')
```

# 注意

　名前汚染がある。

## window

* `Camel`
* `Case`
* `Chain`
* `Constant`
* `Pascal`
* `Snake`
* `Title`

## String

* `caseName()`
* `caseType`
* `isCamel()`
* `isChain()`
* `isConstant()`
* `isPascal()`
* `isSnake()`
* `isTitle()`
* `toCamel()`
* `toChain()`
* `toConstant()`
* `toPascal()`
* `toSnake()`
* `toTitle()`

# 著者

　ytyaru

* [![github](http://www.google.com/s2/favicons?domain=github.com)](https://github.com/ytyaru "github")
* [![hatena](http://www.google.com/s2/favicons?domain=www.hatena.ne.jp)](http://ytyaru.hatenablog.com/ytyaru "hatena")
* [![twitter](http://www.google.com/s2/favicons?domain=twitter.com)](https://twitter.com/ytyaru1 "twitter")
* [![mastodon](http://www.google.com/s2/favicons?domain=mstdn.jp)](https://mstdn.jp/web/accounts/233143 "mastdon")

# ライセンス

　このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

