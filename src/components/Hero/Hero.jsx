import React from 'react';
import Header from '../Header/Header';
import './hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                {/*hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape</span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            in here we will help you to shape and buil your ideal body and live up
                            your life to fullest
                        </span>
                    </div>
                </div>
                {/* figures*/}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>
                {/**buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>11 bpm</span>
                </div>

                {/**hero img */}
                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />
                {/**calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
