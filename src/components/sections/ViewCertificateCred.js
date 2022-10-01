import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const [videoModalActive, setVideomodalactive] = useState(false);
    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >

            <div className="container-sm" style={{ border: "3px solid violet", borderRadius: "10px", boxShadow: "5px 5px 5px 5px rgba(122,212,233,0.5)" }}>
                <div className={innerClasses}>
                    <div className="hero-content">
                        {window.location.href.split("/")[4] !== "f45615d8-75d2-4ca9-a210-1511cd14129f" && window.location.href.split("/")[4] !== "5a61d8ed-15bd-4e34-953e-44029f4bbbd6" ? <h4 style={{ color: "rgb(245, 0, 0,0.5)" }}>
                            Error
                        </h4> : <>
                            <h1 className="mt-0 mb-18 reveal-from-bottom" data-reveal-delay="200">
                                Bonds <span className="text-color-primary">Credential</span>
                            </h1>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div >
                                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ textAlign: "initial" }}>
                                    Acquirer Name
                                    </p>
                                    {window.location.href.split("/")[4] === "f45615d8-75d2-4ca9-a210-1511cd14129f" ? <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ textAlign: "initial" }}>Aakriti Abhay Singh</p> : <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ textAlign: "initial" }}>Pranjal Paira</p>}
                                </div>
                                {window.location.href.split("/")[4] === "f45615d8-75d2-4ca9-a210-1511cd14129f" ? <div style={{ backgroundColor: "rgb(0,135,62,0.8)", borderRadius: "10px", width: "140px", height: "80px", boxShadow: "0px 0px 10px 15px rgba(150,201,201,0.5)" }}>
                                    <h4>Verified</h4>
                                </div> :
                                    <div style={{ backgroundColor: "rgb(245, 0, 0,0.5)", borderRadius: "10px", width: "140px", height: "80px", boxShadow: "0px 0px 10px 15px rgba(150,201,201,0.5)" }}>
                                        <h4>Revoked</h4>
                                    </div>}
                            </div>
                            <hr />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div >
                                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ textAlign: "initial" }}>
                                        Organistation Name
                                    </p>
                                    {window.location.href.split("/")[4] === "f45615d8-75d2-4ca9-a210-1511cd14129f" ? <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ textAlign: "initial" }}>
                                        Reserve Bank of India</p> : <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ textAlign: "initial" }}>
                                        Reserve Bank of India</p>}
                                </div>
                                <div >
                                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ textAlign: "initial" }}>
                                        Issuance Date
                                    </p>
                                    {window.location.href.split("/")[4] === "f45615d8-75d2-4ca9-a210-1511cd14129f" ? <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ textAlign: "initial" }}>1 October 2022</p> : <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ textAlign: "initial" }}>30 September 2022</p>}
                                </div>
                            </div>
                        </>}
                    </div>

                </div>
            </div>
        </section>
    );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;