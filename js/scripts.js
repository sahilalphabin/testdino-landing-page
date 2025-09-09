// ============================================================================
// GLOBAL / SHARED COMPONENTS
// ============================================================================

// Ensure popup modal is hidden on page load (vanilla JS - loads before jQuery)
document.addEventListener('DOMContentLoaded', function() {
  const popupOverlay = document.getElementById('popup-overlay');
  if (popupOverlay) {
    popupOverlay.classList.add('hidden');
  }
});

// ============================================================================
// NAVIGATION HEADER COMPONENT
// ============================================================================

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
  
  // Use any scroll movement for navigation color changes
  const isScrolled = window.scrollY > 0;
  const isMobile = window.innerWidth <= 767;
  const isIndexPage = document.body.classList.contains('index-page');
  
  // Add/remove scrolled class for CSS to handle
  if (isScrolled) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
  
  // Handle mobile navigation color changes based on scroll - INDEX PAGE ONLY
  if (isMobile && isIndexPage) {
    const navLinks = document.querySelectorAll('.nav-link');
    const navCta = document.querySelector('.nav-cta-button');
    const hamburger = document.querySelector('.mobile-menu-button svg rect');
    const logo = document.querySelector('.nav-logo-img');
    
    if (isScrolled) {
      // Any scroll movement - change to black theme
      navLinks.forEach(link => {
        link.style.color = '#171717';
      });
      if (navCta) {
        navCta.style.backgroundColor = '#171717';
        navCta.style.color = '#ffffff';
        navCta.style.borderColor = '#171717';
      }
      if (hamburger) {
        document.querySelectorAll('.mobile-menu-button svg rect').forEach(rect => {
          rect.style.fill = '#141414';
        });
      }
      if (logo) {
        logo.style.content = 'url("../../Testdino Landing Page Images/icons/logo_testdino.svg")';
      }
    } else {
      // No scroll - keep white theme
      navLinks.forEach(link => {
        link.style.color = '#ffffff';
      });
      if (navCta) {
        navCta.style.backgroundColor = '#ffffff';
        navCta.style.color = '#171717';
        navCta.style.borderColor = '#ffffff';
      }
      if (hamburger) {
        document.querySelectorAll('.mobile-menu-button svg rect').forEach(rect => {
          rect.style.fill = '#ffffff';
        });
      }
      if (logo) {
        logo.style.content = 'url("../../Testdino Landing Page Images/icons/White_testdino_logo.svg")';
      }
    }
  }
  
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
  if (window.innerWidth <= 900) {
    nav.style.marginTop = '25px';
  } else {
    nav.style.marginTop = ''; // Reset for larger screens
  }
} else {
    // Reset styles when at top
    nav.style.width = '';
    nav.style.margin = '';
    nav.style.padding = '';
    nav.style.boxShadow = '';
    nav.style.backgroundColor = "";
    nav.style.borderRadius = '';
    header.style.padding = '';
    nav.style.backdropFilter = '';
    nav.style.marginTop = '';
  }
});

