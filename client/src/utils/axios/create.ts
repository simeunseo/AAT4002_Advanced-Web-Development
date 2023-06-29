import { MessageRequest } from "@src/types/create";
import { client } from ".";
export const createMessage = (MessageRequest: MessageRequest) => {
  return client.post<MessageRequest>(`/messages`, MessageRequest);
};
