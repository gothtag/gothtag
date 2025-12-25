// Smooth navigation without page reload
(function() {
  'use strict';
  
  // Cache for loaded pages
  const pageCache = new Map();
  
  // Preload page content
  function preloadPage(url) {
    if (pageCache.has(url)) return Promise.resolve(pageCache.get(url));
    
    return fetch(url)
      .then(response => response.text())
      .then(html => {
        pageCache.set(url, html);
        return html;
      })
      .catch(() => null);
  }
  
  // Load page without reload
  function loadPage(url) {
    return preloadPage(url).then(html => {
      if (!html) {
        window.location.href = url;
        return;
      }
      
      // Parse new page
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(html, 'text/html');
      
      // Update title
      document.title = newDoc.title;
      
      // Update content
      const currentMain = document.querySelector('main') || document.body;
      const newMain = newDoc.querySelector('main') || newDoc.body;
      
      // Fade out
      currentMain.style.opacity = '0';
      currentMain.style.transition = 'opacity 0.2s';
      
      setTimeout(() => {
        currentMain.innerHTML = newMain.innerHTML;
        currentMain.style.opacity = '1';
        window.scrollTo(0, 0);
        
        // Update URL
        history.pushState({ path: url }, '', url);
        
        // Re-initialize navigation
        initNavigation();
      }, 200);
    });
  }
  
  // Initialize smooth navigation
  function initNavigation() {
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      
      // Only internal links
      if (!href || href.startsWith('#') || href.startsWith('http') || href.includes('discord')) {
        return;
      }
      
      // Preload on hover
      link.addEventListener('mouseenter', () => {
        preloadPage(href);
      }, { once: true });
      
      // Smooth navigation on click
      link.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage(href);
      });
    });
  }
  
  // Handle back/forward
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.path) {
      loadPage(e.state.path);
    }
  });
  
  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();