// ============================================================================
// MOBILE MENU COMPONENT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  const closeMobileMenuButton = document.getElementById("close-mobile-menu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

  if (mobileMenuButton && mobileMenuOverlay) {
    mobileMenuButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Mobile menu button clicked");
      
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        window.scrollTo(0, 1);
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 10);
      }
      
      mobileMenuOverlay.classList.remove("hidden");
      mobileMenuOverlay.style.display = "block";
      mobileMenuOverlay.style.position = "fixed";
      mobileMenuOverlay.style.top = "0";
      mobileMenuOverlay.style.left = "0";
      mobileMenuOverlay.style.right = "0";
      mobileMenuOverlay.style.bottom = "0";
      
      document.body.classList.add('mobile-menu-open');

      if (header) {
        header.style.padding = "0";
        header.style.margin = "0";
      }
      if (nav) {
        nav.style.width = "100%";
        nav.style.margin = "0";
        nav.style.padding = "0";
        nav.style.setProperty('margin-top', '0', 'important');
        nav.style.boxShadow = "none";
        nav.style.borderRadius = "0";
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      }
      
      const isIndexPage = document.body.classList.contains('index-page');
      if (isIndexPage) {
        const logo = document.querySelector('.nav-logo-img');
        const mobileMenuLogo = document.querySelector('.mobile-menu-logo .nav-logo-img');
        if (logo) {
          logo.style.content = 'url("../../Testdino Landing Page Images/icons/logo_testdino.svg")' + ' !important';
          logo.style.setProperty('content', 'url("../../Testdino Landing Page Images/icons/logo_testdino.svg")', 'important');
        }
        if (mobileMenuLogo) {
          mobileMenuLogo.style.content = 'url("../../Testdino Landing Page Images/icons/logo_testdino.svg")' + ' !important';
          mobileMenuLogo.style.setProperty('content', 'url("../../Testdino Landing Page Images/icons/logo_testdino.svg")', 'important');
        }
        
        document.querySelectorAll('.mobile-menu-button svg rect').forEach(rect => {
          rect.style.setProperty('fill', '#141414', 'important');
        });
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
          link.style.setProperty('color', '#171717', 'important');
        });
        
        const navCta = document.querySelector('.nav-cta-button');
        if (navCta) {
          navCta.style.setProperty('background-color', '#171717', 'important');
          navCta.style.setProperty('color', '#ffffff', 'important');
          navCta.style.setProperty('border-color', '#171717', 'important');
        }
      }
    });
  } else {
    console.error("Mobile menu button or overlay not found");
  }

  if (closeMobileMenuButton && mobileMenuOverlay) {
    closeMobileMenuButton.addEventListener("click", (e) => {   
      e.preventDefault();
      e.stopPropagation();
      console.log("Close mobile menu button clicked");
      mobileMenuOverlay.classList.add("hidden");
      mobileMenuOverlay.style.display = "none";
      
      document.body.classList.remove('mobile-menu-open');

      const isScrolled = window.scrollY > 0;
      const isMobile = window.innerWidth <= 767;
      const isIndexPage = document.body.classList.contains('index-page');
      
      if (window.scrollY > 0) {
        if (header) {
          header.style.padding = "0 16px";
        }
        if (nav) {
          nav.style.width = "700px";
          nav.style.margin = "10px auto";
          nav.style.padding = "10px 20px";
          nav.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.25)";
          nav.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
          nav.style.borderRadius = "20px";
          nav.style.backdropFilter = "blur(12px)";
          
          if (window.innerWidth <= 900) {
            nav.style.marginTop = "25px";
          } else {
            nav.style.marginTop = "";
          }
        }
      } else {
        if (header) {
          header.style.padding = "0 16px";
        }
        if (nav) {
          nav.style.width = "1200px";
          nav.style.margin = "0 auto";
          nav.style.padding = "0";
          nav.style.boxShadow = "none";
          nav.style.borderRadius = "20px";
          nav.style.backdropFilter = "blur(12px)";
          nav.style.marginTop = "";
        }
      }
      
      if (isMobile && isIndexPage) {
        const logo = document.querySelector('.nav-logo-img');
        const navLinks = document.querySelectorAll('.nav-link');
        const navCta = document.querySelector('.nav-cta-button');
        
        if (isScrolled) {
          if (logo) {
            logo.style.content = 'url("../../Testdino Landing Page Images/icons/logo_testdino.svg")';
          }
          navLinks.forEach(link => {
            link.style.color = '#171717';
          });
          if (navCta) {
            navCta.style.backgroundColor = '#171717';
            navCta.style.color = '#ffffff';
            navCta.style.borderColor = '#171717';
          }
          document.body.classList.add('scrolled');
        } else {
          if (logo) {
            logo.style.content = 'url("../../Testdino Landing Page Images/icons/White_testdino_logo.svg")';
          }
          navLinks.forEach(link => {
            link.style.color = '#ffffff';
          });
          if (navCta) {
            navCta.style.backgroundColor = '#ffffff';
            navCta.style.color = '#171717';
            navCta.style.borderColor = '#ffffff';
          }
          document.body.classList.remove('scrolled');
        }
      }
    });
  }

  if (mobileMenuLinks.length > 0 && mobileMenuOverlay) {
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        console.log("Mobile menu link clicked");
        mobileMenuOverlay.classList.add("hidden");
        mobileMenuOverlay.style.display = "none";
        
        document.body.classList.remove('mobile-menu-open');

        const isScrolled = window.scrollY > 0;
        const isMobile = window.innerWidth <= 767;
        const isIndexPage = document.body.classList.contains('index-page');
        
        if (window.scrollY > 0) {
          if (header) {
            header.style.padding = "0 16px";
          }
          if (nav) {
            nav.style.width = "700px";
            nav.style.margin = "10px auto";
            nav.style.padding = "10px 20px";
            nav.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.25)";
            nav.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
            nav.style.borderRadius = "20px";
            nav.style.backdropFilter = "blur(12px)";
            
            if (window.innerWidth <= 900) {
              nav.style.marginTop = "25px";
            } else {
              nav.style.marginTop = "";
            }
          }
        } else {
          if (header) {
            header.style.padding = "0 16px";
          }
          if (nav) {
            nav.style.width = "1200px";
            nav.style.margin = "0 auto";
            nav.style.padding = "0";
            nav.style.boxShadow = "none";
            nav.style.borderRadius = "20px";
            nav.style.backdropFilter = "blur(12px)";
            nav.style.marginTop = "";
          }
        }
        
        if (isMobile && isIndexPage) {
          const logo = document.querySelector('.nav-logo-img');
          const navLinks = document.querySelectorAll('.nav-link');
          const navCta = document.querySelector('.nav-cta-button');
          
          if (isScrolled) {
            if (logo) {
              logo.style.content = 'url("../../Testdino Landing Page Images/icons/logo_testdino.svg")';
            }
            navLinks.forEach(link => {
              link.style.color = '#171717';
            });
            if (navCta) {
              navCta.style.backgroundColor = '#171717';
              navCta.style.color = '#ffffff';
              navCta.style.borderColor = '#171717';
            }
            document.body.classList.add('scrolled');
          } else {
            if (logo) {
              logo.style.content = 'url("../../Testdino Landing Page Images/icons/White_testdino_logo.svg")';
            }
            navLinks.forEach(link => {
              link.style.color = '#ffffff';
            });
            if (navCta) {
              navCta.style.backgroundColor = '#ffffff';
              navCta.style.color = '#171717';
              navCta.style.borderColor = '#ffffff';
            }
            document.body.classList.remove('scrolled');
          }
        }
      });
    });
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", (e) => {
      if (e.target === mobileMenuOverlay) {
        if (closeMobileMenuButton) {
          closeMobileMenuButton.click();
        }
      }
    });
  }
});

// ============================================================================
// BLOG PAGES COMPONENT
// ============================================================================

// Blog category filter functionality moved from blogs.html
document.addEventListener('DOMContentLoaded', function () {
  const filterContainer = document.getElementById('blog-category-filters');
  if (!filterContainer) return;
  filterContainer.addEventListener('click', function (e) {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;
    filterContainer.querySelectorAll('.category-btn').forEach((b, i) => {
      if (b === btn) {
        b.classList.remove('inactive');
        b.classList.add('active');
      } else {
        b.classList.remove('active');
        b.classList.add('inactive');
      }
    });
    // TODO: Filter blog posts by btn.dataset.category
  });
});

