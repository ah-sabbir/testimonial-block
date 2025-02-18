// testimonial-block/src/index.js
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';
import Edit from './edit';
import Save from './save';

import metadata from './block.json';


registerBlockType(metadata.name, {
    title: __('Testimonial Block', 'testimonial-block'),
    icon: __('A block to display customer testimonials.', 'testimonial-block'),
    category: 'widgets',
    icon: 'admin-comments',
    attributes: {
        name: {
            type: 'string',
            source: 'text',
            selector: 'h3',
        },
        testimonial: {
            type: 'string',
            source: 'text',
            selector: 'p',
        },
        imageUrl: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
        imageId: {
            type: 'number',
        },
    },


    edit: Edit,
    save: Save,
});
