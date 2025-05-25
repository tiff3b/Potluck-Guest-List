// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    //clear the input box
    clearInput();
    // call the updates
    updateGuestCount();
  }
});

//clear the input box
const clearInput = function () {
  guestInput.value = "";
};

//add guest to list
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//limit guest list to 8 people
const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};
//array for dishes to bring
const assignItems = function () {
  const potluckItems = [
    "scotch a roos",
    "noddle salad",
    "taco salad",
    "silverware",
    "plates",
    "buffalo dip",
    "chips",
    "hamburger",
    "ketchup and mustard",
    "burger buns",
    "assorted cheese",
    "pickels",
  ];
  //select all list elements in ul
  const allGuests = document.querySelectorAll(".guest-list li");
  //loop over allGuests using guest
  for (let guest of allGuests) {
    //generate a random number between 0 and length of potluckItems
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    //declare var to add item from potluckItems at the index postion of randomPotluckIndex
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    //create new li
    let listItem = document.createElement("li");
    //return message. Using guest.innerText rather than guest so you don't grab the actual list element inside of the text
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}`;
    //append to add to listItem
    assignedItems.append(listItem);
    //remove item already chosen from potluckItems so it is not given to more than one guest
    potluckItems.splice(randomPotluckIndex, 1);
  }
};
//show what list items will be brought by guest when button is clicked
assignButton.addEventListener("click", function () {
  assignItems();
  //disable button so it won't give out dishes a second time if clicked again.
  assignButton.disabled = true;
});
