import React from 'react'

const OurFeature = () => {
    return (
        <section className="container">
            <div className="broker-advantages">

                <a href="/trading-platforms/comparison" className="broker-advantages__block">
                    <div className="broker-advantages__decoration">
                    <div className="broker-advantages__line"></div>
                    <div className="broker-advantages__icon">
                        <img alt="Info Icon." src="https://tradeXrepo.blob.core.windows.net/repo/website/assets/img/svelte-home/broker-advantages/icon-0.svg"/>
                    </div>
                    </div>
                    <div className="broker-advantages__title">Tight Spreads</div>
                    <div className="broker-advantages__highlight">From 0</div>
                    <div className="broker-advantages__description">Your trading costs stay predictable and low, even in high-volatility markets.</div>
                </a>


            </div>
        </section>
    )
}

export default OurFeature