// header
const nav = document.getElementById('nav');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
 if (window.scrollY > 0) {
  // Apply styles when scrolled
  nav.style.width = '646px';
  nav.style.margin = '10px auto';
  nav.style.padding = '10px 20px';
  nav.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.25)';
  nav.style.backgroundColor = "#fff";
  header.style.padding = '0 16px';
  header.style.backgroundColor = 'transparent';

  // Add margin-top: 25px on mobile screens
  if (window.innerWidth <= 768) {
    nav.style.marginTop = '25px';
  } else {
    nav.style.marginTop = ''; // Reset for larger screens
  }
} else {
    // Reset styles when at top
    nav.style.width = '1200px';
    nav.style.margin = '0 auto';
    nav.style.padding = '0';
    nav.style.boxShadow = 'none';
    header.style.padding = '0 16px';
    nav.style.backgroundColor = "transparent"
    header.style.backgroundColor = 'transparent'; // remove background
  }
});


// Show the loader
  function showLoader() {
    document.getElementById("customLoader").classList.remove("hidden");
  }

  // Hide the loader
  function hideLoader() {
    document.getElementById("customLoader").classList.add("hidden");
  }

  // Show loader on page load and hide after 3 seconds
  window.addEventListener('DOMContentLoaded', () => {
    showLoader();

    setTimeout(() => {
      hideLoader();
    }, 1000);
  });

$(function () {
  $('#text-copy').on('click', function () {
    const textToCopy = $('#copied-item-text').text().trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      // Optional: add visual feedback
      const $button = $('#text-copy');
      const originalText = $button.find('span.md\\:block').text(); // Copy code
      const originalMobile = $button.find('span.block').text(); // C

      $button.find('span.md\\:block').text('Copied').addClass('text-green-500');
      $button.find('span.block').text('âœ“').addClass('text-green-500');

      setTimeout(() => {
        $button.find('span.md\\:block').text(originalText).removeClass('text-green-500');
        $button.find('span.block').text(originalMobile).removeClass('text-green-500');
      }, 4000);
    }).catch(err => {
      console.error('Failed to copy text:', err);
    });
  });
});










$(function () {
  const $slider = $('#executionSlider');
  const $display = $('#displayValue');

  if ($slider.length && $display.length) {
    function updateSliderBackground($slider) {
      const min = parseFloat($slider.attr('min'));
      const max = parseFloat($slider.attr('max'));
      const val = parseFloat($slider.val());
      const percent = ((val - min) / (max - min)) * 100;

      $slider.css('background', `linear-gradient(to right, #000 0%, #000 ${percent}%, #e5e7eb ${percent}%, #e5e7eb 100%)`);
    }

    function formatNumber(num) {
      return Number(num).toLocaleString();
    }

    $slider.on('input', function () {
      updateSliderBackground($slider);
      $display.text(formatNumber($(this).val()));
    });

    // Initialize on load
    updateSliderBackground($slider);
    $display.text(formatNumber($slider.val()));
  } else {
    console.warn('Slider or display element not found!');
  }
});
  

  // home section img 
