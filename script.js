let speech = new SpeechSynthesisUtterance();
//Now Empty array after to insert all voice
let voices = [];
// Initialize select dropdown element
let voiceSelect = document.querySelector("select");
//........
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  // Push all window voice to select option by using forEach
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};
// Select different voices
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Button click functionality initialize:
document.querySelector(".listen").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
