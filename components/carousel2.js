import React from "react";
import Carousel2 from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Carousel.module.css"
import "react-multi-carousel/lib/styles.css";


const Slider2 = (props) => {

    const renderizarRecomendadas = props.arquivos.map((item, index) => {
        return (
            <div key={index} style={{ cursor: "pointer" }}>
                <div className={styles.carouselP}>
                    <Link href={item.page}>
                        <Image
                            src={item.link}
                            width="1920"
                            height="1080"
                            alt="filmes" />
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
        <div style={{ width: '1920px', height: '300px' }}>
            <div>
                <p className="NomePlaylista">Teste</p>
                <div className="BoxCarousel">
                    <Carousel2
                        autoPlay={true}
                        infinite={true}
                        responsive={responsive}
                        transitionDuration={500}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="CarouselPersonalizacao"
                    >
                        {renderizarRecomendadas}
                    </Carousel2>
                </div>
            </div>
        </div>    
    )
}



export default Slider2