// Blog pagination navigation functionality
document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('button[disabled]');
  const nextButton = document.querySelector('button:not([disabled])');
  const pageButtons = document.querySelectorAll('.w-10.h-10.rounded-lg');
  
  if (pageButtons.length > 0) {
    let currentPage = 1;
    const totalPages = 10;
    
    function updatePagination(selectedPage) {
      currentPage = selectedPage;
      
      pageButtons.forEach((btn, index) => {
        const pageNum = parseInt(btn.textContent);
        
        if (pageNum === currentPage) {
          btn.classList.add('border', 'border-gray-300');
          btn.classList.remove('text-[#525252]');
          btn.classList.add('text-[#171717]', 'font-semibold');
        } else {
          btn.classList.remove('border', 'border-gray-300', 'text-[#171717]', 'font-semibold');
          btn.classList.add('text-[#525252]');
        }
      });
      
      if (prevButton) {
        prevButton.disabled = currentPage === 1;
        if (currentPage === 1) {
          prevButton.classList.add('disabled:text-gray-300', 'disabled:cursor-not-allowed');
        } else {
          prevButton.classList.remove('disabled:text-gray-300', 'disabled:cursor-not-allowed');
        }
      }
      
      if (nextButton) {
        nextButton.disabled = currentPage === totalPages;
        if (currentPage === totalPages) {
          nextButton.classList.add('disabled:text-gray-300', 'disabled:cursor-not-allowed');
        } else {
          nextButton.classList.remove('disabled:text-gray-300', 'disabled:cursor-not-allowed');
        }
      }
    }
    
    pageButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const pageNum = parseInt(this.textContent);
        updatePagination(pageNum);
      });
    });
    
    if (prevButton && !prevButton.disabled) {
      prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
          updatePagination(currentPage - 1);
        }
      });
    }
    
    if (nextButton) {
      nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
          updatePagination(currentPage + 1);
        }
      });
    }
    
    updatePagination(1);
  }
});

// ============================================================================
// PRICING PAGE COMPONENT
// ============================================================================

// Pricing slider functionality moved from index.html
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('testExecutionSlider');
  const displayValue = document.getElementById('testExecutionValue');
  const pricingCards = document.querySelectorAll('.pricing-card');

  if (!slider || !displayValue) return;

  function updateSliderDisplay() {
    const value = parseInt(slider.value);
    const values = ['Free', '15k', '25k', '45k', '100k', '200k'];
    const selectedValue = values[value];
    displayValue.textContent = selectedValue;

    pricingCards.forEach(card => {
      card.classList.remove('active-plan');
      card.classList.remove('active-plan--black');
      card.classList.remove('active-plan--gradient-pro');
      card.classList.remove('active-plan--gradient-team');
    });

    let activeCardIndex = 0;
    if (value === 0) {
      activeCardIndex = 0; // Community
    } else if (value === 1 || value === 2) {
      activeCardIndex = 1; // Pro
    } else if (value === 3 || value === 4) {
      activeCardIndex = 2; // Team
    } else if (value === 5) {
      activeCardIndex = 3; // Enterprise
    }

    if (pricingCards[activeCardIndex]) {
      if (value === 0 || value === 5) {
        pricingCards[activeCardIndex].classList.add('active-plan--black');
      } else if (value === 1 || value === 2) {
        // Apply gradient border to pro plan (15k and 25k)
        if (pricingCards[activeCardIndex].classList.contains('pricing-card--pro')) {
          pricingCards[activeCardIndex].classList.add('active-plan--gradient-pro');
        } else {
          pricingCards[activeCardIndex].classList.add('active-plan');
        }
      } else if (value === 3 || value === 4) {
        // Apply gradient border to team plan (45k and 100k)
        if (pricingCards[activeCardIndex].classList.contains('pricing-card--team')) {
          pricingCards[activeCardIndex].classList.add('active-plan--gradient-team');
        } else {
          pricingCards[activeCardIndex].classList.add('active-plan');
        }
      }
    }

    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const percentage = ((value - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, #171717 0%, #171717 ${percentage}%, #ffffff ${percentage}%, #ffffff 100%)`;
  }

  updateSliderDisplay();
  slider.addEventListener('input', updateSliderDisplay);
});

// ============================================================================
// HOME PAGE COMPONENTS
// ============================================================================

// Page loader functionality
function showLoader() {
  const loader = document.getElementById("customLoader");
  if (loader) {
    loader.classList.remove("hidden");
  }
}

function hideLoader() {
  const loader = document.getElementById("customLoader");
  if (loader) {
    loader.classList.add("hidden");
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById("customLoader");
  if (loader) {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 1000);
  }
});

