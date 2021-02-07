### 算法题
### 设计一个getMin的栈
实现一个特殊的栈，在实现栈的基本功能的基础之上，再返回栈中最小元素的操作

### 要求
1.pop push getMin的时间复杂度都是O(1) 2.设计栈类型可以使用现成的栈结构

### 思路
创建两个栈结构，分别为stack,minStack。入栈时，stack正常入栈，minStack则需要判断栈顶元素是否大于入栈的元素，如果是就将入栈的元素压入minStack，出栈时，stack正常出栈，minStack需要判断出栈元素是否与栈顶元素一致，如果是，minStack也需要出栈。获取栈中的最小元素，则只需返回minStack的栈顶元素。

### 代码实现
````javaScript
var minStack = []
var stack= [];
function push(ele){
   stack.unshift(ele);
   if(!minStack[0]||ele<=minStack[0]){
       minStack.unshift(ele)
   }  
}
function pop(){
   let ele=stack.shift();
   if(minStack[0]&&ele==minStack[0]){
       minStack.shift()
   }
}
function getMin(){
return minStack[0]?minStack[0]:null
}
````
### 简单测试
````javaScript
let arr1 = [7,5,3,2,5,8,9,8,7,9,4,5,6,2,3,1,5,4,6,5,12]
for (let index = 0; index < arr1.length; index++) {
    push(arr1[index]); 
}
console.log(stack)
console.log(minStack)
for (let index = 0; index < arr1.length; index++) {
    pop(stack[index])
    console.log(`删除${index}元素：`,getMin()) 
}
````
### 代码下载地址
### 两个栈组成的队列
由两个栈实现一个队列，支持队列的基本操作（add,poll,peek）

### 注意点
1.由stackPush压入stackPop时，要将stackPush全部压入 2.出队时，如果stackPop有元素，不需要将stackPop压入

### 代码实现
````javaScript
let stackPush = []
let stackPop = []
//入队如果队列已满，抛出异常
function add(ele){
   stackPush.unshift(ele)
}
// poll：将首个元素从队列中弹出，如果队列是空的，就返回null
function poll(){
   if(stackPop[0]){
       return stackPop.shift()
   }else if(stackPush[0]){
       for (let index = 0; stackPush.length>0; index++) {
           let  ele = stackPush.shift()
           stackPop.unshift(ele)   
       }
       return stackPop.shift()
   }else{
       return null
   }
}

//查看首个元素，不会移除首个元素，如果队列是空的就返回null
function peek(){
   if(stackPop[0]){
       return stackPop[0]
   }else if(stackPush[0]){
       for (let index = 0; stackPush.length>0; index++) {
           let  ele = stackPush.shift()
           stackPop.unshift(ele)   
       }
       return stackPop[0]
   }else{
       return null
   }
}
````
### 简单测试
````javaScript
let arr1= [5,6,4,3,1]
for (let ind = 0; ind < arr1.length; ind++) {
    const ele = arr1[ind];
    add(ele)
}
console.log(stackPush)
console.log(poll())
console.log(peek())
````
### 代码下载地址
### 如何仅用递归函数和栈操作逆序一个栈
一个栈依次压入1、2、3、4、5，那么从栈顶到栈底分别为5、4、3、2、1。将这个栈转置后，从栈顶到栈底为1、2、3、4、5，也就是实现栈中元素的逆序，但是只能用递归函数来实现，不能用其他数据结构。

### 实现思路
1.实现递归函数getAndRemoveLastElement，获取到栈底元素返回并移除 2.再实现一个递归函数reverse，逆序一个栈，将获取的栈底元素压入到栈中

### 代码实现
````javaScript
//获取到栈底元素返回并移除
function getAndRemoveLastElement(stack){
   let result = stack.pop()
   if(stack.length == 0){
       return result
   }else{
       let last = getAndRemoveLastElement(stack)
       stack.push(result)
       return last
   }
}
//调用getAndRemoveLastElement，将获取的栈底元素压入到栈中
function reverse(stack){
   if(stack.length == 0){
       return;
   }
   let i = getAndRemoveLastElement(stack);
   reverse(stack)
   stack.push(i)
}
### 简单对数器实现
//对数器实现,为了验证算法过程的疏漏；适用于改变输入值本身，不返回新的数组
function getResult(stack,funName){
    funName(stack)
    return stack
}
//num:生成测试用例的数目 compareOne:自己实现算法的函数名称 compareTwo：其他成功的实现算法函数名称
function Logarithm(num,compareOne,compareTwo){
    //实现随机数列，生成测试用例
    let arr = []
    for(let i = 0;i<num;i++){
        let numItem = parseInt(i *Math.random()*10)
        arr.push(numItem)
    }
    let arr2 = getResult(arr,compareTwo);
    let arr1 = getResult(arr,compareOne)
    let falseArr = []
    let k = 0
    let j = 0
    for(let i = 0,j=0,k=0;i<arr1.length;i++){
        if(arr1[i]==arr2[i]){
            j++
            process.stdout.write('√')
        }else{
            k++
            process.stdout.write('❌',k)
            falseArr.push(arr1[i])
        }
    }
    console.log(`结束`)
    console.log('------------------------------------------------')
    console.log(`本次测试用例是`)
    console.log(`${arr}`)
    console.log(`测试1函数的实验结果是`)
    console.log(`${arr1}`)
    console.log(`测试2函数的实验结果是`)
    console.log(`${arr2}`)
    console.log(`本次测试共测试${num}组，发生错误${k}组。`)
    }
    module.exports = {Logarithm};
    ````
