String.prototype.capitalize = function(str) { return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase() }
class Chain {
    static is(str) { return str.includes('-') }
    static toSnake(str, isUpper=false) {
        if (isUpper) { return str.replace('-', '_').toUpperCase() }
        else { return str.replace('-', '_').toLowerCase() }
    }
    static toCamel(str, isUpper=false) {
        return str.split('-').map((word, i)=>{
            if (i === 0 && !isUpper) { return word.toLowerCase(); }
            return Title.capitalize(word)
        }).join('');
    }
    static toConstant(str) { return this.toSnake(str, true) }
    static toPascal(str) { return this.toCamel(str, true) }
    static toTitle(str, isUpper=null) {
        if (true===isUpper) { return str.replace('-', ' ').toUpperCase() }
        else if (false===isUpper) { return str.replace('-', ' ').toLowerCase() }
        else { return Title.capitalize(str.replace('-', ' ')) }
    }
}
class Snake {
    static is(str) { return str.includes('_') && /^[a-z0-9_]+$/g.test(str) }
    static toChain(str, isUpper=false) {
        if (isUpper) { return str.replace('_', '-').toUpperCase() }
        else { return str.replace('_', '-').toLowerCase() }
    }
    static toCamel(str, isUpper=false) {
        return str.split('_').map((word, i)=>{
            if (i === 0 && !isUpper) { return word.toLowerCase(); }
            return Title.capitalize(word)
        }).join('');
    }
    static toConstant(str) { return str.toUpperCase() }
    static toPascal(str) { return this.toCamel(str, true) }
    static toTitle(str, isUpper=null) {
        if (true===isUpper) { return str.replace('_', ' ').toUpperCase() }
        else if (false===isUpper) { return str.replace('_', ' ').toLowerCase() }
        else { return Title.capitalize(str.replace('_', ' ')) }
    }
}
class Camel {
    static is(str) { return /^[a-z][a-zA-Z0-9]+$/g.test(str) }
    static toChain(str, isUpper=false) {
        if (isUpper) { return str.split(/(?=[A-Z])/).join('-').toUpperCase() }
        else { return (str.charAt(0) + str.slice(1)).split(/(?=[A-Z])/).join('-').toLowerCase() }
    }
    static toSnake(str, isUpper=false) {
        if (isUpper) { return str.split(/(?=[A-Z])/).join('_').toUpperCase() }
        else { return (str.charAt(0) + str.slice(1)).split(/(?=[A-Z])/).join('_').toLowerCase() }
    }
    static toConstant(str) { return this.toSnake(str, true) }
    static toPascal(str) { return str.charAt(0).toUpperCase() + str.slice(1) }
    static toTitle(str, isUpper=null) {
        if (true===isUpper) {  return str.split(/(?=[A-Z])/).join(' ').toUpperCase() }
        else if (false===isUpper) { return str.split(/(?=[A-Z])/).join(' ').toLowerCase() }
        else { return Title.capitalize(str.split(/(?=[A-Z])/).join(' ')) }
    }
}
class Constant { // Upper Snake Case
    static is(str) { return /^[A-Z_][A-Z0-9_]+$/g.test(str) }
    static toChain(str, isUpper=false) { return Snake.toChain(str, isUpper) }
    static toSnake(str, isUpper=false) { return str.toLowerCase() }
    static toCamel(str, isUpper=false) { return Snake.toCamel(str, isUpper) }
    static toPascal(str) { return Snake.toPascal(str) }
    static toTitle(str, isUpper=null) { return Snake.toTitle(str, isUpper) }
}
class Pascal { // Upper Camel Case
    static is(str) { return /^[A-Z][a-zA-Z0-9]+$/g.test(str) }
    static toChain(str, isUpper=false) { return Camel.toChain(str, isUpper) }
    static toSnake(str, isUpper=false) { return Camel.toSnake(str, isUpper) }
    static toCamel(str) { return str.charAt(0).toLowerCase() + str.slice(1) }
    static toConstant(str) { return Camel.toConstant(str) }
    static toTitle(str, isUpper=null) { return Camel.toTitle(str, isUpper)  }
}
class Title {
    static is(str) { return (str.includes(' ') && /^[A-Z]+$/g.test(str[0])) }
    static capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() }
    static toChain(str, isUpper=false) {
        if (isUpper) { return str.replace(' ', '-').toUpperCase() }
        else { return str.replace(' ', '-').toLowerCase() }
    }
    static toSnake(str, isUpper=false) {
        if (isUpper) { return str.replace(' ', '_').toUpperCase() }
        else { return str.replace(' ', '_').toLowerCase() }
    }
    static toCamel(str, isUpper=false) { // true:全大文字, false:全小文字, null:先頭一字のみ大文字で他は小文字
        return str.split(' ').map((word, i)=>{
            if (i === 0 && !isUpper) { return word.toLowerCase(); }
            return this.capitalize(word)
        }).join('');
    }
    static toConstant(str) { return this.toSnake(str, true) }
    static toPascal(str) { return this.toCamel(str, true) }
}
class Case {
    static getType(str) {
        if (Chain.is(str)) { return Chain }
        else if (Constant.is(str)) { return Constant } // upper snake
        else if (Pascal.is(str)) { return Pascal }     // upper camel
        else if (Snake.is(str)) { return Snake }
        else if (Camel.is(str)) { return Camel }
        else if (Title.is(str)) { return Title }
        else { return null }
    }
    static getName(str) { const t = this.getType(str); if (t) { return new t().constructor.name } }
}
String.prototype.caseType = function() { return Case.getType(this) }
String.prototype.caseName = function() { return Case.getName(this) }
String.prototype.isChain = function() { return Chain.is(this) }
String.prototype.isConstant = function() { return Constant.is(this) }
String.prototype.isPascal = function() { return Pascal.is(this) }
String.prototype.isSnake = function() { return Snake.is(this) }
String.prototype.isCamel = function() { return Camel.is(this) }
String.prototype.isTitle = function() { return Title.is(this) }
String.prototype.toChain = function() { return Case.getType(this).toChain(this) }
String.prototype.toConstant = function() { return Case.getType(this).toConstant(this) }
String.prototype.toPascal = function() { return Case.getType(this).toPascal(this) }
String.prototype.toSnake = function() { return Case.getType(this).toSnake(this) }
String.prototype.toCamel = function() { return Case.getType(this).toCamel(this) }
String.prototype.toTitle = function() { return Case.getType(this).toTitle(this) }
