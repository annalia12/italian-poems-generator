function displayPoem(response){
console.log("poem generated");
new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });    
}

function generatePoem (event) {
event.preventDefault();
}
let instructionsInput = document.querySelector("#user-instructions");
let apiKey="eat3bf2c0ed301443o16635a4ff05de2";
let prompt=`User instructions:Generate an Italian poem about ${instructionsInput.value}`;
let context="You are a romantic Poem expert and love to write short poems.Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>.Make sure to follow the user instructions.Do not include a title in the poem.Sign the poem with `SheCodes AI`insise a <strong> element at the end of the poem and NOT at the beginning.";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Italian poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);