// Hero section image changing functionality
function changeImage(id, el) {
  const imageMap = {
    image1: 'Testdino Landing Page Images/Hero section thumbnail image/TestDino Overview.svg',
    image2: 'Testdino Landing Page Images/Hero section thumbnail image/Test Runs.svg',
    image3: 'Testdino Landing Page Images/Hero section thumbnail image/Pull Request.svg',
    image4: 'Testdino Landing Page Images/Hero section thumbnail image/Analytics.svg'
  };

  const videoMap = {
    image1: 'https://www.youtube.com/embed/s8wgAsvapSQ',
    image2: 'https://www.youtube.com/embed/5QMQms3wl6s',
    image3: 'https://www.youtube.com/embed/LM1aK68J-0E',
    image4: 'https://www.youtube.com/embed/aXUN8222288'
  };

  const imageWrapper = document.getElementById('imageWrapper');
  const imageUrl = imageMap[id];
  const videoUrl = videoMap[id];
  
  const newContentContainer = document.createElement('div');
  newContentContainer.className = 'absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out';
  
  const mainImage = document.createElement('img');
  mainImage.id = 'mainImage';
  mainImage.src = imageUrl;
  mainImage.alt = 'Dashboard Image';
  mainImage.className = 'w-[90vw] h-auto object-contain transition-all duration-500';
  mainImage.style.minWidth = '320px';
  
  const svgOverlay = document.createElement('a');
  svgOverlay.id = 'svgOverlay';
  svgOverlay.href = 'javascript:void(0)';
  svgOverlay.className = 'group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
  svgOverlay.onclick = function() { playVideo(this); };
  svgOverlay.setAttribute('data-video', videoUrl);
  
  const playButton = document.createElement('img');
  playButton.src = 'Testdino Landing Page Images/icons/playbutton.svg';
  playButton.alt = 'Play';
  playButton.className = 'w-16 h-16';
  svgOverlay.appendChild(playButton);
  
  newContentContainer.appendChild(mainImage);
  newContentContainer.appendChild(svgOverlay);
  
  if (imageWrapper.style.position !== 'relative') {
    imageWrapper.style.position = 'relative';
  }
  
  imageWrapper.appendChild(newContentContainer);
  
  setTimeout(() => {
    newContentContainer.classList.remove('opacity-0');
    newContentContainer.classList.add('opacity-100');
  }, 50);
  
  setTimeout(() => {
    const children = Array.from(imageWrapper.children);
    children.forEach(child => {
      if (child !== newContentContainer) {
        child.remove();
      }
    });
    
    imageWrapper.innerHTML = '';
    imageWrapper.appendChild(mainImage);
    imageWrapper.appendChild(svgOverlay);
  }, 550);

  const buttons = document.querySelectorAll('#sidebarList button');
  buttons.forEach(btn => {
    btn.classList.remove('bg-[#F1F2F4]', 'font-[700]', 'border', 'border-[#D4D4D4]');
  });

  el.classList.add('bg-[#F1F2F4]', 'font-[700]', 'border', 'border-[#D4D4D4]');
}

// Video player functionality
function playVideo(el, width='90vw') {
  const videoUrl = el.getAttribute('data-video');
  const imageWrapper = document.getElementById('imageWrapper');

  const autoplayUrl = videoUrl + '?autoplay=1&mute=1';

  const newVideoContainer = document.createElement('div');
  newVideoContainer.className = 'absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out';
  
  const videoContainer = document.createElement('div');
  videoContainer.style.position = 'relative';
  videoContainer.style.width = width;
  videoContainer.style.margin = '0 auto';
  
  const spacer = document.createElement('div');
  spacer.style.paddingTop = '56.25%';
  
  const iframe = document.createElement('iframe');
  iframe.src = autoplayUrl;
  iframe.style.position = 'absolute';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.borderRadius = '12px';
  iframe.style.minHeight = '220px';
  iframe.className = 'transition-all duration-500 w-full h-full';
  iframe.frameBorder = '0';
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullscreen = true;
  iframe.title = 'Demo Video';
  
  videoContainer.appendChild(spacer);
  videoContainer.appendChild(iframe);
  newVideoContainer.appendChild(videoContainer);
  
  if (imageWrapper.style.position !== 'relative') {
    imageWrapper.style.position = 'relative';
  }
  
  imageWrapper.appendChild(newVideoContainer);
  
  setTimeout(() => {
    newVideoContainer.classList.remove('opacity-0');
    newVideoContainer.classList.add('opacity-100');
  }, 50);
  
  setTimeout(() => {
    const children = Array.from(imageWrapper.children);
    children.forEach(child => {
      if (child !== newVideoContainer) {
        child.remove();
      }
    });
    
    imageWrapper.innerHTML = '';
    imageWrapper.appendChild(videoContainer);
  }, 550);
}

