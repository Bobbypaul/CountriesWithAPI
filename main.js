const main = document.getElementById("main");
const body = document.querySelector("body");
const input = document.querySelector(".input");
const searchButton = document.querySelector(".fa-search");
const options = document.querySelector(".select");
const aside = document.getElementById("aside");
const darkMode = document.querySelector(".dark-mode");
const LightMode = document.querySelector(".light-mode");
const html = document.querySelector("html");
const header = document.querySelector("header");
const back = document.querySelector(".back");

darkMode.addEventListener("click", function () {
  darkMode.style.display = "none";
  LightMode.style.display = "block";
  searchButton.style.backgroundColor = " hsl(207, 26%, 17%)";
  searchButton.style.color = "white";
  searchButton.style.boxShadow =
    "-2px 2px 0px hsl(200, 15%, 8%),0px -2px 0px hsl(200, 15%, 8%) ";

  options.style.backgroundColor = "hsl(207, 26%, 17%)";
  options.style.color = "white";
  options.style.boxShadow =
    "-2px 2px 2px hsl(200, 15%, 8%),2px -2px 2px hsl(200, 15%, 8%) ";

  header.style.boxShadow = " 0px 1px 4px black";

  header.style.backgroundColor = "hsl(207, 26%, 17%)";

  body.style.backgroundColor = " hsl(207, 26%, 17%)";
  html.style.color = "white";
  input.style.backgroundColor = " hsl(207, 26%, 17%)";
  input.style.color = "white";
  input.style.boxShadow =
    "2px -2px 0px hsl(200, 15%, 8%), 0px 2px 0px hsl(200, 15%, 8%)";
  aside.style.backgroundColor = "hsl(207, 26%, 17%)";
});

LightMode.addEventListener("click", function () {
  darkMode.style.display = "block";
  LightMode.style.display = "none";
  searchButton.style.backgroundColor = "white";
  searchButton.style.color = "black";
  searchButton.style.boxShadow =
    "0px -2px 0px rgb(233, 233, 233), -2px 2px 0px rgb(212, 212, 212) ";

  options.style.backgroundColor = "white";
  options.style.color = "black";
  options.style.boxShadow =
    "2px -2px 5px rgb(233, 233, 233), -2px 2px 5px rgb(212, 212, 212)";

  header.style.boxShadow = " 0px 1px 2px hsl(0, 0%, 88%)";

  header.style.backgroundColor = "white";

  body.style.backgroundColor = "hsl(0, 0%, 98%)";
  html.style.color = "black";
  input.style.backgroundColor = "white";
  input.style.color = "black";
  input.style.boxShadow =
    "2px -2px 0px rgb(233, 233, 233),0px 2px 0px rgb(212, 212, 212)";
  aside.style.backgroundColor = "hsl(0, 0%, 98%)";
});

aside.style.display = "none";

async function start() {
  const response = await fetch("https://restcountries.com/v3.1/name/em");
  const data = await response.json();
  append(data);
}
start();
async function normalInput(e) {
  if (e.key == "Enter") {
    main.innerHTML = "";
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${input.value}`
    );
    const data = await response.json();
    append(data);
  } else if (input.value == "") {
    start();
  }
}
async function normalsearch() {
  if (input.value != "") {
    main.innerHTML = "";
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${input.value}`
    );
    const data = await response.json();
    append(data);
  } else if (input.value == "") {
    start();
  }
}

