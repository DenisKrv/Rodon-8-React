import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeaderGR from '../components/header-gr'
import GalleryCard3 from '../components/gallery-card3'
import FooterGR from '../components/footer-gr'
import './commercial-properties-gr.css'

const CommercialPropertiesGR = (props) => {
  return (
    <div className="commercial-properties-gr-container">
      <Helmet>
        <title>CommercialPropertiesGR - Rodon 8</title>
        <meta property="og:title" content="CommercialPropertiesGR - Rodon 8" />
      </Helmet>
      <HeaderGR rootClassName="header-gr-root-class-name1"></HeaderGR>
      <div className="commercial-properties-gr-hero">
        <div className="commercial-properties-gr-hero1 heroContainer">
          <div className="commercial-properties-gr-container01">
            <h1 className="commercial-properties-gr-hero-heading">
              <span>Επαγγελματικά Ακίνητα</span>
              <br></br>
            </h1>
            <h1 className="commercial-properties-gr-text02">
              <span className="commercial-properties-gr-text03">
                &quot;Ρόδων 8&quot;
              </span>
              <br></br>
            </h1>
            <div className="commercial-properties-gr-gallery">
              <div className="commercial-properties-gr-container02">
                <img
                  alt="image"
                  src="/external/w2-500w.png"
                  className="commercial-properties-gr-image"
                />
                <img
                  alt="image"
                  src="https://propertyathens.files.wordpress.com/2012/09/w2.jpg"
                  className="commercial-properties-gr-image1"
                />
              </div>
              <span className="commercial-properties-gr-text05">
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
      <div className="commercial-properties-gr-features">
        <div className="featuresContainer">
          <div className="commercial-properties-gr-features1">
            <div className="commercial-properties-gr-container03">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="commercial-properties-gr-features-heading heading2">
                Premier Features
              </h2>
              <span className="commercial-properties-gr-features-sub-heading bodyLarge">
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
            <div className="commercial-properties-gr-container04"></div>
          </div>
        </div>
      </div>
      <div className="commercial-properties-gr-gallery1">
        <h1 className="commercial-properties-gr-text29">Εικόνες</h1>
        <span className="commercial-properties-gr-text30">
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
        <div className="commercial-properties-gr-container05">
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/w4.jpg"
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/w04.jpg"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww15.jpg"
            rootClassName="rootClassName12"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/cimg17441.jpg"
            rootClassName="rootClassName4"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww14.jpg"
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww1.jpg"
            rootClassName="rootClassName17"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww12.jpg"
            rootClassName="rootClassName13"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww7.jpg"
            rootClassName="rootClassName14"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww2.jpg"
            rootClassName="rootClassName16"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww3.jpg"
            rootClassName="rootClassName15"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2012/09/ww11.jpg"
            rootClassName="rootClassName18"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2013/06/ww18.jpg"
            rootClassName="rootClassName19"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2013/06/ww19.jpg"
            rootClassName="rootClassName20"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2013/06/ww20.jpg"
            rootClassName="rootClassName21"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://propertyathens.files.wordpress.com/2013/06/ww17.jpg"
            rootClassName="rootClassName22"
          ></GalleryCard3>
        </div>
      </div>
      <div className="commercial-properties-gr-banner">
        <h1 className="commercial-properties-gr-text37">Περιγραφή</h1>
        <span className="commercial-properties-gr-text38">
          Διαθέσιμος επαγγελματικός χώρος στον Άλιμο Αττικής,στην οδό Ρόδων 8.
          Στο σημείο που βρίσκεται έχει κανείς πρόσβαση άμεσα σε Λεωφόρο
          Βουλιαγμένης, Λεωφόρο Αλίμου, Λεωφόρο Ποσειδώνος και στάση του μετρό
          στην Αργυρούπολη.
        </span>
      </div>
      <div className="commercial-properties-gr-banner1">
        <h1 className="commercial-properties-gr-text39">
          Τεχνικές Λεπτομέριες
        </h1>
        <span className="commercial-properties-gr-text40">
          <span>
            Το σύνολο των τ.μ. που είναι διαθέσιμο προς εκμίσθωση είναι 2561
            τ.μ.:
          </span>
          <br></br>
          <span>-535 τ.μ στο 2o όροφο,</span>
          <br></br>
          <span>-535 τ.μ σε 1o όροφο</span>
          <br></br>
          <span>-535 τ.μ σε ισόγειο</span>
          <br></br>
          <span>-122 ημιόροφος στο ισόγειο , με ξεχωριστή είσοδο</span>
          <br></br>
          <span>-535 τ.μ. υπόγειο .</span>
          <br></br>
          <span>Το υπόγειο έχει δική του ξεχωριστή είσοδο και ράμπα.</span>
        </span>
        <span className="commercial-properties-gr-text54">
          <span>
            Το κτίριο είναι πολυτελούς κατασκευής και σε κάθε όροφο υπάρχουν:
          </span>
          <br></br>
          <br></br>
          <span>-Κουζίνα</span>
          <br></br>
          <span>-4wc σε κάθε όροφο</span>
          <br></br>
          <span>-Ψευδοροφές / χωρίσματα – έτοιμα γραφεία / Φώτα</span>
          <br></br>
          <span>
            -2 ανελκυστήρες, το ένα είναι επιβατικό και το άλλο φορτίων
          </span>
          <br></br>
          <span>-Δίκτυα για υπολογιστές</span>
          <br></br>
          <span>-Καλωδίωση με οπτικές ίνες</span>
          <br></br>
          <span>-Ψύξη / θέρμανση / Εξαερισμός</span>
          <br></br>
          <span>-Παροχή ρεύματος 100άρα</span>
          <br></br>
          <span>-Υπόγειες γραμμές τηλεφώνου και ρεύματος</span>
          <br></br>
          <br></br>
          <span>
            Το κτίριο περικλείεται από 1.500τ.μ κήπο και με άνετο πάρκιν.
          </span>
        </span>
      </div>
      <div className="commercial-properties-gr-container06">
        <img
          alt="image"
          src="https://propertyathens.files.wordpress.com/2012/09/katopsi2ou.jpg"
          className="commercial-properties-gr-image2"
        />
        <img
          alt="image"
          src="https://propertyathens.files.wordpress.com/2012/09/katopsi1ou.jpg?w=848"
          className="commercial-properties-gr-image3"
        />
        <img
          alt="image"
          src="https://propertyathens.files.wordpress.com/2012/09/katopsisogeiou.jpg"
          className="commercial-properties-gr-image4"
        />
      </div>
      <div className="commercial-properties-gr-faq">
        <div className="faqContainer">
          <div className="commercial-properties-gr-faq1">
            <div className="commercial-properties-gr-container07">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="commercial-properties-gr-text81 heading2">
                Common questions
              </h2>
              <span className="commercial-properties-gr-text82 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="commercial-properties-gr-container08"></div>
          </div>
        </div>
      </div>
      <div className="commercial-properties-gr-container09">
        <div className="commercial-properties-gr-container10">
          <div className="commercial-properties-gr-container11">
            <Script
              html={`<div style="max-width:100%;list-style:none; transition: none;overflow:hidden;width:600px;height:600px;"><div id="my-map-canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Rodon+8,+Rodon,+Alimos,+Greece&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="google-maps-html" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="make-map-infor-mation">premium bootstrap themes</a><style>#my-map-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div>`}
            ></Script>
          </div>
        </div>
      </div>
      <FooterGR rootClassName="footer-gr-root-class-name1"></FooterGR>
    </div>
  )
}

export default CommercialPropertiesGR
