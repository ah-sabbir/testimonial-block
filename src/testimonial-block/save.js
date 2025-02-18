import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { name, testimonial, imageUrl } = attributes;

	return (
		<div className="testimonial-block">
			{imageUrl && <img src={imageUrl} alt={name} />}
			<div className="testimonial-content">
				<h3>{name}</h3>
				<p>{testimonial}</p>
			</div>
		</div>
	);
}