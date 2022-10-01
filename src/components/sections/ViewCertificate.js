import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Input from "../elements/Input"
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

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Welcome,  <span className="text-color-primary">User </span>
                        </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                You may key in the Bond id to view the Verified Bonds created on the Credentials Ethereum Blockchain.
                            </p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <ButtonGroup>
                                    <Input placeholder={"Certificate ID"} value={input} onChange={(e) => setinput(e.target.value)}></Input>
                                    <Button tag="a" color="primary" wideMobile href={`/Cred/${input}`}>
                                        View Bonds
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <h6>For demo purposes only, here are some live Bonds you can try to view: <br/>
                                f45615d8-75d2-4ca9-a210-1511cd14129f<br />
                                5a61d8ed-15bd-4e34-953e-44029f4bbbd6</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;