function changeImage(id, el) {
  const imageMap = {
    image1: 'https://testdino.com/wp-content/themes/Testdino/images/Test Runs bg.svg',
    image2: 'https://testdino.com/wp-content/themes/Testdino/images/Pull Requests bg.svg',
    image3: 'https://testdino.com/wp-content/themes/Testdino/images/AI Insights bg.svg',
    image4: 'https://testdino.com/wp-content/themes/Testdino/images/Analytics bg.svg'
  };

  const videoMap = {
    image1: 'https://www.youtube.com/embed/MjT2edHkz_0?autoplay=1&rel=0',
    image2: 'https://www.youtube.com/embed/qh71aEGs-Zw?autoplay=1&rel=0',
    image3: 'https://www.youtube.com/embed/X-QRgF7lQJM?autoplay=1&rel=0',
    image4: 'https://www.youtube.com/embed/X-QRgF7lQJM?autoplay=1&rel=0'
  };

  const imageWrapper = document.getElementById('imageWrapper');
  const videoUrl = videoMap[id];

  // Replace entire wrapper content (image + svg)
  imageWrapper.innerHTML = `
    <img id="mainImage" src="${imageMap[id]}" class="w-full h-full transition-all duration-500" alt="Dashboard Image">
    <a href="javascript:void(0)" id="svgOverlay" data-video="${videoUrl}"
      class="group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onclick="playVideo(this)">
      <svg class="md:w-16 md:h-16 w-[17px] h-[12px] fill-[#ACACAC] group-hover:fill-red-500 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
          <path d="M33.3329 49.9998L50.6329 39.9998L33.3329 29.9998V49.9998ZM71.8663 23.8998C72.2996 25.4665 72.5996 27.5665 72.7996 30.2332C73.0329 32.8998 73.1329 35.1998 73.1329 37.1998L73.3329 39.9998C73.3329 47.2998 72.7996 52.6665 71.8663 56.0998C71.0329 59.0998 69.0996 61.0332 66.0996 61.8665C64.5329 62.2998 61.6663 62.5998 57.2663 62.7998C52.9329 63.0332 48.9663 63.1332 45.2996 63.1332L39.9996 63.3332C26.0329 63.3332 17.3329 62.7998 13.8996 61.8665C10.8996 61.0332 8.96626 59.0998 8.13293 56.0998C7.69959 54.5332 7.39959 52.4332 7.19959 49.7665C6.96626 47.0998 6.86626 44.7998 6.86626 42.7998L6.66626 39.9998C6.66626 32.6998 7.19959 27.3332 8.13293 23.8998C8.96626 20.8998 10.8996 18.9665 13.8996 18.1332C15.4663 17.6998 18.3329 17.3998 22.7329 17.1998C27.0663 16.9665 31.0329 16.8665 34.6996 16.8665L39.9996 16.6665C53.9663 16.6665 62.6663 17.1998 66.0996 18.1332C69.0996 18.9665 71.0329 20.8998 71.8663 23.8998Z"/>
        </svg>
    </a>
  `;

 // Update active button styles
  const buttons = document.querySelectorAll('#sidebarList button');
  buttons.forEach(btn => {
    btn.classList.remove('bg-[#F1F2F4]', 'font-[700]','border', 'border-[#D4D4D4]');
  });

  el.classList.add('bg-[#F1F2F4]', 'font-[700]','border', 'border-[#D4D4D4]');
}

function playVideo(el) {
  const videoUrl = el.getAttribute('data-video');
  const imageWrapper = document.getElementById('imageWrapper');

  imageWrapper.innerHTML = `
    <iframe class="w-[100%] h-[188px] md:w-[1260px] md:h-[440px]"
      src="${videoUrl}"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen></iframe>
  `;
}

