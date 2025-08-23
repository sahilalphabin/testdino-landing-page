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
  // Check if mobile menu is open
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  const isMobileMenuOpen = mobileMenuOverlay && !mobileMenuOverlay.classList.contains('hidden');
  
  // Don't apply scroll styles if mobile menu is open
  if (isMobileMenuOpen) {
    return;
  }
  
 if (window.scrollY > 0) {
  // Apply styles when scrolled
  nav.style.width = '700px';
  nav.style.margin = '10px auto';
  nav.style.padding = '10px 20px';
  nav.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.25)';
  // nav.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  nav.style.borderRadius = '20px';
  header.style.padding = '0 16px';
  
  nav.style.backdropFilter = 'blur(12px)';


  // Add margin-top: 25px on mobile screens
  if (window.innerWidth <= 900) {
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
    const loader = document.getElementById("customLoader");
    if (loader) {
      loader.classList.remove("hidden");
    }
  }

  // Hide the loader
  function hideLoader() {
    const loader = document.getElementById("customLoader");
    if (loader) {
      loader.classList.add("hidden");
    }
  }

  // Show loader on page load and hide after 3 seconds
  window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById("customLoader");
    if (loader) {
      showLoader();

      setTimeout(() => {
        hideLoader();
      }, 1000);
    }
  });

// Guard jQuery code - only run if jQuery is loaded
if (typeof $ !== 'undefined') {
  $(function () {
    $('#text-copy').on('click', function () {
      const textToCopy = $('#copied-item-text').text().trim();

      navigator.clipboard.writeText(textToCopy).then(() => {
        // Optional: add visual feedback
        const $button = $('#text-copy');
        const originalText = $button.find('span.md\\:block').text(); // Copy code
        const originalMobile = $button.find('span.block').text(); // C

        $button.find('span.md\\:block').text('Copied').addClass('text-green-500');
        $button.find('span.block').text('âœ"').addClass('text-green-500');

        setTimeout(() => {
          $button.find('span.md\\:block').text(originalText).removeClass('text-green-500');
          $button.find('span.block').text(originalMobile).removeClass('text-green-500');
        }, 4000);
      }).catch(err => {
        console.error('Failed to copy text:', err);
      });
    });
  });
}










