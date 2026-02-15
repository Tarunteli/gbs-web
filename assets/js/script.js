// mobile menu

function openMenu() {
  document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}

document.querySelectorAll(".m-title").forEach(title => {
  title.addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
  });
});



// conter animation

const counters = document.querySelectorAll('.counter');

const options = {
  threshold: 0.5  
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      let count = 0;

      const duration = 2000; 
      const stepTime = Math.abs(Math.floor(duration / target));

      const timer = setInterval(() => {
        count++;
        counter.innerText = count;

        if (count >= target) {
          clearInterval(timer);
        }
      }, stepTime);

      observer.unobserve(counter); 
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});

// service card animation

document.addEventListener("DOMContentLoaded", function () {

  const serviceCards = document.querySelectorAll('.service-card');

  if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    serviceCards.forEach(card => {
      observer.observe(card);
    });

  } else {
    serviceCards.forEach(card => {
      card.classList.add("show");
    });
  }

});



// contact form
  const form = document.getElementById('contactForm');
  const popup = document.getElementById('successPopup');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset(); 

      popup.classList.add('show'); 

      setTimeout(() => {
        popup.classList.remove('show');
      }, 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  });



// dynamic text animation
  const words = [
    "Outsourcing",
    "Innovation",
    "Growth",
    "Digital Solutions"
  ];

  let index = 0;
  const dynamicText = document.querySelector(".dynamic-text");

  setInterval(() => {

    dynamicText.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % words.length;
      dynamicText.textContent = words[index];
      dynamicText.classList.remove("fade-out");
      dynamicText.classList.add("fade-in");

      setTimeout(() => {
        dynamicText.classList.remove("fade-in");
      }, 400);

    }, 400);

  }, 2500);




  
// Show button when scroll down
window.onscroll = function() {
  let btn = document.getElementById("scrollTopBtn");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};


// Scroll to top smooth
function scrollToTop() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}





// WhatsApp toggle
function toggleWA() {

  let box = document.getElementById("wa-box");

  if (box.style.display === "flex") {
    box.style.display = "none";
  } else {
    box.style.display = "flex";
  }

}