function append(x) {
  main.innerHTML = "";
  x.map(function (element, index) {
    var card = document.createElement("div");
    var information = document.createElement("div");
    var flags = document.querySelectorAll(".flags");

    darkMode.addEventListener("click", function () {
      card.style.backgroundColor = "hsl(207, 26%, 17%)";
      card.style.boxShadow =
        "-2px 2px 2px hsl(200, 15%, 8%),2px -2px 2px hsl(200, 15%, 8%) ";
      Array.from(flags).map(function (element) {
        element.style.boxShadow =
          "-2px 0px 2px hsl(200, 15%, 8%),2px -2px 2px hsl(200, 15%, 8%) ";
      });
    });

    LightMode.addEventListener("click", function () {
      card.style.backgroundColor = "white";
      card.style.boxShadow =
        "2px -2px 5px rgb(233, 233, 233), -2px 2px 5px rgb(212, 212, 212)";
      Array.from(flags).map(function (element) {
        element.style.boxShadow =
          "2px 0px 5px rgb(233, 233, 233), -2px 2px 5px rgb(212, 212, 212)";
      });
    });

    if (header.style.backgroundColor == "rgb(32, 44, 55)") {
      card.style.backgroundColor = "hsl(207, 26%, 17%)";
      card.style.boxShadow =
        "-2px 2px 2px hsl(200, 15%, 8%),2px -2px 2px hsl(200, 15%, 8%) ";
      Array.from(flags).map(function (element) {
        element.style.boxShadow =
          "-2px 0px 2px hsl(200, 15%, 8%),2px -2px 2px hsl(200, 15%, 8%) ";
      });
    } else {
      card.style.backgroundColor = "white";
      card.style.boxShadow =
        "2px -2px 5px rgb(233, 233, 233), -2px 2px 5px rgb(212, 212, 212)";
      Array.from(flags).map(function (element) {
        element.style.boxShadow =
          "2px 0px 5px rgb(233, 233, 233), -2px 2px 5px rgb(212, 212, 212)";
      });
    }

    card.classList.add("country");
    information.classList.add("information");

    card.innerHTML = `
 <img src='${element.flags.png}' class="flags" alt="flags">
 `;
    information.innerHTML = `
<h2>${element.name.common}</h2>
 <p>Population:<span>${element.population.toLocaleString("en-US")}</span></p>
          <p>Region:<span>${element.region}</span></p>
          <p>Capital:<span>${element.capital}</span></p>
`;

    main.appendChild(card);
    card.appendChild(information);
    function theaside() {
      aside.style.display = "block";
      main.style.display = "none";
      aside.innerHTML = `
   <div class="back"><i class="fas fa-long-arrow-alt-left"></i>Back</div>
  
   <div class="pic-and-div-container">
     <img src="${element.flags.png}" class="second-flag" alt="flagss" />
    <div class="all-information-con">
      <div class="second-information-con">
          <div class="second-information">
            <h2>${element.name.official}</h2>
            <p>Native Name:<span>${element.name.common}</span></p>
            <p>Population:<span>${element.population.toLocaleString(
              "en-US"
            )}</span></p>
            <p>Region:<span>${element.region}</span></p>
            <p>Sub Region:<span>${element.subregion}</span></p>
            <p>Capital:<span>${element.capital}</span></p>
          </div>
          <div class="second-information">
            <p>Top Level Domain:<span>${element.tld}</span></p>
              <p>Time Zone:<span>${element.timezones}</span></p>
               <p>Demonyms:<span>${element.demonyms.eng.m}</span></p>
          </div>

          </div>
          </div>
        </div>
      </div>
   `;
      var back = document.querySelector(".back");

      if (header.style.backgroundColor == "rgb(32, 44, 55)") {
        back.style.backgroundColor = "rgb(32, 44, 55)";
        back.style.boxShadow =
          "-2px 2px 2px hsl(200, 15%, 8%),2px -2px 2px hsl(200, 15%, 8%) ";
      } else {
        back.style.backgroundColor = "white";
        back.style.boxShadow =
          "2px -2px 5px rgb(233, 233, 233), -2px 2px 5px rgb(212, 212, 212)";
      }
      darkMode.addEventListener("click", function () {
        back.style.backgroundColor = "rgb(32, 44, 55)";
        back.style.boxShadow =
          "-2px 2px 2px hsl(200, 15%, 8%),2px -2px 2px hsl(200, 15%, 8%) ";
      });
      LightMode.addEventListener("click", function () {
        back.style.backgroundColor = "white";
        back.style.boxShadow =
          "2px -2px 5px rgb(233, 233, 233), -2px 2px 5px rgb(212, 212, 212)";
      });

      back.addEventListener("click", function () {
        aside.style.display = "none";
        main.style.display = "grid";
      });

      var buttonCon = document.createElement("div");
      var buttonConPara = document.createElement("p");
      var allInfoCon = document.querySelector(".all-information-con");
      buttonConPara.innerText = "Border Country: ";
      buttonCon.classList.add("third-information");
      buttonCon.appendChild(buttonConPara);
      allInfoCon.appendChild(buttonCon);

      element.borders.map(function (border) {
        var button = document.createElement("button");
        button.classList.add("borderButton");

        button.innerHTML = border;
        buttonConPara.appendChild(button);
        button.addEventListener("click", async function () {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${button.innerText}`
          );
          const data = await response.json();
          append(data);
          data.map(function (element) {
            aside.style.display = "block";
            main.style.display = "none";
            aside.innerHTML = `
   <div class="back"><i class="fas fa-long-arrow-alt-left"></i>Back</div>
  
   <div class="pic-and-div-container">
     <img src="${element.flags.png}" class="second-flag" alt="flags" />
    <div class="all-information-con">
      <div class="second-information-con">
          <div class="second-information">
            <h2>${element.name.official}</h2>
            <p>Native Name:<span>${element.name.common}</span></p>
            <p>Population:<span>${element.population.toLocaleString(
              "en-US"
            )}</span></p>
            <p>Region:<span>${element.region}</span></p>
            <p>Sub Region:<span>${element.subregion}</span></p>
            <p>Capital:<span>${element.capital}</span></p>
          </div>
          <div class="second-information">
            <p>Top Level Domain:<span>${element.tld}</span></p>
            <p>Time Zone:<span>${element.timezones}</span></p>
             <p>Demonyms:<span>${element.demonyms.eng.m}</span></p>
          </div>

          </div>
          </div>
        </div>
      </div>
   `;
            var back = document.querySelector(".back");

            if (header.style.backgroundColor == "rgb(32, 44, 55)") {
              back.style.backgroundColor = "rgb(32, 44, 55)";
              back.style.boxShadow =
                "-2px 2px 2px hsl(200, 15%, 8%),2px -2px 2px hsl(200, 15%, 8%) ";
            } else {
              back.style.backgroundColor = "white";
              back.style.boxShadow =
                "2px -2px 5px rgb(233, 233, 233), -2px 2px 5px rgb(212, 212, 212)";
            }
            darkMode.addEventListener("click", function () {
              back.style.backgroundColor = "rgb(32, 44, 55)";
              back.style.boxShadow =
                "-2px 2px 2px hsl(200, 15%, 8%),2px -2px 2px hsl(200, 15%, 8%) ";
            });
            LightMode.addEventListener("click", function () {
              back.style.backgroundColor = "white";
              back.style.boxShadow =
                "2px -2px 5px rgb(233, 233, 233), -2px 2px 5px rgb(212, 212, 212)";
            });

            back.addEventListener("click", function () {
              aside.style.display = "none";
              main.style.display = "grid";
            });
          });
        });
      });
    }

    card.addEventListener("click", theaside);
  });
}

input.addEventListener("keyup", normalInput);
searchButton.addEventListener("click", normalsearch);

options.addEventListener("change", function () {
  regions(`https://restcountries.com/v3.1/region/${options.value}`, options);
});

async function regions(y, z) {
  if (z.value != "Filter By Region" && z.value != "All") {
    const response = await fetch(y);
    const data = await response.json();
    append(data);
  }
  if (z.value == "All") {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    append(data);
  }
}