document.addEventListener("DOMContentLoaded", () => {

  // --- Mobile Menu Logic ---
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay")
  const closeMobileMenuButton = document.getElementById("close-mobile-menu")
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link")

  mobileMenuButton.addEventListener("click", () => {
    mobileMenuOverlay.classList.remove("hidden")
  })

  closeMobileMenuButton.addEventListener("click", () => {   
    mobileMenuOverlay.classList.add("hidden")
  })

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuOverlay.classList.add("hidden")
    })
  })


  // --- Interactive Feature Section Logic ---
  const interactiveFeatureItems = document.querySelectorAll(".interactive-feature-item")
  const interactiveFeatureMockup = document.getElementById("interactive-feature-mockup")

  interactiveFeatureItems.forEach((item) => {
    const button = item.querySelector("button")
    const descriptionDiv = item.querySelector(".overflow-hidden")
    const circleDiv = item.querySelector(".circle-active-div") // Select the circle div

    button.addEventListener("click", () => {
      // Deactivate all other items
      interactiveFeatureItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector("button")
        const otherDescriptionDiv = otherItem.querySelector(".overflow-hidden")
        const otherCircleDiv = otherItem.querySelector(".circle-active-div")

        otherButton.classList.remove("font-[800]", "text-[#0B0C0E]","bg-[#FAFAFA]")
        otherButton.classList.add("font-[700]", "text-[#555861]", "group-hover:text-[#212121]")
        if (otherDescriptionDiv) {
          // otherDescriptionDiv.style.maxHeight = "0"
          otherDescriptionDiv.style.display = "none"
        }
        if (otherCircleDiv) {
          otherCircleDiv.remove() // Remove the circle
        }
      })

      // Activate the clicked item
      button.classList.add("font-[800]", "text-[#0B0C0E]","bg-[#FAFAFA]")
      button.classList.remove("font-[700]", "text-[#555861]", "group-hover:text-[#212121]")
      if (descriptionDiv) {
        // descriptionDiv.style.maxHeight = descriptionDiv.scrollHeight + "px",
        //   descriptionDiv.style.display = "block"
        // descriptionDiv.style.maxHeight = "53px";
        descriptionDiv.style.display = "block";
      }
      if (!circleDiv) {
        // Add the circle if it doesn't exist
        const w6Div = item.querySelector(".review-syste-list")
        if (w6Div) {
          const newCircle = document.createElement("div")
          newCircle.classList.add("w-4", "h-4", "bg-[#0B0C0E]", "rounded-full", "circle-active-div")
          w6Div.appendChild(newCircle)
        }
      }

      // Update mockup image (if dynamic based on feature ID)
      // interactiveFeatureMockup.src = `images/dashboard-mockup.png?feature=${button.dataset.featureId}`;
    })
  })

  const buttons = document.querySelectorAll('.interactive-feature-item button');
  // const paragraphs = document.querySelectorAll('.interactive-feature-item p');
  // const headings = document.querySelectorAll('.interactive-feature-item h3');
  const mockups = document.querySelectorAll('.feature-mockup');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const featureId = button.getAttribute('data-feature-id');
      const imgSrc = button.getAttribute('data-img-src');

      // update the right side image
      if (interactiveFeatureMockup && imgSrc)
        interactiveFeatureMockup.src = 'https://testdino.com/wp-content/themes/Testdino/images/' + imgSrc;

      // Show/hide mockups based on data-id
      mockups.forEach(mockup => {
        const id = mockup.getAttribute('data-id');
        if (id === featureId) {
          mockup.classList.remove('hidden');
          mockup.classList.add('block');
        } else {
          mockup.classList.add('hidden');
          mockup.classList.remove('block');
        }
      });
    });
  });

  // Open the first one by default
  window.addEventListener('DOMContentLoaded', () => {
    if (buttons[0]) buttons[0].click();
  });

  // --- Business Categories Slider Logic ---
  const businessSliderRef = document.getElementById("business-categories-slider")
  const businessSliderDots = document.querySelectorAll("#business-slider-dots button")
  let activeBusinessSlide = 0

  function updateBusinessSliderDots() {
    businessSliderDots.forEach((dot, index) => {
      if (index === activeBusinessSlide) {
        dot.classList.add("w-6", "bg-[#645cfc]")
        dot.classList.remove("w-2", "bg-gray-300")
      } else {
        dot.classList.add("w-2", "bg-gray-300")
        dot.classList.remove("w-6", "bg-[#645cfc]")
      }
    })
  }

  function scrollToBusinessSlide(index) {
    if (businessSliderRef) {
      const slideWidth = businessSliderRef.offsetWidth
      businessSliderRef.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      })
      activeBusinessSlide = index
      updateBusinessSliderDots()
    }
  }

  businessSliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => scrollToBusinessSlide(index))
  })

  if (businessSliderRef) {
    businessSliderRef.addEventListener("scroll", () => {
      const scrollPosition = businessSliderRef.scrollLeft
      const slideWidth = businessSliderRef.offsetWidth
      const newActiveSlide = Math.round(scrollPosition / slideWidth)
      if (newActiveSlide !== activeBusinessSlide) {
        activeBusinessSlide = newActiveSlide
        updateBusinessSliderDots()
      }
    })
  }
  updateBusinessSliderDots() // Initial update


  // --- FAQ Section Logic (Accordion) ---
  const accordionTriggers = document.querySelectorAll(".accordion-trigger")

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const content = document.getElementById(trigger.getAttribute("aria-controls"))
      const isExpanded = trigger.getAttribute("aria-expanded") === "true"

      // Close all other open accordions
      accordionTriggers.forEach((otherTrigger) => {
        if (otherTrigger !== trigger && otherTrigger.getAttribute("aria-expanded") === "true") {
          otherTrigger.setAttribute("aria-expanded", "false")
          const otherContent = document.getElementById(otherTrigger.getAttribute("aria-controls"))
          otherContent.style.maxHeight = "0"
          otherContent.removeAttribute("data-state")
        }
      })

      // Toggle current accordion
      trigger.setAttribute("aria-expanded", !isExpanded)
      if (isExpanded) {
        content.style.maxHeight = "0"
        content.removeAttribute("data-state")
      } else {
        content.style.maxHeight = content.scrollHeight + "px"
        content.style.display = "block"
        content.setAttribute("data-state", "open")
      }
    })
  })

  // --- Initial Fade-in Animation for "The wiser way" section ---
  const wiserWaySectionHeader = document.querySelector('.animate-fade-in[data-animate="true"]')
  if (wiserWaySectionHeader) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    observer.observe(wiserWaySectionHeader)
  }
})



