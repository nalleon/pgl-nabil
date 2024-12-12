import React, { useContext, useState } from 'react'
import '../Styles/ImageComponent.css'
import { AppThemeContext } from './Context/AppThemeContextProvider';

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

type Props = {
    value: string; 
    onChange: (newValue: string) => void; 
}

const ImageComponent = (props: Props) => {

    /**
     * UseState
     */
    const [imageUrl, setImageUrl] = useState(props.value);

    
    /**
     * Context for theme
     */
    const context = useContext(AppThemeContext);
    
    /**
     * Event handler for url image input change
     */
    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const url = event.target.value;
        setImageUrl(url);
        props.onChange(url);
    };

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6 align-content-center">
                <label className={`${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Poster</strong>
                </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL. Leave blank for default thumbnail"
                        className={`custom-input${context.theme === 'dark' ? '' : '-light'}`}
                        onChange={handleUrlChange}
                    />
                </div>

                <div className="col-12 col-md-6 mt-4">
                    <div className={`preview-custom-card${context.theme === 'dark' ? '' : '-light'} align-content-center`}>
                        {imageUrl && (imageUrl !== '' && (imageUrl.startsWith('https://') || imageUrl.startsWith('http://'))) ? 
                            <img src={imageUrl} alt="Preview" className={`preview-custom-img${context.theme === 'dark' ? '' : '-light'}`} />
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