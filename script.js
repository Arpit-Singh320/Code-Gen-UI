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



//UNREAL NETWORK ANIMATION
/////////////////////////



// // Load Bootstrap JS after the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     const bootstrapScript = document.createElement('script');
//     bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
//     document.body.appendChild(bootstrapScript);
    
//     // Initialize all components
//     initializeProfessionalBackground();
//     setupNavigation();
//     setupIDEInteractions();
//     setupScrollAnimations();
//     setupCTAEffects();
//     addRippleAnimation();
//   });
  
//   // Create professional animated background with unreal network effects
//   function initializeProfessionalBackground() {
//     const bgAnimation = document.getElementById('bgAnimation');
    
//     // Clear any existing elements
//     bgAnimation.innerHTML = '';
    
//     // Create grid overlay
//     const gridOverlay = document.createElement('div');
//     gridOverlay.className = 'grid-overlay';
//     bgAnimation.appendChild(gridOverlay);
    
//     // Create blockchain pattern
//     const blockchainPattern = document.createElement('div');
//     blockchainPattern.className = 'blockchain-pattern';
//     bgAnimation.appendChild(blockchainPattern);
    
//     // Add unreal network canvas
//     const networkCanvas = document.createElement('canvas');
//     networkCanvas.id = 'network-canvas';
//     networkCanvas.className = 'network-canvas';
//     bgAnimation.appendChild(networkCanvas);
    
//     // Initialize the unreal network
//     initUnrealNetwork();
    
//     // Create gradient orbs
//     createGradientOrbs();
    
//     // Create glowing lines
//     createGlowingLines();
    
//     // Create data flow
//     createDataFlow();
    
//     // Add digital circuit paths
//     createDigitalCircuits();
    
//     // Create energy pulses
//     createEnergyPulses();
    
//     // Periodically refresh background elements for visual interest
//     setInterval(() => {
//       // Refresh glowing lines occasionally
//       const lines = document.querySelectorAll('.glow-line');
//       if (lines.length > 0) {
//         const randomLine = lines[Math.floor(Math.random() * lines.length)];
//         randomLine.style.animation = 'none';
//         randomLine.offsetHeight; // Trigger reflow
//         randomLine.style.animation = 'scan-line 8s forwards';
//       }
      
//       // Refresh data flows occasionally
//       const particles = document.querySelectorAll('.data-particle');
//       if (particles.length > 0) {
//         const randomParticle = particles[Math.floor(Math.random() * particles.length)];
//         randomParticle.style.animation = 'none';
//         randomParticle.offsetHeight; // Trigger reflow
//         randomParticle.style.animation = 'flow-down 6s linear forwards';
//       }
      
//       // Add new energy pulse occasionally
//       if (Math.random() > 0.7) {
//         const pulse = document.createElement('div');
//         pulse.className = 'energy-pulse';
        
//         // Random position
//         pulse.style.top = `${Math.random() * 100}%`;
//         pulse.style.left = `${Math.random() * 100}%`;
        
//         bgAnimation.appendChild(pulse);
        
//         // Remove after animation completes
//         setTimeout(() => {
//           pulse.remove();
//         }, 3000);
//       }
//     }, 3000);
//   }
  
//   // Initialize the canvas-based unreal network animation
//   function initUnrealNetwork() {
//     const canvas = document.getElementById('network-canvas');
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     const particles = [];
//     const connections = [];
//     const particleCount = 80;
//     const connectionDistance = 150;
//     const particleRadius = 2;
  
//     // Resize canvas to full window
//     function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }
    
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
  
//     // Create particles
//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         radius: Math.random() * particleRadius + 1,
//         color: getRandomColor(0.5)
//       });
//     }
  
//     // Random color generator
//     function getRandomColor(alpha) {
//       const colors = [
//         `rgba(106, 17, 203, ${alpha})`,  // Purple
//         `rgba(37, 117, 252, ${alpha})`,  // Blue
//         `rgba(0, 201, 255, ${alpha})`    // Cyan
//       ];
//       return colors[Math.floor(Math.random() * colors.length)];
//     }
  
