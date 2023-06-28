import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { useState } from "react";

const Form = () => {
  const [textarea, setTextarea] = useState("");

  const handleChange = (e) => {
    setTextarea(e.target.value);
  };

  return (
    <St.Form>
      <St.TextArea value={textarea} onChange={handleChange}></St.TextArea>
    </St.Form>
  );
};

export default Form;

const St = {
  Form: styled.form``,
  TextArea: styled.textarea`
    width: 30rem;
    height: 50rem;
    padding: 2.5rem;

    border: 0.3rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};

    resize: none;
    font-family: "Gonggan";

    &:focus {
      outline: none;
    }
  `,
};
