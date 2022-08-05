import { useState, useEffect } from 'react';
//import Image from 'next/image';
import axios from 'axios';

const ImageStore = () => {
    const [image, setImage] = useState(null);
    
    const [images, setImages] = useState(null);
    const [updated, setUpdated] = useState(false);

    useEffect(() => { 
        const fetchData = async () => {
            const config = {
                headers: {
                    'Accept': 'application/json',
                }
            };

            try {
                const res = await axios.get('http://localhost:8000/appexample/fetch-images', config);

                if (res.status === 200) {
                    setImages(res.data.images); // try changing res.data.images to res.data.serializer
                }
            } catch(err) {

            }
        };

        fetchData();
    }, [updated]);

    const onFileChange = e => setImage(e.target.files[0]);
    //const onTextChange = e => setAltText(e.target.value);

    const onSubmit = async e => {
        e.preventDefault();

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        };

        const formData = new FormData();
        formData.append('image', image);
        formData.append('alt_text', altText);

        const body = formData;

        try {
            const res = await axios.post('http://localhost:8000/appexample/upload', body, config);

            if (res.status === 201) {
                setUpdated(!updated);
            }
        } catch(err) {

        }
    };

    return (
        <div className='container mt-5'>
            <h1 className='display-4 mt-5 mb-5'>Image Upload Tutorial</h1>
            <div className='row'>
                <div className='col-5'>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label className='form-label' htmlFor='image'>
                                Image Upload
                            </label>
                            <input
                                className='form-control'
                                type='file'
                                name='image'
                                onChange={onFileChange}
                                required
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label className='form-label' htmlFor='alt_text'>
                                Alt Text
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='alt_text'
                                onChange={onTextChange}
                                value={altText}
                                required
                            />
                        </div>
                        <button className='btn btn-success mt-3' type='submit'>
                            Upload Image
                        </button>
                    </form>
                </div>
                <div className='offset-1 col-6'>
                    <h3 className='mb-5'>My Uploaded Images:</h3>
                    <div>
                        {
                            images !== null && images !== undefined && images.length > 0 && images.map(image => (
                                <div className='mb-5' key={image.id}>
                                    <Image
                                        width={200}
                                        height={150}
                                        src={`http://localhost:8000${image.image}`}
                                        alt={image.alt}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageStore;