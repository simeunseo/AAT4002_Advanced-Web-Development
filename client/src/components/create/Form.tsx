import { styled } from "styled-components";
import { useState } from "react";

const Form = () => {
  const [textarea, setTextarea] = useState("");

  const handleChange = (e) => {
    setTextarea(e.target.value);
  };

  return (
    <St.Form>
      <textarea value={textarea} onChange={handleChange}></textarea>
    </St.Form>
  );
};

export default Form;

const St = {
  Form: styled.form``,
};
