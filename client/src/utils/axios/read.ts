import { client } from ".";

export const readMessageData = (id?: string) => {
  return client.get(`/messages/${id}`);
};
