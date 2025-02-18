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
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_testimonial_block_block_init() {
	register_block_type( __DIR__ . '/build/testimonial-block' );
}
add_action( 'init', 'create_block_testimonial_block_block_init' );