// Interactive features section
document.addEventListener("DOMContentLoaded", () => {
  const interactiveFeatureItems = document.querySelectorAll(".interactive-feature-item");
  const interactiveFeatureMockup = document.getElementById("interactive-feature-mockup");

  interactiveFeatureItems.forEach((item) => {
    const button = item.querySelector("button");
    const descriptionDiv = item.querySelector(".overflow-hidden");
    const circleDiv = item.querySelector(".circle-active-div");

    button.addEventListener("click", () => {
      interactiveFeatureItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector("button");
        const otherDescriptionDiv = otherItem.querySelector(".overflow-hidden");
        const otherCircleDiv = otherItem.querySelector(".circle-active-div");

        otherButton.classList.remove("font-[800]", "text-[#0B0C0E]", "bg-[#F5F5F5]");
        otherButton.classList.add("font-[700]", "text-[#555861]", "group-hover:text-[#212121]", "bg-white");
        if (otherDescriptionDiv) {
          otherDescriptionDiv.style.display = "none";
        }
        if (otherCircleDiv) {
          otherCircleDiv.remove();
        }
      });

      button.classList.remove("font-[700]", "text-[#555861]", "group-hover:text-[#212121]", "bg-white");
      button.classList.add("font-[800]", "text-[#0B0C0E]", "bg-[#F5F5F5]");
      if (descriptionDiv) {
        descriptionDiv.style.display = "block";
      }
      if (!circleDiv) {
        const w6Div = item.querySelector(".review-syste-list");
        if (w6Div) {
          const newCircle = document.createElement("div");
          newCircle.classList.add("w-4", "h-4", "bg-[#0B0C0E]", "rounded-full", "circle-active-div");
          w6Div.appendChild(newCircle);
        }
      }
    });
  });

  const buttons = document.querySelectorAll('.interactive-feature-item button');
  const mockups = document.querySelectorAll('.feature-mockup');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const featureId = button.getAttribute('data-feature-id');
      const imgSrc = button.getAttribute('data-img-src');

      if (interactiveFeatureMockup && imgSrc) {
        const spinner = document.getElementById('image-loading-spinner');
        
        const newImage = new Image();
        let spinnerTimeout;
        let imageLoaded = false;
        
        newImage.onload = function() {
          imageLoaded = true;
          if (spinnerTimeout) {
            clearTimeout(spinnerTimeout);
          }
          interactiveFeatureMockup.src = imgSrc;
          if (spinner && !spinner.classList.contains('hidden')) {
            spinner.classList.add('hidden');
          }
        };
        
        newImage.onerror = function() {
          imageLoaded = true;
          if (spinnerTimeout) {
            clearTimeout(spinnerTimeout);
          }
          if (spinner && !spinner.classList.contains('hidden')) {
            spinner.classList.add('hidden');
          }
        };
        
        spinnerTimeout = setTimeout(() => {
          if (!imageLoaded && spinner) {
            spinner.classList.remove('hidden');
          }
        }, 200);
        
        newImage.src = imgSrc;
      }

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

  window.addEventListener('DOMContentLoaded', () => {
    if (buttons[0]) buttons[0].click();
  });

  // Business categories slider
  const businessSliderRef = document.getElementById("business-categories-slider");
  const businessSliderDots = document.querySelectorAll("#business-slider-dots button");
  let activeBusinessSlide = 0;

  function updateBusinessSliderDots() {
    businessSliderDots.forEach((dot, index) => {
      if (index === activeBusinessSlide) {
        dot.classList.add("w-6", "bg-[#645cfc]");
        dot.classList.remove("w-2", "bg-gray-300");
      } else {
        dot.classList.add("w-2", "bg-gray-300");
        dot.classList.remove("w-6", "bg-[#645cfc]");
      }
    });
  }

  function scrollToBusinessSlide(index) {
    if (businessSliderRef) {
      const slideWidth = businessSliderRef.offsetWidth;
      businessSliderRef.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
      activeBusinessSlide = index;
      updateBusinessSliderDots();
    }
  }

  businessSliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => scrollToBusinessSlide(index));
  });

  if (businessSliderRef) {
    businessSliderRef.addEventListener("scroll", () => {
      const scrollPosition = businessSliderRef.scrollLeft;
      const slideWidth = businessSliderRef.offsetWidth;
      const newActiveSlide = Math.round(scrollPosition / slideWidth);
      if (newActiveSlide !== activeBusinessSlide) {
        activeBusinessSlide = newActiveSlide;
        updateBusinessSliderDots();
      }
    });
  }
  updateBusinessSliderDots();

  // Fade-in animation for "The wiser way" section
  const wiserWaySectionHeader = document.querySelector('.animate-fade-in[data-animate="true"]');
  if (wiserWaySectionHeader) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(wiserWaySectionHeader);
  }

  // Header dropdown hover effect
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

  // FAQ accordion functionality
  window.toggleAccordion = function(button) {
    const currentItem = button.closest('.faq-accordion-item');
    const content = currentItem.querySelector('.faq-accordion-content');
    const svg = button.querySelector('svg');

    document.querySelectorAll('.faq-accordion-item').forEach(item => {
      const itemContent = item.querySelector('.faq-accordion-content');
      const icon = item.querySelector('svg');

      if (item !== currentItem) {
        itemContent.style.display = 'none';
        icon.classList.remove('faq-accordion-icon--rotated');
        item.classList.remove('faq-accordion-item--active');
      }
    });

    const isOpen = content.style.display === 'block';
    content.style.display = isOpen ? 'none' : 'block';
    svg.classList.toggle('faq-accordion-icon--rotated', !isOpen);
    currentItem.classList.toggle('faq-accordion-item--active', !isOpen);
  }

  // Report issue textarea placeholder
  const textarea = document.getElementById("reportIssue");
  if (textarea) {
    const placeholderText = `• Flaky tests, no root cause shown
• Too noisy, lacks insights
• Briefly share your test reporting pain…`;

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
  }
});

// ============================================================================
// PRICING PAGE COMPONENTS 
// ============================================================================

// Mobile pricing tabs functionality
window.setActiveTab = function(tierName) {
  const tabButtons = document.querySelectorAll('.mobile-tab-btn');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-tier') === tierName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  const allCells = document.querySelectorAll('.comparison-table__cell[data-tier]');
  allCells.forEach(cell => {
    const cellTier = cell.getAttribute('data-tier');
    cell.classList.remove('mobile-active');
    
    if (cellTier === tierName || cellTier === 'label') {
      cell.classList.add('mobile-active');
    }
  });
};

window.addMissingDataAttributes = function() {
  const rows = document.querySelectorAll('.comparison-table__row');
  
  rows.forEach(row => {
    const cells = row.querySelectorAll('.comparison-table__cell');
    cells.forEach((cell, index) => {
      if (cell.hasAttribute('data-tier')) return;
      
      const tierMap = ['label', 'community', 'pro', 'startups', 'custom'];
      if (index < tierMap.length) {
        cell.setAttribute('data-tier', tierMap[index]);
      }
    });
  });
  
  rows.forEach(row => {
    const firstCell = row.querySelector('.comparison-table__cell:first-child');
    if (firstCell && !firstCell.hasAttribute('data-tier')) {
      firstCell.setAttribute('data-tier', 'label');
    }
  });
};

function initMobilePricingTabs() {
  if (window.addMissingDataAttributes) {
    window.addMissingDataAttributes();
  }
  
  function attachListeners() {
    const tabButtons = document.querySelectorAll('.mobile-tab-btn');
    
    tabButtons.forEach((button, index) => {
      button.removeEventListener('click', handleTabClick);
      button.addEventListener('click', handleTabClick, true);
      
      button.onclick = function(e) {
        handleTabClick(e);
      };
    });
    
    setTimeout(() => {
      if (window.setActiveTab) {
        window.setActiveTab('community');
      }
    }, 50);
  }
  
  function handleTabClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const selectedTier = e.target.getAttribute('data-tier');
    if (window.setActiveTab) {
      window.setActiveTab(selectedTier);
    }
  }
  
  attachListeners();
  setTimeout(attachListeners, 200);
  setTimeout(attachListeners, 1000);
}

// Initialize pricing tabs
setTimeout(() => {
  initMobilePricingTabs();
}, 100);

