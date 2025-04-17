// /**
//  * @return {Function}
//  */
// var createHelloWorld = function() {
//     function RetVal(){
//         return "Hello World"
//     }
   
//     return ()=> RetVal()
// };

//   const f = createHelloWorld();
//  f(); // "Hello World"
 

 /**
 * @return {Function}
 */
 var createHelloWorld = function() {
    function RetVal(){
        return "Hello World"
    }
   
    return ()=> RetVal()
};

  const f = createHelloWorld();
 f(); // "Hello World"
 