//     // Animation loop
//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Update and draw particles
//       particles.forEach(particle => {
//         // Update position
//         particle.x += particle.vx;
//         particle.y += particle.vy;
        
//         // Bounce off edges
//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
//         // Draw particle
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//         ctx.fillStyle = particle.color;
//         ctx.fill();
//       });
      
//       // Draw connections
//       connections.length = 0;
      
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < connectionDistance) {
//             const opacity = 1 - (distance / connectionDistance);
//             connections.push({
//               p1: particles[i],
//               p2: particles[j],
//               opacity
//             });
//           }
//         }
//       }
      
//       // Draw all connections
//       connections.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.p1.x, conn.p1.y);
//         ctx.lineTo(conn.p2.x, conn.p2.y);
//         ctx.strokeStyle = `rgba(106, 17, 203, ${conn.opacity * 0.2})`;
//         ctx.lineWidth = 1;
//         ctx.stroke();
        
//         // Add data pulses on some connections
//         if (Math.random() > 0.995) {
//           createDataPulse(conn.p1, conn.p2);
//         }
//       });
      
//       // Move data pulses
//       moveDataPulses();
      
//       requestAnimationFrame(animate);
//     }
    
//     // Data pulses that travel along connections
//     const dataPulses = [];
    
//     function createDataPulse(start, end) {
//       dataPulses.push({
//         startX: start.x,
//         startY: start.y,
//         endX: end.x,
//         endY: end.y,
//         progress: 0,
//         speed: 0.01 + Math.random() * 0.02,
//         color: getRandomColor(0.8)
//       });
//     }
    
//     function moveDataPulses() {
//       // Draw and update data pulses
//       for (let i = dataPulses.length - 1; i >= 0; i--) {
//         const pulse = dataPulses[i];
        
//         // Update progress
//         pulse.progress += pulse.speed;
        
//         // Remove completed pulses
//         if (pulse.progress >= 1) {
//           dataPulses.splice(i, 1);
//           continue;
//         }
        
//         // Calculate current position
//         const x = pulse.startX + (pulse.endX - pulse.startX) * pulse.progress;
//         const y = pulse.startY + (pulse.endY - pulse.startY) * pulse.progress;
        
//         // Draw pulse
//         ctx.beginPath();
//         ctx.arc(x, y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = pulse.color;
//         ctx.fill();
        
//         // Draw glow
//         ctx.beginPath();
//         ctx.arc(x, y, 6, 0, Math.PI * 2);
//         const glowColor = pulse.color.replace(/[\d\.]+\)$/, '0.3)');
//         ctx.fillStyle = glowColor;
//         ctx.fill();
//       }
//     }
    
//     // Start animation
//     animate();
//   }
  
//   // Create gradient orbs
//   function createGradientOrbs() {
//     const bgAnimation = document.getElementById('bgAnimation');
//     const orbCount = 4;
//     const colors = [
//       'rgba(106, 17, 203, 0.5)',  // Purple
//       'rgba(37, 117, 252, 0.5)',  // Blue
//       'rgba(0, 201, 255, 0.5)',   // Cyan
//       'rgba(45, 45, 255, 0.5)'    // Deep blue
//     ];
    
//     for (let i = 0; i < orbCount; i++) {
//       const orb = document.createElement('div');
//       orb.className = 'gradient-orb';
      
//       // Size between 300px and 600px
//       const size = Math.random() * 300 + 300;
//       orb.style.width = `${size}px`;
//       orb.style.height = `${size}px`;
      
//       // Position
//       orb.style.top = `${Math.random() * 100}%`;
//       orb.style.left = `${Math.random() * 100}%`;
      
//       // Color
//       orb.style.background = colors[i % colors.length];
      
//       // Animation delay
//       orb.style.animationDelay = `${i * 3}s`;
      
//       bgAnimation.appendChild(orb);
//     }
//   }
  
//   // Create glowing horizontal lines that scan down the page
//   function createGlowingLines() {
//     const bgAnimation = document.getElementById('bgAnimation');
//     const lineCount = 3;
    
//     for (let i = 0; i < lineCount; i++) {
//       const line = document.createElement('div');
//       line.className = 'glow-line';
      
//       // Position
//       line.style.top = '0';
      
//       // Animation delay
//       line.style.animationDelay = `${i * 4}s`;
      
//       bgAnimation.appendChild(line);
//     }
//   }
  
//   // Create vertical data flow effects
//   function createDataFlow() {
//     const bgAnimation = document.getElementById('bgAnimation');
//     const flowCount = 15;
    
//     for (let i = 0; i < flowCount; i++) {
//       const flow = document.createElement('div');
//       flow.className = 'data-flow';
      
//       // Position
//       flow.style.left = `${Math.random() * 100}%`;
      
//       // Create particles within each flow
//       const particleCount = Math.floor(Math.random() * 3) + 1;
//       for (let j = 0; j < particleCount; j++) {
//         const particle = document.createElement('div');
//         particle.className = 'data-particle';
        
//         // Animation delay
//         particle.style.animationDelay = `${Math.random() * 6}s`;
        
//         flow.appendChild(particle);
//       }
      
//       bgAnimation.appendChild(flow);
//     }
//   }
  
//   // Create digital circuit patterns
//   function createDigitalCircuits() {
//     const bgAnimation = document.getElementById('bgAnimation');
//     const circuitCount = 5;
    
//     for (let i = 0; i < circuitCount; i++) {
//       const circuit = document.createElement('div');
//       circuit.className = 'digital-circuit';
      
//       // Position at edges
//       const position = Math.random();
//       const isHorizontal = Math.random() > 0.5;
      
//       if (isHorizontal) {
//         circuit.style.width = `${Math.random() * 20 + 10}%`;
//         circuit.style.height = '1px';
//         circuit.style.top = `${position * 100}%`;
//         circuit.style.left = Math.random() > 0.5 ? '0' : 'auto';
//         circuit.style.right = Math.random() > 0.5 ? '0' : 'auto';
//         circuit.classList.add('horizontal-circuit');
//       } else {
//         circuit.style.height = `${Math.random() * 20 + 10}%`;
//         circuit.style.width = '1px';
//         circuit.style.left = `${position * 100}%`;
//         circuit.style.top = Math.random() > 0.5 ? '0' : 'auto';
//         circuit.style.bottom = Math.random() > 0.5 ? '0' : 'auto';
//         circuit.classList.add('vertical-circuit');
//       }
      
//       // Add circuit nodes
//       const nodeCount = Math.floor(Math.random() * 3) + 2;
//       for (let j = 0; j < nodeCount; j++) {
//         const node = document.createElement('div');
//         node.className = 'circuit-node';
        
//         const position = Math.random();
//         if (isHorizontal) {
//           node.style.left = `${position * 100}%`;
//           node.style.top = '50%';
//           node.style.transform = 'translate(-50%, -50%)';
//         } else {
//           node.style.top = `${position * 100}%`;
//           node.style.left = '50%';
//           node.style.transform = 'translate(-50%, -50%)';
//         }
        
//         circuit.appendChild(node);
//       }
      
//       bgAnimation.appendChild(circuit);
//     }
//   }
  
//   // Create energy pulse animations
//   function createEnergyPulses() {
//     const bgAnimation = document.getElementById('bgAnimation');
//     const pulseCount = 3;
    
//     for (let i = 0; i < pulseCount; i++) {
//       const pulse = document.createElement('div');
//       pulse.className = 'energy-pulse';
      
//       // Random position
//       pulse.style.top = `${Math.random() * 100}%`;
//       pulse.style.left = `${Math.random() * 100}%`;
      
//       // Animation delay
//       pulse.style.animationDelay = `${i * 5}s`;
      
//       bgAnimation.appendChild(pulse);
//     }
//   }
  
//   // Smooth scrolling for navigation
//   function setupNavigation() {
//     const navIcons = document.querySelectorAll('.nav-icon');
    
//     navIcons.forEach((icon, index) => {
//       icon.addEventListener('click', () => {
//         let targetSection;
        
//         switch(index) {
//           case 0:
//             targetSection = document.getElementById('home');
//             break;
//           case 1:
//             targetSection = document.getElementById('ide');
//             break;
//           case 2:
//             targetSection = document.getElementById('features');
//             break;
//           case 3:
//             targetSection = document.getElementById('workflow');
//             break;
//         }
        
//         if (targetSection) {
//           window.scrollTo({
//             top: targetSection.offsetTop,
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
//   }
  
//   // Add IDE interaction effects
//   function setupIDEInteractions() {
//     const fileItems = document.querySelectorAll('.file-item');
//     const aiSuggestion = document.querySelector('.ai-suggestion');
    
//     // Add click events to file items
//     fileItems.forEach(item => {
//       item.addEventListener('click', () => {
//         // Remove active class from all items
//         fileItems.forEach(i => i.classList.remove('active'));
//         // Add active class to clicked item
//         item.classList.add('active');
//       });
//     });
    
//     // Add click event to AI suggestion
//     if (aiSuggestion) {
//       aiSuggestion.addEventListener('click', () => {
//         // Simulate implementation of the suggestion
//         const editorMain = document.querySelector('.editor-main');
//         const newLine = document.createElement('div');
//         newLine.className = 'code-line';
//         newLine.innerHTML = `
//           <div class="line-number">23</div>
//           <div class="code-content">    <span class="function">function</span> <span class="function">transferOwnership</span>(<span class="keyword">address</span> newOwner) <span class="keyword">external</span> {</div>
//         `;
        
//         const newLine2 = document.createElement('div');
//         newLine2.className = 'code-line';
//         newLine2.innerHTML = `
//           <div class="line-number">24</div>
//           <div class="code-content">        <span class="keyword">require</span>(msg.sender == _owner, <span class="string">"Only owner can transfer ownership"</span>);</div>
//         `;
        
//         const newLine3 = document.createElement('div');
//         newLine3.className = 'code-line';
//         newLine3.innerHTML = `
//           <div class="line-number">25</div>
//           <div class="code-content">        _owner = newOwner;</div>
//         `;
        
//         const newLine4 = document.createElement('div');
//         newLine4.className = 'code-line';
//         newLine4.innerHTML = `
//           <div class="line-number">26</div>
//           <div class="code-content">    }</div>
//         `;
        
//         // Add new lines before the closing bracket
//         const lastLine = editorMain.querySelector('.code-line:last-child');
//         editorMain.insertBefore(newLine, lastLine);
//         editorMain.insertBefore(newLine2, lastLine);
//         editorMain.insertBefore(newLine3, lastLine);
//         editorMain.insertBefore(newLine4, lastLine);
        
//         // Hide suggestion after implementation
//         aiSuggestion.style.animation = 'none';
//         aiSuggestion.style.opacity = '0';
        
//         // Show success notification
//         const notification = document.createElement('div');
//         notification.className = 'ai-suggestion';
//         notification.style.borderLeft = '3px solid #4caf50';
//         notification.style.bottom = '4rem';
//         notification.innerHTML = `
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//             <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//             <polyline points="22 4 12 14.01 9 11.01"></polyline>
//           </svg>
//           <span style="margin-left: 10px;">Ownership transfer function implemented successfully!</span>
//         `;
        
//         editorMain.appendChild(notification);
        
//         // Animate notification
//         setTimeout(() => {
//           notification.style.opacity = '1';
//           notification.style.transform = 'translateY(0)';
//         }, 100);
        
//         // Remove notification after a few seconds
//         setTimeout(() => {
//           notification.style.opacity = '0';
//           notification.style.transform = 'translateY(10px)';
//         }, 4000);
//       });
//     }
//   }
  
//   // Animate elements on scroll
//   function setupScrollAnimations() {
//     const animatedElements = document.querySelectorAll('.feature-card, .workflow-step, .section-title');
    
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate__animated');
          
//           if (entry.target.classList.contains('section-title')) {
//             entry.target.classList.add('animate__fadeIn');
//           } else if (entry.target.classList.contains('feature-card')) {
//             entry.target.classList.add('animate__fadeInUp');
//           } else if (entry.target.classList.contains('workflow-step')) {
//             entry.target.classList.add('animate__fadeInRight');
//           }
//         }
//       });
//     }, { threshold: 0.1 });
    
//     animatedElements.forEach(el => {
//       observer.observe(el);
//     });
//   }
  
//   // CTA button hover effects
//   function setupCTAEffects() {
//     const ctaButtons = document.querySelectorAll('.cta-btn');
    
//     ctaButtons.forEach(btn => {
//       btn.addEventListener('mouseenter', () => {
//         btn.style.transform = 'translateY(-5px) scale(1.05)';
//         if (btn.classList.contains('cta-primary')) {
//           btn.style.boxShadow = '0 15px 30px rgba(106, 17, 203, 0.5), 0 0 20px rgba(37, 117, 252, 0.5)';
//         }
//       });
      
//       btn.addEventListener('mouseleave', () => {
//         btn.style.transform = '';
//         if (btn.classList.contains('cta-primary')) {
//           btn.style.boxShadow = '';
//         }
//       });
      
//       btn.addEventListener('click', (event) => {
//         // Add ripple effect
//         const ripple = document.createElement('span');
//         ripple.style.position = 'absolute';
//         ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
//         ripple.style.borderRadius = '50%';
//         ripple.style.width = '100px';
//         ripple.style.height = '100px';
//         ripple.style.transform = 'translate(-50%, -50%) scale(0)';
//         ripple.style.animation = 'ripple 0.8s ease-out';
        
//         // Get click position
//         const rect = btn.getBoundingClientRect();
//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;
        
//         ripple.style.left = x + 'px';
//         ripple.style.top = y + 'px';
        
//         btn.appendChild(ripple);
        
//         // Remove ripple after animation
//         setTimeout(() => {
//           ripple.remove();
//         }, 800);
//       });
//     });
//   }
  
//   // Add keyframe for ripple animation
//   function addRippleAnimation() {
//     const style = document.createElement('style');
//     style.textContent = `
//       @keyframes ripple {
//         to {
//           transform: translate(-50%, -50%) scale(4);
//           opacity: 0;
//         }
//       }
      
//       /* Add Bootstrap animation classes */
//       .animate__animated {
//         animation-duration: 1s;
//         animation-fill-mode: both;
//       }
      
//       .animate__fadeIn {
//         animation-name: fadeIn;
//       }
      
//       .animate__fadeInUp {
//         animation-name: fadeInUp;
//       }
      
//       .animate__fadeInRight {
//         animation-name: fadeInRight;
//       }
      
//       @keyframes fadeIn {
//         from {
//           opacity: 0;
//         }
//         to {
//           opacity: 1;
//         }
//       }
      
//       @keyframes fadeInUp {
//         from {
//           opacity: 0;
//           transform: translate3d(0, 50px, 0);
//         }
//         to {
//           opacity: 1;
//           transform: translate3d(0, 0, 0);
//         }
//       }
      
//       @keyframes fadeInRight {
//         from {
//           opacity: 0;
//           transform: translate3d(100px, 0, 0);
//         }
//         to {
//           opacity: 1;
//           transform: translate3d(0, 0, 0);
//         }
//       }
      
//       /* Network canvas styles */
//       .network-canvas {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: 0;
//         opacity: 0.6;
//       }
      
//       /* Digital circuit styles */
//       .digital-circuit {
//         position: absolute;
//         background: linear-gradient(90deg, 
//           rgba(106, 17, 203, 0), 
//           rgba(106, 17, 203, 0.5) 50%, 
//           rgba(37, 117, 252, 0.5) 80%, 
//           rgba(37, 117, 252, 0));
//         opacity: 0.3;
//         z-index: 0;
//       }
      
//       .horizontal-circuit {
//         animation: pulse-circuit-horizontal 4s infinite alternate;
//       }
      
//       .vertical-circuit {
//         animation: pulse-circuit-vertical 4s infinite alternate;
//       }
      
//       .circuit-node {
//         position: absolute;
//         width: 4px;
//         height: 4px;
//         background-color: rgba(0, 201, 255, 0.7);
//         border-radius: 50%;
//         box-shadow: 0 0 8px rgba(0, 201, 255, 0.9);
//         z-index: 1;
//         animation: pulse-node 3s infinite alternate;
//       }
      
//       /* Energy pulse animation */
//       .energy-pulse {
//         position: absolute;
//         width: 4px;
//         height: 4px;
//         border-radius: 50%;
//         background-color: rgba(255, 255, 255, 0.8);
//         box-shadow: 0 0 20px 10px rgba(106, 17, 203, 0.6);
//         transform: scale(0);
//         opacity: 0;
//         z-index: 1;
//         animation: energy-pulse 3s ease-out forwards;
//       }
      
//       @keyframes pulse-circuit-horizontal {
//         0%, 100% {
//           opacity: 0.1;
//           background-position: 0% 0%;
//         }
//         50% {
//           opacity: 0.3;
//           background-position: 100% 0%;
//         }
//       }
      
//       @keyframes pulse-circuit-vertical {
//         0%, 100% {
//           opacity: 0.1;
//           background-position: 0% 0%;
//         }
//         50% {
//           opacity: 0.3;
//           background-position: 0% 100%;
//         }
//       }
      
//       @keyframes pulse-node {
//         0%, 100% {
//           transform: translate(-50%, -50%) scale(1);
//           opacity: 0.7;
//         }
//         50% {
//           transform: translate(-50%, -50%) scale(1.5);
//           opacity: 1;
//         }
//       }
      
//       @keyframes energy-pulse {
//         0% {
//           transform: scale(0);
//           opacity: 0;
//         }
//         20% {
//           transform: scale(1);
//           opacity: 1;
//         }
//         100% {
//           transform: scale(20);
//           opacity: 0;
//         }
//       }
//     `;
//     document.head.appendChild(style);
//   }
  
//   // Handle window resize events to adjust animations
//   window.addEventListener('resize', function() {
//     // Reinitialize background on window resize for responsive layouts
//     initializeProfessionalBackground();
//   });


//   // Add this function to your script.js file to create futuristic HUD elements

// function createHUDElements() {
//   const bgAnimation = document.getElementById('bgAnimation');
  
//   // Create various HUD elements for a futuristic interface feel
//   createHUDSquares(bgAnimation);
//   createHUDCircles(bgAnimation);
//   createHUDRectangles(bgAnimation);
//   createBinaryRain(bgAnimation);
//   createFloatingParticles(bgAnimation);
//   createHolographicGrid(bgAnimation);
// }

// // Create square HUD elements
// function createHUDSquares(container) {
//   const count = 3;
  
//   for (let i = 0; i < count; i++) {
//     const element = document.createElement('div');
//     element.className = 'hud-element hud-square';
    
//     // Position
//     element.style.top = `${Math.random() * 70 + 10}%`;
//     element.style.left = `${Math.random() * 70 + 10}%`;
    
//     // Random rotation
//     element.style.transform = `rotate(${Math.random() * 45}deg)`;
    
//     // Animation delay
//     element.style.animationDelay = `${i * 3}s`;
    
//     container.appendChild(element);
//   }
// }

// // Create circular HUD elements
// function createHUDCircles(container) {
//   const count = 4;
  
//   for (let i = 0; i < count; i++) {
//     const element = document.createElement('div');
//     element.className = 'hud-element hud-circle';
    
//     // Size variation
//     const size = Math.random() * 100 + 80;
//     element.style.width = `${size}px`;
//     element.style.height = `${size}px`;
    
//     // Position
//     element.style.top = `${Math.random() * 70 + 10}%`;
//     element.style.left = `${Math.random() * 70 + 10}%`;
    
//     // Animation delay
//     element.style.animationDelay = `${i * 4}s`;
    
//     container.appendChild(element);
//   }
// }

// // Create rectangular HUD elements
// function createHUDRectangles(container) {
//   const count = 3;
  
//   for (let i = 0; i < count; i++) {
//     const element = document.createElement('div');
//     element.className = 'hud-element hud-rectangle';
    
//     // Size variation
//     const width = Math.random() * 150 + 100;
//     const height = Math.random() * 50 + 40;
//     element.style.width = `${width}px`;
//     element.style.height = `${height}px`;
    
//     // Position
//     element.style.top = `${Math.random() * 70 + 15}%`;
//     element.style.left = `${Math.random() * 70 + 15}%`;
    
//     // Animation delay
//     element.style.animationDelay = `${i * 3}s`;
    
//     container.appendChild(element);
//   }
// }

// // Create binary code rain effect
// function createBinaryRain(container) {
//   const rainCount = 10;
  
//   function createRainDrop() {
//     const rain = document.createElement('div');
//     rain.className = 'binary-rain';
    
//     // Random binary string
//     let binaryText = '';
//     const length = Math.floor(Math.random() * 30) + 20;
//     for (let i = 0; i < length; i++) {
//       binaryText += Math.random() > 0.5 ? '1' : '0';
//     }
//     rain.textContent = binaryText;
    
//     // Random position and speed
//     rain.style.left = `${Math.random() * 100}%`;
//     const duration = Math.random() * 10 + 8;
//     rain.style.animation = `binary-fall ${duration}s linear forwards`;
    
//     container.appendChild(rain);
    
//     // Remove after animation completes
//     setTimeout(() => {
//       rain.remove();
//     }, duration * 1000);
//   }
  
//   // Initial rain drops
//   for (let i = 0; i < rainCount; i++) {
//     setTimeout(() => {
//       createRainDrop();
//     }, i * 800);
//   }
  
//   // Continue to create rain occasionally
//   setInterval(() => {
//     if (Math.random() > 0.7) {
//       createRainDrop();
//     }
//   }, 2000);
// }

// // Create floating particle effects
// function createFloatingParticles(container) {
//   const particleCount = 8;
  
//   for (let i = 0; i < particleCount; i++) {
//     const particle = document.createElement('div');
//     particle.className = 'floating-particle';
    
//     // Size
//     const size = Math.random() * 200 + 100;
//     particle.style.width = `${size}px`;
//     particle.style.height = `${size}px`;
    
//     // Position
//     particle.style.top = `${Math.random() * 100}%`;
//     particle.style.left = `${Math.random() * 100}%`;
    
//     // Animation delay
//     particle.style.animationDelay = `${i * 2}s`;
    
//     container.appendChild(particle);
//   }
// }

// // Create holographic grid background
// function createHolographicGrid(container) {
//   const grid = document.createElement('div');
//   grid.className = 'holographic-grid';
//   container.appendChild(grid);
// }

// // Create dynamic node connections
// function createNodeConnections() {
//   const bgAnimation = document.getElementById('bgAnimation');
  
//   setInterval(() => {
//     if (Math.random() > 0.7) {
//       const connection = document.createElement('div');
//       connection.className = 'node-connection';
      
//       // Random angle
//       const angle = Math.random() * 360;
      
//       // Random length
//       const length = Math.random() * 200 + 100;
      
//       // Position
//       connection.style.top = `${Math.random() * 100}%`;
//       connection.style.left = `${Math.random() * 100}%`;
//       connection.style.width = `${length}px`;
//       connection.style.transform = `rotate(${angle}deg)`;
      
//       bgAnimation.appendChild(connection);
      
//       // Remove after animation completes
//       setTimeout(() => {
//         connection.remove();
//       }, 3000);
//     }
//   }, 1000);
// }

// // Add this to your initializeProfessionalBackground function
// // Inside your script.js, add these function calls to initializeProfessionalBackground:
// //
// // createHUDElements();
// // createNodeConnections();