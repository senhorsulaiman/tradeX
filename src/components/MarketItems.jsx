import React, { useState } from 'react'
import { marketItems } from '../data';


const MarketItems = () => {
    const [active, setActive] = useState(0);

    const activeItem = marketItems[active];
    const { id, name, image, text } = activeItem;

    return (
        <div className="market-items-tabs" key={id}>
            <div className="market-items-tabs__content">
                <div className="market-items-tabs__container flat-container">
                    <div className="market-items-tabs__tabs hide-scroll-bar">

                        {marketItems.map((item, index) => {
                            return (
                                <div className={`market-items-tabs__tab ${active === index ? 'market-items-tabs__tab_active' : index === active - 1 ? 'market-items-tabs__tab_before-active' : ''} `} key={index} onClick={() => setActive(index)}>
                                    <div className="market-items-tabs__title">{item.name}</div>
                                </div>

                            )
                        })}
                    </div>
                    <img alt={name} className="market-items-picture" src={image} />
                    <div className="market-items-content">
                        <h3 className="market-items-content__title">{name}</h3>
                        <p className="market-items-content__description">{text}</p>

                        <div className="market-items-content__button">
                            <a href="/trading/indices">
                                <span className="ui-button-layout ui-button-layout_primary ui-button-layout_l ui-button-layout_has-right-icon position-relative ">
                                    <span className="ui-button-layout-container">
                                        <div>
                                            <span className="ui-button-layout-content">Trade {name}
                                                <i className="ui-button-layout-icon arrow-right"></i>
                                            </span>
                                        </div>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketItems