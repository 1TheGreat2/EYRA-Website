function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'en-US';
  msg.rate = 1;
  msg.pitch = 1;
  speechSynthesis.speak(msg);
}
