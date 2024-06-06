document.getElementById('toggle-comments').addEventListener('click', function() {
    var comments = document.getElementById('comments');
    var computedStyle = window.getComputedStyle(comments);

    if (comments.display === 'none') {
      comments.style.display = 'block';
      this.textContent = 'Hide Comments';
    } else {
      comments.style.display = 'none';
      this.textContent = 'Show Comments';
    }
  });