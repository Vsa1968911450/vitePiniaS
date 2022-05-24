function run():string{
    return '123'  // 返回一个string
}
// 匿名函数
let func2 = function():number{
    return 123
}

function aaa(name:string,age:number):string{
    return `${name}---${age}`
}
// 没有返回值 void
function runV():void{
    console.log('123')
}
runV()
// 可选参数 要放到后面
function fns(name:string,age?:number):string{
    if(age){
        return `${name}---${age}`
    } else {
        return `${name}`
    }
}
// 函数重载
function getinfo(name:string):string
function getinfo(age:number):string
function getinfo(str:any):any{

}
// 加密接口  
interface encrypt{
    (key:string,value:string):string
}
let md5:encrypt = function(key:string,value:string):string{
    return key+value
}
//可索引接口 对于数组的约束
interface useObj{
    [index:string]:string
}
let arr:useObj = {name:'123'}

//对于类的约束 多态 父类定义一个方法不去实现 子类去继承 然后分别实现
interface Animal{
    name:string
    eat():void
}
class Dogs implements Animal{  // implement要求子类重新定义父类的方法 extends和super就不需要
    name:string
    constructor(name:string){
        this.name = name
    }
    eat(){
        console.log('123')
    }
}
