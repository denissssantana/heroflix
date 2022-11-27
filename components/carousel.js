import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Carousel.module.css"
import "react-multi-carousel/lib/styles.css";


const Slider = (props) => {

    const renderizarRecomendadas = props.arquivos.map((item, index) => {
        return (
            <div key={index} style={{ cursor: "pointer" }}>
                <div className={styles.carouselG}>
                <Link href={item.page}>
                    <Image
                        src={item.link}
                        width="1920"
                        height="1080"
                        alt="banner" />
                </Link>
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
        <div style={{ width: '1300px', height: '500px' }}>
            <div>
                <p className="NomePlaylista">Teste</p>
                <div className="BoxCarousel">
                    <Carousel
                        autoPlay={true}
                        infinite={true}
                        responsive={responsive}
                        transitionDuration={500}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="CarouselPersonalizacao"
                    >
                        {renderizarRecomendadas}
                    </Carousel>
                </div>
            </div>
        </div>    
    )
}



export default Slider

