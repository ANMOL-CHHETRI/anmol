// Mobile menu toggle functionality



const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-button");
    const submitText = document.getElementById("submit-text");
    const toast = document.getElementById("toast");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      submitBtn.disabled = true;
      submitText.textContent = "Sending...";

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        _honey: "",
        _captcha: "false"
      };

      try {
        const response = await fetch("https://formsubmit.co/ajax/canmol350@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
          // showToast("Message Sent", "Your message has been sent successfully.");
          form.reset();
          form.classList.add("hidden");
          successMessage.classList.remove("hidden");
        } else {
          throw new Error("Failed to send message");
        }
      } catch (err) {
        showToast("Error", "Failed to send your message. Please try again later.", true);
        console.error(err);
      } finally {
        submitBtn.disabled = false;
        submitText.textContent = "Send Message";
      }
    });

    function showToast(title, message, error = false) {
      toast.innerHTML = `<strong class="block mb-1">${title}</strong><span>${message}</span>`;
      toast.className = `fixed bottom-4 right-4 ${error ? "bg-red-100 border-red-400 text-red-700" : "bg-green-100 border-green-400 text-green-700"} shadow-md rounded px-4 py-3 border block`;
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 4000);
    }

    function resetForm() {
      document.getElementById("contact-form").classList.remove("hidden");
      successMessage.classList.add("hidden");
    }
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  
    // Close mobile menu when clicking on mobile links
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
      });
    }
  
    // Add active class to nav links based on scroll position
    function setActiveNavLink() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    setActiveNavLink(); // Set initial active state
  });
  