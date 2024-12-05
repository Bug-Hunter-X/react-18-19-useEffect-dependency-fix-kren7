```javascript
//In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Correct way in React 18 and 19
    console.log('Count changed:', count);
  }, [count]); //Count is now included in dependencies

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```