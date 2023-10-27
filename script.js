let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);

//skill-circle/////////
const container = document.querySelector(".container");

const courses = [
  { course: "team Work", percent: 90, color: "#12f7ff" },
  { course: "creativity", percent: 75, color: "#12f7ff" },
  { course: "project mangement", percent: 65, color: "#12f7ff" },
  { course: "comiunication", percent: 90, color: "#12f7ff" },
];
courses.forEach((course) => {
  container.innerHTML += `
  <div class="progess-group">
  <div class="circular-progress" >
    <span class="course-value" style="color:${course.color}">0%</span>
  </div>
  <label class="text" style="color:${course.color}">${course.course}</label>
</div>
  `;
});

//style="  background: conic-gradient(${course.color} ${3.6 * course.percent}deg, #fff 0deg);"

const progressGroups = document.querySelectorAll(".progess-group");

progressGroups.forEach((progress, index) => {
  let progressStartValue = 0;
  let progressStartEnd = courses[index].percent;
  let speed = 50;
  let progessTimer = setInterval(() => {
    progressStartValue++;
    if (progressStartValue == progressStartEnd) {
      clearInterval(progessTimer);
    }
    progress.querySelector(".circular-progress").style.background = `
    conic-gradient(${courses[index].color} ${
      3.6 * progressStartValue
    }deg, #fff 0deg)`;

    progress.querySelector(".course-value").innerHTML =
      progressStartValue + "%";
  }, speed);
});
