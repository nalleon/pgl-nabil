import React, { useState } from 'react'
import '../Styles/ImageComponent.css'
type Props = {
    value: string; 
    onChange: (newValue: string) => void; 
}

const ImageComponent = (props: Props) => {
    const [imageUrl, setImageUrl] = useState(props.value);

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const url = event.target.value;
        setImageUrl(url);
        props.onChange(url);
    };

    return (
    <>
        
            <div className="row">
                <div className="col-12 col-md-6 align-content-center">
                <label>
                    <strong>Poster</strong>
                </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL. Leave blank for default thumbnail"
                        className="custom-input"
                        value={imageUrl}
                        onChange={handleUrlChange}
                    />
                </div>

                <div className="col-12 col-md-6 mt-4">
                    <div className="preview-custom-card align-content-center">
                        {imageUrl && (imageUrl !== '' && (imageUrl.startsWith('https://') || imageUrl.startsWith('http://'))) ? 
                            <img src={imageUrl} alt="Preview" className="preview-custom-img" />
                            : 
                            <h3 className='text-center'>Preview</h3>
                        }

                    </div>
                </div>
        </div>
    </>
    )   
}

export default ImageComponent