import Container from "@src/components/common/Container";
import Messages from "@src/components/home/Messages";
import Title from "@src/components/home/Title";
const Home = () => {
  return (
    <>
      <Container>
        <Title />
        <Messages />
      </Container>
    </>
  );
};

export default Home;
