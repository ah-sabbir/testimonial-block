import { useBlockProps } from '@wordpress/block-editor';

export default function View({ attributes }) {
    const { name, testimonial, image } = attributes;

    return (
        <div {...useBlockProps()} className="testimonial-block">
            <div className="testimonial-content">
                <h4>{name}</h4>
                <blockquote>{testimonial}</blockquote>
                {image && <img src={image} alt="Testimonial" className="testimonial-image" />}
            </div>
        </div>
    );
}
