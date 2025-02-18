import { useBlockProps } from '@wordpress/block-editor';

export default function View({ attributes }) {
    const { name, testimonial, image } = attributes;

    return (
        <div {...useBlockProps()} className="testimonial-block">
            {image && <img src={image} alt="Testimonial" className="testimonial-image" />}
            <div className="testimonial-content">
                <h4>{name}</h4>
                <blockquote>{testimonial}</blockquote>
            </div>
        </div>
    );
}
