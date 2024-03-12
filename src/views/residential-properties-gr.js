import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeaderGR from '../components/header-gr'
import GalleryCard2 from '../components/gallery-card2'
import GalleryCard21 from '../components/gallery-card21'
import FooterGR from '../components/footer-gr'
import './residential-properties-gr.css'

const ResidentialPropertiesGR = (props) => {
  return (
    <div className="residential-properties-gr-container">
      <Helmet>
        <title>ResidentialPropertiesGR - Rodon 8</title>
        <meta property="og:title" content="ResidentialPropertiesGR - Rodon 8" />
      </Helmet>
      <HeaderGR rootClassName="header-gr-root-class-name2"></HeaderGR>
      <div className="residential-properties-gr-hero">
        <div className="residential-properties-gr-hero1 heroContainer">
          <div className="residential-properties-gr-container01">
            <h1 className="residential-properties-gr-hero-heading">
              <span>Οικιακά Ακίνητα</span>
              <br></br>
            </h1>
            <h1 className="residential-properties-gr-text02">
              <span>&quot;Ευωνύμου 5 Άλιμος&quot;</span>
              <br></br>
            </h1>
            <span className="residential-properties-gr-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Welcome to Property Athens</span>
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
            <div className="residential-properties-gr-gallery">
              <div className="residential-properties-gr-container02">
                <img
                  alt="image"
                  src="https://propertyathens.files.wordpress.com/2013/06/eksoterika.jpg"
                  className="residential-properties-gr-image"
                />
              </div>
              <span className="residential-properties-gr-text19">
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
      <div className="residential-properties-gr-features">
        <div className="featuresContainer">
          <div className="residential-properties-gr-features1">
            <div className="residential-properties-gr-container03">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="residential-properties-gr-features-heading heading2">
                Premier Features
              </h2>
              <span className="residential-properties-gr-features-sub-heading bodyLarge">
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
            <div className="residential-properties-gr-container04"></div>
          </div>
        </div>
      </div>
      <div className="residential-properties-gr-banner">
        <h1 className="residential-properties-gr-text43">Εικόνες</h1>
        <div className="residential-properties-gr-gallery1">
          <div className="residential-properties-gr-container05">
            <div className="residential-properties-gr-container06">
              <div className="residential-properties-gr-container07">
                <GalleryCard2
                  imageSrc="https://propertyathens.files.wordpress.com/2012/09/p1020675.jpg"
                  rootClassName="rootClassName2"
                ></GalleryCard2>
              </div>
              <div className="residential-properties-gr-container08">
                <GalleryCard2
                  imageSrc="https://propertyathens.files.wordpress.com/2012/09/p1020709.jpg"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="residential-properties-gr-container09">
              <GalleryCard2
                imageSrc="https://propertyathens.files.wordpress.com/2012/09/p1020712.jpg"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
        </div>
        <div className="residential-properties-gr-gallery2">
          <div className="residential-properties-gr-container10">
            <div className="residential-properties-gr-container11">
              <div className="residential-properties-gr-container12">
                <GalleryCard2
                  imageSrc="https://propertyathens.files.wordpress.com/2012/09/p1020709.jpg"
                  rootClassName="rootClassName7"
                ></GalleryCard2>
              </div>
              <div className="residential-properties-gr-container13">
                <GalleryCard2
                  imageSrc="https://propertyathens.files.wordpress.com/2012/09/p1020740.jpg"
                  rootClassName="rootClassName8"
                ></GalleryCard2>
              </div>
            </div>
            <div className="residential-properties-gr-container14">
              <GalleryCard21
                imageSrc="https://propertyathens.files.wordpress.com/2012/09/53.jpg"
                rootClassName="rootClassName4"
              ></GalleryCard21>
            </div>
            <div className="residential-properties-gr-container15">
              <GalleryCard21
                imageSrc="https://propertyathens.files.wordpress.com/2012/09/p1020739.jpg"
                rootClassName="rootClassName1"
              ></GalleryCard21>
            </div>
          </div>
        </div>
        <div className="residential-properties-gr-gallery3">
          <div className="residential-properties-gr-container16">
            <div className="residential-properties-gr-container17">
              <GalleryCard21
                imageSrc="https://propertyathens.files.wordpress.com/2012/09/43.jpg"
                rootClassName="rootClassName6"
              ></GalleryCard21>
            </div>
            <div className="residential-properties-gr-container18">
              <GalleryCard21
                imageSrc="https://propertyathens.files.wordpress.com/2012/09/p1020716.jpg"
                rootClassName="rootClassName7"
              ></GalleryCard21>
            </div>
            <div className="residential-properties-gr-container19">
              <GalleryCard21
                imageSrc="https://propertyathens.files.wordpress.com/2012/09/p1020731.jpg"
                rootClassName="rootClassName8"
              ></GalleryCard21>
            </div>
          </div>
        </div>
      </div>
      <div className="residential-properties-gr-banner1">
        <h1 className="residential-properties-gr-text44">Λεπτομέριες</h1>
        <span className="residential-properties-gr-text45">
          <span>Όλα τα διαμερίσματα περιλαμβάνουν τις ακόλουθες ανέσεις:</span>
          <br></br>
          <span>* 3 υπνοδωμάτια-δάπεδα από μασίφ ξύλο σε κάθε υπνοδωμάτιο</span>
          <br></br>
          <span>-1 master υπνοδωμάτιο με ιδιωτικό μπάνιο</span>
          <br></br>
          <span>-Ιδιωτικό μπαλκόνι σε κάθε υπνοδωμάτιο* 3 μπάνια</span>
          <br></br>
          <span>
            * Φινιρίσματα από μασίφ ξύλο δρυός σε όλους τους χώρους (ντουλάπια
            κουζίνας, πόρτες, ντουλάπες κ.λπ.)
          </span>
          <br></br>
          <span>* Μάρμαρο δάπεδα σε χώρο κουζίνας και σαλονιού</span>
          <br></br>
          <span>* Τζάκι</span>
          <br></br>
          <span>* Κεντρικός Κλιματισμός</span>
          <br></br>
          <span>* Ατομική Μονάδα Θέρμανσης ανά Διαμέρισμα</span>
          <br></br>
          <span>* Σύστημα Surround Ηχοσύστημα προενσύρματο</span>
          <br></br>
          <span>
            * Σύστημα Συναγερμού
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Επικοινωνήστε με τον ιδιοκτήτη για να κλείσετε ραντεβού.</span>
        </span>
      </div>
      <div className="residential-properties-gr-faq">
        <div className="faqContainer">
          <div className="residential-properties-gr-faq1">
            <div className="residential-properties-gr-container20">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="residential-properties-gr-text72 heading2">
                Common questions
              </h2>
              <span className="residential-properties-gr-text73 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="residential-properties-gr-container21"></div>
          </div>
        </div>
      </div>
      <div className="residential-properties-gr-container22">
        <div className="residential-properties-gr-container23">
          <div className="residential-properties-gr-container24">
            <Script
              html={`<div style="max-width:100%;overflow:hidden;color:red;width:600px;height:600px;"><div id="embed-ded-map-canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=37.912168968970114,+23.73105933406145&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="google-maps-html" href="https://www.bootstrapskins.com/themes" id="get-map-data">premium bootstrap themes</a><style>#embed-ded-map-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div>`}
            ></Script>
          </div>
        </div>
      </div>
      <div className="residential-properties-gr-footer">
        <footer className="residential-properties-gr-footer1 footerContainer">
          <div className="residential-properties-gr-container25">
            <span className="logo">PROPERTYATHENS</span>
            <nav className="residential-properties-gr-nav">
              <span className="bodySmall">Home</span>
              <span className="residential-properties-gr-nav22 bodySmall">
                Properties
              </span>
              <span className="residential-properties-gr-nav32 bodySmall">
                Services
              </span>
              <span className="residential-properties-gr-nav42 bodySmall">
                Contact
              </span>
            </nav>
          </div>
        </footer>
      </div>
      <FooterGR rootClassName="footer-gr-root-class-name3"></FooterGR>
    </div>
  )
}

export default ResidentialPropertiesGR
