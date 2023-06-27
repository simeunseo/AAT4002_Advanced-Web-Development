export interface MessageServerData {
  _id: string;
  name: string;
  content: string;
  __v: number;
}

export interface MessageProps {
  messageData: MessageServerData;
}
