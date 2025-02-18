import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
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
		<Fragment>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectImage}
					allowedTypes={['image']}
					value={imageId}
					render={({ open }) => (
						<Button onClick={open} variant="primary" >
							{imageUrl ? <img src={imageUrl} alt="Testimonial" style={{ width: '100px', height: '100px' }} /> : 'Upload Image'}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			<TextControl
				label="Name"
				value={name}
				onChange={(value) => setAttributes({ name: value })}
			/>
			<TextareaControl
				label="Testimonial"
				value={testimonial}
				onChange={(value) => setAttributes({ testimonial: value })}
				help={!isValid ? 'Testimonial cannot be empty.' : ''}
			/>
		</Fragment>
	);
}


