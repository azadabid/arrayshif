let x=require('readline-sync')
b=x.questionInt("input the number of shif"+" ")
let j=0
let i
let z
let a=[1,5,3,4,8,2,6]
let n=a.length

while(j<b){
    z=a[n-1]
for (i=n-2;i>=0;i--)
{
    a[i+1]=a[i]
     
}

   
j++
a[0]=z;
}
 
   console.log(a)
   