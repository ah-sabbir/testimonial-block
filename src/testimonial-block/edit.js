import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { name, testimonial, imageUrl, imageId } = attributes;

	const onSelectImage = (media) => {
		setAttributes({
			imageUrl: media.url,
			imageId: media.id,
		});
	};

	const isValid = testimonial && testimonial.trim() !== '';

	return (
		<div {...useBlockProps()}> 
			<InspectorControls>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={['image']}
							value={imageId}
							render={({ open }) => (
								<Button onClick={open} variant="primary">
									{imageUrl ? __('Change Image', 'testimonial-block') : __('Upload Image', 'testimonial-block')}
								</Button>
							)}
						/>
					</MediaUploadCheck>
			</InspectorControls>
			{imageUrl && <img src={imageUrl} alt={__('Testimonial', 'testimonial-block')} style={{ width: '100px', height: '100px' }} />}
			<TextControl
				label={__('Name', 'testimonial-block')}
				value={name}
				onChange={(value) => setAttributes({ name: value })}
			/>
			<TextareaControl
				label={__('Testimonial', 'testimonial-block')}
				value={testimonial}
				onChange={(value) => setAttributes({ testimonial: value })}
				help={!isValid ? __('Testimonial cannot be empty.', 'testimonial-block') : ''}
			/>
		</div>
	);
}


