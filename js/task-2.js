const countProps = function(obj) {
    const  keys = Object.keys(obj);
    console.log(keys);
    
    for (const key of keys) {
        console.log(key);        
    }
   
    return Object.keys(obj).length;
}; 

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3 