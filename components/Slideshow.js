import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"
// import AdaoNegro from "../public/images/adaoNegro"

const Carrosel = () => {

    const videoList = ['/videos/adaoNegro.mp4', '/videos/invasaoSecreta.mp4', '/images/adaoNegro.png', '/images/adaoNegro.png', '/images/adaoNegro.png', '/images/adaoNegro.png']

    const renderizarRecomendadas = videoList.map((o, index) => {
        console.log(o)
        return (
            <div key={index}>
                <div>
                    <video
                        src={o} width="350"
                        autoPlay
                        controls
                        preload >
                    </video>
                </div>
            </div>
        )
    })

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3.3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <div>
            <p className="NomePlaylista">Playlist: {'teste'}</p>
            <div className="BoxCarousel">
                <Carousel
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="CarouselPersonalizacao"
                >
                    {renderizarRecomendadas}
                </Carousel>
            </div>
        </div>
    )
}

export default Carrosel

