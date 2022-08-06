// JavaScript Modules 

// JavaScript Modules ->>>
// - When we have very huge functions and we want to store them different file 
// then we use JavaScript Modules for easy handling of multiple files
// - For using JavaScript Module : add like this in HTML script tag
// <script src="./app.js" type="module"></script>
// - using type = "module" attribute it will automatically add defer
// - whichever function or value we want in current file just write "export" before that function or value in that file
// - we can use default export and must remove {} in importing file, but it is used only once for particular function/value/class, etc..
// - when we are exporting two values from same file then these are called name exports
// - to access these functions or values in current folder just write like this as below
// import {name_of_value} from 'path_of_file'

import {firstName} from './utils/fname.js';
import {age, hobby} from './utils/age.js'; // - name export 
import Person from './utils/person.js';   // this is using export default so must remove {}

console.log(firstName, age, hobby);
// Output : John 22 gyming

const person = new Person("John", "Doe", 22);
person.info();
// Output : John Doe 22


// - when we have bigger name we can import like this below
// import{firstName as fname} from './utils/fname.js';
// Now use that small name all over file ie. fname