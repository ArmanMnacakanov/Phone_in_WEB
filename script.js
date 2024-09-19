const d = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Отображение времени с добавлением ведущего нуля для минут
document.querySelector(".block_time").textContent = `${d.getHours()}:${d
  .getMinutes()
  .toString()
  .padStart(2, "0")}`;

// Отображение даты
document.querySelector(".date").textContent = `${
  days[d.getDay()]
}, ${d.getDate()} ${months[d.getMonth()]}`;

var x = new Date()
document.querySelector('.time').innerHTML = `
${x.getHours()}:${x
  .getMinutes()
  .toString()
  .padStart(2, "0")}
`
//......................

const swipeBlock = document.querySelector(".Blockscreen");
let startX;
let distX;
const threshold = 100;
const restraint = 50;
let startTime;
let isDragging = false; // Для отслеживания состояния перетаскивания мыши

//..................
// Для touch-событий
swipeBlock.addEventListener("touchstart", function (e) {
  const touchobj = e.changedTouches[0];
  startX = touchobj.pageX;
  startTime = new Date().getTime();
  e.preventDefault();
});

swipeBlock.addEventListener("touchmove", function (e) {
  e.preventDefault();
});

swipeBlock.addEventListener("touchend", function (e) {
  const touchobj = e.changedTouches[0];
  distX = touchobj.pageX - startX;
  const elapsedTime = new Date().getTime() - startTime;

  if (Math.abs(touchobj.pageY - e.changedTouches[0].pageY) <= restraint) {
    if (distX > 0) {
      swipeBlock.style.transform = "translateY(-200px)";
      setTimeout(() => {
        swipeBlock.style.display = "none";
        document.querySelector(".Apps_container").style.display = "flex";
        document.querySelector(".Weadther_App").style.display = "flex";
      }, 300);
    }
  }
  e.preventDefault();
});

//..................
// Для mouse-событий
swipeBlock.addEventListener("mousedown", function (e) {
  startX = e.pageX;
  startTime = new Date().getTime();
  isDragging = true;
  e.preventDefault();
});

swipeBlock.addEventListener("mousemove", function (e) {
  if (!isDragging) return; // Проверяем, происходит ли перетаскивание
  e.preventDefault();
});

swipeBlock.addEventListener("mouseup", function (e) {
  if (!isDragging) return; // Действуем только если происходит перетаскивание

  distX = e.pageX - startX;
  const elapsedTime = new Date().getTime() - startTime;

  if (Math.abs(e.pageY - e.pageY) <= restraint) {
    if (distX > 0) {
      swipeBlock.style.transform = "translateY(-200px)";
      setTimeout(() => {
        swipeBlock.style.display = "none";
        document.querySelector(".Apps_container").style.display = "flex";
        document.querySelector(".Weadther_App").style.display = "flex";
      }, 300);
    }
  }
  isDragging = false; // Завершаем перетаскивание
  e.preventDefault();
});

swipeBlock.addEventListener("mouseleave", function () {
  isDragging = false; // Отменяем перетаскивание, если мышь покидает элемент
});

//..........................

//.....................
var count = 1;
document.getElementById("block_btn").addEventListener("click", () => {
  count++;
  if (count % 2 == 0) {
    document.querySelector(".fon").style.animation =
      "showblock 1s linear forwards";
    document.body.style.backgroundColor = "#cdcdcd";
    document.querySelector(".Phone_container").style.transform =
      "rotateY(0) rotateX(0) scale(1.2)";
    document.querySelector(".title1").style.opacity = "0";
    document.querySelector(".title1").style.left = "-20%";
    document.querySelector(".title2").style.opacity = "0";
    document.querySelector(".title2").style.right = "-20%";
  } else {
    // swipeBlock.style.opacity = '1';
    swipeBlock.style.display = "flex";
    swipeBlock.style.transform = "translateY(0)";
    document.querySelector(".fon").style.animation =
      "hideblock 1s linear forwards";
    document.body.style.backgroundColor = "#181818";
    document.querySelector(".Phone_container").style.transform =
      "rotateY(-30deg) rotateX(20deg) scale(1)";
    document.querySelector(".title1").style.opacity = "1";
    document.querySelector(".title1").style.left = "10%";
    document.querySelector(".title2").style.opacity = "1";
    document.querySelector(".title2").style.right = "5%";
  }
});

//....................
const Weadther_App = document.createElement("div");
Weadther_App.classList.add("Weadther_App");
Weadther_App.innerHTML = `
<div>
<div>
<span>sofa <i class="fa-solid fa-arrow-pointer"></i></span>
<h2>23<sup>o</sup></h2>
</div>
<div>
<i class="fa-solid fa-sun"></i>
<span>Sunny</span>
<span>H:24<sup>o</sup>L:9<sup>o</sup></span>
</div>
</div>
<div>
<table width = '100%'>
<tr>
<td>16</td>
<td>17</td>
<td>18</td>
<td>19</td>
<td>19.25</td>
<td>20</td>
</tr>
<tr>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-sun"></i></td>
<td><i class="fa-solid fa-moon"></i></td>
</tr>
<tr>
<td>24<sup>o</sup></td>
<td>24<sup>o</sup></td>
<td>23<sup>o</sup></td>
<td>21<sup>o</sup></td>
<td>21<sup>o</sup></td>
<td>19<sup>o</sup></td>
</tr>
</table>
</div>
`;
document.querySelector(".phone_box").append(Weadther_App);
//.................................

const Apps_Container = document.createElement("div");
Apps_Container.classList.add("Apps_container");
document.querySelector(".phone_box").append(Apps_Container);

