// Ensure popup modal is hidden on page load (vanilla JS - loads before jQuery)
document.addEventListener('DOMContentLoaded', function() {
  const popupOverlay = document.getElementById('popup-overlay');
  if (popupOverlay) {
    popupOverlay.classList.add('hidden');
  }
});

// header
const nav = document.getElementById('nav');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
 if (window.scrollY > 0) {
  // Apply styles when scrolled
  nav.style.width = '700px';
  nav.style.margin = '10px auto';
  nav.style.padding = '10px 20px';
  nav.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.25)';
  nav.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  nav.style.borderRadius = '20px';
  header.style.padding = '0 16px';
  nav.style.backdropFilter = 'blur(12px)';


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
    nav.style.borderRadius = '20px';
    header.style.padding = '0 16px';
    nav.style.backgroundColor = "transparent"
    nav.style.backdropFilter = 'blur(12px)';

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
    image1: 'Testdino Landing Page Images/Hero section thumbnail image/Test Runs.svg',
    image2: 'Testdino Landing Page Images/Hero section thumbnail image/Pull Requests.svg',
    image3: 'Testdino Landing Page Images/Hero section thumbnail image/AI Insights.svg',
    image4: 'Testdino Landing Page Images/Hero section thumbnail image/Analytics.svg'
  };

  const videoMap = {
    image1: 'https://www.youtube.com/embed/MjT2edHkz_0?autoplay=1&rel=0',
    image2: 'https://www.youtube.com/embed/qh71aEGs-Zw?autoplay=1&rel=0',
    image3: 'https://www.youtube.com/embed/X-QRgF7lQJM?autoplay=1&rel=0',
    image4: 'https://www.youtube.com/embed/X-QRgF7lQJM?autoplay=1&rel=0'
  };

  const imageWrapper = document.getElementById('imageWrapper');
  const videoUrl = videoMap[id];
  // Replace entire wrapper content with responsive video iframe
  imageWrapper.innerHTML = `
    <div style="position:relative;width:90vw;margin:0 auto;">
      <div style="padding-top:56.25%;"></div>
      <iframe
        src="${videoUrl}"
        style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px;min-height:220px;"
        class="transition-all duration-500 w-full h-full"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="Demo Video"
      ></iframe>
    </div>
  `;

  // Update active button styles
  const buttons = document.querySelectorAll('#sidebarList button');
  buttons.forEach(btn => {
    btn.classList.remove('bg-[#F1F2F4]', 'font-[700]', 'border', 'border-[#D4D4D4]');
  });

  el.classList.add('bg-[#F1F2F4]', 'font-[700]', 'border', 'border-[#D4D4D4]');
}

function playVideo(el) {
  const videoUrl = el.getAttribute('data-video');
  const imageWrapper = document.getElementById('imageWrapper');

  imageWrapper.innerHTML = `
    <div style="position:relative;width:90vw;margin:0 auto;">
      <div style="padding-top:56.25%;"></div>
      <iframe
        src="${videoUrl}"
        style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px;min-height:220px;"
        class="transition-all duration-500 w-full h-full"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="Demo Video"
      ></iframe>
    </div>
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

      // update the right side image (use provided path directly)
      if (interactiveFeatureMockup && imgSrc) {
        interactiveFeatureMockup.src = imgSrc;
      }

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
  // Ensure popup is hidden on page load/reload
  $('#popup-overlay').addClass('hidden');
  
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
    const slider = document.getElementById('testExecutionSlider');
    const displayValue = document.getElementById('testExecutionValue');
    const pricingCards = document.querySelectorAll('.pricing-card');

    if (!slider || !displayValue) {
        console.warn("Slider or display element not found!");
        return;
    }

    function updateSliderDisplay() {
        const value = parseInt(slider.value);
        const values = ['Free', '5k', '25k', '50k', '100k', '250k'];
        const selectedValue = values[value];
        displayValue.textContent = selectedValue;

        // Highlight the appropriate pricing card based on slider value
        pricingCards.forEach(card => {
            card.classList.remove('active-plan');
        });

        // Map slider values to card indices
        // 0 = Free, 1 = 5k (Community), 2 = 25k (Pro), 3 = 50k, 4 = 100k (Team), 5 = 250k (Enterprise)
        let activeCardIndex = 0;
        if (value === 0 || value === 1) activeCardIndex = 0; // Free/Community
        else if (value === 2) activeCardIndex = 1; // Pro
        else if (value === 3 || value === 4) activeCardIndex = 2; // Team
        else if (value === 5) activeCardIndex = 3; // Enterprise

        if (pricingCards[activeCardIndex]) {
            pricingCards[activeCardIndex].classList.add('active-plan');
        }

        const min = parseFloat(slider.min);
        const max = parseFloat(slider.max);
        const percentage = ((value - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(to right, #171717 0%, #171717 ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;
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

 const links = document.querySelectorAll("ul a:not(.toc-link)");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -70% 0px", // Trigger slightly before top
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`ul a:not(.toc-link)[href="#${id}"]`);

      if (entry.isIntersecting && link) {
        // Remove all classes from every link
        links.forEach((el) => {
          el.classList.remove("text-[#171717]", "font-bold");
          el.classList.add("text-[#25223B]");
        });

        // Add active classes to current link
        link.classList.add("text-[#171717]", "font-bold");
        link.classList.remove("text-[#25223B]");
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
        