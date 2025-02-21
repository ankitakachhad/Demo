
1. Different between props and state ?
  =>  props are used to pass data to components ,state is used to manage data within a component.

1.  difference between React Native and React?
2.   advantages of using React Native for mobile app development?
3.  What is the purpose of JSX in React Native?
4.  What are state and setState in React Native?
5.  What is the purpose of AsyncStorage in React Native?
6.  How does React Native handle navigation between screens?
7.  Explain the concept of Redux in React Native and its benefits.
=> Redux in React Native is a state management library that helps keep track of an app’s data in a central store, making it easier to manage and share between components.

8.  Why were Hooks introduced in React?
9.  Explain the purpose of useLayoutEffect? =>useLayoutEffect blocks the browser from repainting.


      Hooks

1) What is the  useState() ?
 =>is a React hook that allows functional components to manage and update local state.

2) What is the  useEffect() ?
=> is a React  hook that used to perform side effects in function components.

3) What is the  usecontext() ?
 => is a react  hook that allows you to access the value of a context in a functional component.

4) What is the  useRef() ?
=> is a react  hook that keeps a value the same even after the component re-renders.

5) What is the  useMemo() ?
=> is a react hook that Memoize  expensive calculations.

6) What is the  useCallback() ?
=> is a react hook that Memoize  functions.

7) What is the  useReducer() ?
=> is a react hook that Manage complex state logic.

8) What is the  useImperativeHandler() ?
=> is react hook that  customizes the ref values a parent can access from a child component in React.

9) What is the  ForwardRef() ?
 => allows you to forward a ref from a parent component to a child component.


10) What is the  Memo() ?
=> memoizing a component properties  to avoid unnecessary re-renders.



Loops
1] for :- for loop is repeats action a contain number of times
2] while - entrycontroll, do-while :- exitcontroll
3] for..in. -: const person = { name: 'John', age: 30 };
 for (let key in person)
 { console.log(key); // This will print the name of each property: "name", "age"
 console.log(person[key]); // This will print the value of each property: "John", 30 }

4]  find = Returns the value of the first element. /Return undefined
5] find index =Returns the index of the first element.  / return -1
6] map -The map() function takes an array, performs an operation on each item, and returns a new array with the results. It does not modify the original array.
7] filter - filter() creates a new array with elements that meet a specified condition.


for (let i=1;i<=5;i++){
  console.log(i)
  setTimeout(function () {
   console.log('inner',i);
}, 0);
}


let a=10;
// a++
// a=a+1
console.log('a',++a)
console.log('af',a)


ankita@1112


Use state/usereducer -manage state
User/useimperitive- ref 
useEffect/uselayouteffect-effect
Use memo/usecallback-performance


Logical questions

 Fibo series
// 0,1,1,2,3,5,8,13,21,34.     
let first = 0;
let sec = 1;
let final_string = '0,1';
for (let i = 0; i <= 9; i++) {

  let next = first + sec //=1
  first = sec //0=1
  sec = next

  if (final_string === '') {
    final_string = `${next}`
  } else {
    final_string = `${final_string},${next}`
  }

}
console.log(final_string)





Hook Details







useState	Manage state.
useEffect	Handle side effects.
useContext	Access context values.
useRef	Reference DOM elements or keep mutable values.
useMemo	Memoize  expensive calculations.
useCallback	Memoize functions.
useReducer	Manage complex state logic.
useImperativeHandle	Expose methods to parent components.

* useState - Persist state within a component function 
* useReducer - Similar to useState, but for state that involves multiple sub-values
* useEffect - Perform side effects within our component functions
* useRef - Wrap a mutable value

  UseEffects 
 
Use Cases for useEffect
1. Data Fetching:
    * Fetching data from APIs when the component mounts or when specific dependencies change.
2. Event Listeners:
    * Adding and removing event listeners for user interactions, such as scrolling or resizing.
3. Timers:
    * Setting up intervals or timeouts and ensuring they are cleared when the component unmounts.
4. Manipulating the DOM:
    * Directly interacting with the DOM  ex :  input focus
5. Subscriptions:
    * Subscribing to data streams or services (like WebSockets) and cleaning up on unmount.

 
 UseRef

useRef is a React hook that returns a mutable object with a .current
 
                                        
UseCallback

The React useCallback Hook returns a memoized callback function.
Use when passing functions as props
 
                                             
UseMemo

useMemo returns a memoized value
                                    
 Memo

const ChildComponent = React.memo(({ count }) => {
  console.log('ChildComponent rendered');
  return <div>Count: {count}</div>;
});

=> Only work on component props 
  
                        
ForwardRef

forwardRef is a React function that allows you to forward a ref from a parent component to a child 
component.(parent component       ref====>   child component )




How to set getvalue : first way
let page= getvalue ('abc')
setvalue('abc',page+1)

Second way  :
setvalue('abc',getvalue ('abc’)+1)




// no need to add as a dependency at that moment we can use ant reducer from store.getState().
store
        .getState()
        .FilterReducer




useState
* Purpose: Adds state to functional components.
* How it works: It returns an array with two items: the current state value and a function to update that state.
* Example: const [count, setCount] = useState(0);
* 
2. useEffect
* Purpose: Handles side effects like fetching data, subscriptions, or timers.
* How it works: Runs after the component renders. You can control when it runs using a dependency array.
* Example: useEffect(() => { console.log('Component mounted!'); }, []);
* 
3. useContext
* Purpose: Provides a way to share state (context) between components without passing props down manually.
* How it works: Accesses the value from a Context Provider to avoid prop drilling.
* Example: const theme = useContext(ThemeContext);
* 
4. useRef
* Purpose: Allows you to persist values between renders without causing a re-render.
* How it works: Stores a reference to a DOM element or any value (e.g., a timer ID).
* Example: const inputRef = useRef(); (can be used to directly access DOM elements)
* 
5. useMemo
* Purpose: Memoizes (caches) expensive calculations so they don’t run on every render.
* How it works: Only recomputes the value when dependencies change, improving performance.
* Example: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
* 
6. useCallback
* Purpose: Memoizes a function to prevent it from being recreated on every render.
* How it works: It returns a cached version of the function unless dependencies change.
* Example: const memoizedCallback = useCallback(() => { doSomething(); }, [dependencies]);
* 
7. useReducer
* Purpose: Manages more complex state logic, often used for multiple related state values.
* How it works: Similar to useState, but uses a reducer function to update state based on actions.
* Example: const [state, dispatch] = useReducer(reducer, initialState);
* 
8. useImperativeHandle
* Purpose: Allows a parent component to access specific methods or properties of a child component.
* How it works: Customizes the ref object exposed to the parent.
* Example: useImperativeHandle(ref, () => ({ customMethod: () => { /* code */ }}));

Key Summary:
* useState: Manages state in functional components.
* useEffect: Handles side effects (like fetching data).
* useContext: Shares data globally (avoids prop drilling).
* useRef: Keeps a reference to elements or values without re-rendering.
* useMemo: Optimizes performance by memoizing expensive calculations.
* useCallback: Memoizes functions to prevent unnecessary re-creations.
* useReducer: Used for complex state logic with actions.
* useImperativeHandle: Exposes specific methods or properties from child to parent.







