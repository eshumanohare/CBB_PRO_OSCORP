function mainApp() {
  const arrows = document.querySelectorAll(".fa-arrow-right");

  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //  Check for validation
      if (input.type === "number" && validateInput(input)) {
        // console.log("Okay");
        next_form(parent, nextForm);
      } else if (input.value == "") {
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
  if (user.value == "") {
    console.log("Number cannot be negative");
    error("rgb(189,87,87");
  } else {
    error("rgb(87,189,130)");
    return true;
  }
}

function error(color) {
  document.body.style.backgroundColor = color;
}

mainApp();
