
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

=>razopay

Rrazorpay

1] install   Razorpay react native sdk :-

=> $ npm install react-native-razorpay --save



2] Import. Razorpay package :-

=> 

3] add razopay sdk in android settings grade file

4]  add dependency in app build grade file

5] run react native app

6] create an order on your server

7] add razopay checkout options

8] store fields in server


Implement Ratting 

Implement BuyerOrderFiltter api on today order screen,canclledorderscreen,completed orderscreen


Stripe


1] Create payment intent from backend api

2]  pass payment intent  paymentIntent, ephemeral Key, customer, into initPaymentSheet from  usestripe hook

3] once initpaymentsheet run successfully ready to call presentPaymentSheet

4] using presentPaymentSheet function it will open ui interface for  add cart(debitcart) information and submit that cart info ,onsubmit successfully check on stipe admin panel for payment details.




=>hooks


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


=> learning

Task
1. Add product button 2. Display list of products 3. Select product 4. Display cart list which has item photo, item name, item price and quantity with plus and minus, which can not be less than one. At the end display total.
 -> cart system using productname,price using useMemo(),

-> types of loop

-> React-Hook-Form
-controller (component)
-setvalue
-getvalue
-watch
-useForm()

- Create generic component for react-hook-form,  -textinput, radiobutton,checkbox



/ Objecet example
//add
let obj = { name: 'riya' };
obj.age = 23;
console.log('Add object:', obj);

//update
obj.age = 34;
console.log('update object:', obj);

//delete
delete obj.name;
console.log('delete object:', obj);

// array example
// add array
let arr = ['Riya', 'Priya', 'Alia'];
arr.push("Shivangi");
console.log('add array:', arr);

//update array
arr[1] = 'shreya';
console.log('update array:', arr);

//delete array
arr.splice(1);
console.log('delete array:', arr);



* Loops in javascript 
for
while
do...while
for...in
for...of
forEach
map
filter
reduce
some
every

findIndex


 

* How to add key pair in  object :

Const abc ={hi, hello}
abc.name =‘hello’

const configs = { Organisation: "GFG" ,"headers": {
    "Accept": "application/json, text/plain, */*"
  },};

configs.abc ='hello'

// obj.field = "CS";
    // configs.headers.Authorization =`Bearer ${123}`
     configs.headers['Authorization'] =`Bearer ${123}`
console.log(configs);







 If :false 0,undefined, null,””{empty string}.  Aa bad condition ni chal  che
  Array, number, object true 

* For multiple java version  how to change and how to show version
https://docs.azul.com/core/manage-multiple-zulu-versions/macos


How to connect string   :-  `${  }` 
let BaseUrl ="https://7679-103-106-20-199.ngrok-free.app"
  let url =`${BaseUrl}/auth/login`


Checkox  ,  drop-downselecter  , date & time

=>context provider


Context provider

Step:1  Create a Context with a default value

Example :- 
export const CartContext = createContext<IMyCartValues>({
  Products: [],
  totalAmount: 0,
  delivery: 0,
  subTotal: 0,
  noOfProducts: 0,
});


Step:2  Create context Hook

Example :- 
export const useCartContext = () => useContext(CartContext);


Step:3  Create a Context provider function with children  

Example :- 
export const CartContextProvider = ({children}: any) => {}

Step:4  read on screen 

Example :- 
 const {noOfProducts, getCartInfo} = useCartContext();

Step:5  Add on App.js

Example :- 

 <CartContextProvider>
            <NavigationContainer>
              <MainRoute />
            </NavigationContainer>
          </CartContextProvider>

Notes :   
 <NavigationContainer>
              <MainRoute />
            </NavigationContainer> This is the children for CartContextProvider




=>Api
 APIs


GET = Get data (Read).
POST = Send data to create something new.
PUT = Replace all data (Update).
PATCH = Partially update data (Change a part of it).
DELETE = Remove data.



1] GET API  :-

var url = 'https://jsonplaceholder.typicode.com/todos/’

// Make a GET request
axios.get(url)
  .then((res) => {
  console.log('data',res.data)
})
  .catch((e) => {
  console.log('error :', e)
})

Response :

[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },  …all data]

2] POST   API  :-


var url = 'https://jsonplaceholder.typicode.com/todos/’

// Make a GET request
axios.post(url)
  .then((res) => {
  console.log('data',res.data)
})
  .catch((e) => {
  console.log('error :', e)
})

Response :

{
  "id": 201
}

3] PATCH  API  :-
var url = 'https://jsonplaceholder.typicode.com/todos/’

// Make a GET request
axios.patch(url)
  .then((res) => {
  console.log('data',res.data)
})
  .catch((e) => {
  console.log('error :', e)
})

Response :
{  }

3] DELETE  API  :-

var url = 'https://jsonplaceholder.typicode.com/todos/’

// Make a GET request
axios.delete(url)
  .then((res) => {
  console.log('data',res.data)
})
  .catch((e) => {
  console.log('error :', e)
})

Response :
{  }


This is static key of sellerId
  // let sellerId = '675c10d95315a194b39ff8ae';
    // let url = `todo/seller/${sellerId}`;














