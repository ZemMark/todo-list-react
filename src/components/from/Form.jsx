import axios from "axios";
import { useState, useEffect } from "react";
axios.defaults.baseURL =
  "https://6412ba93232c91393dd438d4.mockapi.io/todos/test/todos";

export function Form() {
  const [text, setText] = useState("");
    
  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
      if(text==='')return
      async function postTodo() {
        await axios.post('', { text: text, checked: false },{headers: {
          "Content-Type": "application/json"
        }});
      }
      postTodo();
    } catch (error) {
      console.error("Error", error);
    }

  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </label>
      <button type="submit">add</button>
    </form>
  );
}
