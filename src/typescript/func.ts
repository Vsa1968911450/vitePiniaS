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