document.addEventListener('DOMContentLoaded', function() {
  initMobilePricingTabs();
});

if (document.readyState !== 'loading') {
  initMobilePricingTabs();
}

// Pricing comparison table functionality
document.addEventListener("DOMContentLoaded", () => {
  const comparisonTableHeaders = document.querySelectorAll('.comparison-table .comparison-table__header-content');
  comparisonTableHeaders.forEach((headerEl) => {
    const tableContainer = headerEl.closest('.comparison-table');
    if (!tableContainer) return;

    headerEl.setAttribute('role', 'button');
    headerEl.setAttribute('tabindex', '0');
    headerEl.setAttribute('aria-expanded', 'true');

    function toggleComparisonSection() {
      const isCollapsed = tableContainer.getAttribute('data-collapsed') === 'true';
      const nextState = (!isCollapsed).toString();
      tableContainer.setAttribute('data-collapsed', nextState);
      headerEl.setAttribute('aria-expanded', isCollapsed ? 'true' : 'false');
    }

    headerEl.addEventListener('click', toggleComparisonSection);
    headerEl.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        toggleComparisonSection();
      }
    });
  });
});

// Dropdown table toggle
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

// Monthly/yearly billing toggle
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
  });
}

// Global pricing utility functions
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

window.setTab = function(tierName) {
  setActiveTab(tierName);
};

setTimeout(() => {
  window.setActiveTab('community');
}, 200);

// Enhanced pricing functionality moved from pricing.html
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('testExecutionSlider');
  const displayValue = document.getElementById('testExecutionValue');
  const pricingCards = document.querySelectorAll('.pricing-card');

  if (slider && displayValue) {
    function updateSliderDisplay() {
      const value = parseInt(slider.value);
      const values = ['Free', '15k', '25k', '45k', '100k', '200k'];
      const selectedValue = values[value];
      displayValue.textContent = selectedValue;

      pricingCards.forEach(card => {
        card.classList.remove('active-plan');
        card.classList.remove('active-plan--black');
        card.classList.remove('active-plan--gradient-pro');
        card.classList.remove('active-plan--gradient-team');
      });

      let activeCardIndex = 0;
      if (value === 0) { activeCardIndex = 0; }
      else if (value === 1 || value === 2) { activeCardIndex = 1; }
      else if (value === 3 || value === 4) { activeCardIndex = 2; }
      else if (value === 5) { activeCardIndex = 3; }

      if (pricingCards[activeCardIndex]) {
        if (value === 0 || value === 5) {
          pricingCards[activeCardIndex].classList.add('active-plan--black');
        } else if (value === 1 || value === 2) {
          if (pricingCards[activeCardIndex].classList.contains('pricing-card--pro')) {
            pricingCards[activeCardIndex].classList.add('active-plan--gradient-pro');
          } else {
            pricingCards[activeCardIndex].classList.add('active-plan');
          }
        } else if (value === 3 || value === 4) {
          if (pricingCards[activeCardIndex].classList.contains('pricing-card--team')) {
            pricingCards[activeCardIndex].classList.add('active-plan--gradient-team');
          } else {
            pricingCards[activeCardIndex].classList.add('active-plan');
          }
        }
      }

      const min = parseFloat(slider.min);
      const max = parseFloat(slider.max);
      const percentage = ((value - min) / (max - min)) * 100;
      slider.style.setProperty('background', `linear-gradient(to right, #171717 0%, #171717 ${percentage}%, #ffffff ${percentage}%, #ffffff 100%)`, 'important');
    }

    updateSliderDisplay();
    slider.addEventListener('input', updateSliderDisplay);
    slider.addEventListener('change', updateSliderDisplay);

    // Billing toggle functionality
    const billingRadios = document.querySelectorAll('input[name="billing"]');
    
    function updatePricing() {
      const selectedBilling = document.querySelector('input[name="billing"]:checked').value;
      const pricingElements = document.querySelectorAll('.pricing-card-price-text[data-monthly-price]');
                      
      pricingElements.forEach(element => {
        const monthlyPrice = element.getAttribute('data-monthly-price');
        const annualPrice = element.getAttribute('data-annual-price');
        const priceUnit = element.querySelector('.pricing-card-price-unit');
        
        if (selectedBilling === 'monthly') {
          element.childNodes[0].textContent = `$${monthlyPrice} `;
          priceUnit.textContent = '/month';
        } else {
          element.childNodes[0].textContent = `$${annualPrice} `;
          priceUnit.textContent = '/year';
        }
      });
    }

    billingRadios.forEach(radio => {
      radio.addEventListener('change', updatePricing);
    });

    const monthlyRadio = document.querySelector('input[name="billing"][value="monthly"]');
    if (monthlyRadio) {
      monthlyRadio.checked = true;
    }
    
    const checkedRadio = document.querySelector('input[name="billing"]:checked');
    if (!checkedRadio) {
      monthlyRadio.checked = true;
    }
    
    updatePricing();
    
    setTimeout(() => {
      const finalCheck = document.querySelector('input[name="billing"]:checked');
      if (finalCheck && finalCheck.value === 'monthly') {
      } else {
        monthlyRadio.checked = true;
        updatePricing();
      }
    }, 100);

    // Comparison table pricing toggle functionality
    function initializeComparisonPricing() {
      const comparisonMonthlyRadio = document.querySelector('#comparison-monthly');
      const comparisonAnnuallyRadio = document.querySelector('#comparison-annually');
      
      if (comparisonMonthlyRadio && comparisonAnnuallyRadio) {
        comparisonMonthlyRadio.checked = true;
        comparisonAnnuallyRadio.checked = false;
        updateComparisonPricing();
      } else {
        console.log('Radio buttons not found!');
      }
    }
    
    function updateComparisonPricing() {
      const selectedBilling = document.querySelector('input[name="comparison-billing"]:checked');                
      if (!selectedBilling) {
        const comparisonMonthlyRadio = document.querySelector('#comparison-monthly');
        if (comparisonMonthlyRadio) {
          comparisonMonthlyRadio.checked = true;
        }
        return;
      }
      
      const selectedValue = selectedBilling.value;
      
      const proPriceElement = document.querySelector('.comparison-price--pro');
      const proPriceUnitElement = document.querySelector('.comparison-price-unit--pro');
      const startupsPriceElement = document.querySelector('.comparison-price--startups');
      const startupsPriceUnitElement = document.querySelector('.comparison-price-unit--startups');

      if (selectedValue === 'monthly') {
        if (proPriceElement) proPriceElement.textContent = '$18';
        if (proPriceUnitElement) proPriceUnitElement.textContent = '/month';
        if (startupsPriceElement) startupsPriceElement.textContent = '$49';
        if (startupsPriceUnitElement) startupsPriceUnitElement.textContent = '/month';
      } else {
        if (proPriceElement) proPriceElement.textContent = '$173';
        if (proPriceUnitElement) proPriceUnitElement.textContent = '/year';
        if (startupsPriceElement) startupsPriceElement.textContent = '$471';
        if (startupsPriceUnitElement) startupsPriceUnitElement.textContent = '/year';
      }
    }

    const comparisonBillingRadios = document.querySelectorAll('input[name="comparison-billing"]');
    comparisonBillingRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        updateComparisonPricing();
      });
    });
    
    initializeComparisonPricing();
    setTimeout(initializeComparisonPricing, 10);
    setTimeout(initializeComparisonPricing, 100);
    setTimeout(initializeComparisonPricing, 500);
  }
});

