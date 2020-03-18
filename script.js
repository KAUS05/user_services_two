//navbar
const notification_btn = document.getElementById("notification_btn");
const notification_list = document.getElementById("notification_list");

notification_list.style.display = "none";

notification_btn.addEventListener("click", e => {
  if (notification_list.style.display === "none") {
    notification_list.style.display = "block";
  } else {
    notification_list.style.display = "none";
  }
});

const dropdown_btn = document.getElementById("dropdown_btn");
const dropdown_list = document.getElementById("dropdown_list");

dropdown_list.style.display = "none";

dropdown_btn.addEventListener("click", e => {
  if (dropdown_list.style.display === "none") {
    dropdown_list.style.display = "block";
  } else {
    dropdown_list.style.display = "none";
  }
});

//sidebar
const left = document.querySelector(".sidebar_left");
function openSideMenu(e) {
  document.getElementById("side-menu").style.width = "220px";
  document.querySelector(".manage_campaign_right").style.marginLeft = "100px";
}

function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0px";
  document.querySelector(".manage_campaign_right").style.marginLeft = "0px";
}

//dropdown
document
  .querySelector(".custom-select-wrapper-language")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-language").classList.toggle(
      "open-language",
    );
  });

for (const option of document.querySelectorAll(".custom-option-language")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-language")) {
      this.parentNode
        .querySelector(".custom-option-language.selected-language")
        .classList.remove("selected-language");
      this.classList.add("selected-language");
      this.closest(".custom-select-language").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// sender_id

//one

document
  .querySelector(".custom-select-wrapper-one")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-one").classList.toggle("open-one");
  });

for (const option of document.querySelectorAll(".custom-option-one")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-one")) {
      this.parentNode
        .querySelector(".custom-option-one.selected-one")
        .classList.remove("selected-one");
      this.classList.add("selected-one");
      this.closest(".custom-select-one").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// two
document
  .querySelector(".custom-select-wrapper-two")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-two").classList.toggle("open-two");
  });

for (const option of document.querySelectorAll(".custom-option-two")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-two")) {
      this.parentNode
        .querySelector(".custom-option-two.selected-two")
        .classList.remove("selected-two");
      this.classList.add("selected-two");
      this.closest(".custom-select-two").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// three
document
  .querySelector(".custom-select-wrapper-three")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-three").classList.toggle("open-three");
  });

for (const option of document.querySelectorAll(".custom-option-three")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-three")) {
      this.parentNode
        .querySelector(".custom-option-three.selected-three")
        .classList.remove("selected-three");
      this.classList.add("selected-three");
      this.closest(".custom-select-three").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// four
document
  .querySelector(".custom-select-wrapper-four")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-four").classList.toggle("open-four");
  });

for (const option of document.querySelectorAll(".custom-option-four")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-four")) {
      this.parentNode
        .querySelector(".custom-option-four.selected-four")
        .classList.remove("selected-four");
      this.classList.add("selected-four");
      this.closest(".custom-select-four").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// five
document
  .querySelector(".custom-select-wrapper-five")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-five").classList.toggle("open-five");
  });

for (const option of document.querySelectorAll(".custom-option-five")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-five")) {
      this.parentNode
        .querySelector(".custom-option-five.selected-five")
        .classList.remove("selected-five");
      this.classList.add("selected-five");
      this.closest(".custom-select-five").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// six
document
  .querySelector(".custom-select-wrapper-six")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-six").classList.toggle("open-six");
  });

for (const option of document.querySelectorAll(".custom-option-six")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-six")) {
      this.parentNode
        .querySelector(".custom-option-six.selected-six")
        .classList.remove("selected-six");
      this.classList.add("selected-six");
      this.closest(".custom-select-six").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// seven
document
  .querySelector(".custom-select-wrapper-seven")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-seven").classList.toggle("open-seven");
  });

for (const option of document.querySelectorAll(".custom-option-seven")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-seven")) {
      this.parentNode
        .querySelector(".custom-option-seven.selected-seven")
        .classList.remove("selected-seven");
      this.classList.add("selected-seven");
      this.closest(".custom-select-seven").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// eight
document
  .querySelector(".custom-select-wrapper-eight")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-eight").classList.toggle("open-eight");
  });

for (const option of document.querySelectorAll(".custom-option-eight")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-eight")) {
      this.parentNode
        .querySelector(".custom-option-eight.selected-eight")
        .classList.remove("selected-eight");
      this.classList.add("selected-eight");
      this.closest(".custom-select-eight").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// nine
document
  .querySelector(".custom-select-wrapper-nine")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-nine").classList.toggle("open-nine");
  });

for (const option of document.querySelectorAll(".custom-option-nine")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-nine")) {
      this.parentNode
        .querySelector(".custom-option-nine.selected-nine")
        .classList.remove("selected-nine");
      this.classList.add("selected-nine");
      this.closest(".custom-select-nine").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// ten
document
  .querySelector(".custom-select-wrapper-ten")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-ten").classList.toggle("open-ten");
  });

for (const option of document.querySelectorAll(".custom-option-ten")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-ten")) {
      this.parentNode
        .querySelector(".custom-option-ten.selected-ten")
        .classList.remove("selected-ten");
      this.classList.add("selected-ten");
      this.closest(".custom-select-ten").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

// eleven
document
  .querySelector(".custom-select-wrapper-eleven")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-eleven").classList.toggle("open-eleven");
  });

for (const option of document.querySelectorAll(".custom-option-eleven")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-eleven")) {
      this.parentNode
        .querySelector(".custom-option-eleven.selected-eleven")
        .classList.remove("selected-eleven");
      this.classList.add("selected-eleven");
      this.closest(".custom-select-eleven").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}
