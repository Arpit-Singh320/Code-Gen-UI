// Load Bootstrap JS after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(bootstrapScript);
    
    // Initialize all components
    initializeProfessionalBackground();
    setupNavigation();
    setupIDEInteractions();
    setupScrollAnimations();
    setupCTAEffects();
    addRippleAnimation();
  });
  
  // Create professional animated background
  function initializeProfessionalBackground() {
    const bgAnimation = document.getElementById('bgAnimation');
    
    // Clear any existing elements
    bgAnimation.innerHTML = '';
    
    // Create grid overlay
    const gridOverlay = document.createElement('div');
    gridOverlay.className = 'grid-overlay';
    bgAnimation.appendChild(gridOverlay);
    
    // Create blockchain pattern
    const blockchainPattern = document.createElement('div');
    blockchainPattern.className = 'blockchain-pattern';
    bgAnimation.appendChild(blockchainPattern);
    
    // Create gradient orbs
    createGradientOrbs();
    
    // Create glowing lines
    createGlowingLines();
    
    // Create data flow
    createDataFlow();
    
    // Periodically refresh background elements for visual interest
    setInterval(() => {
      // Refresh glowing lines occasionally
      const lines = document.querySelectorAll('.glow-line');
      if (lines.length > 0) {
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        randomLine.style.animation = 'none';
        randomLine.offsetHeight; // Trigger reflow
        randomLine.style.animation = 'scan-line 8s forwards';
      }
      
      // Refresh data flows occasionally
      const particles = document.querySelectorAll('.data-particle');
      if (particles.length > 0) {
        const randomParticle = particles[Math.floor(Math.random() * particles.length)];
        randomParticle.style.animation = 'none';
        randomParticle.offsetHeight; // Trigger reflow
        randomParticle.style.animation = 'flow-down 6s linear forwards';
      }
    }, 3000);
  }
  
  // Create gradient orbs
  function createGradientOrbs() {
    const bgAnimation = document.getElementById('bgAnimation');
    const orbCount = 4;
    const colors = [
      'rgba(106, 17, 203, 0.8)',  // Purple
      'rgba(37, 117, 252, 0.8)',  // Blue
      'rgba(0, 201, 255, 0.8)',   // Cyan
      'rgba(45, 45, 255, 0.8)'    // Deep blue
    ];
    
    for (let i = 0; i < orbCount; i++) {
      const orb = document.createElement('div');
      orb.className = 'gradient-orb';
      
      // Size between 300px and 600px
      const size = Math.random() * 300 + 300;
      orb.style.width = `${size}px`;
      orb.style.height = `${size}px`;
      
      // Position
      orb.style.top = `${Math.random() * 100}%`;
      orb.style.left = `${Math.random() * 100}%`;
      
      // Color
      orb.style.background = colors[i % colors.length];
      
      // Animation delay
      orb.style.animationDelay = `${i * 3}s`;
      
      bgAnimation.appendChild(orb);
    }
  }
  
  // Create glowing horizontal lines that scan down the page
  function createGlowingLines() {
    const bgAnimation = document.getElementById('bgAnimation');
    const lineCount = 3;
    
    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement('div');
      line.className = 'glow-line';
      
      // Position
      line.style.top = '0';
      
      // Animation delay
      line.style.animationDelay = `${i * 4}s`;
      
      bgAnimation.appendChild(line);
    }
  }
  
  // Create vertical data flow effects
  function createDataFlow() {
    const bgAnimation = document.getElementById('bgAnimation');
    const flowCount = 15;
    
    for (let i = 0; i < flowCount; i++) {
      const flow = document.createElement('div');
      flow.className = 'data-flow';
      
      // Position
      flow.style.left = `${Math.random() * 100}%`;
      
      // Create particles within each flow
      const particleCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < particleCount; j++) {
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        
        // Animation delay
        particle.style.animationDelay = `${Math.random() * 6}s`;
        
        flow.appendChild(particle);
      }
      
      bgAnimation.appendChild(flow);
    }
  }
  
  // Smooth scrolling for navigation
  function setupNavigation() {
    const navIcons = document.querySelectorAll('.nav-icon');
    
    navIcons.forEach((icon, index) => {
      icon.addEventListener('click', () => {
        let targetSection;
        
        switch(index) {
          case 0:
            targetSection = document.getElementById('home');
            break;
          case 1:
            targetSection = document.getElementById('ide');
            break;
          case 2:
            targetSection = document.getElementById('features');
            break;
          case 3:
            targetSection = document.getElementById('workflow');
            break;
        }
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // Add IDE interaction effects
  function setupIDEInteractions() {
    const fileItems = document.querySelectorAll('.file-item');
    const aiSuggestion = document.querySelector('.ai-suggestion');
    
    // Add click events to file items
    fileItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active class from all items
        fileItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
      });
    });
    
    // Add click event to AI suggestion
    if (aiSuggestion) {
      aiSuggestion.addEventListener('click', () => {
        // Simulate implementation of the suggestion
        const editorMain = document.querySelector('.editor-main');
        const newLine = document.createElement('div');
        newLine.className = 'code-line';
        newLine.innerHTML = `
          <div class="line-number">23</div>
          <div class="code-content">    <span class="function">function</span> <span class="function">transferOwnership</span>(<span class="keyword">address</span> newOwner) <span class="keyword">external</span> {</div>
        `;
        
        const newLine2 = document.createElement('div');
        newLine2.className = 'code-line';
        newLine2.innerHTML = `
          <div class="line-number">24</div>
          <div class="code-content">        <span class="keyword">require</span>(msg.sender == _owner, <span class="string">"Only owner can transfer ownership"</span>);</div>
        `;
        
        const newLine3 = document.createElement('div');
        newLine3.className = 'code-line';
        newLine3.innerHTML = `
          <div class="line-number">25</div>
          <div class="code-content">        _owner = newOwner;</div>
        `;
        
        const newLine4 = document.createElement('div');
        newLine4.className = 'code-line';
        newLine4.innerHTML = `
          <div class="line-number">26</div>
          <div class="code-content">    }</div>
        `;
        
        // Add new lines before the closing bracket
        const lastLine = editorMain.querySelector('.code-line:last-child');
        editorMain.insertBefore(newLine, lastLine);
        editorMain.insertBefore(newLine2, lastLine);
        editorMain.insertBefore(newLine3, lastLine);
        editorMain.insertBefore(newLine4, lastLine);
        
        // Hide suggestion after implementation
        aiSuggestion.style.animation = 'none';
        aiSuggestion.style.opacity = '0';
        
        // Show success notification
        const notification = document.createElement('div');
        notification.className = 'ai-suggestion';
        notification.style.borderLeft = '3px solid #4caf50';
        notification.style.bottom = '4rem';
        notification.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span style="margin-left: 10px;">Ownership transfer function implemented successfully!</span>
        `;
        
        editorMain.appendChild(notification);
        
        // Animate notification
        setTimeout(() => {
          notification.style.opacity = '1';
          notification.style.transform = 'translateY(0)';
        }, 100);
        
        // Remove notification after a few seconds
        setTimeout(() => {
          notification.style.opacity = '0';
          notification.style.transform = 'translateY(10px)';
        }, 4000);
      });
    }
  }
  
  // Animate elements on scroll
  function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .workflow-step, .section-title');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated');
          
          if (entry.target.classList.contains('section-title')) {
            entry.target.classList.add('animate__fadeIn');
          } else if (entry.target.classList.contains('feature-card')) {
            entry.target.classList.add('animate__fadeInUp');
          } else if (entry.target.classList.contains('workflow-step')) {
            entry.target.classList.add('animate__fadeInRight');
          }
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
  
  // CTA button hover effects
  function setupCTAEffects() {
    const ctaButtons = document.querySelectorAll('.cta-btn');
    
    ctaButtons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-5px) scale(1.05)';
        if (btn.classList.contains('cta-primary')) {
          btn.style.boxShadow = '0 15px 30px rgba(106, 17, 203, 0.5), 0 0 20px rgba(37, 117, 252, 0.5)';
        }
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        if (btn.classList.contains('cta-primary')) {
          btn.style.boxShadow = '';
        }
      });
      
      btn.addEventListener('click', (event) => {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
        ripple.style.animation = 'ripple 0.8s ease-out';
        
        // Get click position
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        btn.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
          ripple.remove();
        }, 800);
      });
    });
  }
  
  // Add keyframe for ripple animation
  function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: translate(-50%, -50%) scale(4);
          opacity: 0;
        }
      }
      
      /* Add Bootstrap animation classes */
      .animate__animated {
        animation-duration: 1s;
        animation-fill-mode: both;
      }
      
      .animate__fadeIn {
        animation-name: fadeIn;
      }
      
      .animate__fadeInUp {
        animation-name: fadeInUp;
      }
      
      .animate__fadeInRight {
        animation-name: fadeInRight;
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 50px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translate3d(100px, 0, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Handle window resize events to adjust animations
  window.addEventListener('resize', function() {
    // Reinitialize background on window resize for responsive layouts
    initializeProfessionalBackground();
  });
