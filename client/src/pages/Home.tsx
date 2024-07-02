import Container from "@src/components/common/Container";
import CreateBtn from "@src/components/home/CreateBtn";
import Messages from "@src/components/home/Messages";
import Notice from "@src/components/home/Notice";
import Title from "@src/components/home/Title";

const Home = () => {
  return (
    <>
      <Container>
        <Title />
        <Notice />
        <Messages />
        <CreateBtn />
      </Container>
    </>
  );
};

export default Home;
