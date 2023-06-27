import { MessageProps } from "@src/types/home";

const Message = (props: MessageProps) => {
  const {
    messageData: { _id, name, content, __v },
  } = props;
  return (
    <div>
      {name} {content}
    </div>
  );
};

export default Message;
