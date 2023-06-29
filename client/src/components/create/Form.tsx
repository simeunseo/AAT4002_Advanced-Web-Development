import ConfirmBtn from "./ConfirmBtn";
import DeclineBtn from "./DeclineBtn";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { useState } from "react";

const Form = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <St.Form>
      <St.TextArea placeholder="무슨 말을 할까..." value={content} onChange={handleContentChange}></St.TextArea>
      <St.WriterWrapper>
        <St.FormSpan>From.</St.FormSpan>
        <St.Input placeholder="이름이 뭔가요?" value={name} onChange={handleNameChange} />
      </St.WriterWrapper>
      <St.BtnWrapper>
        <DeclineBtn />
        <ConfirmBtn name={name} content={content} />
      </St.BtnWrapper>
    </St.Form>
  );
};

export default Form;

const St = {
  Form: styled.form``,
  TextArea: styled.textarea`
    width: 30rem;
    height: 45rem;
    padding: 2.5rem;

    border: 0.3rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};

    resize: none;
    ${theme.fonts.Body1}

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: lightgray;
    }
  `,
  WriterWrapper: styled.div`
    display: flex;
    align-items: center;

    margin-top: 2rem;

    color: ${theme.colors.primary};
    ${theme.fonts.Body1};
  `,
  FormSpan: styled.span`
    color: ${theme.colors.primary};
    ${theme.fonts.Head1};
  `,
  Input: styled.input`
    margin-left: 1rem;
    width: 15rem;
    padding: 1rem;

    border: none;
    border-bottom: 0.3rem solid ${theme.colors.primary};

    color: ${theme.colors.primary};
    ${theme.fonts.Body1};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: lightgray;
    }
  `,
  BtnWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 4rem;
  `,
};