const apps = [
  {
    id: "clock",
    img: "https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Clock-512.png",
    name: "Часы",
  },
  {
    id: "music",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png",
    name: "Музыка",
  },
  {
    id: "contact",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-contacts-icon-download-in-svg-png-gif-file-formats--contact-phone-book-ios-ios14-14-pack-user-interface-icons-2365230.png?f=webp&w=256",
    name: "Контакты",
  },
  {
    id: "",
    img: "https://i.pinimg.com/originals/8e/14/6e/8e146e9e28baeb9b59c6004ed7b1343b.png",
    name: "app store",
  },
  {
    id: "gallery",
    img: "https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Photos-512.png",
    name: "Галерея",
  },
  {
    id: "hamster_combat",
    img: "https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/443719973_370759719322013_866829438399529334_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2285d6&_nc_ohc=L77aYLXkgtwQ7kNvgGtJuBM&_nc_ht=scontent.fevn2-1.fna&_nc_gid=A5wtQAVQL0I6vW08ovpF_Wr&oh=00_AYAr_U6yiVD0n_z4ozIcDfibFPrTE8lYtjqt4axacsRHLw&oe=66EEE1A9",
    name: "Hamster_Combat",
  },
];
apps.map((e) => {
  const App_btn = document.createElement("button");
  App_btn.setAttribute("id", `${e.id}`);
  App_btn.style.backgroundImage = `url(${e.img})`;
  //..............
  const App_name = document.createElement("h3");
  App_name.textContent = e.name;
  App_btn.append(App_name);
  Apps_Container.append(App_btn);
});

//...........................

const Time_App = document.createElement("div");
Time_App.classList.add("Time_App");
//.....................
const Alarm_clock_container = document.createElement("div");
Alarm_clock_container.classList.add("Alarm_clock_container");
document.querySelector(".phone_box").append(Alarm_clock_container);
Alarm_clock_container.innerHTML = `
<h1>Будильник</h1>
<button id = "close"><i class="fa-solid fa-xmark"></i></button>
<ul>
<li>
<div>
<h1>06:20</h1>
<span>Ежедневно</span>
</div>
<div>
<input type= "radio" />
</div>
</li>
<li>
<div>
<h1>07:00</h1>
<span>По будням</span>
</div>
<div>
<input type= "radio" />
</div>
</li>
<li>
<div>
<h1>14:30</h1>
<span>Однократно</span>
</div>
<div>
<input type= "radio" />
</div>
</li>
</ul>

<nav>
<ul>
<li>
<button id = "alarm">
<img src = "https://cdn-icons-png.flaticon.com/512/860/860735.png"/>
Будильник
</button>
</li>
<li>
<button id = "time">
<img src = "https://icons.veryicon.com/png/o/miscellaneous/night-hunting/ios-clock-6.png"/>
Часы
</button>
</li>
<li>
<button id = "second">
<img src = "https://cdn-icons-png.flaticon.com/512/45/45443.png"/>
Секундомер
</button>
</li>
<li>
<button id = "sandtime">
<img  src = "https://cdn-icons-png.flaticon.com/512/4/4273.png"/>
Таймер
</button>
</li>
</ul>
</nav>
`;
//...........Open Clock App...............

document.getElementById("clock").addEventListener("click", () => {
  Alarm_clock_container.style.transform = "scale(1)";
  Alarm_clock_container.style.opacity = "1";
});

//........... Clock_Container...........
document.getElementById("time").addEventListener("click", showClockPage);

