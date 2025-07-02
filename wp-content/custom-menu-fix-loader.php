<?php
/**
 * Plugin Name: Custom Menu Fix Loader
 * Description: Ensures the custom menu fix CSS is loaded on all pages
 * Version: 1.0
 * Author: NCTU Petroleum Tech
 */

// Add hook to wp_head to include the submenu fix CSS on all pages
add_action('wp_head', 'nctu_add_custom_menu_fix_css');

// Function to output the CSS link
function nctu_add_custom_menu_fix_css() {
    echo '<link rel="stylesheet" href="' . site_url('/wp-content/custom-menu-fix.css') . '" type="text/css" media="all" />';
}