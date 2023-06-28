import Container from "@src/components/common/Container";
import CreateBtn from "@src/components/home/CreateBtn";
import Messages from "@src/components/home/Messages";
import Title from "@src/components/home/Title";
const Home = () => {
  return (
    <>
      <Container>
        <Title />
        <Messages />
        <CreateBtn />
      </Container>
    </>
  );
};

export default Home;