// Guard jQuery code - only run if jQuery is loaded
if (typeof $ !== 'undefined') {
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
}
  

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

  // Check if elements exist before adding event listeners
  if (mobileMenuButton && mobileMenuOverlay) {
    mobileMenuButton.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      console.log("Mobile menu button clicked") // Debug log
      
      // Force a small scroll to trigger nav styles if at top
      const currentScrollY = window.scrollY
      if (currentScrollY === 0) {
        window.scrollTo(0, 1)
        // Wait a moment then scroll back to top
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 10)
      }
      
      mobileMenuOverlay.classList.remove("hidden")
      mobileMenuOverlay.style.display = "block"
      mobileMenuOverlay.style.position = "fixed"
      mobileMenuOverlay.style.top = "0"
      mobileMenuOverlay.style.left = "0"
      mobileMenuOverlay.style.right = "0"
      mobileMenuOverlay.style.bottom = "0"

      // Apply full width styles to header and nav when mobile menu opens
      if (header) {
        header.style.padding = "0"
        header.style.margin = "0"
      }
      if (nav) {
        nav.style.width = "100%"
        nav.style.margin = "0"
        nav.style.padding = "0"
        nav.style.setProperty('margin-top', '0', 'important')
        nav.style.boxShadow = "none"
        nav.style.borderRadius = "0"
        nav.style.backgroundColor = "transparent"
      }
    })
  } else {
    console.error("Mobile menu button or overlay not found")
  }

  if (closeMobileMenuButton && mobileMenuOverlay) {
    closeMobileMenuButton.addEventListener("click", (e) => {   
      e.preventDefault()
      e.stopPropagation()
      console.log("Close mobile menu button clicked") // Debug log
      mobileMenuOverlay.classList.add("hidden")
      mobileMenuOverlay.style.display = "none"

      // Reset header and nav styles based on scroll position when mobile menu closes
      if (window.scrollY > 0) {
        // Apply scrolled styles
        if (header) {
          header.style.padding = "0 16px"
        }
        if (nav) {
          nav.style.width = "700px"
          nav.style.margin = "10px auto"
          nav.style.padding = "10px 20px"
          nav.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.25)"
          nav.style.backgroundColor = "rgba(255, 255, 255, 0.6)"
          nav.style.borderRadius = "20px"
          nav.style.backdropFilter = "blur(12px)"
          
          // Add margin-top: 25px on mobile screens
          if (window.innerWidth <= 900) {
            nav.style.marginTop = "25px"
          } else {
            nav.style.marginTop = ""
          }
        }
      } else {
        // Apply top of page styles
        if (header) {
          header.style.padding = "0 16px"
        }
        if (nav) {
          nav.style.width = "1200px"
          nav.style.margin = "0 auto"
          nav.style.padding = "0"
          nav.style.boxShadow = "none"
          nav.style.borderRadius = "20px"
          nav.style.backgroundColor = "transparent"
          nav.style.backdropFilter = "blur(12px)"
          nav.style.marginTop = ""
        }
      }

    })
  }

  if (mobileMenuLinks.length > 0 && mobileMenuOverlay) {
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        console.log("Mobile menu link clicked") // Debug log
        mobileMenuOverlay.classList.add("hidden")
        mobileMenuOverlay.style.display = "none"

        // Reset header and nav styles based on scroll position when menu link is clicked
        if (window.scrollY > 0) {
          // Apply scrolled styles
          if (header) {
            header.style.padding = "0 16px"
          }
          if (nav) {
            nav.style.width = "700px"
            nav.style.margin = "10px auto"
            nav.style.padding = "10px 20px"
            nav.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.25)"
            nav.style.borderRadius = "20px"
            
            // Add margin-top: 25px on mobile screens
            if (window.innerWidth <= 900) {
              nav.style.marginTop = "25px"
            } else {
              nav.style.marginTop = ""
            }
          }
        } else {
          // Apply top of page styles
          if (header) {
            header.style.padding = "0 16px"
          }
          if (nav) {
            nav.style.width = "1200px"
            nav.style.margin = "0 auto"
            nav.style.padding = "0"
            nav.style.boxShadow = "none"
            nav.style.borderRadius = "20px"
            nav.style.backgroundColor = "transparent"
            nav.style.backdropFilter = "blur(12px)"
            nav.style.marginTop = ""
          }
        }

      })
    })
  }

  // Add click outside to close mobile menu
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", (e) => {
      if (e.target === mobileMenuOverlay) {
        // Trigger the close button click to reuse existing logic
        if (closeMobileMenuButton) {
          closeMobileMenuButton.click()
        }
      }
    })
  }

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

        // Remove active classes and add inactive classes
        otherButton.classList.remove("font-[800]", "text-[#0B0C0E]", "bg-[#F5F5F5]")
        otherButton.classList.add("font-[700]", "text-[#555861]", "group-hover:text-[#212121]", "bg-white")
        if (otherDescriptionDiv) {
          // otherDescriptionDiv.style.maxHeight = "0"
          otherDescriptionDiv.style.display = "none"
        }
        if (otherCircleDiv) {
          otherCircleDiv.remove() // Remove the circle
        }
      })

      // Activate the clicked item
      button.classList.remove("font-[700]", "text-[#555861]", "group-hover:text-[#212121]", "bg-white")
      button.classList.add("font-[800]", "text-[#0B0C0E]", "bg-[#F5F5F5]")
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

  // --- Pricing comparison table: header dropdown toggle ---
  const comparisonTableHeaders = document.querySelectorAll('.comparison-table .comparison-table__header-content')
  comparisonTableHeaders.forEach((headerEl) => {
    const tableContainer = headerEl.closest('.comparison-table')
    if (!tableContainer) return

    // Accessibility affordances
    headerEl.setAttribute('role', 'button')
    headerEl.setAttribute('tabindex', '0')
    headerEl.setAttribute('aria-expanded', 'true')

    function toggleComparisonSection() {
      const isCollapsed = tableContainer.getAttribute('data-collapsed') === 'true'
      const nextState = (!isCollapsed).toString()
      tableContainer.setAttribute('data-collapsed', nextState)
      headerEl.setAttribute('aria-expanded', isCollapsed ? 'true' : 'false')
    }

    headerEl.addEventListener('click', toggleComparisonSection)
    headerEl.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault()
        toggleComparisonSection()
      }
    })
  })
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
  const currentItem = button.closest('.faq-accordion-item');
  const content = currentItem.querySelector('.faq-accordion-content');
  const svg = button.querySelector('svg');

  // Close all others
  document.querySelectorAll('.faq-accordion-item').forEach(item => {
    const itemContent = item.querySelector('.faq-accordion-content');
    const icon = item.querySelector('svg');

    if (item !== currentItem) {
      itemContent.style.display = 'none';
      icon.classList.remove('faq-accordion-icon--rotated');
      item.classList.remove('faq-accordion-item--active');
    }
  });

  // Toggle this one
  const isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
  svg.classList.toggle('faq-accordion-icon--rotated', !isOpen);
  currentItem.classList.toggle('faq-accordion-item--active', !isOpen);
}





// Guard jQuery code - only run if jQuery is loaded
if (typeof $ !== 'undefined') {
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
}

    // pricing page rs range section
// (Slider logic moved inline into index.html to meet deployment constraints)

        
// Original toggle function for dropdown tables
function toggleDropdownTable() {
    const tableContent = document.getElementById('tableContent');
    const arrow = document.getElementById('arrow');
    
    if (tableContent && tableContent.style.display === 'none') {
        tableContent.style.display = 'block';
        arrow.classList.remove('rotate-180');
    } else if (tableContent) {
        tableContent.style.display = 'none';
        arrow.classList.add('rotate-180');
    }
}

