function mainApp() {
  const arrows = document.querySelectorAll(".fa-arrow-right");

  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //  Check for validation
      if (validateInput(input)) {
        // console.log("Okay");
        next_form(parent, nextForm);
        // } else if(){
      } else {
        console.log("in");
        parent.style.animation = "shake 0.5s ease";
      }
      // to remove animation
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

function next_form(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function validateInput(user) {
  // console.log(user.classList);
  if (user.value == "") {
    console.log("Number cannot be negative");
    error("rgb(189,87,87");
    return false;
  }
  if (
    user.classList.contains("field-one") &&
    (user.value < 6.981 || user.value > 28.11)
  ) {
    error("rgb(189,87,87)");
    return false;
  }
  if (
    user.classList.contains("field-two") &&
    (user.value < 9.71 || user.value > 39.28)
  ) {
    console.log("in");
    error("rgb(189,87,87");
    return false;
  }
  if (
    user.classList.contains("field-three") &&
    (user.value < 43.79 || user.value > 188.5)
  ) {
    error("rgb(189,87,87");
    return false;
  }
  if (
    user.classList.contains("field-four") &&
    (user.value < 143.5 || user.value > 2501.0)
  ) {
    error("rgb(189,87,87");
    return false;
  }
  if (
    user.classList.contains("field-five") &&
    (user.value < 0.0 || user.value > 0.201)
  ) {
    error("rgb(189,87,87");
    return false;
  }
  error("rgb(87,189,130)");
  return true;
}

function error(color) {
  document.body.style.backgroundColor = color;
}

mainApp();