function showClockPage() {
  const Alarm_clock_container = document.querySelector(
    ".Alarm_clock_container"
  );

  function updateTime() {
    const x = new Date();
    Alarm_clock_container.querySelector(".Time").textContent = `${x
      .getHours()
      .toString()
      .padStart(2, "0")}:${x.getMinutes().toString().padStart(2, "0")}:${x
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
  }

  // Рендерим интерфейс для часов
  Alarm_clock_container.innerHTML = `
        <h1>Часы</h1>
        <button id="close"><i class="fa-solid fa-xmark"></i></button>
        <h1 class="Time"></h1>
        <nav>
            <ul>
                <li><button id="alarm"><img src="https://cdn-icons-png.flaticon.com/512/860/860735.png"/>Будильник</button></li>
                <li><button id="time"><img src="https://icons.veryicon.com/png/o/miscellaneous/night-hunting/ios-clock-6.png"/>Часы</button></li>
                <li><button id="second"><img src="https://cdn-icons-png.flaticon.com/512/45/45443.png"/>Секундомер</button></li>
                <li><button id="sandtime"><img src="https://cdn-icons-png.flaticon.com/512/4/4273.png"/>Таймер</button></li>
            </ul>
        </nav>
    `;

  // Назначаем обработчик для кнопки закрытия
  document.getElementById("close").addEventListener("click", () => {
    Alarm_clock_container.style.transform = "scale(0)";
    Alarm_clock_container.style.opacity = "0";
  });

  // Обновляем время каждую секунду
  updateTime();
  setInterval(updateTime, 1000);

  // Навешиваем обработчики для кнопок
  document.getElementById("alarm").addEventListener("click", showAlarmPage);
  document.getElementById("second").addEventListener("click", showTimerPage);
}

function showAlarmPage() {
  const Alarm_clock_container = document.querySelector(
    ".Alarm_clock_container"
  );

  Alarm_clock_container.innerHTML = `
        <h1>Будильник</h1>
        <button id="close"><i class="fa-solid fa-xmark"></i></button>
        <ul>
            <li>
                <div><h1>06:20</h1><span>Ежедневно</span></div>
                <div><input type="radio" /></div>
            </li>
            <li>
                <div><h1>07:00</h1><span>По будням</span></div>
                <div><input type="radio" /></div>
            </li>
            <li>
                <div><h1>14:30</h1><span>Однократно</span></div>
                <div><input type="radio" /></div>
            </li>
        </ul>
        <nav>
            <ul>
                <li><button id="alarm"><img src="https://cdn-icons-png.flaticon.com/512/860/860735.png"/>Будильник</button></li>
                <li><button id="time"><img src="https://icons.veryicon.com/png/o/miscellaneous/night-hunting/ios-clock-6.png"/>Часы</button></li>
                <li><button id="second"><img src="https://cdn-icons-png.flaticon.com/512/45/45443.png"/>Секундомер</button></li>
                <li><button id="sandtime"><img src="https://cdn-icons-png.flaticon.com/512/4/4273.png"/>Таймер</button></li>
            </ul>
        </nav>
    `;

  // Назначаем обработчик для кнопки закрытия
  document.getElementById("close").addEventListener("click", () => {
    Alarm_clock_container.style.transform = "scale(0)";
    Alarm_clock_container.style.opacity = "0";
  });

  // Навешиваем обработчики для кнопок
  document.getElementById("time").addEventListener("click", showClockPage);
  document.getElementById("second").addEventListener("click", showTimerPage);
}
function showTimerPage() {
  const Alarm_clock_container = document.querySelector(
    ".Alarm_clock_container"
  );

  Alarm_clock_container.innerHTML = `
        <h1>Секундомер</h1>
        <button id="close"><i class="fa-solid fa-xmark"></i></button>
        
       <div class = "second_box">
        <h1 id = "timeDisplay">0</h1>
        <div>
            <button id = "start"><i class="fa-solid fa-play"></i></button>
            <button id = "stop"><i class="fa-solid fa-stop"></i></button>
             <button id="reset"><i class="fa-solid fa-undo"></i></button>
        </div>
       </div>

        <nav>
            <ul>
                <li><button id="alarm"><img src="https://cdn-icons-png.flaticon.com/512/860/860735.png"/>Будильник</button></li>
                <li><button id="time"><img src="https://icons.veryicon.com/png/o/miscellaneous/night-hunting/ios-clock-6.png"/>Часы</button></li>
                <li><button id="second"><img src="https://cdn-icons-png.flaticon.com/512/45/45443.png"/>Секундомер</button></li>
                <li><button id="sandtime"><img src="https://cdn-icons-png.flaticon.com/512/4/4273.png"/>Таймер</button></li>
            </ul>
        </nav>
    `;
  let startTime;
  let elapsedTime = 0;
  let timerInterval;

  // Форматирует время в виде 00:00.00
  function formatTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  }

  // Обновляет отображаемое время
  function updateTime() {
    const currentTime = Date.now() - startTime + elapsedTime;
    document.getElementById("timeDisplay").textContent =
      formatTime(currentTime);
  }

  // Старт секундомера
  document.getElementById("start").addEventListener("click", () => {
    if (!timerInterval) {
      startTime = Date.now();
      timerInterval = setInterval(updateTime, 10);
    }
  });

  // Стоп секундомера
  document.getElementById("stop").addEventListener("click", () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      elapsedTime += Date.now() - startTime;
      timerInterval = null;
    }
  });

  // Сброс секундомера
  document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("timeDisplay").textContent = "00:00.00";
    timerInterval = null;
  });

  // Назначаем обработчик для кнопки закрытия
  document.getElementById("close").addEventListener("click", () => {
    Alarm_clock_container.style.transform = "scale(0)";
    Alarm_clock_container.style.opacity = "0";
  });

  // Навешиваем обработчики для кнопок
  document.getElementById("time").addEventListener("click", showClockPage);
  document.getElementById("alarm").addEventListener("click", showAlarmPage);
}
// Запуск с первоначальной страницы
showClockPage();

//............Alarm Container......................

//................. WELLCOME TO HAMSTER ......................//
//.......................................................
//.......................................................
//........................................................

//..............FULLSCREEN FUNCTION.........................

function requestFullscreen() {}
requestFullscreen();

//.........................HAMSTER CONTAINER..................................................

const Hamster_Container = document.createElement("section");
Hamster_Container.setAttribute("class", "Hamster_Container");
document.querySelector(".phone_box").append(Hamster_Container);
//..............................
const Hamster_Registration_Box = document.createElement("div");
Hamster_Registration_Box.setAttribute("class", "Hamster_Registration_Box");
Hamster_Registration_Box.innerHTML = `
<img src = "./assets/hamster-coin.png"/>
<h1>Добро Пожаловать!</h1>
<input type= "text" placeholder="Введите Имя" id = "name"/>
<input type = "text" placeholder = "Введите Фамилия" id = "lastname" />
<button id = "registration_Btn">Продолжить</button>
`;

//......................................
const Hamster_Close_Box = document.createElement("div");
Hamster_Close_Box.setAttribute("class", "Hamster_Close_Box");
Hamster_Close_Box.innerHTML = `
<div><button class = "hamster_close_btn"><i class="fa-solid fa-xmark"></i></button> <h1>hamster combat</h1> </div><button><i class="fa-solid fa-ellipsis-vertical"></i></button>
`;
//....................................
const User_stock_exchange_box = document.createElement("div");
User_stock_exchange_box.setAttribute("class", "User_Stock_Exchange_Box");
User_stock_exchange_box.innerHTML = `
<div><i class="fa-regular fa-user"></i> <h3>Arman Mnacakanov (CEO)</h3></div>  <button><img src = "./assets/binance.png"/> Binance</button>
`;

//............................
const Hamster_Box = document.createElement("div");
Hamster_Box.setAttribute("class", "Hamster_Box");
var profit = 1;
var Hour_Mine_Coin = 0;
const Hour_Coin = () => {
  const Hour_Coin_Box = document.createElement("div");
  Hour_Coin_Box.setAttribute("class", "Hour_Coin_Box");
  Hour_Coin_Box.innerHTML = `
<div><span>прибыль за тап</span> <span class = "Profit"><img src="./assets/hamster-coin.png"/>+${profit}</span></div>
<div><span>прибыль для апа</span> <span>10K</span></div>
<div><span>прибыль в час</span> <span class = "Hour_Mine_Coin"><img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}K</span></div>
`;
  return Hour_Coin_Box;
};

//..................COIN COUNT......................................

const Hamster_Coin_Count = document.createElement("div");
Hamster_Coin_Count.setAttribute("class", "Hamster_Coin_Count");
var CoinCount = 0;
//.....................................................
Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
const Hamster_Coin_Count2 = document.createElement("div");
Hamster_Coin_Count2.setAttribute("class", "Hamster_Coin_Count");
//.....................................................
Hamster_Coin_Count2.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
//...........................................
const Hamster_Level_Box = document.createElement("div");
Hamster_Level_Box.setAttribute("class", "Hamster_Level_Box");
var levelCount = 5000;
var LevelValue = 1;
var levelname = "Bronze";
Hamster_Level_Box.innerHTML = `
<div><span class = "levelname">${levelname} <i class="fa-solid fa-angle-right"></i></span> <span class = 'level'><span>level</span> ${LevelValue}/10</span></div>
<div><progress value="0" max="${levelCount}"></progress></div>
`;
var level = Hamster_Level_Box.querySelector("progress");

//..................HAMSTER BUTTON ..................
const Hamster = document.createElement("button");
Hamster.innerHTML = ` <img src="./assets/bronze.png" alt="Hamster">`;
Hamster.setAttribute("class", "Hamster");
var energyCount = 1500;
let energyInterval;
Hamster.addEventListener("click", () => {
  energy -= profit;
  if (energy >= 0) {
    CoinCount += profit;
    Boost_Box.querySelector(
      "h1"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}`;
    Hamster_Coin_Count2.innerHTML = `
    <img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
    `;
    level.value = Math.min(level.value + profit, level.max);
    //........................................
    if (level.value >= level.max) {
      alert("Новый Уровень!!!!");
      LevelValue += 1;
      Hamster_Level_Box.querySelector(
        ".level"
      ).innerHTML = `<span>level</span> ${LevelValue}/10`;
      level.value = 0;
      level.max = levelCount += 20000;
      energyCount += 500;
      energy += 500;
      profit += 1;
      Hamster_Energy_Boost_Box.querySelector(
        "button"
      ).innerHTML = `<i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}`;
      profit += 1;
      //................................
      const levelNames = [
        "Bronze",
        "Silver",
        "Gold",
        "Platinum",
        "Diamond",
        "Epic",
        "Legendary",
        "Master",
        "Grandmaster",
        "Lord",
      ];
      if (LevelValue <= 10) {
        levelname = levelNames[LevelValue - 1];
        Hamster_Level_Box.querySelector(
          ".levelname"
        ).innerHTML = `${levelname} <i class="fa-solid fa-angle-right"></i>`;
        Hamster.innerHTML = `<img src="./assets/${levelname.toLowerCase()}.png" alt="Hamster">`;
      }
    }

    //........................................
    const feedbackSpan = document.createElement("span");
    feedbackSpan.textContent = `+${profit}`;
    feedbackSpan.style.position = "absolute";
    feedbackSpan.style.animation = "show .5s ease forwards";
    Hamster.append(feedbackSpan);
    //...................................
    setTimeout(() => {
      feedbackSpan.style.animation = "";
      feedbackSpan.remove();
    }, 1000);
    Hamster_Coin_Count.querySelector("span").textContent = CoinCount;
    Hamster_Energy_Boost_Box.querySelector("span").textContent = energy;
  } else {
    alert("Недостаточно энергии!");
    Hamster.disabled = true;
    const energyInterval = setInterval(() => {
      energy += 3;
      Hamster_Energy_Boost_Box.querySelector(
        ".energy"
      ).innerHTML = `<i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}`;
      //.................................
      if (energy >= energyCount) {
        clearInterval(energyInterval);
        Hamster.disabled = false;
      }
    }, 1000);
  }
});

