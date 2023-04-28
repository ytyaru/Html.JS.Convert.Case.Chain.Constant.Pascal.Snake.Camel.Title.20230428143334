[ja](./README.ja.md)

# JS.Convert.Case.Chain.Constant.Pascal.Snake.Camel.Title

Interconvert string cases (chain, constant, pascal, snake, camel, title (capitalize))

An extension of: 

* https://github.com/ytyaru/Html.Convert.Case.Snake.Camel.Chain.20220717084321

Name|Emoji|Delimiter|CharType|Ex Verb|Ex noun|Usage
----|-----|---------|--------|-------|-------|-----
Chain|⛓️|`-`|Lower|`get-id`|`my-id`|HTML Element ID, CSS class name
Snake|🐍|`_`|Lower|`get_id`|`my_id`|Python var name
Camel|🐫||Capitalize only the first letter of a word. (first word all lowercase)|`getId`|`myId`|JavaScript var, function name
Constant|🐍|`_`|Upper|`GET_ID`|`MY_ID`|SQL table, column name
Pascal|🐫||Capitalize only the first letter of a word.|`GetId`|`MyId`|JavaScript class name
Title|🐢|` `|Capitalize only the first letter.|`Get id`|`My id`|HTML Label

It has the following aliases:

Name|Alias
----|------
Chain|Kebab
Snake|Lower Snake
Constant|Upper Sake
Camel|Lower Camel
Pascal|Upper Camel

<!--
# DEMO

* [DEMO](https://ytyaru.github.io/Html.JS.Convert.Case.Chain.Constant.Pascal.Snake.Camel.Title.20230428143334/)
-->

# Features

* extended `String` class

# Requirement

* <time datetime="2023-04-28T14:33:27+0900">2023-04-28</time>
* [Raspbierry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 4 Model B Rev 1.2
* [Raspberry Pi OS](https://ja.wikipedia.org/wiki/Raspbian) buster 10.0 2020-08-20 <small>[setup](http://ytyaru.hatenablog.com/entry/2020/10/06/111111)</small>
* bash 5.0.3(1)-release
* Chromium 92

```sh
$ uname -a
Linux raspberrypi 5.10.103-v7l+ #1529 SMP Tue Mar 8 12:24:00 GMT 2022 armv7l GNU/Linux
```

# Installation

```sh
git clone https://github.com/ytyaru/Html.JS.Convert.Case.Chain.Constant.Pascal.Snake.Camel.Title.20230428143334
```

# Usage

## Unit test

```sh
cd Html.JS.Convert.Case.Chain.Constant.Pascal.Snake.Camel.Title.20230428143334/docs/js/
./test.html
```

## reference library

```html
<script src="case.js"></script>
```

A method is added to the `String` class.

メソッド|説明
--------|----
`to{CaseName}()`|Returns a string converted to the specified case
`is{CaseName}()`|Returns true if the string is the specified case
`caseName()`|Returns the corresponding static class name if the string is any case
`caseType()`|Returns the corresponding static class if the string is any case
`capitalize()`|Returns a string with the first character in uppercase and the rest in lowercase

### is

method|description
------|-----------
`isChain()`|returns true if string is chain case
`isConstant()`|returns true if the string is constant case
`isPascal()`|returns true if the string is Pascal case
`isSnake()`|returns true if the string is snake case
`isCamel()`|returns true if the string is camel case
`isTitle()`|returns true if the string is title case

```js
console.assert('java-script'.isChain())
console.assert('JAVA_SCRIPT'.isConstant())
console.assert('JavaScript'.isPascal())
console.assert('java_script'.isSnake())
console.assert('javaScript'.isCamel())
console.assert('Java script'.isTitle())
```

### to系

method|description
------|-----------
`toChain()`|convert string to chain case and return new string
`toConstant()`|convert string to constant case and return new string
`toPascal()`|convert string to pascal case and return new string
`toSnake()`|convert string to snake case and return new string
`toCamel()`|convert string to camel case and return new string
`toTitle()`|convert string to title case and return new string

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

# Note

There is name pollution.

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

# Author

ytyaru

* [![github](http://www.google.com/s2/favicons?domain=github.com)](https://github.com/ytyaru "github")
* [![hatena](http://www.google.com/s2/favicons?domain=www.hatena.ne.jp)](http://ytyaru.hatenablog.com/ytyaru "hatena")
* [![twitter](http://www.google.com/s2/favicons?domain=twitter.com)](https://twitter.com/ytyaru1 "twitter")
* [![mastodon](http://www.google.com/s2/favicons?domain=mstdn.jp)](https://mstdn.jp/web/accounts/233143 "mastdon")

# License

This software is CC0 licensed.

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.en)

