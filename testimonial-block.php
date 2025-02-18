<?php
/**
 * Plugin Name: Testimonial Block
 * Description: A custom Gutenberg block for displaying testimonials.
 * Version: 1.0.0
 * Author: Sabbir Ahmmed
 * License: GPL-2.0+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: testimonial-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Prevent direct access.
}

/**
 * Registers the custom Testimonial Gutenberg block.
 */
function testimonial_block_register_block() {
    wp_register_script(
        'testimonial-block-editor',
        plugin_dir_url( __FILE__ ) . 'src/index.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'src/index.js' ) // Ensures cache busting
    );

    wp_register_style(
        'testimonial-block-style',
        plugin_dir_url( __FILE__ ) . 'src/style.css',
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'src/style.css' )
    );

    register_block_type( 'custom/testimonial', array(
        'editor_script' => 'testimonial-block-editor',
        'style'         => 'testimonial-block-style',
    ) );
}
add_action( 'init', 'testimonial_block_register_block' );
