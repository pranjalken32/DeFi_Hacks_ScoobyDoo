import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Input from "../elements/Input"
import Swal from 'sweetalert2'
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
    const [input, setinput] = useState("");
    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    }

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
    }

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
    const popup = () => {
        Swal.fire('Credentials sent to your Email')
    }
    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Generate a  <span className="text-color-primary">Bond </span>
                        </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                Please fill the data.
                            </p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <label>Organisation Name<Input placeholder={"Organisation Name"} >
                                    </Input></label>
                                    <label>Name<Input placeholder={"Full Name"} ></Input></label>
                                </div>
                                <br />
                                <div style={{ display: "flex", justifyContent: "space-between" }}>

                                    <label>Issuance Date<Input placeholder={"Issuance Date"} ></Input> </label>
                                    <label>Bond Type<Input placeholder={"Bond Type"} ></Input> </label>
                                </div>
                                <br />
                                <label>Email Id<Input placeholder={"Email Id"} ></Input> </label>
                                <br />
                                <Button tag="a" color="primary" wideMobile onClick={() => popup()}>

                                    Issue Certificates
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;