// ============================================================================
// INDIVIDUAL BLOG PAGES COMPONENTS
// ============================================================================

// Copy code functionality for blog pages
window.copyCode = function() {
  const codeElement = document.getElementById('playwright-reporter-config');
  const copyButton = document.getElementById('copy-button');
  const copyText = document.getElementById('copy-text');
  
  navigator.clipboard.writeText(codeElement.innerText).then(() => {
    copyText.textContent = 'Copied!';
    
    setTimeout(() => {
      copyText.textContent = 'Copy code';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};

// Copy current URL functionality for blog pages
window.copyCurrentUrl = function(btn) {
  const url = window.location.href;
  const img = btn.querySelector('img');
  const originalSrc = img.src;
  
  navigator.clipboard.writeText(url).then(() => {
    img.src = 'Testdino Landing Page Images/Pricing/icons/tick.svg';
    img.alt = 'Copied';
    
    setTimeout(() => {
      img.src = originalSrc;
      img.alt = 'SVG';
    }, 1200);
  }).catch(err => {
    console.error('Failed to copy URL: ', err);
  });
};

// Category navigation highlighting functionality for individual blog pages
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.flex.items-center.gap-\\[24px\\] a');
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        navLinks.forEach(l => {
          l.classList.remove('font-semibold', 'text-[#404040]');
          l.classList.add('text-gray-600');
        });
        this.classList.add('font-semibold', 'text-[#404040]');
        this.classList.remove('text-gray-600');
      });
    });
  }
});

// Table of contents scroll highlighting for individual blog pages
document.addEventListener('DOMContentLoaded', function () {
  const tocLinks = Array.from(document.querySelectorAll('.toc-link'));
  if (tocLinks.length > 0) {
    const sectionIds = tocLinks.map(link => link.getAttribute('href'));
    const sections = sectionIds.map(id => document.querySelector(id));

    function onScroll() {
      let activeIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i] && window.scrollY + 120 >= sections[i].offsetTop) {
          activeIdx = i;
        }
      }

      tocLinks.forEach((link, idx) => {
        const textSpan = link.querySelector('span');
        if (idx === activeIdx) {
          textSpan.classList.add('font-bold', 'text-[#171717]');
          textSpan.classList.remove('text-[#404040]', 'font-light');
          // Add before pseudo-element classes for desktop view only
          if (window.innerWidth >= 1024) { // lg breakpoint
            textSpan.classList.add(
              'before:absolute', 'before:left-[7px]', 'before:top-0',
              'before:w-[2px]', 'before:h-full', 'before:bg-[#171717]'
            );
          }
        } else {
          textSpan.classList.remove('font-bold', 'text-[#171717]');
          textSpan.classList.add('text-[#404040]', 'font-light');
          // Remove before pseudo-element classes
          textSpan.classList.remove(
            'before:absolute', 'before:left-[7px]', 'before:top-0',
            'before:w-[2px]', 'before:h-full', 'before:bg-[#171717]'
          );
        }
      });
    }

    // Add click handlers for smooth scrolling
    tocLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 100; // Account for header height
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  }
});

