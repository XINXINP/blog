### 排序算法
①时间复杂度 ②空间复杂度 ③什么是算法稳定性 ④五种经典算法的思路及代码实现 排序算法在工作和学习中很常见，今天主要js实现冒泡排序，插入排序，选择排序，归并排序，快速排序。 注意： ① 空间复杂度一般指额外空间复杂度 ② 算法稳定性：假定在待排序的记录序列中，存在多个具有相同的关键字的记录，若经过排序，这些记录的相对次序保持不变，则称这个算法稳定。

#### 冒泡排序

平均时间复杂度：O(n2) 空间复杂度O(1) 很稳定
````javaScript
function bubbleSort(arr){
for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
        
        if(arr[j]<arr[j-1]){
            //两值互换
            arr[j]=arr[j]^arr[j-1]
            arr[j-1]=arr[j-1]^arr[j]
            arr[j]=arr[j]^arr[j-1]
        }
    }
}
return arr
}
````
自我感觉：理解简单，时间复杂度较高

#### 插入排序

平均时间复杂度：O(n2) 空间复杂度O(1) 很稳定
```` javaScript
function insertSort(arr){
for (let index = 1; i < arr.length; index++) {
    for (let i = index-1; i >=0&&arr[i]>arr[i+1]; i--) {
        arr[i] = arr[i]^arr[j]
        arr[j] = arr[i]^arr[j]
        arr[i] = arr[i]^arr[j]
    }
}
return arr
}
````
自我感觉：理解简单，复杂度较高，可以参考扑克牌整理牌过程

### 选择排序
平均时间复杂度：O(n2) 空间复杂度O(1) 不稳定
````javaScript
function selectSort(arr){
    for (let  i= 0; i < arr.length-1; i++) {
        let min = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){ 
                min = j
            }
        }
        arr[i] = arr[i]^arr[min]
        arr[min]= arr[min]^arr[i]
        arr[i] = arr[i]^arr[min]
        
    }
    return arr
}
````
自我感觉：每次完成一个循环，都会找到一个相对最小值

### 归并排序
平均时间复杂度：O(nlog2n) 空间复杂度O(n) 很稳定
````javaScript
function mergeSort(arr,l,r){
  if(l == r){
      return [arr[l]]
  }
  let mid = parseInt((l+r)/2)
  let arrleft = mergeSort(arr,l,mid)
  let arrRight = mergeSort(arr,mid+1,r)
  return merge(arrleft,arrRight)
}
function merge(arrleft,arrRight){
let i = 0
let j = 0
let temp =[]
while(i<arrleft.length||j<arrRight.length){
if(arrleft[i]<arrRight[j]||j>=arrRight.length){
    temp.push(arrleft[i])
    i++
}else if(arrleft[i]>=arrRight[j]||i>=arrleft.length){
    temp.push(arrRight[j])
    j++
}
}
return temp
}
````
自我感觉：先将数组不断分割，分割到最小单位，然后再合并(合并的时候排序)。采用"双指针"通过比较加入到新的数组中。

### 快速排序
平均时间复杂度：O(nlog2n) 空间复杂度O(nlog2n) 不稳定
````javaScript
function quickSort(arr,l,r){
    if(l==r){
        return;
    }
    let i = l
    let j = r
    let key = i
    while(i<j){
        while(i<j&&arr[i]<arr[key]){
        i++
        }
        while(i<j&&arr[j]>=arr[key]){
        j--
        }
        if(i!=j){
            arr[i] = arr[i]^arr[j]
            arr[j] = arr[j]^arr[i]
            arr[i] = arr[i]^arr[j]
        i++;
        j--
        }
    }
quickSort(arr,l,i)
quickSort(arr,j+1,r)
}
//简单测试
let arr1 = [8,2,6,3,4,7,9]
quickSort(arr1,0,arr1.length-1)
console.log(arr1)
````
自我感觉：快速排序是以数组的某个值为基数，进行排序，然后进行不断递归到最小单位就可以了，顺序就自然出来了