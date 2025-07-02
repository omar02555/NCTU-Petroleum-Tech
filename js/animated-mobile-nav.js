// Animated Mobile Navigation Button Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get all mobile nav elements
    const hamburgerMenus = document.querySelectorAll('.hamburger-menu');
    const mobileNavWrappers = document.querySelectorAll('.mobile-nav__wrapper');
    
    // Add click event to all hamburger menu buttons
    hamburgerMenus.forEach(function(menu) {
        menu.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle active class on hamburger menu
            this.classList.toggle('active');
            
            // Toggle expanded class on all mobile nav wrappers
            mobileNavWrappers.forEach(function(wrapper) {
                wrapper.classList.toggle('expanded');
            });
            
            // Toggle mobile-menu-visible class on body
            document.body.classList.toggle('mobile-menu-visible');
        });
    });
    
    // Close mobile menu when clicking on the overlay
    const mobileNavOverlays = document.querySelectorAll('.mobile-nav__overlay');
    mobileNavOverlays.forEach(function(overlay) {
        overlay.addEventListener('click', function() {
            // Remove active class from hamburger menus
            hamburgerMenus.forEach(function(menu) {
                menu.classList.remove('active');
            });
            
            // Remove expanded class from mobile nav wrappers
            mobileNavWrappers.forEach(function(wrapper) {
                wrapper.classList.remove('expanded');
            });
            
            // Remove mobile-menu-visible class from body
            document.body.classList.remove('mobile-menu-visible');
        });
    });
    
    // Close mobile menu when clicking on the close button
    const mobileNavCloseButtons = document.querySelectorAll('.mobile-nav__close');
    mobileNavCloseButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove active class from hamburger menus
            hamburgerMenus.forEach(function(menu) {
                menu.classList.remove('active');
            });
            
            // Remove expanded class from mobile nav wrappers
            mobileNavWrappers.forEach(function(wrapper) {
                wrapper.classList.remove('expanded');
            });
            
            // Remove mobile-menu-visible class from body
            document.body.classList.remove('mobile-menu-visible');
        });
    });
    
    // Clone the main menu for mobile - target all mobile nav containers
    const mainMenu = document.querySelector('.main-menu__nav .menu-main-menu-navigation-container');
    const mobileNavContainers = document.querySelectorAll('.mobile-nav__container');
    
    if (mainMenu && mobileNavContainers.length > 0) {
        // Process each mobile nav container
        mobileNavContainers.forEach(function(mobileNavContainer) {
            // Clone the main menu and its contents
            const mobileMenuContainer = mainMenu.cloneNode(true);
            
            // Clear existing content and add the cloned menu
            mobileNavContainer.innerHTML = '';
            mobileNavContainer.appendChild(mobileMenuContainer);
            
            // Add animation delay to each menu item
            const menuItems = mobileNavContainer.querySelectorAll('li');
            menuItems.forEach(function(item, index) {
                item.style.setProperty('--item-index', index);
            });
            
            // Add dropdown functionality for submenus
            const itemsWithChildren = mobileNavContainer.querySelectorAll('.menu-item-has-children');
            itemsWithChildren.forEach(function(item) {
                const link = item.querySelector('a');
                const subMenu = item.querySelector('.sub-menu');
                
                if (subMenu) {
                    // Create dropdown toggle button
                    const dropdownBtn = document.createElement('span');
                    dropdownBtn.className = 'dropdown-btn';
                    dropdownBtn.innerHTML = '<i class="fas fa-angle-down"></i>';
                    item.appendChild(dropdownBtn);
                    
                    // Add click event to toggle submenu
                    dropdownBtn.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        subMenu.classList.toggle('open');
                        this.classList.toggle('active');
                    });
                }
            });
        });
    }
});