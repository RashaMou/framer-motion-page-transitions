import axios from "axios";

export const getAllImages = async () => {
    const res = await axios.get(
        "https://api.unsplash.com/search/photos/?client_id=7pu7-_RDN2JYMJ0d2zYchg7yXSUxvlmRt4FWmXb7aps&query=animal&orientation=portrait"
    );

    const images = await res.data.results;
    return images;
};

export const getImageIds = async () => {
    const res = await axios.get(
        "https://api.unsplash.com/search/photos/?client_id=7pu7-_RDN2JYMJ0d2zYchg7yXSUxvlmRt4FWmXb7aps&query=animal&orientation=portrait"
    );
    const images = await res.data.results;
    // we want to return an object with a paths property
    // that paths property needs to be an array of objects, where each object represents a route
    // in each of those objects we need to specify route params
    // paths: [{}, {}, {params: {id: imageId}}, {}]
    const paths = images.map((image) => {
        return {
            params: { id: image.id },
        };
    });

    return paths;
};

export const getImage = async (id) => {
    const res = await axios.get(
        `https://api.unsplash.com/photos/${id}?client_id=7pu7-_RDN2JYMJ0d2zYchg7yXSUxvlmRt4FWmXb7aps`
    );

    const url = res.data.urls.regular;
    return url;
};