//................ENERGY BOX....................
const Hamster_Energy_Boost_Box = document.createElement("div");
Hamster_Energy_Boost_Box.setAttribute("class", "Hamster_Energy_Boost_Box");
var energy = 1500;
//................................
Hamster_Energy_Boost_Box.innerHTML = `
<button class = "energy"><i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}</button>
<button id = "Boost"><img src = "./assets/boost.png"/> boost</button>
`;
//..................................
const Boost_Box = document.createElement("div");
Boost_Box.style.display = "none";
Boost_Box.setAttribute("class", "Boost_Box");
Boost_Box.innerHTML = `
<div>
<button id="Boost_Box_Close_Btn"><i class="fa-solid fa-arrow-left"></i></button>
<div><span>Ваш Баланс</span></div>
<div><h1><img src = "./assets/hamster-coin.png"/>${CoinCount}</h1></div>
</div>

<div>
<div><span>Усилители</span></div>
<div><img src ="./assets/tap.png"/><button id ="multitap"><div><span>multitap</span><span class = "TapPrice"><img src ="./assets/hamster-coin.png"/>${TapPrice}</span></div></button><i class="fa-solid fa-angle-right"></i></div>
<div><img src ="./assets/energy.png"/><button id ="energy"><div><span>energy limit</span><span class = "EnergyPrice"><img src ="./assets/hamster-coin.png"/>${EnergyPrice}</span></div></button><i class="fa-solid fa-angle-right"></i></div>
</div>
`;
Hamster_Container.append(Boost_Box);
//.....................................
document.getElementById("Boost_Box_Close_Btn").addEventListener("click", () => {
  Boost_Box.style.display = "none";
});

//..............MENU LIST................................
const createList = () => {
  const List = document.createElement("div");
  List.setAttribute("class", "List");
  List.innerHTML = `
    <ul>
      <li><button id="Exchange"><img src="./assets/binance.png"/>exchange</button></li>
      <li><button id="Mine"><img src="./assets/mine.png"/>mine</button></li>
      <li><button><i class="fa-solid fa-users"></i> friends</button></li>
      <li><button><i class="fa-solid fa-coins"></i> earn</button></li>
      <li><button><img src="./assets/hamster-coin.png"/>airdrop</button></li>
    </ul>
  `;
  return List;
};
//...................................
const Mine_Box = document.createElement("div");
Mine_Box.setAttribute("class", "Mine_Box");
Mine_Box.style.display = "none";

Hamster_Container.append(
  Hamster_Registration_Box,
  Hamster_Close_Box,
  User_stock_exchange_box,
  Hamster_Box,
  Mine_Box
);
const Hour_Coin1 = Hour_Coin();
const Hour_Coin2 = Hour_Coin();
//..............
const List1 = createList();
const List2 = createList();
Hamster_Box.append(
  Hour_Coin1,
  Hamster_Coin_Count,
  Hamster_Level_Box,
  Hamster,
  Hamster_Energy_Boost_Box,
  List1
);