### 简单测试
````javaScript
var {Logarithm} = require('./Logarithm')
function arrayReve(stack){
stack.reverse()
}
//测试
// let stack = [5,4,3,2,1];
// reverse(stack)
// console.log(stack);
Logarithm(100,reverse,arrayReve)
````
### 代码下载地址
### 一个栈实现另一个栈排序
一个栈中元素为整形，现在想将这个栈从栈顶到栈底自大到小排序，允许申请一个栈。除此之外无其他数据结构。允许申请新变量，如何完成排序？

### 实现思路
1.设置需要排序的栈为stack,辅助的栈为help,从stack弹出的当前值为curt 2.将stack依次弹出，判断弹出的值curt与help的栈顶元素大小关系，如果curt较小，就将help的栈顶元素弹出并压入到stack中，反之，将curt压入到help中，继续循环，直到stack的长度0，且curt也成功压入到help,最后返回help为结果。

### 代码实现
````javaScript
//需要排序的栈 stack
//辅助排序的栈 help
//一个人变量存储当前的值 curt
function anthorStackSort(stack){
let help = [];
let curt = stack.pop()
while(stack.length>0||curt){
   if(help.length == 0||curt>=help[help.length-1]){
       help.push(curt)
       curt= stack.pop();
   }else{
       stack.push(help.pop())
   }
}
return help
}
### 简单测试
function arraySort(stack){
    stack.sort(function (x,y) {
        return x-y;
    });
    return stack
}
var {Logarithm} = require('./Logarithm')
Logarithm(5,arraySort,anthorStackSort,false)
````
### 代码下载地址
### 快速实现生成窗口最大值数组
### ①js数组内置的两种方法②生成窗口最大值数组的具体思路
### 先看代码（暴力求解）
````javaScript
//暴力求解 时间复杂度：O(n*w)
function largestWindow(arr,w){
    let arr1 = []
    for (let i = 0; i < arr.length-w+1; i++) { 
        let max = arr[i]
        for(j=1;j<w;j++){
            max = max>arr[i+j]?max:arr[i+j]
        }
        arr1.push(max)  
    }
    return arr1
}
### 简单代码
//利用双端队列实现窗口的最大值更新 时间复杂度：0（n）
function largestWindowa(arr,w){
let arr1 = []//用来存储窗体的下标
let arr2=[]//用作记录每次窗体的最大值
for (let i = 0; i < arr.length; i++) {
    if(arr1[0]<(i+1-w)){
        arr1.shift()
    }
    while(true){
        if(arr1.length==0){
            arr1.unshift(i)
            break
        }
        let j =arr1[arr1.length-1]
        if(i==0)break
        if(arr[j]>arr[i]){
        arr1.push(i)
        break
        }else {
            arr1.pop();
        }
    }
    if(i>=w-1){
        arr2.push(arr[arr1[0]])
    }
}
return arr2
}
````
### 具体思路
如果数组的长度为 n ，窗口大小为 w ，则一共可以产生 n - w + 1个窗口最大值
arr1看作一个队列，存放的是arr的下标，有头有尾，有出队和入队规则
出队规则：①当arr1队尾存的下标对应arr的值小于或等于当前arr[i]时，arr1队尾出队，然后再重新比较②当队头的下标过期时（arr1[0]<(i+1-w)）
入队规则：①当arr1为空时②当arr1队尾存的下标对应arr的值大于当前arr[i]时，队尾添加arr[i]的下标i
### 代码下载地址
### 想理解的更清楚，可以自己举个简单的例子，或者调试代码打印过程
### 扑克牌问题
有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；

最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；

问：原来那堆牌的顺序，用函数实现

### 代码实现
````javaScript
function sortPuke(arr) {
    let keyList = [];//arr对应的key
    let alenList = [];
    let result = [];//最终结果
    let spot = true;
    if (arr.length === 1) {
        return arr
    }
    if (arr.length > 1) {
        for (let index = 0; index < arr.length; index++) {
            alenList.push(index)
        }
        while (alenList.length) {
            if (alenList.length === 1) {
                keyList.push(alenList.shift())
            }
            if (spot && alenList.length > 1) {
                keyList.push(alenList.shift())
            }
            if (!spot && alenList.length > 1) {
                alenList.push(alenList.shift())
            }
            spot = !spot
        }
    }
    for (let j = 0; j < arr.length; j++) {
        result[keyList[j]] = arr[j]
    }
    return result;
}
console.log(sortPuke([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
//[ 1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7 ]
````
### 心灵鸡汤
某剧中的台词：“伤感思念留到胜利后到坟上去说，现在依旧要把上级的任务给完成！”

