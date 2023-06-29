import { atom, selector } from "recoil";

import { getMessageData } from "@src/utils/axios/home";

export const messageDataState = atom({
  key: "messageDataState",
  default: selector({
    key: "messageDataSelector",
    get: async () => {
      const { data } = await getMessageData();
      return data.messages;
    },
  }),
});

export const totalNumSelector = selector({
  key: "totalNumSelector",
  get: ({ get }) => {
    const messageData = get(messageDataState);
    return messageData.length;
  },
});
