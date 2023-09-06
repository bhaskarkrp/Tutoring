let btn = document.getElementById("submit_btn");

btn.addEventListener("click", calculatePercentage);

// function | Method
function calculatePercentage() {
  let englishMarkElement = document.getElementById("english_marks");
  let englishMarks = englishMarkElement.value;

  let message = "Please Enter The English Mark";

  let englishWarning = document.getElementById("english_warning");

  if (!englishMarks) {
    englishWarning.innerText = message;
    englishWarning.style.display = "block";
    englishWarning.style.color = "red";
  } else {
    englishMarks = Number(englishMarks); // '50' -> 50

    if (englishMarks > 100 || englishMarks < 0) {
      message = "Marks cannot be negative or greater than 100";
      englishWarning.style.display = "block";
      englishWarning.innerText = message;
      englishWarning.style.color = "red";
    } else {
      englishWarning.style.display = "none";
    }
  }

  let mathMarkElement = document.getElementById("math_marks");
  let mathMarks = mathMarkElement.value;

  let physicsMarkElement = document.getElementById("physics_marks");
  let physicsMarks = physicsMarkElement.value;


  percentage = ((mathMarks + englishMarks + physicsMarks) / 3 ) * 100;
}
