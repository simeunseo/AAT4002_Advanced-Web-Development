import { client } from ".";

export const getMessageData = () => {
  return client.get(`/messages`);
};
