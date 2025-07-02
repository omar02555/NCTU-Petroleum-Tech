/**
 * Custom Menu Fix Loader
 * This script ensures the custom-menu-fix.css is loaded on all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if the CSS is already loaded
    var cssLoaded = false;
    var links = document.getElementsByTagName('link');
    
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf('custom-menu-fix.css') !== -1) {
            cssLoaded = true;
            break;
        }
    }
    
    // If CSS is not loaded, add it to the head
    if (!cssLoaded) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/wp-content/custom-menu-fix.css';
        link.media = 'all';
        document.head.appendChild(link);
    }
});