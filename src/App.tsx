import React, { useState, useEffect } from "react";
import "./styles.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { random } from "./Utils";

const NAN = () => "Please Enter a Valid Number";
const MAX = (m) => `Please Enter a Number < ${m}`;
export default function App() {
  const [len, setLen] = useState(10);
  const [rando, setRando] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [lenValid, setLenValid] = useState(true);
  const [msg, setMsg] = useState("");
  const lenMax = 100;
  useEffect(() => {
    if (!len) {
      setMsg(NAN);
      setLenValid(false);
      return;
    }
    if (lenMax < len) {
      setMsg(MAX);
      setLenValid(false);
      return;
    }
    setLenValid(true);
  }, [len]);

  const onLenChange = (val: string) => {
    const num = parseInt(val);
    setLen(num);
  };
  return (
    <div className="App">
      <h1>Using this generate random passes</h1>
      <h2>Start editing to see some magic happen!</h2>
      <label htmlFor="len">Length</label>
      <input
        type="number"
        value={len}
        onChange={(e) => onLenChange(e.target.value)}
      />
      <button
        disabled={!lenValid}
        type="button"
        onClick={() => setRando(random(len))}
      >
        Generate
      </button>
      <input value={rando} />
      <CopyToClipboard text={rando} onCopy={() => setIsCopied(true)}>
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>
      <p>{msg}</p>
    </div>
  );
}
