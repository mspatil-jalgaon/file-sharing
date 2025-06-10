function mode(action) {
  alert(`Switched to ${action.toUpperCase()} mode.`);
}

function share() {
  const files = document.getElementById('fileInput').files;
  const text = document.getElementById('textInput').value;

  if (files.length > 0) {
    alert(`${files.length} file(s) selected for sharing.`);
  }

  if (text.trim()) {
    alert(`Text to share: "${text}"`);
  }

  if (files.length === 0 && text.trim() === '') {
    alert('Please select a file or enter some text to share.');
  }
}
