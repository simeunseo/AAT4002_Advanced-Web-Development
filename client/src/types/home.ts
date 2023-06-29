export interface MessageServerData {
  _id: string | null;
  name: string;
  content: string;
  __v: number;
}

export interface MessageProps {
  idx: number;
  messageData: MessageServerData;
}

export interface MessageGroupProps {
  messageGroupData: MessageServerData[];
}
