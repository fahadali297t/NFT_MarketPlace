const topCreatorsContainer = document.querySelector(".top_creators_container");
const categorieContainer = document.querySelector(".categories_container");
console.log(categorieContainer);
const otpCreators = [
  {
    id: 1,
    name: "keepitreal",
    sales: getRandomSales(),
    image: "./assets/images/asset 20.png",
  },
  {
    id: 2,
    name: "gigilab",
    sales: getRandomSales(),
    image: "./assets/images/asset 21.png",
  },
  {
    id: 3,
    name: "GravityOne",
    sales: getRandomSales(),
    image: "./assets/images/asset 22.png",
  },
  {
    id: 4,
    name: "Juanie",
    sales: getRandomSales(),
    image: "./assets/images/asset 23.png",
  },
  {
    id: 5,
    name: "BlueWhale",
    sales: getRandomSales(),
    image: "./assets/images/asset 24.png",
  },
  {
    id: 6,
    name: "Mr Fox",
    sales: getRandomSales(),
    image: "./assets/images/asset 25.png",
  },
  {
    id: 7,
    name: "Shroome",
    sales: getRandomSales(),
    image: "./assets/images/asset 26.png",
  },
  {
    id: 8,
    name: "Robotica",
    sales: getRandomSales(),
    image: "./assets/images/asset 27.png",
  },
  {
    id: 9,
    name: "Rusty Robot",
    sales: getRandomSales(),
    image: "./assets/images/asset 28.png",
  },
  {
    id: 10,
    name: "AnimaKid",
    sales: getRandomSales(),
    image: "./assets/images/asset 29.png",
  },
  {
    id: 11,
    name: "Dotgu",
    sales: getRandomSales(),
    image: "./assets/images/asset 30.png",
  },
  {
    id: 12,
    name: "Ghiblier",
    sales: getRandomSales(),
    image: "./assets/images/asset 31.png",
  },
];
const categories = [
  {
    id: 1,
    name: "Art",
    calsses: "fa-solid fa-paintbrush",
  },
  {
    id: 2,
    name: "Music",
    calsses: "fa-solid fa-music",
  },
  {
    id: 3,
    name: "Games",
    calsses: "fa-solid fa-gamepad",
  },
  {
    id: 4,
    name: "Picture",
    calsses: "fa-solid fa-camera",
  },
  {
    id: 5,
    name: "Sports",
    calsses: "fa-solid fa-baseball",
  },
  {
    id: 6,
    name: "Virtual Worlds",
    calsses: "fa-solid fa-robot",
  },
];
function getRandomSales() {
  return (Math.random() * (100 - 20) + 20).toFixed(2);
}

let topCreatorsStatment = ``;
otpCreators.map((el) => {
  topCreatorsContainer.innerHTML += `<div class="card col-lg-3 col-md-4 col-sm-6 col-12 flex">
          <img
            src= "${el.image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h3 class="card-text title text-center">${el.name}</h3>
            <p class="stats text-center">
              <span class="bold">Total Sales:</span> ${el.sales} ETH
            </p>
          </div>
        </div>`;
});
let categorieStatment = ``;
categories.map((el) => {
  categorieStatment += `<div class="card category_card col-lg-3 col-md-3 col-sm-6 col-12 flex">
          <div
            class="category_top d-flex justify-content-center align-items-center"
          >
            <i class="card-img ${el.calsses} "></i>
          </div>
          <div class="card-body">
            <h3 class="card-text title text-center">${el.name}</h3>
          </div>
        </div>`;
  categorieContainer.innerHTML = categorieStatment;
});
