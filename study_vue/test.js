{ 
    let arr = [{
        name: 'a',  
        age: 1,
    },{
        name: 'b',
        age: 2,
    },{
        name: 'c',
        age: 3,
    },{
        name: 'd',
        age: 4,
    }];  
    
    arr = arr.filter(v => !(v.name == 'a'|| v.name == 'c'))  
    console.log(arr);  
    
    let arr1 = [1,2,3,4,5,6];  
      arr1.map(v => v * 3)  
    console.log(arr1);   
}

{
    function sort(...arr) {
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - i; j++) {
                if(arr[j] > arr[j + 1]) {
                    [arr[j],arr[j + 1]] = [arr[j +1],arr[j]]  
                }
            }
        }  
        return arr
    }  
    console.log(sort(5,3,1,2,4));
}  

{
    function reverse(...arr) {
        let newArr = [];
        for(let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i])
        }
        return newArr
    }
    console.log(reverse(1,2,3,4,5));
}  

{
    function quchong(...arr) {
        let newArr = [];  
        for(let i = 0; i < arr.length; i++) {
            if(!newArr.includes(arr[i])) {
                newArr.push(arr[i])
            }
        }  
        return  newArr 
    }  
    console.log(quchong(1,2,3,4,4,3,2,1));
}  

{
    function nine(num) {  
        let str = '';
        for(let i = 1; i <= num; i++) {
            for(let j = 1; j <= i; j++) {
                str += `${j} * ${i} = ${j * i} \t` 
            }
            str += '\n'
        }
        return str
    } 
    console.log(nine(9));
}  

{
    function zheng(num) {
        let str = '';  
        for(let i = 1; i < num; i++) {
            for(let j = i;j < num; j++) {
                str += '★'
            }
            str += '\n'
        }
        return str
    }  
    console.log(zheng(9));
}  

{
    function str(s) {
        let index = s.indexOf('a');  
        let num = 0;   
        while(index !== -1) {
            num++;  
            index = s.indexOf('a',index +1)
        }   
        return `a出现了${num}次`
    }
    console.log(str('aaadf'));
}  

{
    function mb(str = 'adsafsfsfsfs') {
        let obj = {};  
        for(let i = 0; i < str.length; i++) {
            if(obj[str[i]]) {
                obj[str[i]]++;
            } else {
                obj[str[i]] = 1;
            }
        }
        for(k in obj) {
            let str = '';
            let max = 0;
            if(obj[k] > max) {
                max = obj[k];  
                str = k;
            }
        }
        return `出现最多的为${k},出现次数${obj[k]}`
    }  
    console.log(mb());
}  

{
    let obj = {
        name:'tom',  
        age: 20,  
        qq:125145313,  
        likes:['打球','自残'],  
        child: {
            name :'tim',  
            age: 10,  
            qq: 1531351351,
            likes:['打球','跑步'],
            child:{
                name :'tim',  
                age: 5,  
                qq: 1531351351,
                likes:['洗澡','睡觉'],
            }
        }
    }  
 let {name,age,qq,likes:[],child:{name:a,age:b,qq:c,likes:d,child:{name:x,age:y,qq:z,likes:[,A]}}} = obj;   
 console.log(x); console.log(z);console.log(A);console.log(d);console.log(name);  
 console.log(qq);console.log(z);  
 let sum = age + b + y  
 console.log(`子孙三代总共年龄为${sum}岁`);
}