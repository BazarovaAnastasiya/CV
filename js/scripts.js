
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
