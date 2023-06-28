import Container from "@src/components/common/Container";
import Form from "@src/components/create/Form";
import Title from "@src/components/create/Title";
import { styled } from "styled-components";
const Create = () => {
  return (
    <Container>
      <St.FormContainer>
        <Title />
        <Form />
      </St.FormContainer>
    </Container>
  );
};

export default Create;

const St = {
  FormContainer: styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
};
