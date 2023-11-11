let id = document.getElementById("id");
let quote = document.getElementById("quote");
let btn = document.getElementById("btn");

function getAdvice() {
  const apiUrl = "https://api.adviceslip.com/advice?" + new Date().getTime();
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const advice = adviceData.slip;
      id.innerHTML = `ADVICE #${advice.id}`;
      quote.innerHTML = `"${advice.advice}"`;
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};
