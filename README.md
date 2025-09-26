# HI Iam MD MEHEDI HASSAN

## 1. JSX
JSX হলো JavaScript-এর মধ্যে HTML-এর মতো সিনট্যাক্স। এটি UI বানানো সহজ করে এবং React-কে DOM আপডেট করতে সাহায্য করে।  

## 2. State vs Props
- **State:** কম্পোনেন্টের নিজস্ব ডেটা, পরিবর্তনযোগ্য।  
- **Props:** প্যারেন্ট থেকে চাইল্ডে পাঠানো ডেটা, পরিবর্তনযোগ্য নয়।  

## 3. useState Hook
`useState` হলো React হুক যা কম্পোনেন্টে state যোগ করে। এটি `[stateValue, setStateFunction]` রিটার্ন করে, যার মাধ্যমে state আপডেট করা যায়।  

## 4. State Sharing Between Components
State প্যারেন্ট কম্পোনেন্টে রাখা হয় এবং Props এর মাধ্যমে চাইল্ড কম্পোনেন্টে পাঠানো যায়। Context API বা Redux ব্যবহার করেও শেয়ার করা সম্ভব।  

## 5. Event Handling in React
JSX-এ ইভেন্ট attribute ব্যবহার করা হয়, যেমন:  
```jsx
<button onClick={handleClick}>Click Me</button>

