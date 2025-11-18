function Controlled() {
  const [text, setText] = useState("");
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function Uncontrolled() {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => alert(inputRef.current.value)}>Show Value</button>
    </div>
  );
}
