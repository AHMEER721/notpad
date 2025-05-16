const input = document.getElementById('markdown-input');
const preview = document.getElementById('markdown-preview');

function updatePreview() {
  const markdownText = input.value;
  preview.innerHTML = marked.parse(markdownText);
  localStorage.setItem('markdownNote', markdownText);
}

// Load saved note
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('markdownNote');
  if (saved) {
    input.value = saved;
    updatePreview();
  }
});

input.addEventListener('input', updatePreview);
