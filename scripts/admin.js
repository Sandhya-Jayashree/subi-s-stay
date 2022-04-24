const hotelName = document.getElementById("name");
const description = document.getElementById("description");
const hotelLocation = document.getElementById("location");
const vacancy = document.getElementById("vacancy");
const addData = document.getElementById("add");
const roomPrice = document.getElementById("roomPrice");
const map = document.getElementById("map");

let dataObj;

addData.addEventListener("click", () => {
  dataObj = {
    id: 1,
    hotelName: hotelName.value,
    description: description.value,
    location: hotelLocation.value,
    vacancy: vacancy.value,
    roomPrice: roomPrice.value,
    map: map.value,
  };
  addHotel(dataObj);
});

const addHotel = async (dataItems) => {
  try {
    const response = await fetch(
      "https://resorts-261f6-default-rtdb.firebaseio.com/details.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataItems),
      }
    );
    const data = await response.json();
    alert("HOTEL HAS BEEN ADDED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
  }
};
