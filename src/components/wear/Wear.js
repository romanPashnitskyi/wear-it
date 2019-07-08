import React from 'react'

import boots from '../../style/images/boots.png'
import hat from '../../style/images/hat.png'
import hat2 from '../../style/images/hat2.png'
import cap from '../../style/images/cap.png'
import jacket from '../../style/images/denim-jacket.png'
import gloves from '../../style/images/gloves.png'
import raincoat from '../../style/images/raincoat.png'
import shirt from '../../style/images/shirt.png'
import scarf from '../../style/images/scarf.png'
import shorts from '../../style/images/shorts.png'
import sneaker from '../../style/images/sneaker.png'
import sweater from '../../style/images/long-sleeves.png'
import sunglasses from '../../style/images/sunglasses.png'
import trousers from '../../style/images/trousers.png'
import tShirt from '../../style/images/Tshirt.png'
import umbrella from '../../style/images/umbrella.png'
import winterJacket from '../../style/images/winter-jacket.png'
import flipFlops from '../../style/images/flip-flops.png'

import './Wear.scss'

const Wear = props => (
  <div className='wear-wrapper'>
    <div className='alert-wrapper'>
      {
        (props.city === undefined || props.city === '') &&
        <p className='alert'>We don't know where you are !</p>
      }
    </div>
    {
      (props.city !== undefined && props.city !== '') &&
      <div>
        <h2>Perfect Outfit</h2>
        <div className='wear-section'>
          {
            props.temp <= 0 &&
            (
              <div className='result'>
                <img src={winterJacket} alt={winterJacket} />
                <span> + </span>
                <img src={sweater} alt={sweater} />
                <span> + </span>
                <img src={trousers} alt={trousers} />
                <span> + </span>
                <img src={boots} alt={boots} />
                <span> + </span>
                <img src={hat} alt={hat} />
                <span> + </span>
                <img src={scarf} alt={scarf} />
                <span> + </span>
                <img src={gloves} alt={gloves} />
              </div>
            )
          }
          {
            (props.temp > 0 && props.temp < 10) &&
            (
              <div className='result'>
                <img src={jacket} alt={jacket} />
                <span> + </span>
                <img src={sweater} alt={sweater} />
                <span> + </span>
                <img src={trousers} alt={trousers} />
                <span> + </span>
                <img src={sneaker} alt={sneaker} />
                <span> + </span>
                <img src={hat2} alt={hat2} />
              </div>
            )
          }
          {
            (props.temp >= 10 && props.temp <= 15) &&
            (
              <div className='result'>
                <img src={jacket} alt={jacket} />
                <span> + </span>
                <img src={shirt} alt={shirt} />
                <span> + </span>
                <img src={trousers} alt={trousers} />
                <span> + </span>
                <img src={sneaker} alt={sneaker} />
                <span> + </span>
                <img src={hat2} alt={hat2} />
              </div>
            )
          }
          {
            (props.temp > 15 && props.temp <= 20) &&
            (
              <div className='result'>
                <img src={shirt} alt={shirt} />
                <span> + </span>
                <img src={trousers} alt={trousers} />
                <span> + </span>
                <img src={sneaker} alt={sneaker} />
              </div>
            )
          }
          {
            (props.temp > 20 && props.temp <= 25) &&
            (
              <div className='result'>
                <img src={tShirt} alt={tShirt} />
                <span> + </span>
                <img src={shorts} alt={shorts} />
                <span> + </span>
                <img src={sneaker} alt={sneaker} />
              </div>
            )
          }
          {
            (props.temp > 25) &&
            (
              <div className='result'>
                <img src={tShirt} alt={tShirt} />
                <span> + </span>
                <img src={shorts} alt={shorts} />
                <span> + </span>
                <img src={flipFlops} alt={flipFlops} />
              </div>
            )
          }
        </div>
        {
          (props.icon === '01d' || props.icon === '09d' ||
            props.icon === '09n' || props.icon === '10d' ||
            props.icon === '10n' || props.icon === '11d' ||
            props.icon === '11n') &&
            <div>
              <h2>Things you may need</h2>
              <div className='wear-section'>
                {
                  props.icon === '01d' &&
                  <div className='result'>
                    <img src={sunglasses} alt={sunglasses} />
                    <span> or </span>
                    <img src={cap} alt={cap} />
                  </div>
                }
                {
                  (props.icon === '09d' || props.icon === '09n' ||
                  props.icon === '10d' || props.icon === '10n' ||
                  props.icon === '11d' || props.icon === '11n') &&
                  <div className='result'>
                    <img src={umbrella} alt={umbrella} />
                    <span> or </span>
                    <img src={raincoat} alt={raincoat} />
                  </div>
                }
              </div>
            </div>
        }
      </div>
    }
  </div>
)

export default Wear
