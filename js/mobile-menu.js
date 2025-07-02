// Mobile Menu Toggle Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with mobile-nav__toggler class
    const togglers = document.querySelectorAll('.mobile-nav__toggler');
    const mobileNavWrappers = document.querySelectorAll('.mobile-nav__wrapper');
    
    // Add click event to all toggler elements
    togglers.forEach(function(toggler) {
        toggler.addEventListener('click', function(e) {
            e.preventDefault();
            // Toggle expanded class on all mobile nav wrappers
            mobileNavWrappers.forEach(function(wrapper) {
                wrapper.classList.toggle('expanded');
            });
            document.body.classList.toggle('mobile-menu-visible');
        });
    });
    
    // Clone the main menu for mobile - target all mobile nav containers
    const mainMenu = document.querySelector('.main-menu__nav .menu-main-menu-navigation-container');
    const mobileNavContainers = document.querySelectorAll('.mobile-nav__container');
    
    // Define the custom menu items to be added - matching the header structure exactly
    const customMenuItems = [
        { text: 'HOME', url: 'index.html' },
        { text: 'ABOUT', url: 'about/index.html' },
        { text: 'AI', url: 'https://npa-smarter-engine.vercel.app/' },
        { text: 'Technical Research\'s', url: 'blog-with-no-sidebar/index.html' },
        { 
            text: 'Team', 
            url: 'services/index.html',
            submenu: [
                { text: 'Media Segment', url: 'services/index.html' },
                { text: 'Technical Segment', url: 'services/subservice2.html' },
                { text: 'Public Relations Segment', url: 'services/subservice4.html' },
                { text: 'Magazin Segment', url: 'services/subservice3.html' },
                { text: 'Operation Segment Segment', url: 'services/subservice5.html' },
                { text: 'Marketing Segment Segment', url: 'services/subservice6.html' }
            ]
        },
        { text: 'CONTACT', url: 'contact/index.html' },
        { 
            text: 'Founders', 
            url: 'portfolio/index.html',
            submenu: [
                { text: 'Founders 2', url: 'portfolio/index-Copy.html' }
            ]
        }
    ];
    
    if (mainMenu && mobileNavContainers.length > 0) {
        // Process each mobile nav container
        mobileNavContainers.forEach(function(mobileNavContainer) {
            // Create a new mobile menu list
            const mobileMenuContainer = document.createElement('div');
            mobileMenuContainer.className = 'menu-main-menu-navigation-container';
            
            const mobileMenuList = document.createElement('ul');
            mobileMenuList.className = 'mobile-menu__list';
            mobileMenuContainer.appendChild(mobileMenuList);
            
            // Add custom menu items
            customMenuItems.forEach(function(item) {
                const menuItem = document.createElement('li');
                menuItem.className = 'menu-item';
                
                if (item.submenu) {
                    menuItem.className += ' menu-item-has-children';
                }
                
                const menuLink = document.createElement('a');
                menuLink.href = item.url;
                menuLink.textContent = item.text;
                menuItem.appendChild(menuLink);
                
                // Add submenu if exists
                if (item.submenu && item.submenu.length > 0) {
                    const subMenu = document.createElement('ul');
                    subMenu.className = 'sub-menu';
                    
                    item.submenu.forEach(function(subItem) {
                        const subMenuItem = document.createElement('li');
                        subMenuItem.className = 'menu-item';
                        
                        const subMenuLink = document.createElement('a');
                        subMenuLink.href = subItem.url;
                        subMenuLink.textContent = subItem.text;
                        
                        subMenuItem.appendChild(subMenuLink);
                        subMenu.appendChild(subMenuItem);
                    });
                    
                    menuItem.appendChild(subMenu);
                    
                    // Add dropdown toggle for submenu
                    const dropdownToggle = document.createElement('span');
                    dropdownToggle.className = 'dropdown-btn';
                    dropdownToggle.innerHTML = '<i class="fas fa-angle-down"></i>';
                    menuItem.appendChild(dropdownToggle);
                    
                    // Add click event to toggle submenu visibility
                    dropdownToggle.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        subMenu.classList.toggle('open');
                        dropdownToggle.classList.toggle('active');
                    });
                }
                
                mobileMenuList.appendChild(menuItem);
            });
            
            // Clear existing content and add the new menu
            mobileNavContainer.innerHTML = '';
            mobileNavContainer.appendChild(mobileMenuContainer);
        });
    } else {
        // If main menu not found, create a basic menu from scratch for mobile
        const menuItems = document.querySelectorAll('.main-menu__list li');
        if (menuItems.length > 0) {
            mobileNavContainers.forEach(function(mobileNavContainer) {
                const newMobileMenu = document.createElement('ul');
                newMobileMenu.classList.add('mobile-menu__list');
                
                menuItems.forEach(function(item) {
                    const newItem = item.cloneNode(true);
                    newMobileMenu.appendChild(newItem);
                });
                
                mobileNavContainer.appendChild(newMobileMenu);
            });
        }
    }
    
    // Ensure mobile menu button is visible on small screens
    const checkScreenSize = function() {
        const mobileTogglers = document.querySelectorAll('.mobile-nav__toggler');
        if (window.innerWidth <= 991) {
            mobileTogglers.forEach(function(toggler) {
                toggler.style.display = 'inline-block';
            });
        }
    };
    
    // Check on load and resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});