  - 1️⃣ What is the difference between var, let, and const?
  => var, let and const are used in declaring a variable. But there are some differences between these. var is the old way of declaring a variable. It is hoisted to the top of the file, but the value is not. So when called the variable with "var" before initializing, it returns undefined. It maintains function scope only, so when var is declared in a block, it is possible to access it outside the block. var allows redeclaring and reassigning, which can cause bugs in big programs.

  const and let are an ES6 update for JavaScript. The main difference between var and these two is that they are also hoisted, but they stay in the Temporary Dead Zone. So when they are called before initialization, they return a reference error. They maintain function scope and block scope. let and const do not allow redeclaring.

  The difference between let and const is that let allows reassigning, const does not allow reassigning, but allows to modify the value of variable.

    - 2️⃣ What is the spread operator (...)?
  => spread operator is an ES6 feature. it spread the value of a iterable variable into another variable. its useful for copying any value without changing the original one. the syntax of spread operator is, ...variableName. 

    - 3️⃣ What is the difference between map(), filter(), and forEach()?
  => these are the array method from ES6. map() iterate every element of the array, and returns a new array. it takes the element of the original array, index of that element and the original array as a parameter. it did not change the original array.
  filter method is another array method from ES6, it is iterate the element of the original array, but not every element, when the condition are matched, it iterates the element. it returns a new array with the filtered element. it do not change the original array. it takes the element, the index of the element and the original array as a parameter.
  forEach method is another array method, but the difference is, it did not returns anything. when we need a sideeffect of an iteration, used foreach method. it is also did not change the original array.

    - 4️⃣ What is an arrow function?
  =>  arrow function is a simple and short version of old function. arrow function syntax is: let functionName = (parameter, parameter) => {return}; when uses a single parameter, it did not required ot use parenthesis, and when function body written in single line, it did not required to return separately, it called explicit return. the old function has a own this, but arrow function does not create own this.

    - 5️⃣ What are template literals?
  => writing code using (``) are called template literals in javascript. usually for declaration anything, javascript uses '' or "". but the limitation is, with quotation mark, it is not easy to write multiline code. it uses making a template element when we manipulate the DOM. another feature is, it is possible to write a variable and ternary operator in the code using ${}. so that it is more flexible and useful from quotation mark.
