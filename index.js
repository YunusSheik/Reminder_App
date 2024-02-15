import { addToReminderList, setPriority } from "./src/model.js";
import { renderReminderList } from "./src/view.js";

const inputItem = document.querySelector("input[name='itemInput']");
const reminderListDiv = document.querySelector(".reminder-list");
const completedDiv = document.querySelector(".completed");
const clearCompletedBtn = document.querySelector("#clear-completed");

inputItem.addEventListener("keyup", function (evt) {
  if (evt.key === "Enter") {
    addToReminderList(evt.target.value);
    renderReminderList();
    this.value = "";
  }
});

reminderListDiv.addEventListener("click", function (evt) {
  if (evt.target.parentElement.classList.contains("priority-control")) {
    const priority = evt.target.classList.value;
    const itemId =
      evt.target.parentElement.parentElement.getAttribute("data-id");
    setPriority(itemId, priority);
    renderReminderList();
  }
});
