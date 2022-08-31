// Q. remove spaces of string in an Array

var array = [" hello"," goodbye"," no"];

array = array.map((elements)=>{
    return elements.trim();
})
console.log(array);
// Output : ['hello', 'goodbye', 'no']
