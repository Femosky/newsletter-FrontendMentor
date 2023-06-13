const emailInput = document.querySelector(".email-input");
const submitInput = document.querySelector(".button");

function emailChecker() {
  const receivedInput = emailInput.value;
  let found = false;

  for (let i = 0; i < receivedInput.length; i++) {
    if (receivedInput.charAt(i) === "@") {
      found = true;
      break;
    }
  }

  return found;
}

submitInput.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  if (emailChecker()) {
    window.location.href = "success.html";
  } else {
    window.location.href = "error.html";
  }
});


