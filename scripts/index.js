let hotelListUI = "";
const uiWrapper = document.getElementById("hotelCardList");

const fetchdata = async () => {
  const response = await fetch(
    "https://resorts-261f6-default-rtdb.firebaseio.com/details.json"
  );
  const data = await response.json();

  const loadHotels = [];
  var url_string = window.location.href; //window.location.href
  var url = new URL(url_string);
  console.log(url.pathname);

  for (const key in data) {
    loadHotels.unshift({
      id: key,
      name: data[key].hotelName,
      description: data[key].description,
      location: data[key].location,
      vacancy: data[key].vacancy,
      bookingDetails: data[key].bookingdetails,
      imgURL: data[key].imgURL,
    });
  }

  if (url.pathname == "/") {
    updateUI(loadHotels.slice(0, 10));
  } else {
    updateUI(loadHotels);
  }
};

function updateUI(data) {
  console.log(data);

  data.map((item) => {
    hotelListUI += `
    <div class="card">
      <div class="card-header">
        <img src="${item.imgURL}" alt="" />
      </div>
      <div class="card-body">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
      </div>
      <div class="card-footer">
        <a href="/hotelDetails.html?id=${item.id}">Check Deals</a>
      </div>
    </div>
    `;
  });

  uiWrapper.innerHTML = hotelListUI;
}

fetchdata();

const loginModal = document.getElementById("loginModal");
const openSigninModal = document.getElementById("openSigninModal");
const loginuserName = document.getElementById("loginuserName");
const loginuserMobile = document.getElementById("loginuserMobile");
const loginBtn = document.getElementById("loginBtn");
const loginuserText = document.getElementById("loginuserText");
const loginModalTitle = document.querySelector(".modal-title");

openSigninModal.addEventListener("click", () => {
  loginuserName.classList.toggle("d-none");
  loginuserMobile.classList.toggle("d-none");
  loginBtn.classList.toggle("signuptext");
  loginModalTitle.classList.toggle("loginTitle");
  loginModal.classList.toggle("signup");

  if (loginModalTitle.classList.contains("loginTitle")) {
    loginModalTitle.textContent = "Signup";
  } else {
    loginModalTitle.textContent = "Login";
  }

  if (loginBtn.classList.contains("signuptext")) {
    loginBtn.textContent = "Signup";
  } else {
    loginBtn.textContent = "Login";
  }

  openSigninModal.textContent = "Login";
  loginuserText.classList.toggle("usertext");
  if (loginuserText.classList.contains("usertext")) {
    loginuserText.textContent = "Already have an account?";
  } else {
    loginuserText.textContent = "New here?";
  }
});
