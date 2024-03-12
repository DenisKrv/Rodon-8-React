import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard3 from '../components/gallery-card3'
import FooterEN from '../components/footer-en'
import './commercial-properties-en.css'

const CommercialPropertiesEN = (props) => {
  return (
    <div className="commercial-properties-en-container">
      <Helmet>
        <title>CommercialPropertiesEN - Rodon 8</title>
        <meta property="og:title" content="CommercialPropertiesEN - Rodon 8" />
      </Helmet>
      <Header></Header>
      <div className="commercial-properties-en-hero">
        <div className="commercial-properties-en-hero1 heroContainer">
          <div className="commercial-properties-en-container01">
            <h1 className="commercial-properties-en-hero-heading">
              <span>Comercial Properties</span>
              <br></br>
            </h1>
            <h1 className="commercial-properties-en-text02">
              <span className="commercial-properties-en-text03">
                &quot;Rodon 8&quot;
              </span>
              <br></br>
            </h1>
            <div className="commercial-properties-en-gallery">
              <div className="commercial-properties-en-container02">
                <img
                  alt="image"
                  src="/external/w2-500w.png"
                  className="commercial-properties-en-image"
                />
                <img
                  alt="image"
                  src="https://propertyathens.files.wordpress.com/2012/09/w2.jpg"
                  className="commercial-properties-en-image1"
                />
              </div>
              <span className="commercial-properties-en-text05">
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non volutpat turpis.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <br></br>
                <span>
                  <span>
                    Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                    tortor.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="commercial-properties-en-features">
        <div className="featuresContainer">
          <div className="commercial-properties-en-features1">
            <div className="commercial-properties-en-container03">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="commercial-properties-en-features-heading heading2">
                Premier Features
              </h2>
              <span className="commercial-properties-en-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Experience the best in corporate real estate with our
                      exceptional property offerings.
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="commercial-properties-en-container04"></div>
          </div>
        </div>
      </div>
      <div className="commercial-properties-en-gallery1">
        <h1 className="commercial-properties-en-text29">Images</h1>
        <span className="commercial-properties-en-text30">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="commercial-properties-en-container05">
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/w4.jpg"
            rootClassName="rootClassName32"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/w04.jpg"
            rootClassName="rootClassName33"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww15.jpg"
            rootClassName="rootClassName34"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/cimg17441.jpg"
            rootClassName="rootClassName35"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww14.jpg"
            rootClassName="rootClassName36"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww1.jpg"
            rootClassName="rootClassName37"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww12.jpg"
            rootClassName="rootClassName38"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww7.jpg"
            rootClassName="rootClassName39"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww2.jpg"
            rootClassName="rootClassName40"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww3.jpg"
            rootClassName="rootClassName41"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww11.jpg"
            rootClassName="rootClassName42"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2013/06/ww18.jpg"
            rootClassName="rootClassName43"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2013/06/ww19.jpg"
            rootClassName="rootClassName44"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2013/06/ww20.jpg"
            rootClassName="rootClassName45"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2013/06/ww17.jpg"
            rootClassName="rootClassName46"
          ></GalleryCard3>
        </div>
      </div>
      <div className="commercial-properties-en-banner">
        <h1 className="commercial-properties-en-text37">Description</h1>
        <span className="commercial-properties-en-text38">
          Spacious and luxurious office space located on the second floor and on
          the first floor of luxury building for rent. Located in one of the
          nicest Athenean suburbs, this space is situated in ideal location:
          quiet residential area; next to the main avenues connecting all areas
          of Athens (Vouliagmenis Avenue, Alimou Avenue and Poseidonos Avenue);
          near Metro station.
        </span>
      </div>
      <div className="commercial-properties-en-banner1">
        <h1 className="commercial-properties-en-text39">Technical Details</h1>
        <span className="commercial-properties-en-text40">
          <span>The sum of the total size of the building is 2561m2:</span>
          <br></br>
          <br></br>
          <span>– 2nd Floor: 535m2</span>
          <br></br>
          <span>– 1st Floor: 535m2</span>
          <br></br>
          <span>– Entresol: 122m2</span>
          <br></br>
          <span>– Ground Floor: 535m2</span>
          <br></br>
          <span>– Basement Floor: 535m2</span>
          <br></br>
          <span>
            Located on the side of the building there is a seperate ramp for
            access to the basement.
          </span>
        </span>
        <span className="commercial-properties-en-text55">
          <span>
            The building is of high quality and the premises for lease contain
            the following:
          </span>
          <br></br>
          <br></br>
          <span>– Kitchen</span>
          <br></br>
          <span>– Four Restrooms/W.C.</span>
          <br></br>
          <span>– Partitioned offices ready to be occupied</span>
          <br></br>
          <span>– Light fittings</span>
          <br></br>
          <span>– Two Elevators — One is also a merchandised Elevator</span>
          <br></br>
          <span>– Computer Network Cabling already fitted</span>
          <br></br>
          <span>– Air-conditioning and Heating</span>
          <br></br>
          <span>– Ventilation</span>
          <br></br>
          <span>– Large electrical capacity supply 100watts</span>
          <br></br>
          <span>– Underground telephone and electrical cables</span>
          <br></br>
          <span>
            -The Building is surrounded by 1500m2 garden with ease of parking
            spaces.
          </span>
        </span>
      </div>
      <div className="commercial-properties-en-container06">
        <div className="commercial-properties-en-container07">
          <span className="commercial-properties-en-text80">
            2nd Floor Top-Down Plans
          </span>
        </div>
        <img
          alt="image"
          src="https://propertyathens.files.wordpress.com/2012/09/katopsi2ou.jpg"
          className="commercial-properties-en-image2"
        />
        <div className="commercial-properties-en-container08">
          <span className="commercial-properties-en-text81">
            1st Floor Top-Down Plans
          </span>
        </div>
        <img
          alt="image"
          src="https://propertyathens.files.wordpress.com/2012/09/katopsi1ou.jpg?w=848"
          className="commercial-properties-en-image3"
        />
        <div className="commercial-properties-en-container09">
          <span className="commercial-properties-en-text82">
            Ground Floor Top-Down Plans
          </span>
        </div>
        <img
          alt="image"
          src="https://propertyathens.files.wordpress.com/2012/09/katopsisogeiou.jpg"
          className="commercial-properties-en-image4"
        />
      </div>
      <div className="commercial-properties-en-faq">
        <div className="faqContainer">
          <div className="commercial-properties-en-faq1">
            <div className="commercial-properties-en-container10">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="commercial-properties-en-text86 heading2">
                Common questions
              </h2>
              <span className="commercial-properties-en-text87 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="commercial-properties-en-container11"></div>
          </div>
        </div>
      </div>
      <div className="commercial-properties-en-container12">
        <div className="commercial-properties-en-container13">
          <div className="commercial-properties-en-container14">
            <Script
              html={`<div style="max-width:100%;list-style:none; transition: none;overflow:hidden;width:600px;height:600px;"><div id="my-map-canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Rodon+8,+Rodon,+Alimos,+Greece&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="google-maps-html" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="make-map-infor-mation">premium bootstrap themes</a><style>#my-map-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div>`}
            ></Script>
          </div>
        </div>
      </div>
      <FooterEN rootClassName="footer-en-root-class-name1"></FooterEN>
    </div>
  )
}

export default CommercialPropertiesEN
