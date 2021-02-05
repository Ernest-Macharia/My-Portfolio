import React from 'react'

function Projectcard(props) {
    return (
        <>
           <li className="cards__item">
                            <a className="cards__item__link" href={props.path} rel="noopener noreferrer" target="_blank">
                                <figure className="cards__item__pic-wrap">
                                   <img src={props.src} alt="my" className="cards__item__img" />
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>{props.text}</h5>
                                </div>
                            </a>
                        </li>  
        </>
    )
}

export default Projectcard;


