import React, {Component} from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Banner4 from "../components/banner/banner4/Banner4";
import SectionsHeading from "../components/common/SectionsHeading";
import IconBoxTwo from "../components/other/iconboxes/IconBoxTwo";
import RecommendedPlace from "../components/places/RecommendedPlace";
import Testimonial from "../components/sliders/Testimonial";
import SectionDivider from "../components/common/SectionDivider";
import Newsletter from "../components/other/cta/Newsletter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

import restaurants from '../restaurants'

const threeRestaurants = Object.values(restaurants).slice(0, 3)

class Home4 extends Component {
    state = {
        tmimage: [
            {
                tmimg: require('../assets/images/testi-img1.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img2.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img3.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img4.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img5.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img6.jpg')
            }
        ],
        items: threeRestaurants
    }
    render() {
        return (
            <main className="home-4">
                {/* Header */}
                <GeneralHeader />

                {/* Banner */}
                <Banner4 />

                {/* Recommended Place */}
                <section className="card-area padding-top-100px padding-bottom-90px text-left">
                    <div className="container">
                        <div className="row section-title-width text-left">
                            <SectionsHeading title="Les restaurants RES&CO" />
                        </div>
                        <div className="row mt-5">
                            {this.state.items.map((item, index) => {
                                return (
                                    <RecommendedPlace place={item} key={index}/>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="hiw-area text-left padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width text-left">
                            <SectionsHeading
                                title="RES&CO c'est quoi ?"
                                titleClass=" before-none pt-0"
                                desc="
                                    La seule plateforme de réservation de tables avec un menu surprise à prix réduit pour lutter contre le gaspillage alimentaire des restaurants de votre quartier.
                                " />
                        </div>

                        <IconBoxTwo />
                    </div>
                </section>

                {/* Testimonial */}
                <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                    {this.state.tmimage.map((tmimg, index) => {
                        return (
                            <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                        )
                    })}
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Témoignages de gourmets" titleClass=" before-none pt-0" />
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto mt-4">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* Blog
                <section className="blog-area padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Latest Tips & Articles" titleClass=" before-none pt-0" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <LatestBlog />

                    </div>
                </section>
                */}

                {/* Newsletter */}
                <Newsletter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default Home4;