// Comparison table toggle functionality for individual blog pages
document.addEventListener('DOMContentLoaded', function() {
  const toggleIcons = document.querySelectorAll('.toggle-icon');
  
  // Initialize chevron directions based on current state
  toggleIcons.forEach(icon => {
    const categoryRow = icon.closest('.category-row');
    const nextRows = [];
    let nextRow = categoryRow.nextElementSibling;
    
    while (nextRow && nextRow.classList.contains('sub-feature')) {
      nextRows.push(nextRow);
      nextRow = nextRow.nextElementSibling;
    }
    
    // Check if table is currently open (sub-features are visible)
    const isCurrentlyOpen = nextRows[0] && nextRows[0].style.display === 'table-row';
    
    // Set initial chevron direction based on current state
    if (isCurrentlyOpen) {
      icon.style.transform = 'rotate(180deg)'; // Point up when open
    } else {
      icon.style.transform = 'rotate(0deg)'; // Point down when closed
    }
  });
  
  // Add click event listeners
  toggleIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const categoryRow = this.closest('.category-row');
      const nextRows = [];
      let nextRow = categoryRow.nextElementSibling;
      
      while (nextRow && nextRow.classList.contains('sub-feature')) {
        nextRows.push(nextRow);
        nextRow = nextRow.nextElementSibling;
      }
      
      // Check if there are sub-features to toggle
      if (nextRows.length > 0) {
        // Has sub-features, toggle them
        const isExpanded = nextRows[0] && nextRows[0].style.display === 'table-row';
        
        if (isExpanded) {
          // Currently open, so close it and show down arrow
          nextRows.forEach(row => {
            row.style.display = 'none';
          });
          this.style.transform = 'rotate(0deg)'; // Point down when closed
        } else {
          // Currently closed, so open it and show up arrow
          nextRows.forEach(row => {
            row.style.display = 'table-row';
          });
          this.style.transform = 'rotate(180deg)'; // Point up when open
        }
      } else {
        // No sub-features, just toggle the chevron direction
        const currentTransform = this.style.transform;
        if (currentTransform === 'rotate(180deg)' || currentTransform === '') {
          this.style.transform = 'rotate(0deg)'; // Point down
        } else {
          this.style.transform = 'rotate(180deg)'; // Point up
        }
      }
    });
  });
});

// Blog table of contents toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('tocToggleBtn');
  const tocList = document.getElementById('tocList');

  if (toggleButton && tocList) {
    toggleButton.addEventListener('click', function () {
      tocList.classList.toggle('hidden');
    });
  }
});

// Blog navigation scroll highlighting
const links = document.querySelectorAll("ul a:not(.toc-link)");

const observerOptions = {
  root: null,
  rootMargin: "0px 0px -70% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`ul a:not(.toc-link)[href="#${id}"]`);

    if (entry.isIntersecting && link) {
      links.forEach((el) => {
        el.classList.remove("text-[#171717]", "font-bold");
        el.classList.add("text-[#25223B]");
      });

      link.classList.add("text-[#171717]", "font-bold");
      link.classList.remove("text-[#25223B]");
    }
  });
}, observerOptions);

document.querySelectorAll("[id]").forEach((el) => {
  observer.observe(el);
});

// Smooth scrolling for anchor links
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

// ============================================================================
// FEATURE IMAGE SLIDER COMPONENT
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all sliders
  function initSlider(sliderId) {
    let current = 0;
    const mainImg = document.getElementById(`slider-main-image-${sliderId}`);
    const prevBtn = document.getElementById(`slider-prev-${sliderId}`);
    const nextBtn = document.getElementById(`slider-next-${sliderId}`);
    
    // Find the container for this specific slider
    const sliderWrapper = mainImg?.closest('.slider-wrapper');
    if (!sliderWrapper) return;
    
    const container = sliderWrapper.querySelector('.slider-thumbnails-container');
    const thumbs = sliderWrapper.querySelectorAll('.slider-thumb');
    
    // Only initialize if all elements exist
    if (!mainImg || !thumbs.length || !prevBtn || !nextBtn || !container) {
      return;
    }

    // Get images and alts from HTML data attributes
    let images, alts;
    try {
      images = JSON.parse(container.getAttribute('data-images') || '[]');
      alts = JSON.parse(container.getAttribute('data-alts') || '[]');
    } catch (e) {
      console.error(`Error parsing slider ${sliderId} data attributes:`, e);
      return;
    }
    
    // Fallback if data attributes are empty
    if (!images.length) {
      console.error(`No images found in data attributes for slider ${sliderId}`);
      return;
    }

    function showSlide(idx) {
      current = idx;
      mainImg.src = images[idx];
      mainImg.alt = alts[idx] || `Image ${idx + 1}`;
      
      thumbs.forEach((btn, i) => {
        if (i === idx) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    // Thumbnail click handlers
    thumbs.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showSlide(idx);
      });
    });

    // Navigation button handlers
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idx = (current - 1 + images.length) % images.length;
      showSlide(idx);
    });

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idx = (current + 1) % images.length;
      showSlide(idx);
    });

    // Keyboard navigation
    const sliderContainer = mainImg.closest('.feature-image-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevBtn.click();
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextBtn.click();
        }
      });
      
      // Make container focusable for keyboard navigation
      sliderContainer.setAttribute('tabindex', '0');
    }

    // Initialize first slide
    showSlide(0);
  }

  // Initialize all sliders (1, 2, 3, 4)
  for (let i = 1; i <= 4; i++) {
    initSlider(i);
  }
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Generic toggle functionality
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

// Initialize data attributes and default states
if (document.readyState !== 'loading') {
  window.addMissingDataAttributes();
  setTimeout(() => {
    window.setActiveTab('community');
  }, 100);
} else {
  document.addEventListener('DOMContentLoaded', function() {
    window.addMissingDataAttributes();
    setTimeout(() => {
      window.setActiveTab('community');
    }, 100);
  });
}

// ============================================================================
// JQUERY DEPENDENT CODE
// ============================================================================

// Guard jQuery code - only run if jQuery is loaded
if (typeof $ !== 'undefined') {
  $(function () {
    $('#text-copy').on('click', function () {
      const textToCopy = $('#copied-item-text').text().trim();

      navigator.clipboard.writeText(textToCopy).then(() => {
        const $button = $('#text-copy');
        const $icon = $button.find('svg');
        const originalText = $button.find('span.md\\:block').text();
        const originalMobile = $button.find('span.block').text();
        const originalIcon = $icon.html();

        $icon.html('<path d="M16 6L7 15L3 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>');
        
        $button.find('span.md\\:block').text('Copied');
        $button.find('span.block').text('✓');

        setTimeout(() => {
          $button.find('span.md\\:block').text(originalText);
          $button.find('span.block').text(originalMobile);
          $icon.html(originalIcon);
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

      updateSliderBackground($slider);
      $display.text(formatNumber($slider.val()));
    } else {
      console.warn('Slider or display element not found!');
    }
  });
}