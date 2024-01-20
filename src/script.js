function displayResults(response) {
  console.log("recomendations generated ");
  new Typewriter("#output-div", {
    strings: `<h3>My recommendations for you:</h3>` + response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
  let typewriterCursor = document.querySelector(".Typewriter__cursor");
  typewriterCursor.style.marginLeft = "0px";
}

function getOutput(event) {
  event.preventDefault();

  let buttonOption = "movies";
  let userInput = document.querySelector("#input-user");
  let apiKey = "ba3t92f6af6b8204143cbo1c5a032ba3";
  let prompt = `give-me 3 options of ${buttonOption} in the category of ${userInput.value}`;
  let context =
    "you're well informed about all movis and series, and you know the best to recommend. You never explain your reasons or introduce your answers. You only give the name of the movies or series and the year which it was realeased. You give all your answers in formated in HTML using a <ul> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating recomendations");
  let outputDiv = document.querySelector("#output-div");
  outputDiv.classList.remove("disabled");
  new Typewriter("#output-div", {
    strings: `generating recomendations`,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
  axios.get(apiUrl).then(displayResults);
}

let formSearch = document.querySelector("#form-search");
formSearch.addEventListener("click", getOutput);
