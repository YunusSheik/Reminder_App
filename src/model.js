let reminderList = [];

export const addToReminderList = (item) => {
  const itemId = `${parseInt(Math.random() * 9000 + 1000)}-${new Date()
    .getTime()
    .toString()
    .slice(-4)}`;

  reminderList.push({
    id: itemId,
    item,
    priority: "normal",
  });
};

export const getReminderList = () => reminderList;

export const setPriority = (itemId, priority) => {
  reminderList = reminderList.map((item) => {
    if (itemId === item.id) {
      return {
        ...item,
        priority,
      };
    }
    return item;
  });
};
