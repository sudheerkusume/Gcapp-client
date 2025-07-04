import React from 'react'
import '@fontsource/inter/300.css';  // Light
import '@fontsource/inter/400.css';  // Regular
import '@fontsource/inter/500.css';  // Medium
import '@fontsource/inter/600.css';  // Semi-bold
import Phone from '../Accets/Phone.png';
import Store from '../Accets/Store.png';
import Delivery from '../Accets/Delivery.png';
import Beautyitems from '../Accets/Beautyitems.avif';
import Beautyitems1 from '../Accets/Beautyitems1.avif';
import Beautyitems2 from '../Accets/Beautyitem2.avif';
import Beautyitems3 from '../Accets/Beautyitems3.avif';
import Beautyitems4 from '../Accets/Beautyitems4.avif';
import Beautyitems5 from '../Accets/Beautyitems5.avif';
import Qr2 from '../Accets/Qr2.jpeg';
import Nothing from '../Accets/Nothing.avif';
import Nothing1 from '../Accets/Nothing1.avif';
import Zomato from '../Accets/Zomato.jpg';
import Zomato1 from '../Accets/Zomato1.jpg';
import Zomato2 from '../Accets/Zomato2.jpg';
const AboutPage = () => {
  return (
    <div>
      <section>
        <div className='about-background'>
          <div className='row'>
            <div className='col-12'>
              <div className='overlay p-5'>
              <h1 className='font-bold'>moreIn</h1>
              <p className="text-2xl">Instant commerce<br></br> indistinguishable from magic</p>
            </div>

            </div>
          </div>
        </div>

        <div className='container pt-5 m-lg-5'>
          <div className="row align-items-center">
               <div className="col-12 col-md-6 p-3 p-sm-4"> 
                <p className='para'>Launched with the ambition of making everyday essentials available in minutes, moreIn has revolutionized how India shops.</p>
                <p className='para'>It has now evolved into a full-fledged quick commerce company, delivering thousands of products including grocery and daily essentials, electronics, beauty & personal care items, stationery, and emergency supplies, directly to your doorsteps, within minutes.</p>
               </div>
               <div className="image col-12 col-md-6 p-3 p-sm-4 text-center "> 
                  <div className='MainImage'></div>
               </div>
          </div>
        </div>

        <div className="container my-5">
              <div className="row text-center gy-4">
                <div className='col-12 pt-5 mt-lg-5 text-start'>
                      <h1 className='Leading mb-lg-4'>Leading the quick commerce evolution</h1>
                      <p className='para'>moreIn is powered by a dynamic network of customers, store partners, and delivery partners working together seamlessly.</p>
                </div>
                 <div className="col-12 col-md-4">
                     <div className="feature-card p-5">
                         <img src={Phone} alt="Phone Icon" className="icon mb-4 w-50 h-50" />
                            <h5>13 million+ customers use our app monthly</h5>
                       </div>
                  </div>
                 <div className="col-12 col-md-4">
                       <div className="feature-card p-5">
                         <img src={Store} alt="Store Icon" className="icon mb-4 h-50 w-50" />
                             <h5>1,300+ stores across <br /> 100+ cities</h5>
                        </div>
                  </div>
                  <div className="col-12 col-md-4">
                       <div className="feature-card p-5">
                            <img src={Delivery} alt="Delivery Icon" className="icon mb-4 w-50 h-50" />
                            <h5>180,000+ delivery partners delivering under 10 minutes</h5>
                       </div>
                  </div>
               </div>
        </div>

        <div className="container my-5">
              <div className="row text-center gy-4">
                <div className='col-12 pt-5 mt-lg-5 text-start'>
                      <h1 className='Leading mb-lg-4'>Beyond essentials</h1>
                      <p className='para'>moreIn is constantly innovating to serve the evolving customer needs, the latest being in:</p>
                </div>
                 <div className="col-12 col-md-4">
                     <div className="feature-ward text-start">
                         <img src={Beautyitems} alt="Phone Icon" className="icon mb-4 w-100 h-100" />
                            <h2 className='p-lg-2'>Beauty & personal care</h2>
                            <p className='para'>From skincare to haircare, from essentials to indulgences, everything needed to look and feel one’s best.</p>
                       </div>
                  </div>
                 <div className="col-12 col-md-4">
                       <div className="feature-ward text-start">
                         <img src={Beautyitems1} alt="Store Icon" className="icon mb-4 h-100 w-100" />
                             <h2 className='p-lg-2'>Books</h2>
                             <p className='para'>Bestsellers, bedtime stories, and more — great reads delivered quickly, no long waits required.</p>
                        </div>
                  </div>
                  <div className="col-12 col-md-4">
                       <div className="feature-ward text-start">
                            <img src={Beautyitems2} alt="Delivery Icon" className="icon mb-4 w-100 h-100" />
                            <h2 className='p-lg-2'>Electronics</h2>
                            <p className='para'>Chargers, gadgets, accessories, and more — tech designed to keep up with today’s fast-paced lifestyle.</p>
                       </div>
                  </div>
                  <div className="col-12 col-md-4">
                     <div className="feature-ward text-start">
                         <img src={Beautyitems3} alt="Phone Icon" className="icon mb-4 w-100 h-100" />
                            <h2 className='p-lg-2'>Fashion</h2>
                            <p className='para'>Whether it's everyday style or last-minute ethnic wear for a friend's wedding, find fashion that fits any life — and any timeline.</p>
                       </div>
                  </div>
                 <div className="col-12 col-md-4">
                       <div className="feature-ward text-start">
                         <img src={Beautyitems4} alt="Store Icon" className="icon mb-4 h-100 w-100" />
                             <h2 className='p-lg-2'>Sports</h2>
                             <p className='para'>For training, playing, or just starting out, the right gear is only minutes away.</p>
                        </div>
                  </div>
                  <div className="col-12 col-md-4">
                       <div className="feature-ward text-start">
                            <img src={Beautyitems5} alt="Delivery Icon" className="icon mb-4 w-100 h-100" />
                            <h2 className='p-lg-2'>Toys</h2>
                            <p className='para'>Brain-boosting games, cuddly companions, and everything in between — toys to match every age and every mood.</p>
                       </div>
                  </div>

               </div>
        </div>
     
             <div className="container my-5 bg-primary-subtle text-center">
              <div className="row text-center gy-4">
                <div className='col-12 pt-5 mt-lg-5 text-start'>
                      <h1 className='Leading mb-lg-4'>Download the app now</h1>
                      <p className='para'>Everything you need, delivered in minutes on the moreIn app.</p>
                </div>
                 <div className="col-12 col-md-5">
                     <div className="feature-ward text-start">
                         <img src={Nothing} alt="Phone Icon" className="icon mb-4 w-50 p-3" />
                         <img src={Nothing1} alt="Store Icon" className="icon mb-4 w-50 p-3" />
                       </div>
                  </div>
                 <div className="col-12 col-md-6">
                       <div className="feature-ward text-end">
                         <img src={Qr2} alt='error' className='w-50'/>
                        </div>
                  </div>
               </div>
            </div>
       
               <div className="container my-5">
              <div className="row text-center gy-4 ">
                <div className='col-12 pt-5 mt-lg-5 text-start'>
                      <h1 className='Leading mb-lg-4'>Our other businesses</h1>
                </div>
                 <div className="col-12 col-md-4">
                     <div className="feature-ward text-start">
                         <img src={Zomato} alt="Phone Icon" className="icon mb-4 w-100 h-100" />
                            <h2 className='p-lg-2'>Bringing the world closer, one meal at a time</h2>
                            <p className='para'>Zomato connects millions to their favourite restaurants, offering convenience, discovery, and exceptional dining experiences.</p>
                       </div>
                  </div>
                 <div className="col-12 col-md-4">
                       <div className="feature-ward text-start">
                         <img src={Zomato1} alt="Store Icon" className="icon mb-4 h-100 w-100 pb-4" />
                             <h2 className='pb-lg-2'>Creativity & community</h2>
                             <p className='para'>District delivers immersive retail experiences, marketing solutions, and community-driven projects.</p>
                        </div>
                  </div>
                  <div className="col-12 col-md-4">
                       <div className="feature-ward text-start">
                            <img src={Zomato2} alt="Delivery Icon" className="icon mb-4 w-100 h-100 pb-5" />
                            <h2 className='pt-lg-4'>Fueling the food ecosystem</h2>
                            <p className='para'>Hyperpure helps restaurants source fresh, high-quality, and sustainable products to deliver culinary excellence..</p>
                       </div>
                  </div>

               </div>
              </div>

      </section>
    </div>
  );
};
export default AboutPage