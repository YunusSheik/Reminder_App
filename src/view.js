import Item from "./Item.js";
import { getReminderList } from "./model.js";

const reminderListDiv = document.querySelector(".reminder-list");
export const renderReminderList = () => {
  const c = getReminderList();
  const dataNodes = getReminderList().map(({ item, priority, id }) => {
    return Item(item, priority, id);
  });
  reminderListDiv.innerHTML = dataNodes.join("");
};
