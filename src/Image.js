import React, { useState, useEffect } from "react";

export default function Image({ setter }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const url = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4fc14642-a3d6-424b-b621-5ecf5d955d7f/foam-seed.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220309T195045Z&X-Amz-Expires=86400&X-Amz-Signature=de3a30b5508392734e3a45d325a85d4f9c84fdb139d9a79fcd98ed37d704f4d8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22foam-seed.json%22&x-id=GetObject";

        fetch(url)
            .then(response => response.json())
            .then(response => setImages(response))
    }, []);

    return (
        <div className="list">


            {images && images.map(image => (
                <div key={image.id}>
                    <img alt="images" src={image.url}> </img> 
                    
                </div>
            ))}



        </div>
    )
}