// Header dropdown hover effect [S]
document.querySelectorAll('[data-dropdown-item]').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const target = item.getAttribute('data-dropdown-item');
    document.querySelectorAll('.preview-img').forEach(img => {

      img.classList.add('hidden');
      if (img.getAttribute('data-preview') === target) {
        img.classList.remove('hidden');
      }
    });
  });
});


// --- Blog Contebt table [S] --- //

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('tocToggleBtn');
  const tocList = document.getElementById('tocList');

  if (toggleButton && tocList) {
    toggleButton.addEventListener('click', function () {
      tocList.classList.toggle('hidden');
    });
  }
});

// --- Blog Content table [E] --- //


const isMonthPlan = document.getElementById("isMonthPlan");
  if (isMonthPlan) {
    isMonthPlan.addEventListener("click", () => {
      let type = 'yearly';
      let isMonthly = document.getElementById('isMonthPlan').checked;
      let yearly = document.getElementById('plnCta_yearly');
      let monthly = document.getElementById('plnCta_monthly');
      let priceBasic = document.getElementById('month_price');

      if (isMonthly === true) {
        type = 'monthly';
        priceBasic.innerHTML = '$ 30/<span class="text-sm">Year</span>';
        if (yearly && yearly.classList.contains('activeCTa_pln')) yearly.classList.remove('activeCTa_pln');
        if (monthly) monthly.classList.add('activeCTa_pln');
      }
      else {
        type = 'yearly';
        priceBasic.innerHTML = '$ 19/<span class="text-sm">Year</span>';
        if (yearly) yearly.classList.add('activeCTa_pln');
        if (monthly && monthly.classList.contains('activeCTa_pln')) monthly.classList.remove('activeCTa_pln');
      }
    })
  }

  document.querySelectorAll('[data-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.getAttribute('data-target'));
      const svg = button.querySelector('svg');

      if (target.classList.contains('max-h-0')) {
        target.classList.remove('max-h-0', 'overflow-hidden' );
        target.classList.add('max-h-[2000px]');
      } else {
        target.classList.remove('max-h-[2000px]');
        target.classList.add('max-h-0', 'overflow-hidden');
      }

      if (svg) {
        svg.classList.toggle('rotate-180');
      }
    });
  });

// --- Hero section modal youtube [S] --- //

function toggleAccordion(button) {
  const currentItem = button.closest('.accordion-item');
  const content = currentItem.querySelector('.accordion-content');
  const svg = button.querySelector('svg');

  const activeClasses = ['bg-white', 'rounded-xl', 'border-b-1', 'border-[#E2E4E9]'];

  // Close all others
  document.querySelectorAll('.accordion-item').forEach(item => {
    const itemContent = item.querySelector('.accordion-content');
    const icon = item.querySelector('svg');

    if (item !== currentItem) {
      itemContent.style.display = 'none';
      icon.classList.remove('rotate-180');
      item.classList.remove(...activeClasses);
    }
  });

  // Toggle this one
  const isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
  svg.classList.toggle('rotate-180', !isOpen);
  currentItem.classList.toggle('bg-white', !isOpen);
  currentItem.classList.toggle('rounded-xl', !isOpen);
  currentItem.classList.toggle('border-b-1', !isOpen);
  currentItem.classList.toggle('border-[#E2E4E9]', !isOpen);
  // currentItem.classList.toggle('', !isOpen);
}





$(function () {
  // Show popup when any .pop-up button is clicked
  $('.pop-up').on('click', function (e) {
    e.preventDefault();           // Prevent default behavior (like <a href="#"> or <button>)
    e.stopPropagation();          // Prevent event bubbling
    $('#popup-overlay').removeClass('hidden');
  });

  // Hide popup when clicking outside the popup content
  $('#popup-overlay').on('click', function (e) {
    if ($(e.target).is('#popup-overlay')) {
      $('#popup-overlay').addClass('hidden');
    }
  });

  // Hide popup when "Cancel" button is clicked
  $('#cancel-button').on('click', function (e) {
    e.preventDefault();           // Optional: prevent form submission if inside a form
    $('#popup-overlay').addClass('hidden');
  });
});

    // pricing page rs range section
document.addEventListener('DOMContentLoaded', function () {
const slider = document.getElementById('executionSlider');
const displayValue = document.getElementById('displayValue');

if (!slider || !displayValue) {
    console.warn("Slider or display element not found!");
    return;
}

function updateSliderDisplay() {
    const value = parseInt(slider.value);
    displayValue.textContent = value.toLocaleString();

    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const percentage = ((value - min) / (max - min)) * 100;

    slider.style.setProperty('--range-fill-percentage', `${percentage}%`);
}

updateSliderDisplay();
slider.addEventListener('input', updateSliderDisplay);
});

        
function toggleTable() {
    const tableContent = document.getElementById('tableContent');
    const arrow = document.getElementById('arrow');
    
    if (tableContent.style.display === 'none') {
        tableContent.style.display = 'block';
        arrow.classList.remove('rotate-180');
    } else {
        tableContent.style.display = 'none';
        arrow.classList.add('rotate-180');
    }
}

const textarea = document.getElementById("reportIssue");

  const placeholderText = `â€¢ Flaky tests, no root cause shown
â€¢ Too noisy, lacks insights
â€¢ Briefly share your test reporting painâ€¦`;

  textarea.style.color = "#A3A3A3";
  textarea.value = placeholderText;

  textarea.addEventListener("focus", () => {
    if (textarea.value === placeholderText) {
      textarea.value = "";
      textarea.style.color = "#404040";
    }
  });

  textarea.addEventListener("blur", () => {
    if (textarea.value.trim() === "") {
      textarea.value = placeholderText;
      textarea.style.color = "#A3A3A3";
    }
  });


  // 

 const links = document.querySelectorAll("ul a");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -70% 0px", // Trigger slightly before top
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`ul a[href="#${id}"]`);

      if (entry.isIntersecting && link) {
        // Remove all classes from every link
        links.forEach((el) => {
          el.classList.remove("text-[#171717]", "font-[700]");
          el.classList.add("text-[#25223B]", "font-[300]");
        });

        // Add active classes to current link
        link.classList.add("text-[#171717]", "font-[700]");
        link.classList.remove("text-[#25223B]", "font-[300]");
      }
    });
  }, observerOptions);

  // Observe all elements with an id
  document.querySelectorAll("[id]").forEach((el) => {
    observer.observe(el);
  });

  // Optional: smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
        