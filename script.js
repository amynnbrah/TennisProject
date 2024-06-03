document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots-container");

  let slideIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  // Create dots dynamically based on the number of slides
  function createDots() {
    for (let i = 0; i < slides.children.length; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", function () {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
    updateDots();
  }

  // Update dot indicators
  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === slideIndex);
    });
  }

  // Show slide
  function goToSlide(index) {
    slideIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  // Previous slide
  function prevSlide() {
    if (slideIndex > 0) {
      goToSlide(slideIndex - 1);
    } else {
      goToSlide((slideIndex = slides.children.length - 1));
    }
  }

  // Next slide
  function nextSlide() {
    if (slideIndex < slides.children.length - 1) {
      goToSlide(slideIndex + 1);
    } else {
      goToSlide((slideIndex = 0));
    }
  }

  // Touch events for slide navigation
  slides.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
  });

  slides.addEventListener("touchend", function (event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) {
      prevSlide(); // Swipe right
    } else if (swipeDistance < -50) {
      nextSlide(); // Swipe left
    }
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Initialize slide navigation
  createDots();
});

// Set the target date for the countdown
// Set the target date for each tournament
const targetDates = [
  new Date("2024-11-20T00:00:00"), // Australian Open
  new Date("2024-07-01T00:00:00"), // Wimbledon
  new Date("2024-09-01T00:00:00"), // Roland Garros
];

// Update the countdown for each tournament
function initializeCountdown(endDates) {
  function updateCountdown() {
    endDates.forEach((endDate, index) => {
      const now = new Date().getTime();
      const distance = new Date(endDate).getTime() - now;

      if (distance < 0) {
        // If the countdown is over, set all values to zero
        document.querySelector(`#timer${index + 1} .days`).innerText = "00";
        document.querySelector(`#timer${index + 1} .hours`).innerText = "00";
        document.querySelector(`#timer${index + 1} .minutes`).innerText = "00";
        document.querySelector(`#timer${index + 1} .seconds`).innerText = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown elements for the current tournament
      document.querySelector(`#timer${index + 1} .days`).innerText =
        formatTime(days);
      document.querySelector(`#timer${index + 1} .hours`).innerText =
        formatTime(hours);
      document.querySelector(`#timer${index + 1} .minutes`).innerText =
        formatTime(minutes);
      document.querySelector(`#timer${index + 1} .seconds`).innerText =
        formatTime(seconds);
    });
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  setInterval(updateCountdown, 1000);
}

// Example usage:
const endDates = [
  "2024-07-01T00:00:00", // Example date for Australian Open
  "2024-08-01T00:00:00", // Example date for Wimbledon
  "2024-09-01T00:00:00", // Example date for Roland Garros
];

initializeCountdown(endDates);

//ranking table
document.addEventListener("DOMContentLoaded", function () {
  const maleButton = document.getElementById("maleButton");
  const femaleButton = document.getElementById("femaleButton");
  const hideButton = document.getElementById("hideButton");
  const maleRankingsTable = document.getElementById("maleRankingsTable");
  const femaleRankingsTable = document.getElementById("femaleRankingsTable");

  maleButton.addEventListener("click", function () {
    maleRankingsTable.style.display = "block";
    femaleRankingsTable.style.display = "none";
  });

  femaleButton.addEventListener("click", function () {
    maleRankingsTable.style.display = "none";
    femaleRankingsTable.style.display = "block";
  });

  hideButton.addEventListener("click", function () {
    maleRankingsTable.style.display = "none";
    femaleRankingsTable.style.display = "none";
  });
});



//live script

document.addEventListener('DOMContentLoaded', () => {
  const toggleCommentsButton = document.getElementById('toggle-comments');
  const commentsContainer = document.getElementById('comments');
  const videoContainer = document.querySelector('.video-container');

  toggleCommentsButton.addEventListener('click', () => {
      if (commentsContainer.style.display === 'none' || commentsContainer.style.display === '') {
          commentsContainer.style.display = 'block';
          videoContainer.style.width = '60%';
          toggleCommentsButton.textContent = 'Hide Comments';
      } else {
          commentsContainer.style.display = 'none';
          videoContainer.style.width = '100%';
          toggleCommentsButton.textContent = 'Show Comments';
      }
  });
});


//newsletter

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  
  if (validateEmail(email)) {
    alert('Thank you for subscribing!');
    // Here, you can add code to send the email to your server or an email marketing service
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
