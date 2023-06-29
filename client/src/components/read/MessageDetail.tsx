import { MessageServerData } from "@src/types/home";
import { readMessageData } from "@src/utils/axios/read";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const MessageDetail = () => {
  const id = useParams().id;
  const [messageData, setMessageData] = useState<MessageServerData>();

  const getMessageDetail = async (id?: string) => {
    try {
      const {
        data: { message },
      } = await readMessageData(id);
      setMessageData(message);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMessageDetail(id);
  }, [id]);

  return (
    <div>
      {messageData?.name} {messageData?.content}
    </div>
  );
};

export default MessageDetail;
