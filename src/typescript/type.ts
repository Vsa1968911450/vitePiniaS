class Person{
  public name :string
  constructor(name:string){
    this.name = name
  }
  run():void{}
  getName():string{
    return this.name
  }
  setName():void{}
}
// ts实现继承 extends super 
class Person2{
  name:string
  static age:number = 20
  constructor(name:string){
    this.name = name
  }
  run():string{
    return this.name
  }
  static print(){  // 静态方法没办法调用属性 要调用前面添加static声明
    alert('123'+this.age) // 能访问到age属性
  }
}


class Six extends Person{
  x:string
  constructor(x:string,name:string){  
    super(name)  // 初始化父类的构造函数
    this.x = x
  }
  bark():string{
    return this.name
  }
}
let s = new Six('ame','aaa')
console.log(s)
// 类里面的修饰符 private 私有 public(内部才能访问) 公有(子类，类里面，类外都可以访问) protected(外部没法访问) 三种
// 抽象类 没有办法实例化  当成一个标准 里面的方法在子类必须实现
// abstract class Animal{
//   name :string
//   constructor(name:string){
//     this.name = name
//   }
//   abstract eat():any // 抽象方法
  
// }
// class Dog extends Animal{
//   // 抽象类的子类必须实现抽象类的抽象方法
//   eat():void{
//     console.log(this.name)
//   }
//   constructor(name:string){
//     super(name)
//   }
// }
abstract class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    abstract eat(): any
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {
        console.log(this.name + "吃肉")
    }
}

var dog = new Dog("狗")
dog.eat()
// 接口  定义标准  约束函数 属性 类
// 属性接口 对于json的约束
function prins(labelInfo:{label:string}):void{
  console.log(labelInfo)
}
prins({label:'123'})
interface fullName{  // 传入的对象的约束
  firstName:string
  hahaha:number
}
function PrintName(name:fullName){
  console.log(name)
}
let obj = {
  age:20,
  firstName:'1',
  hahaha:123
}
PrintName(obj)
PrintName({
  // age:20,  //报错多了 
  firstName:'1',
  hahaha:123
})
// 同时返回string和number
function fnks2<T>(value:T):T{
    return value
}
class minNum{   // number 全都改成T就是泛型类 传入什么就是什么类型
    public list:number[] = []
    add(num:number){
        this.list.push(num)
    }
    min(){
        return this.list[0]
    }
}
// 泛型有类型校验 any就没有类型校验
// 泛型接口
interface hahaconfig{
    (value1:string,value2:string):string
}
let res:hahaconfig = function(value1:string,value2:string):string{
    return value1+ value2
}
interface hahaconfff{
    <T>(value:T):T
}
let ress:hahaconfff = function<T>(value:T):T{
    return value
}