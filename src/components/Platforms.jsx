import React from 'react'

const Platforms = () => {
    return (
        <>
            <div className="platforms flat-container">
                <div className="container platforms__title-container">
                    <div className="animated" >
                        {/* style="position: relative; height: auto; opacity: 1;" */}
                        <h2 className="platforms__title " >
                            {/* style="display: block; overflow: hidden; height: auto;" */}
                            Browse the full range of platforms</h2><div >
                            {/* style="width: 454.688px; height: 49px; position: absolute; top: 0px; background-color: var(--text-reveal-dot-revealers-color); transform: scaleX(0); transform-origin: 100% 100%; display: none;" */}

                        </div>
                        <div ></div>
                        {/*style="width: 210.422px; height: 49px; position: absolute; top: 49px; background-color: var(--text-reveal-dot-revealers-color); transform: scale(0.0712854, 0.306122); transform-origin: 100% 34px; display: none;" */}
                    </div>
                </div>
                <div className="platforms__content">
                    <img alt="platforms" className="platforms__image" src="https://direct-website.azureedge.net/assets/img/svelte-home/platforms/new/platforms.webp" />
                    <div className="platforms__floating-elements-container">
                        <a href="/trading-platforms/tradeX-trading-platform" className="platforms__floating-element platforms__floating-element_0 animated fx-animation-fadeInUp">
                            <picture className="platforms__floating-element-img">
                                <img alt="tradeX trading platform" src="https://direct-website.azureedge.net/assets/img/svelte-home/platforms/tradeX-trading-platforms.svg" />
                            </picture>
                            <div>
                                <h3>tradeX Trading Platform</h3>
                                <p>Level up with our products</p>
                            </div>
                        </a>
                        <a href="/trading-platforms/ctrader" className="platforms__floating-element platforms__floating-element_1 animated fx-animation-fadeInUp"><picture className="platforms__floating-element-img">
                            <img alt="cTrader" src="https://direct-website.azureedge.net/assets/img/svelte-home/platforms/tradeX-ctrader.svg" /></picture>
                            <div><h3>tradeX cTrader</h3> <p>A seamless, experience</p>
                            </div>
                        </a>
                        <a href="/trading-platforms/metatrader4" className="platforms__floating-element platforms__floating-element_2 animated fx-animation-fadeInUp">
                            <picture className="platforms__floating-element-img">
                                <img alt="metatrader4" src="https://direct-website.azureedge.net/assets/img/svelte-home/platforms/tradeX-mt4.svg" />
                            </picture>
                            <div>
                                <h3>tradeX MetaTrader 4</h3> <p>The popular, classic solution</p>
                            </div>
                        </a>
                        <a href="/trading-platforms/metatrader5" className="platforms__floating-element platforms__floating-element_3 animated fx-animation-fadeInUp"><picture className="platforms__floating-element-img"><img alt="metatrader5" src="https://direct-website.azureedge.net/assets/img/svelte-home/platforms/tradeX-mt5.svg" />
                        </picture>
                            <div>
                                <h3>tradeX MetaTrader 5</h3>
                                <p>A step-up in trading functions</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="platforms__text-container">
                    <p className="platforms__text">We understand that different clients have different needs. Therefore, we offer a wide selection of trusted,
                        <a href="/awards" target="_blank">award-winning</a>  platforms and account types to choose from.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Platforms