// Set active tab and show/hide columns - defined early
window.setActiveTab = function(tierName) {
  
  // Update tab button states
  const tabButtons = document.querySelectorAll('.mobile-tab-btn');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-tier') === tierName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Update column visibility
  const allCells = document.querySelectorAll('.comparison-table__cell[data-tier]');
  allCells.forEach(cell => {
    const cellTier = cell.getAttribute('data-tier');
    
    // Remove mobile-active class from all cells
    cell.classList.remove('mobile-active');
    
    // Add mobile-active class to selected tier cells or label cells
    if (cellTier === tierName || cellTier === 'label') {
      cell.classList.add('mobile-active');
    }
  });

};

// Auto-add data attributes to table cells that don't have them - defined early
window.addMissingDataAttributes = function() {
  const rows = document.querySelectorAll('.comparison-table__row');
  
  rows.forEach(row => {
    const cells = row.querySelectorAll('.comparison-table__cell');
    cells.forEach((cell, index) => {
      // Skip if already has data-tier attribute
      if (cell.hasAttribute('data-tier')) return;
      
      // Add data-tier based on column position
      const tierMap = ['label', 'community', 'pro', 'startups', 'custom'];
      if (index < tierMap.length) {
        cell.setAttribute('data-tier', tierMap[index]);
      }
    });
  });
  
  // Ensure all first cells have data-tier="label" attribute
  rows.forEach(row => {
    const firstCell = row.querySelector('.comparison-table__cell:first-child');
    if (firstCell && !firstCell.hasAttribute('data-tier')) {
      firstCell.setAttribute('data-tier', 'label');
    }
  });
};

// Initialize data attributes and default tab immediately
if (document.readyState !== 'loading') {
  window.addMissingDataAttributes();
  // Set default tab after a brief delay to ensure DOM is ready
  setTimeout(() => {
    window.setActiveTab('community');
  }, 100);
} else {
  document.addEventListener('DOMContentLoaded', function() {
    window.addMissingDataAttributes();
    // Set default tab
    setTimeout(() => {
      window.setActiveTab('community');
    }, 100);
  });
}

// Mobile tabs toggle function
function toggleTable(tierName) {
    window.setActiveTab(tierName);
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

// ==============================================
// MOBILE PRICING TABS FUNCTIONALITY
// ==============================================

// Global variables to store the functions
let addMissingDataAttributes;


// Initialize mobile tabs functionality with direct event listeners
function initMobilePricingTabs() {
  
  // Add missing data attributes if not already done
  if (window.addMissingDataAttributes) {
    window.addMissingDataAttributes();
  }
  
  // Function to attach event listeners directly to buttons
  function attachListeners() {
    const tabButtons = document.querySelectorAll('.mobile-tab-btn');
    
    tabButtons.forEach((button, index) => {
      
      // Remove any existing listeners first
      button.removeEventListener('click', handleTabClick);
      
      // Add new listener
      button.addEventListener('click', handleTabClick, true);
      
      // Also add it as onclick for backup
      button.onclick = function(e) {
        handleTabClick(e);
      };
    });
    
    // Set initial active tab to community
    setTimeout(() => {
      if (window.setActiveTab) {
        window.setActiveTab('community');
      }
    }, 50);
  }
  
  // Tab click handler function
  function handleTabClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const selectedTier = e.target.getAttribute('data-tier');
    if (window.setActiveTab) {
      window.setActiveTab(selectedTier);
    }
  }
  
  // Try to attach listeners immediately
  attachListeners();
  
  // Also try again after a delay in case DOM wasn't ready
  setTimeout(attachListeners, 200);
  
  // And try one more time after a longer delay
  setTimeout(attachListeners, 1000);
}

// Initialize immediately to make functions available
setTimeout(() => {
  initMobilePricingTabs();
}, 100);

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initMobilePricingTabs();
});

// Also run immediately in case DOM is already loaded
if (document.readyState !== 'loading') {
  initMobilePricingTabs();
}

// Global function for testing from console
window.testMobileTabs = function() {
  const tabButtons = document.querySelectorAll('.mobile-tab-btn');
  const tableCells = document.querySelectorAll('.comparison-table__cell[data-tier]');
  
  if (tabButtons.length > 0) {
    tabButtons.forEach((button, index) => {
      button.onclick = function() {
        const tier = this.getAttribute('data-tier');
        setActiveTab(tier);
      };
    });
    
    tabButtons[0].click();
  }
};

// Global function to manually set active tab
window.setTab = function(tierName) {
  setActiveTab(tierName);
};

// Ensure community tab is selected by default after everything loads
setTimeout(() => {
  window.setActiveTab('community');
}, 200);
        