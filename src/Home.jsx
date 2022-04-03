import React from 'react'
import './Home.css'
import Product from './Product'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel} from 'react-responsive-carousel'
function Home() {
  return (
    
    <div className="home">
      <div className="home__container">
        <Carousel
       
          showThumbs={false}
          infiniteLoop
          showArrows={false}
          interval={3000}
          autoPlay
          transitionTime={1500}
          stopOnHover={false}
          swipeable={false}
          emulateTouch
          showIndicators={false}
          showStatus={false}
        >
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/611w8CPT7GL._SX3000_.jpg"
          alt=""
        />
           <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2021/Q4/Q4_Storefront_Flip/Q1_22_Post_Holiday_Flip/2022Q1_homehub_hero_1500x529.jpg"
          alt=""
        />
           <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71KChS6ZVdL._SX3000_.jpg"
          alt=""
        />
</Carousel>
        <div className="home__row">
          <Product
            id="12321341"
            title="7 Secrets of Persuasion: Leading-Edge Neuromarketing Techniques to Influence Anyone Paperback"
            price={14.50}
            rating={5}
            image="https://recyclemefree.org/img/255053.jpg"
          />
          <Product
            id="49538094"
            title="CO-Z Commercial Food Mixer 3 Speed, 30QT 1100W Stainless Steel Blender with Stainless Steel Bowl Dough Hooks, Pizzerias Schools Restaurants Bakeries"
            price={1059.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71BhstNe6pL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Smart Watch with Call Function(Answering/Dialing) for Android and iOS Phones Compatible, Waterproof Fitness Tracker Watch with Heart Rate, Sleep Monitor Pedometer for Men Women"
            price={54.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/619tE4zTN8L._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="ZtotopCases for New iPad Pro 12.9 Inch Case 2021 5th Generation, [6 Magnetic Stand + Pencil Holder + Auto Wake/Sleep] Full Body Protective Cover Case for iPad Pro 12.9 5th Gen, Black"
            price={28.89}
            rating={4}
            image="https://m.media-amazon.com/images/I/71EReyiKXQS._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="3254354345"
            title="Makeup Organizer, 360 Degree Rotating Adjustable Cosmetic Storage Display Case with 8 Layers Large Capacity, Fits Jewelry,Makeup Brushes, Lipsticks and More, Clear Transparent"
            price={34.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71nbLhXBIES._AC_SL1500_.jpg"
          />
                
        <Product
            id="3254354345"
            title="Tribesigns Modern L-Shaped Desk Corner Computer Desk PC Laptop Study Table Workstation Home Office Wood & Metal, White"
            price={159.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61G8xYVTI3L._AC_SL1001_.jpg"
          />
          

        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="LG 49WL95C-W Ultrawide Dual QHD Monitor 49 32: 9 (5120 x1440) Curved IPS Display, HDR10, USB Type-C, HDR 10, Ambient Light Sensor, 2 x 10W Stereo Speaker"
            price={1845.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71EP7F-yPKL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
    
  )
}

export default Home