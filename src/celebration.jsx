import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import cupon from './data/cupon.json';

// Import all images
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img4 from './assets/img4.jpeg';
import img5 from './assets/img5.jpeg';
import img6 from './assets/img6.jpeg';
import img7 from './assets/img7.jpeg';
import img8 from './assets/img8.jpeg';
import img9 from './assets/img9.jpeg';
import img10 from './assets/img10.jpeg';
import img11 from './assets/img11.jpeg';
import img12 from './assets/img12.jpeg';
import img13 from './assets/img13.jpeg';
import img14 from './assets/img14.jpeg';
import img15 from './assets/img15.jpeg';
import img16 from './assets/img16.jpeg';
import img17 from './assets/img17.jpeg';
import img18 from './assets/img18.jpeg';
import img19 from './assets/img19.jpeg';

const CelebrationPage = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
  ];

  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true, // Fixes scroll blocking
    touchMove: true,
    adaptiveHeight: true, // Fixes height issues
    draggable: false, // Prevents drag from blocking scrolling
  };

  const couponSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    touchMove: true,
    adaptiveHeight: true,
    draggable: false, // Prevents drag from blocking scrolling
  };

  return (
    <div className='celebration-container'>
      <h1 className='celebration-title'>Celebrating Us! 💖</h1>
      <p>Here are some of our favorite memories✨</p>

      {/* Image Slideshow */}
      <Slider
        {...imageSettings}
        className='slideshow'
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Memory ${index + 1}`}
              className='slideshow-images'
            />
          </div>
        ))}
      </Slider>

      {/* Text Section */}
      <div className='text-section'>
        <p>
          Here are some of our favorite memories together. Each picture tells a
          story of love, laughter, and unforgettable moments. ❤️✨
        </p>
      </div>

      {/* Love Coupons Section */}
      <h2 className='cupons-title'>Love Coupons 🎟️</h2>
      <Slider
        {...couponSettings}
        className='slideshow'
      >
        {cupon.map((coupon, index) => (
          <div
            key={index}
            className='cupon'
            style={{ backgroundColor: coupon.color }}
          >
            <span className='heart1'>❤️</span>
            <h3 className='cupon-title'>{coupon.title}</h3>
            <span className='heart2'>❤️</span>
            <p className='cupon-subtitle'>{coupon.subtitle}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CelebrationPage;