//.................... MINE CARD DATA ...........................//
const Mine_Crad_Data = [
  {
    category: "Markets",
    img: "./assets/cards/fan-tokens.png",
    name: "fan-tokens",
    price: 400,
    hour: 100,
    price_info: "прибыль в час 100",
    description:
      "цифравые активы для экслюзивных впечетлений и привилегий фанатов",
  },
  {
    category: "Markets",
    img: "./assets/cards/staking.png",
    name: "staking",
    hour: 150,
    price: 350,
    price_info: "прибыль в час 150",
    description:
      "блок криптовалюты для получения вознаграждений и поддержки сетевой безопасности",
  },
  {
    category: "Markets",
    img: "./assets/cards/btc-pairs.png",
    name: "BTC pairs",
    hour: 350,
    price: 520,
    price_info: "прибыль в час 350",
    description: "тарговые парыб включающие биткойн и другую криптовалюту",
  },
  {
    category: "Markets",
    img: "./assets/cards/mergin-trading-x100.png",
    name: "mergin trading x100",
    hour: 850,
    price: 1520,
    price_info: "прибыль в час 850",
    description:
      "Использование заемных средсть для торговли активами со стократным кредитным плечом",
  },
  {
    category: "Markets",
    img: "./assets/cards/dao.png",
    name: "dao",
    hour: 350,
    price: 1520,
    price_info: "прибыль в час 350",
    description:
      "Группа, основания на блокчейне, с децентрализованным принятием решений  и упровлением",
  },
  {
    category: "PR&Team",
    img: "./assets/cards/ceo.png",
    name: "ceo",
    hour: 350,
    price: 650,
    price_info: "прибыль в час 350",
    description: "улучшите свои лидерские и управленческие способности",
  },
  {
    category: "PR&Team",
    img: "./assets/cards/bisdev-team.png",
    name: "BisDev team",
    hour: 350,
    price: 700,
    price_info: "прибыль в час 350",
    description: "соберите команду для расширения возможностей бизнеса",
  },
  {
    category: "PR&Team",
    img: "./assets/cards/hamstergram.png",
    name: "HamsterGram",
    hour: 450,
    price: 680,
    price_info: "прибыль в час 450",
    description: "увеличтье присутствие и вовлечность вашей биржы в instagram",
  },
  {
    category: "PR&Team",
    img: "./assets/cards/compliance-officer.png",
    name: ".Compliance offer",
    hour: 750,
    price: 1200,
    price_info: "прибыль в час 750",
    description: "",
  },
  {
    category: "Legal",
    img: "./assets/cards/kyc.png",
    name: "KYC",
    hour: 50,
    price: 850,
    price_info: "прибыль в час 50",
    description:
      "внедрите проверку << знай своего клиента >> для индентификации пользователей",
  },
  {
    category: "Legal",
    img: "./assets/cards/kyb.png",
    name: "KYB",
    hour: 150,
    price: 600,
    price_info: "прибыль в час 150",
    description:
      "внедрите проверку << знай свой бизнес >> для индентификации компаний",
  },
  {
    category: "Legal",
    img: "assets/cards/sec-transparancy.png",
    name: "SEC transparancy",
    hour: 350,
    price: 630,
    price_info: "прибыль в час 350",
    description: "работайте в SEC для более четкой делевой практики",
  },
  {
    category: "Legal",
    img: "./assets/cards/licence-japan.png",
    name: "Licence Japan",
    hour: 650,
    price: 630,
    price_info: "прибыль в час 650",
    description: "",
  },
  {
    category: "Legal",
    img: "./assets/cards/licence-australia.png",
    name: "Licence australia",
    hour: 750,
    price: 930,
    price_info: "прибыль в час 750",
    description: "",
  },
  {
    category: "Legal",
    img: "./assets/cards/licence-asia.png",
    name: "Licence Asia",
    hour: 650,
    price: 730,
    price_info: "прибыль в час 650",
    description: "",
  },
  {
    category: "Specials",
    img: "./assets/cards/hamster-kombat-merch.png",
    name: "Мерч Hamster Combat",
    hour: 1200,
    price: 830,
    price_info: "прибыль в час 1200K",
    description:
      "встречайте нашу лимитированную коллекцию одежды Hamster Combat. не усустите шанс стать частью чего-то уникального",
  },
  {
    category: "Specials",
    img: "./assets/cards/bitcoin-pizza.png",
    name: "Биткойн, пицца или Хомяки",
    hour: 830,
    price: 1350,
    price_info: "прибыль в час 830K",
    description:
      "не упустите новые возможностию․ они прямо вокруг вас․биткойн,ноткойн,хомяки․․․",
  },
  {
    category: "Specials",
    img: "./assets/cards/apps-center-listing.png",
    name: "Еулеграм = массовое роспространение",
    hour: 1500,
    price: 950,
    price_info: "прибыль в час 1500K",
    description:
      "этот маленький шаг может стать началом чего-то действительно грандиозного",
  },
  {
    category: "Specials",
    img: "./assets/cards/bogdanoff-is-calling.png",
    name: "Мощь Bogdanoff работает на тебя",
    hour: 1700,
    price: 1600,
    price_info: "прибыль в час 1700K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
  {
    category: "Specials",
    img: "./assets/cards/ton-hamster-kombat-success.png",
    name: "Ton + Hamster Kombat = Success",
    hour: 1450,
    price: 3600,
    price_info: "прибыль в час 1450K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
  {
    category: "Specials",
    img: "./assets/cards/usdt-on-ton.png",
    name: "Usdt on Ton",
    hour: 1300,
    price: 3600,
    price_info: "прибыль в час 1300K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
  {
    category: "Specials",
    img: "./assets/cards/long-squeeze.png",
    name: "Long Squeeze",
    hour: 1820,
    price: 6650,
    price_info: "прибыль в час 1820K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
  {
    category: "Specials",
    img: "./assets/cards/consensus-piranha-pas.png",
    name: "Consensus Piranha Pas",
    hour: 2250,
    price: 8650,
    price_info: "прибыль в час 2250K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
];
const Mine_Card_Filter_Box = document.createElement("div");
Mine_Card_Filter_Box.setAttribute("class", "Mine_Card_Filter_Box");
const Category = ["Markets", "PR&Team", "Legal", "Specials"];
const activateButton = (button) => {
  const buttons = document.querySelectorAll(".Mine_Card_Filter_Box button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
};
Category.map((e) => {
  const Category_Btn = document.createElement("button");
  Category_Btn.innerText = e;
  Category_Btn.addEventListener("click", () => {
    filterCards(e);
    activateButton(Category_Btn);
  });

  Mine_Card_Filter_Box.append(Category_Btn);
});
const initialButton = Mine_Card_Filter_Box.querySelector("button");
if (initialButton) {
  activateButton(initialButton);
}
//.................................

const Cards_Box = document.createElement("div");
Cards_Box.setAttribute("class", "Cards_Box");

//.............................
function createCardElement(card) {
  const Card = document.createElement("div");
  Card.classList.add("Card");
  if (card.category === "Specials") {
    Card.classList.remove("Card");
    Card.classList.add("special-card");
  }
  Card.innerHTML = `
  <div>
  <img src = "${card.img}"/>
  <div>
  <h5>${card.name}</h5>
  <span>${card.price_info}</span>
  </div>
  </div>
  <div>
  <h5>lvl</h5>
  <span class="card_price"><img src = "assets/hamster-coin.png"/>${card.price}</span>
  </div>
  `;
  return Card;
}

//.....................CARDS FILTER..................................

function filterCards(category) {
  Cards_Box.innerHTML = ""; // очищаем контейнер для карточек
  const filteredCards = Mine_Crad_Data.filter(
    (card) => card.category === category
  );
  filteredCards.forEach((card) => {
    const cardElement = createCardElement(card);
    Cards_Box.append(cardElement);
    cardElement.addEventListener("click", () => {
      if (CoinCount >= card.price) {
        Hour_Mine_Coin += card.hour;
        Hour_Coin1.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        Hour_Coin2.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        // alert('miacav')
        Hour_Coin1.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        Hour_Coin2.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        CoinCount -= card.price;
        level.value = Math.min((level.value -= card.price), level.max);
        Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
        Hamster_Coin_Count2.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
        card.price += 500;
        cardElement.querySelector(
          ".card_price"
        ).innerHTML = `<img src = "assets/hamster-coin.png"/>${card.price}`;
      } else {
        alert("Недостаточно Баланса!!!");
      }
    });
  });
}
filterCards(Category[0]);

//........................................

Mine_Box.append(
  Hour_Coin2,
  Hamster_Coin_Count2,
  Mine_Card_Filter_Box,
  Cards_Box,
  List2
);
List1.querySelector("#Exchange").style.backgroundColor = "rgb(19, 19, 19)";
//..............................
const addEventListenersToList = (list) => {
  list.querySelector("#Exchange").addEventListener("click", () => {
    // document.getElementById('Mine').style.backgroundColor = 'transparent';
    List1.querySelector("#Exchange").style.backgroundColor = "rgb(19, 19, 19)";
    Hamster_Box.style.display = "flex";
    Mine_Box.style.display = "none";
  });
  list.querySelector("#Mine").addEventListener("click", () => {
    document.getElementById("Exchange").style.backgroundColor = "transparent";
    List2.querySelector("#Mine").style.backgroundColor = "rgb(19, 19, 19)";
    Hamster_Box.style.display = "none";
    Mine_Box.style.display = "flex";
  });
};
addEventListenersToList(List1);
addEventListenersToList(List2);

//..............REGISTRATION.........................

Hamster_Box.style.display = "none";
document.getElementById("registration_Btn").addEventListener("click", () => {
  const nameValue = document.getElementById("name").value;
  const nameValueinput = document.getElementById("name");
  const lastnameValue = document.getElementById("lastname").value;
  const lastnameValueinput = document.getElementById("lastname");
  if (nameValue == "" || lastnameValue == "") {
    alert("Заполните поле!");
    nameValueinput.style.borderColor = "red";
    lastnameValueinput.style.borderColor = "red";
    nameValueinput.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.56)";
    lastnameValueinput.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.56)";
    setTimeout(() => {
      nameValueinput.style.borderColor = "transparent";
      lastnameValueinput.style.borderColor = "transparent";
      nameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
      lastnameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
    }, 1000);
    nameValueinput.addEventListener("focus", () => {
      nameValueinput.style.borderColor = "rgb(251, 255, 0)";
      nameValueinput.style.boxShadow = "0 0 20px rgba(255, 166, 0, 0.56)";
    });
    lastnameValueinput.addEventListener("focus", () => {
      lastnameValueinput.style.borderColor = "rgb(251, 255, 0)";
      lastnameValueinput.style.boxShadow = "0 0 20px rgba(255, 166, 0, 0.56)";
    });
    nameValueinput.addEventListener("blur", () => {
      nameValueinput.style.borderColor = "transparent";
      nameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
    });
    lastnameValueinput.addEventListener("blur", () => {
      lastnameValueinput.style.borderColor = "transparent";
      lastnameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
    });
  } else {
    Hamster_Registration_Box.style.display = "none";
    const Bonus_Box = document.createElement("div");
    Bonus_Box.setAttribute("class", "Bonus_Box");
    Bonus_Box.innerHTML = `
    <img src = "./assets/hamster-coin.png"/>
    <h2>Спасибо за регистрацию</h2>
    <span>Мы с радостью дарим вам бонус на <span><img src = "./assets/hamster-coin.png"/>500 монет</span></span>
    <h3>приятного майнинга!</h3>
    <button id = "contunione_btn">продолжыть</button>
    `;
    User_stock_exchange_box.innerHTML = `
<div><img src = "./assets/icon.png"/> <h3>${nameValue} ${lastnameValue} (CEO)</h3></div>  <button><img src = "./assets/binance.png"/> Binance</button>
`;
    Hamster_Container.append(Bonus_Box);
    //........................................
    document.getElementById("contunione_btn").addEventListener("click", () => {
      Bonus_Box.style.display = "none";
      Hamster_Box.style.display = "flex";
      CoinCount = 500;
      Boost_Box.querySelector(
        "h1"
      ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}</h1>`;
      Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
      Hamster_Coin_Count2.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
      level.value = Math.min(level.value + CoinCount, level.max);
      function hourlyTask() {
        // CoinCount += Hour_Mine_Coin;
        Hour_Coin1.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        Hour_Coin2.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
      }
      const hourlyInterval = setInterval(hourlyTask, 3600000);
      setTimeout(() => {
        clearInterval(hourlyInterval);
        let ClaimCoin = 0;
        if (ClaimCoin == 0) {
          alert("Прибыль в час пока не доступен!");
        } else {
          const Claim_Bonus_Box = document.createElement("div");
          Claim_Bonus_Box.setAttribute("class", "Claim_Boxus_Box");
          Claim_Bonus_Box.innerHTML = `
    <img src = "./assets/hamster-coin.png"/>
    <h2>Заберите свой прибыль!</h2>
    <span><img src = "./assets/hamster-coin.png"/>${ClaimCoin}</span>
    <button class = "claim_btn">Получить</button>
    `;
          Hamster_Box.append(Claim_Bonus_Box);
          Claim_Bonus_Box.querySelector(".claim_btn").addEventListener(
            "click",
            () => {
              CoinCount += ClaimCoin;
              level.value = Math.min(level.value + CoinCount, level.max);
              Hamster_Coin_Count.innerHTML = `
    <img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
    `;
              Hamster_Coin_Count2.innerHTML = `
    <img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
    `;
              Claim_Bonus_Box.style.display = "none";
            }
          );
          ClaimCoin += Hour_Mine_Coin;
        }
      }, 300);
    });
  }
});

//...........MULTITAP LEVEL..................

const MultitapLevel_Box = document.createElement("div");
MultitapLevel_Box.style.display = "none";
MultitapLevel_Box.setAttribute("class", "MultitapLevel_Box");
//.................ENERGY LEVEL..............................
const EnergyLevel_Box = document.createElement("div");
EnergyLevel_Box.style.display = "none";
EnergyLevel_Box.setAttribute("class", "EnergyLevel_Box");
var TapPrice = 1000;
var EnergyPrice = 1000;
Boost_Box.querySelector(
  ".TapPrice"
).innerHTML = `<img src ="./assets/hamster-coin.png"/>${TapPrice}K`;
Boost_Box.querySelector(
  ".EnergyPrice"
).innerHTML = `<img src ="./assets/hamster-coin.png"/>${EnergyPrice}K`;
//............................................
MultitapLevel_Box.innerHTML = `
    <button class ="close_btn"><i class="fa-solid fa-xmark"></i></button>
    <img src = "./assets/tap.png"/>
    <h1>multitap</h1>
    <p>увеличивеат количество монет которое вы можете заработать за одно нажатие</p>
    <h3>+1 монет за тап для ${LevelValue} уровня</h3>
    <h2><img src = "./assets/hamster-coin.png"/> ${TapPrice}</h2>
    <button id ="Tap_Buy_Btn">получить</button>
    `;
EnergyLevel_Box.innerHTML = `
    <button class ="close_btn2"><i class="fa-solid fa-xmark"></i></button>
    <img src = "./assets/energy.png"/>
    <h1>energy limit</h1>
    <p>увеличивеат количество энерии</p>
    <h3>+500 энергии для 1 уровня</h3>
    <h2><img src = "./assets/hamster-coin.png"/> ${EnergyPrice}</h2>
    <button id ="Energy_Buy_Btn">получить</button>
    `;
document
  .querySelector(".Hamster_Container")
  .append(MultitapLevel_Box, EnergyLevel_Box);
//...................................
document.getElementById("Boost").addEventListener("click", () => {
  Boost_Box.style.display = "flex";
});

//............TAP BUY BTN.................
document.getElementById("Tap_Buy_Btn").addEventListener("click", () => {
  if (CoinCount >= TapPrice) {
    profit += 1;
    Hour_Coin1.querySelector(
      ".Profit"
    ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${profit}`;
    Hour_Coin2.querySelector(
      ".Profit"
    ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${profit}`;
    CoinCount -= TapPrice;
    Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
    MultitapLevel_Box.style.display = "none";
    TapPrice += 9000;
    Boost_Box.querySelector(
      ".TapPrice"
    ).innerHTML = `<img src ="./assets/hamster-coin.png"/>${TapPrice}K`;
    MultitapLevel_Box.querySelector(
      "h2"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/> ${TapPrice}`;
    Boost_Box.querySelector(
      "h1"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}</h1>`;
    level.value = Math.min(level.value - TapPrice, level.max);
  } else {
    alert("Недостаточно Баланса!!!");
  }
});

//............ENERGY BY BTN...................
document.getElementById("Energy_Buy_Btn").addEventListener("click", () => {
  if (CoinCount >= EnergyPrice) {
    energy += 500;
    energyCount += 500;
    CoinCount -= EnergyPrice;
    EnergyPrice += 9000;
    EnergyLevel_Box.style.display = "none";
    Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
    Boost_Box.querySelector(
      ".EnergyPrice"
    ).innerHTML = `<img src ="./assets/hamster-coin.png"/>${EnergyPrice}K`;
    EnergyLevel_Box.querySelector(
      "h2"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/> ${EnergyPrice}`;
    Hamster_Energy_Boost_Box.querySelector(
      ".energy"
    ).innerHTML = `<i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}`;
    Boost_Box.querySelector(
      "h1"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}</h1>`;
    level.value = Math.min(level.value - EnergyPrice, level.max);
  } else {
    alert("Недостаточно Баланса!!!");
  }
});
document.getElementById("multitap").addEventListener("click", () => {
  MultitapLevel_Box.style.display = "flex";
  document.querySelector(".close_btn").addEventListener("click", () => {
    MultitapLevel_Box.style.display = "none";
  });
});
document.getElementById("energy").addEventListener("click", () => {
  EnergyLevel_Box.style.display = "flex";
  document.querySelector(".close_btn2").addEventListener("click", () => {
    EnergyLevel_Box.style.display = "none";
  });
});
//.................................

document.getElementById("hamster_combat").addEventListener("click", () => {
  Hamster_Container.style.opacity = "1";
  Hamster_Container.style.transform = "scale(1)";
});

document.querySelector(".hamster_close_btn").addEventListener("click", () => {
  Hamster_Container.style.opacity = "0";
  Hamster_Container.style.transform = "scale(0)";
});

//................................

const Music_App = document.createElement("div");
Music_App.classList.add("Music_App");
document.querySelector(".phone_box").append(Music_App);
const music_data = [
  {
    name: "Jakone Дорога Дольняя",
    src: "./music/1.mp3",
    img: "https://th.bing.com/th/id/OIP.yr-Ktb23kkhu_t5SyJd41gHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Miyagi Fire man",
    src: "./music/2.mp3",
    img: "https://th.bing.com/th/id/OIP.GFie7Mt6yQrAmBR1AkSShAHaEK?rs=1&pid=ImgDetMain",
  },
  {
    name: "Miyagi Hustle",
    src: "./music/3.mp3",
    img: "https://th.bing.com/th/id/R.f73db693aa9b5f3843b4c7998668110b?rik=NZW%2bhIAkcYumGQ&pid=ImgRaw&r=0",
  },
];
Music_App.innerHTML = `
<h1>Музыка</h1>
<button id = "close_music_app"><i class="fa-solid fa-xmark"></i></button>
<ul class = "music_list">
</ul>
`;
document.getElementById("close_music_app").addEventListener("click", () => {
  Music_App.style.opacity = "0";
  Music_App.style.transform = "scale(0)";
});
//.....................
document.getElementById("music").addEventListener("click", () => {
  Music_App.style.opacity = "1";
  Music_App.style.transform = "scale(1)";
});
let currentAudio = null;
//.......................
music_data.forEach((track, index) => {
  const Musicitem = document.createElement("li");
  Musicitem.innerHTML = `
    <div>
      <img src="${track.img}" />
      <span>${track.name}</span>
    </div>
    <audio id="audio_${index}" src="${track.src}" controls></audio>
    <button id="play_${index}"><i class="fa-solid fa-play"></i></button>
  `;
  document.querySelector(".music_list").append(Musicitem);

  document.getElementById(`play_${index}`).addEventListener('click', () => {
    const audioElement = document.getElementById(`audio_${index}`);
    const playButton = document.getElementById(`play_${index}`);

    // Если есть другой играющий аудиоэлемент, остановим его
    if (currentAudio && currentAudio !== audioElement) {
      currentAudio.pause();
      currentAudio.nextElementSibling.innerHTML = '<i class="fa-solid fa-play"></i>';
    }

    // Переключаем воспроизведение
    if (audioElement.paused) {
      audioElement.play();
      playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
      currentAudio = audioElement; // Обновляем текущий аудиоэлемент
    } else {
      audioElement.pause();
      playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });
});
//............................
const Contact_app = document.createElement("div");
Contact_app.classList.add("Contact_app");
document.querySelector(".phone_box").append(Contact_app);
Contact_app.innerHTML = `
<h1>Контакты</h1>
<button id = "close_Contact_app"><i class="fa-solid fa-xmark"></i></button>
<ul class = "contact_list"></ul>
`;
const contact_data = [
  {
    name: "Grisha",
    number: "99582940",
  },
  {
    name: "Narek",
    number: "77383440",
  },
  {
    name: "Hovhannes",
    number: "77058549",
  }
];
//.............
contact_data.map((e) => {
  const number_item = document.createElement("li");
  number_item.innerHTML = `<span>${e.name}</span> <a href = "tel:+374${e.number}"><i class="fa-solid fa-phone"></i></a>`;
  document.querySelector(".contact_list").append(number_item);
});
//........................
document.getElementById("contact").addEventListener("click", () => {
  Contact_app.style.opacity = "1";
  Contact_app.style.transform = "scale(1)";
});
document.getElementById("close_Contact_app").addEventListener("click", () => {
  Contact_app.style.opacity = "0";
  Contact_app.style.transform = "scale(0)";
});

//..........................
const Gallery_App = document.createElement("div");
Gallery_App.classList.add("Gallery_app");
document.querySelector(".phone_box").append(Gallery_App);
Gallery_App.innerHTML = `
<h1>Галерея</h1>
<button id = "close_Gallery_app"><i class="fa-solid fa-xmark"></i></button>
<div class = "Gallery"></div>
`;
//................
const Gallery_data = [
  "https://cdn.vox-cdn.com/thumbor/IZ7fpJNSeEO1v2vNapVlLYlCWzc=/214x0:1037x549/1200x800/filters:focal(214x0:1037x549)/cdn.vox-cdn.com/uploads/chorus_image/image/45200072/new-ford-gt-supercar-0006.0.0.jpg",
  "https://www.topgear.com/sites/default/files/2023/06/_DSF4308_ret_lores.jpg",
  "https://cdn.motor1.com/images/mgl/BXQOXm/s1/2024-mustang-gt-nascar-pace-car.jpg",
  "https://th.bing.com/th/id/OIP.QUJsXi5EwGcR0nlsE85Z_QHaEq?w=900&h=567&rs=1&pid=ImgDetMain",
];
Gallery_data.map((e) => {
  const Gallery_img = document.createElement("img");
  Gallery_img.src = e;
  var count = 1;
  Gallery_img.addEventListener("click", () => {
    count++;
    if (count % 2 == 0) {
      Gallery_img.style.position = "absolute";
      Gallery_img.style.width = "90%";
    } else {
      Gallery_img.style.position = "static";
      Gallery_img.style.width = "140px";
    }
  });
  document.querySelector(".Gallery").append(Gallery_img);
});

document.getElementById("gallery").addEventListener("click", () => {
  Gallery_App.style.opacity = "1";
  Gallery_App.style.transform = "scale(1)";
});
document.getElementById("close_Gallery_app").addEventListener("click", () => {
  Gallery_App.style.opacity = "0";
  Gallery_App.style.transform = "scale(0)";
});

//..............................

const openCameraBtn = document.getElementById("openCameraBtn");
let stream;

// Создаем динамически контейнер для камеры и кнопки
const Camera_App = document.createElement("div");
Camera_App.classList.add("Camera_app");
Camera_App.innerHTML = `
<button id = "close_camera_app"><i class="fa-solid fa-xmark"></i></button>
            <video id="video" autoplay></video>
            <div>
            <button id="takePhotoBtn"></button>
            <canvas id="canvas" style="display:none;"></canvas>
            <img id="photo" alt="Captured Image">
            </div>
        `;
document.querySelector(".phone_box").appendChild(Camera_App);

const video = Camera_App.querySelector("#video");
const takePhotoBtn = Camera_App.querySelector("#takePhotoBtn");
const canvas = Camera_App.querySelector("#canvas");
const photo = document.getElementById("photo");

// Открыть камеру при нажатии на кнопку
openCameraBtn.addEventListener("click", async () => {
  Camera_App.style.opacity = '1' // Показать контейнер
  Camera_App.style.transform = 'scale(1)'

  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    alert("Error accessing camera: " + err.message);
  }
});

// Сделать снимок
takePhotoBtn.addEventListener("click", () => {
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Преобразовать снимок в изображение
  const imageData = canvas.toDataURL("image/png");
  photo.src = imageData;
  photo.style.display = "block"; // Показать сделанный снимок
});

document.getElementById('close_camera_app').addEventListener('click',()=>{
  Camera_App.style.opacity = '0' // Показать контейнер
  Camera_App.style.transform = 'scale(0)'
})