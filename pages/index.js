import * as React from "react";
import Gallery from "../components/Gallery";
import { getAllImages } from "../lib/images";

const Index = ({ images }) => {
    return <Gallery images={images} />;
};

export async function getStaticProps() {
    const images = await getAllImages();
    return {
        props: { images },
    };
}

export default Index;
