
const tabs = document.querySelector(".tabs__nav");
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItem = document.querySelectorAll(".tabs__content-item");
tabsBtn.forEach(onTabClick);
function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-type");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });
      tabsItem.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// if (tabs) { document.querySelector(".tabs__nav-btn").click(); }
const form = document.getElementById("form");
form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
  if (error === 0) {
    console.log()
    if (response.ok) {
      console.log(result.message);
      form.reset();
    } else {
      alert("");
    }
  } else {
    console.log("Form is NOT sent.");
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll("._req");

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    RemoveError(input);

    if (input.classList.contains("email")) {
      if (emailTest(input)) {
        AddError(input);
        error++;
      }
    } else {
      if (input.value === "") {
        AddError(input);
        error++;
        console.log("No");
      }
    }
  }
  return error;
}

function AddError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
}
function RemoveError(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@(\w+[\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}



// const burgerBtn = document.querySelector('.burger')
// if (burgerBtn) {
//   burgerBtn.addEventListener('click', function () {
//     document.querySelector('.burger span').classList.toggle('active');
//     document.querySelector('.header').classList.toggle("active");
//   })
// }

const burg = document.querySelector(".burger");

burg.addEventListener("click", function () {
  burg.classList.toggle("active");
  if (burg.classList.contains("active")) {
    document.querySelector(".burger span").classList.add("active");
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".burger span").classList.remove("active");
    document.querySelector(".header").classList.remove("active");
  }
});

const nav = document.querySelector(".menu__tabs");

nav.addEventListener("click", function () {
  burg.classList.toggle("active");
  if (burg.classList.contains("active")) {
    document.querySelector(".burger span").classList.add("active");
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".burger span").classList.remove("active");
    document.querySelector(".header").classList.remove("active");
  }
});

const select = document.querySelector('select');

select.addEventListener('change',  changeLanguage);



function changeLanguage() {
    let hash = select.value;
    console.log(hash);
    for (let key in i18Obj) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = i18Obj[key][hash];
        }

    }
}

changeLanguage();
