import React from 'react';
import { node_package } from './nodepackage/nodePackage';
import { php_package } from './phppackage/phpPackage';
// import { Link } from 'react-router-dom';

// import developerSignup from '../../styles/images/dev_signup.png';
// import enterpriseSignup from '../../styles/images/enterprise_signup.png';
// import plans from '../../styles/images/plans.png';
// import requestDemo from '../../styles/images/req_demo.png';
// import contactUs from '../../styles/images/contact_us.png';

// import sentiment from '../../styles/images/egsentiment.png';
// import emotion from '../../styles/images/egemotion.png';
// import entity from '../../styles/images/egtextentity.png';
// import keyword from '../../styles/images/egkeyword.png';
// import topic from '../../styles/images/egtopic.png';

// import visionLogo from '../../styles/images/visionlogo.png';
// import visionEmotion from '../../styles/images/visionemotion.png';
// import visionAge from '../../styles/images/visionage.png';
// import visionGender from '../../styles/images/visiongender.png';
// import visionScene from '../../styles/images/visionscene.png';



/*-------------------------------  What is Data2Insights ?  ------------------------------------------*/

let def = (
            <div>
              <p>
                Data2Insights is artificial intelligence as a Service (AIaaS) platform,
                which provides Text analytics, Vision analytics and Video analytics as a service.
                It makes it easy to integrate Text analytics, Vision analytics and Video analytics
                into any applications using either API's or SDK or via IPAAS.
                These services are based on the same proven, highly
                scalable, deep learning technology.
              </p>
            </div>
          );


/*-------------------------------  Advantages  ------------------------------------------*/

let advantages =  (
                    <ul className="apiGuideBody">
                      <li>Allowing the companies or Professionals to focus on their core business,
                          not becoming data and machine learning experts.</li>
                      <li>Pre-trained AI services, with quality and accuracy from continuous learning API.</li>
                      <li>Keeping costs transparent.</li>
                      <li>Significantly lowering risk of investment.</li>
                      <li>Increasing the benefits from data.</li>
                      <li>Increasing strategic flexibility, because AI-as-a-service is flexible and dynamic.</li>
                    </ul>
                 );

/*-------------------------------  Benefits  ------------------------------------------*/
let benefits = (
                <ul className="apiGuideBody">
                  <li>Reveals context and Extracts Insights.</li>
                  <li>Predicts various outcomes and recommends the best solution.</li>
                  <li>Adapts and learns the user as it goes by.</li>
                </ul>
              );

/*-----------------------------------  ******** ------------------------------------------*/

/*-----------------------------------  Services ------------------------------------------*/
let services = (<div className="apiGuideBody">
                  <p>​Below are the services provided by Data2Insights.</p>
                  <br />
                  <ul>
                    <li>Text Analytics</li>
                    <li>Vision Analytics</li>
                  </ul>
                </div>);

/*-----------------------------------  Text Analytics ------------------------------------------*/

let textAnalytics = (
                      <div>
                        <p>
                          Text analysis is the automated process that allows machines to extract and classify information
                          from text and documents, such as tweets, emails, support tickets, product reviews, survey
                          responses, etc. There are two types of Text Analysis :
                        </p>
                        <br />
                        <ul>
                          <li>Classification</li>
                          <li>Extraction</li>
                          <li>Metrics</li>
                        </ul>
                      </div>
                    );
/*-----------------------------------  Text Classification ------------------------------------------*/

let classification = (
                      <div className="apiGuideBody">
                        <p>Text classification is the process of assigning tags or categories to text according to its content.
                           By using Natural Language Processing (NLP), text classifiers can automatically analyze text and
                           then assign a set of pre-defined tags or categories based on its content. Data2Insights provides
                           the following services for text classification.
                        </p>
                        <br />
                        <p>
                          <b>Sentiment -</b> It provides you with the sentiment of your given text or document like positive,
                          negative and neutral.
                        </p>
                        &nbsp;
                        <p>
                          <b>Emotion -</b> It gives you the emotion of your given text or document like happy, sad, disgust,
                           anger, fear and neutral.
                        </p>
                        &nbsp;
                        <p>
                          <b>Topic​ -</b> This service presents you the category of the given text or document.
                          For example, if you give a text like “she is playing cricket” this gives the topic as “sport”.
                        </p>
                        &nbsp;
                        <p>
                          <b>Spam​ -</b> It analyses your text or document as Spam or Not Spam.
                        </p>
                        &nbsp;
                        <p>
                          <b>Gender -</b> Here you can know the gender of the person who made a tweet by analysing it, like
                          male or female.
                        </p>
                        &nbsp;
                        <p>
                          <b>Age​ -</b> Here you can know the approximate age of the person who made a tweet by analysing it.
                        </p>
                        &nbsp;
                        <p>
                          <b>Tweet Sentiment -</b> It determines the sentiment of the given tweet text like positive, negative and
                          neutral.
                        </p>
                        &nbsp;
                        <p>
                          <b>Personality Traits -</b> ​ It gives your personality insights by classifying your text into how people
                          think, act, and feel. We generally measure your personality in terms of Agreeableness,
                          Conscientiousness, Extraversion, Emotional range and Openness.
                        </p>
                        &nbsp;
                      </div>
                    );

/*-----------------------------------  Text Extraction ------------------------------------------*/

let extraction = (
                    <div className="apiGuideBody">
                      <p>
                        Extraction models are used to extract data from text, which helps you in finding the result you
                        are looking for exists within the text​ . ​ Data2Insights provides the following services for text
                        extraction.
                      </p>
                      <br />
                      <p>
                        <b>Keyword -</b>​ It extracts the important keywords from the given text or a document.
                      </p>
                      &nbsp;
                      <p>
                        <b>Entity -</b> This allows you to identify the entities in the given text or document like Location,
                        Person and Organisation names.
                      </p>
                      &nbsp;
                      <p>
                        <b>Tweetentity -</b> ​ This service lets you identify the entities in tweets like Mentions, Hashtags,
                        Symbols, URL’s and User_profile_URL’s.
                      </p>
                      &nbsp;
                      <p>
                        It also detects Location, Person and Organisation names.
                      </p>
                      &nbsp;
                    </div>
                );

/*-----------------------------------  Text Metrics ------------------------------------------*/

let metrics = (
                <div className="apiGuideBody">
                  <p>In metrics, data2insights provides the services for:</p>
                  <br />
                  <p>
                    <b>Document readability -</b> ​ Readability is the ease with which a reader can understand a written
                    text. In natural language, the readability of text depends on its content (the complexity of its
                    vocabulary and syntax). It focuses on the words we choose, and how we put them into sentences
                    and paragraphs for the readers to comprehend. We will give you the metrics about age group of
                    people who can understand your passage or text.
                  </p>
                  &nbsp;
                  <p>
                    <b>Document similarity -</b> ​ It helps you in finding the similarity between two given documents using
                    similarity methods.
                  </p>
                  &nbsp;
                </div>
              );


/*----------------------------------- Vision Analytics ------------------------------------------*/

let vision = (
                <p className="apiGuideBody">
                  Here you can analyse your image by uploading them or by giving a url link. We have three
                  categories of vision analytics like Object Detection, Scene Detection and Attribute detection.
                </p>
              );


/*----------------------------------- Vision Object ------------------------------------------*/
let objectDetection = (
                        <div className="apiGuideBody">
                          <p>
                            This helps in finding the different objects that are present in the image. ​ Data2Insights provides
                            the following services for Object Detection.
                          </p>
                          <br />
                          <p>
                            <b>Logo Detection​ -</b> This detects the logo for the given image. It detects various types of logos like
                            Vodafone, Ford, NBC, Intel etc.
                          </p>
                          &nbsp;
                          <p>
                            <b>Bird Detection​ -</b> This gives the name for the birds present in the given image. It detects various
                            types of birds like Crane, Parrot, HummingBird, Owl etc.
                          </p>
                          &nbsp;
                          <p>
                            <b>Transport Detection​ -</b> It determines different types of transports for the given image. It detects
                            various types of transport like Bus, Ship, Auto, Train etc..
                          </p>
                          &nbsp;
                          <p>
                            <b>Plant Detection -</b> This gives the type of plant for the given image.It detects whether the plant is
                            indoors or outdoors.
                          </p>
                          &nbsp;
                          <p>
                            <b>Face Detection -</b>​ It detects the face of a person in the given image or the image address.
                          </p>
                          &nbsp;
                          <p>
                            <b>General Object Detection -</b> This detects various types of general objects for the given image. It
                            detects the objects like Person, Chair, Traffic signal, Train, Car, Closet, Couch, Clothing, Trousers etc..
                          </p>
                          &nbsp;
                        </div>
                    );


/*----------------------------------- Vision Scene ------------------------------------------*/
let sceneDetection = (
                        <div className="apiGuideBody">
                          <p>
                            Scene detection is responsible for identifying the location in the given image.It detects different
                            kinds of scenes like sports, parties, stores, parks, beaches, concerts, shopping mall, hostel &
                            hospital, office building and Tlo (tree, lake and ocean).
                          </p>
                          <br />
                          <p>
                            <b>Sports -</b> This determines about 20 types like cricket, football, volleyball, basketball, baseball,
                            kabaddi, polo, tennis, chess, skating, hockey, badminton, racing etc.
                          </p>
                          &nbsp;
                          <p>
                            <b>Parties -</b> This detects the type of parties present in the given image like wedding parties, beach
                            parties, birthday parties.
                          </p>
                          &nbsp;
                          <p>
                            <b>Stores -</b>​ This predicts if the given image contains a store or not.
                          </p>
                          &nbsp;
                          <p>
                            <b>Parks -</b>​ It detects if the given image contains park init or not.
                          </p>
                          &nbsp;
                          <p>
                            <b>Beaches -</b>​ This determines if the given image contains beach init or not.
                          </p>
                          &nbsp;
                          <p>
                            <b>Concerts -​</b> This gives if the given image contains concert init or not.
                          </p>
                          &nbsp;
                          <p>
                            <b>Shopping malls -</b>​ It identifies the shopping malls present in the given image.
                          </p>
                          &nbsp;
                          <p>
                            <b>Hotel & Hospital -​</b> This gives you the hotel and hospital present in the image.
                          </p>
                          &nbsp;
                          <p>
                            <b>Office building -</b>​ This predicts the office building present in the given image.
                          </p>
                          &nbsp;
                          <p>
                            <b>Tlo Detection -​</b> This detects whether the image given by you is having a tree or lake or ocean.
                          </p>
                          &nbsp;
                        </div>
                    );

/*----------------------------------- Vision Attribute ------------------------------------------*/

let attributeDetection = (
                            <div className="apiGuideBody">
                              <p>
                                Which tells you about the attributes present in the given image. ​ Data2Insights provides the
                                following services for attribute detection.
                              </p>
                              <br />
                              <p>
                                <b>Emotion Detection -</b> This detects the emotion of the person for the given image address.This
                                detects emotions like Fear,Happy,Disgust,Angry,Sad,Surprise,Neutral.
                              </p>
                              &nbsp;
                              <p>
                                <b>Color Detection -</b> It detects the color of the people present in the given image. It detects whether
                                the person is in white or black color.
                              </p>
                              &nbsp;
                              <p>
                                <b>Age Detection -</b>​ This service predicts the age of the people present in the given image.
                              </p>
                              &nbsp;
                              <p>
                                <b>Gender Detection​ -</b> This service determines the gender of the person present in the given image.
                                It gives you whether the person is male or female.
                              </p>
                              &nbsp;
                              <p>
                                <b>Violence Detection -</b> ​ This service detects the scene for the given image address. It detects
                                whether the scene is violence or war.
                              </p>
                              &nbsp;
                              <p>
                                <b>Weather Detection -</b> This service identifies the type of climate present in the image given by
                                you. It detects different types of climate like Cloudy, Sunny, Rainy, Snowy, Windy etc..
                              </p>
                            </div>
                          );

/*-----------------------------------  ******** ------------------------------------------*/

/*-----------------------------------  Are you a first time user of Data2Insights ? ------------------------------------------*/

let fstuser = (
                <div className="apiGuideBody">
                  <p>
                    If you are a first time user of Data2Insights, we recommend you to read the following sections in order :
                  </p>
                </div>
              );

/*-----------------------------------  How does it work ? ------------------------------------------*/
let work = (
              <div className="apiGuideBody">
                <p>
                  Data2Insights uses a pre-trained model to examine and analyse a document or set of documents
                  and ​ Images to extract meaningful information and​ ​ to gather insights about it. This models are continuously trained on a large body of text and images so that there is no need for you to
                  provide training data.
                </p>
                <p>
                  Data2Insights can examine and analyse documents in English Language.
                </p>
              </div>
            );

/*-----------------------------------  ******** ------------------------------------------*/

/*----------------------------------- Getting Started ------------------------------------------*/

let setting = (
                <div className="apiGuideBody">
                  <p>
                    Data2Insights is providing two types of accounts. They are :
                  </p>
                  <br />
                  <ul>
                    <li>Developer sign up</li>
                    <li>Enterprise sign up</li>
                  </ul>
                  <p>
                    Please check below to sign up.
                  </p>
                </div>
              );

/*----------------------------------- Developer sign up ------------------------------------------*/

let developer = (
                  <div className="apiGuideBody">
                    <p>
                      Developer sign up is the page where the user can select the plan they want like Free, Small, Medium and Large.
                    </p>
                    <code>
                      <a href = "https://test.data2insights.ai/signup" target="_blank" rel="noopener noreferrer">
                                  https://test.data2insights.ai/signup
                      </a>
                    </code>
                    <br/> &nbsp;
                    {/* <img className="img-responsive" alt="" src = { developerSignup } /> */}
                    &nbsp;
                  </div>
                );





/*----------------------------------- Enterprise sign up ------------------------------------------*/

let enterprise = (
                    <div className="apiGuideBody">
                      <p>
                        Enterprise sign up or business sign up is like postpaid, the bill will be generated based on the
                        usage of the user.
                      </p>
                      <code>
                        <a href = "https://test.data2insights.ai/Enterprise_signup" target="_blank" rel="noopener noreferrer">
                              https://test.data2insights.ai/Enterprise_signup
                        </a>
                      </code>
                      <br/>&nbsp;
                      {/* <img className="img-responsive" alt="" src = { enterpriseSignup } /> */}
                    </div>
                  );

/*-----------------------------------  ******** ------------------------------------------*/

/*-----------------------------------  Plans & Pricing ------------------------------------------*/

let plan = (
              <div className="apiGuideBody">
                <p>
                  There are five types of plans in Data2Insights.
                </p>
                <p>
                  Free, Small, Medium, Large, Enterprise. Find below for Plans & Pricing
                </p>
                <code>
                  <a href = "https://test.data2insights.ai/plans" target="_blank" rel="noopener noreferrer">
                              https://test.data2insights.ai/plans
                  </a>
                </code>
                <br/> &nbsp;
                {/* <img className="img-responsive" alt="" src = { plans } /> */}
              </div>
           );

/*-----------------------------------  ******** ------------------------------------------*/

/*--------------------------------  Requesting a Demo for Data2Insights services ---------------------------------*/

let requestingfordemo = (
              <div className="apiGuideBody">
                <p>
                  You can request a demo for the services present in this by clicking the link given below.
                </p>
                <p>
                  <b>Demo :</b>
                  <code>
                    <a href = "https://test.data2insights.ai/contactus" target="_blank" rel="noopener noreferrer">&nbsp;
                                https://test.data2insights.ai/contactus
                    </a>
                  </code>
                  <br /> &nbsp;
                </p>
                {/* <img className="img-responsive" alt="" src = { requestDemo } /> */}
              </div>
           );

/*-----------------------------------  ******** ------------------------------------------*/

/*--------------------------------  Examples of Text Analytics  ---------------------------------*/

let extextanalytics = (
                        <div className="apiGuideBody">
                          <p>
                            <b>Classifications:</b>
                          </p>
                          <br/>&nbsp;
                          <p>
                            <b>Sentiment</b>
                          </p>
                          {/* <img className="img-responsive" alt="" src= { sentiment } /> */}
                          <br/>
                          <p>
                            <b>Emotion</b>
                          </p>
                          {/* <img className="img-responsive" alt="" src= { emotion } /> */}
                          <br />
                          <p>
                            <b>Topics</b>
                          </p>
                            {/* <img className="img-responsive" alt="" src= { topic } /> */}
                          <p>
                          <br />
                            <b>Extractions:</b>
                          </p>
                          <br />
                          <p>
                            <b>Entity</b>
                          </p>
                            {/* <img className="img-responsive" alt="" src= { entity } /> */}
                          <br />
                          <p>
                            <b>Keywords</b>
                          </p>
                            {/* <img className="img-responsive" alt="" src= { keyword } /> */}
                          <br />
                        </div>
                      );


/*--------------------------------  Examples Of Vision Analytics  ---------------------------------*/

let exvisionanalytics = (
                          <div className="apiGuideBody">
                            <p>
                              <b>Logo</b>
                            </p>
                              {/* <img className="img-responsive" alt="" src= { visionLogo } /> */}
                            <br />
                            <p>
                              <b>Emotion</b>
                            </p>
                              {/* <img className="img-responsive" alt="" src= { visionEmotion } /> */}
                            <br />
                            <p>
                              <b>Age</b>
                            </p>
                              {/* <img className="img-responsive" alt="" src= { visionAge } /> */}
                            <br />
                            <p>
                              <b>Gender</b>
                            </p>
                              {/* <img className="img-responsive" alt="" src= { visionGender } /> */}
                            <br />
                            <p>
                              <b>Scene</b>
                            </p>
                              {/* <img className="img-responsive" alt="" src= { visionScene } /> */}
                            <br />
                          </div>
                        );

/*-----------------------------------  ******** ------------------------------------------*/
/*-----------------------------------  Using API’s by postman collection ------------------------------------------*/
/*-----------------------------------  textAnalyticsApi ------------------------------------------*/

let textAnalyticsApi = (
                            <div className="apiGuideBody">
                              <p>
                                In Text analysis APIs we can give the appropriate text and get the predicted results for
                                  any model using “GET” method .The text should contain only alphabets (or) combination of
                                  both alphabets and special characters (or) combination of both alphabets and digits,then
                                  user gets the predicted result for the selected model .
                              </p>
                              &nbsp;
                              <p>
                                <b>METHOD AND REQUEST PATH</b>
                              </p>
                              &nbsp;
                              <p>
                                GET
                              </p>
                              <pre>
                                /api.insight.aadhya-analytics.com/v1/modelname/&#x3c;accountid&#x3e;/&#x3c;path:apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=
                              </pre>
                              &nbsp;
                              <p>
                                <b>Required Parameters</b>
                              </p>
                              &nbsp;
                              <ul>
                                <li>Model name</li>
                                <li>Account id</li>
                                <li>Api key</li>
                                <li>Userid</li>
                                <li>Userinputdata</li>
                              </ul>

                            </div>
                         );

/*-----------------------------------  classificationApi ------------------------------------------*/

let classificationApi = (
                          <div className="apiGuideBody">
                            <p>
                              There are different types of services which predict the relevant classification for
                              the given text.
                            </p>
                            <br />

                            <p>
                              <b>Sentiment:</b>
                            </p>
                            <p>
                              This api is responsible to predict exact sentiment for the given text.
                            </p>
                            <br />
                            <p>
                              <b>GET Method:</b>
                            </p>
                            <pre>GET    /api.insight.aadhya-analytics.com/v1/sentiment/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                            <br />
                            <p>
                              <b>Url Format:</b>
                            </p>
                            <code>
                              <a href="https://documenter.getpostman.com/view/5916954/SVYtMHN1" target="_blank" rel="noopener noreferrer">
                                                https://documenter.getpostman.com/view/5916954/SVYtMHN1</a>
                            </code>
                            <br />&nbsp;
                            <p>
                              <b>Response:</b>
                            </p>
                            <pre>
                              <p>&#123;</p>
                                <p>    "Classifier_id": "Sentiment",</p>
                                <p>    "classifications": &#123;</p>
                                  <p>        "Prediction_accuracy": "99.59",</p>
                                  <p>        "given_text": "hello",</p>
                                  <p>        "sentiment": "Neutral"</p>
                                  <p>    &#125;</p>
                                  <p>    "content_type": "application-json",</p>
                                  <p>    "status_code": 200,</p>
                                  <p>    "query_limit": "10000",</p>
                                  <p>    "query_limit_remaining": "9518",</p>
                                  <p>    "query_limit_request": 1</p>
                              <p>&#125;</p>
                            </pre>
                            <br />

                            <p>
                              <b>Emotion:</b>
                            </p>
                            <p>
                              This api is responsible to predict exact emotion for the given text.
                            </p>
                            <br />
                            <p>
                              <b>GET Method:</b>
                            </p>
                            <pre>GET    /api.insight.aadhya-analytics.com/v1/emotion/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                            <br />
                            <p>
                              <b>Url Format:</b>
                            </p>
                            <code>
                              <a href="https://documenter.getpostman.com/view/5916954/SVYtMHN6" target="_blank" rel="noopener noreferrer">
                                              https://documenter.getpostman.com/view/5916954/SVYtMHN6</a>
                            </code>
                            <br />&nbsp;
                            <p>
                              <b>Response:</b>
                            </p>
                            <pre>
                              <p>&#123;</p>
                                <p>    "Classifier_id": "Emotion",</p>
                                <p>    "classifications": &#123;</p>
                                  <p>        "Prediction_accuracy": "36.04",</p>
                                  <p>        "emotion": "Happy"</p>
                                  <p>        "given_text": "hello",</p>

                                  <p>    &#125;</p>
                                  <p>    "content_type": "application-json",</p>
                                  <p>    "status_code": 200,</p>
                                  <p>    "query_limit": "10000",</p>
                                  <p>    "query_limit_remaining": "9517",</p>
                                  <p>    "query_limit_request": 1</p>
                              <p>&#125;</p>
                            </pre>
                            <br />
                            <br />

                            <p>
                              <b>Topic:</b>
                            </p>
                            <p>
                              This api is responsible to predict exact topic for the given text.
                            </p>
                            <br />
                            <p>
                              <b>GET Method:</b>
                            </p>
                            <pre>GET    /api.insight.aadhya-analytics.com/v1/topic/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                            <br />
                            <p>
                              <b>Url Format:</b>
                            </p>
                            <code>
                              <a href="https://documenter.getpostman.com/view/5916954/SVYtMHN7" target="_blank" rel="noopener noreferrer">
                                                      https://documenter.getpostman.com/view/5916954/SVYtMHN7</a>
                            </code>
                            <br />&nbsp;
                            <p>
                              <b>Response:</b>
                            </p>
                            <pre>
                              <p>&#123;</p>
                                <p>    "Classifier_id": "Topic",</p>
                                <p>    "classifications": &#123;</p>
                                  <p>        "Prediction_accuracy": "60.38",</p>
                                  <p>        "given_text": "hello",</p>
                                  <p>        "topic": "travelling"</p>

                                  <p>    &#125;</p>
                                  <p>    "content_type": "application-json",</p>
                                  <p>    "status_code": 200,</p>
                                  <p>    "query_limit": "10000",</p>
                                  <p>    "query_limit_remaining": "9516",</p>
                                  <p>    "query_limit_request": 1</p>
                              <p>&#125;</p>
                            </pre>
                            <br />
                            <br />

                            <p>
                              <b>Spam:</b>
                            </p>
                            <p>
                              This api is responsible to predict exact spam for the given text.
                            </p>
                            <br />
                            <p>
                              <b>GET Method:</b>
                            </p>
                            <pre>GET    /api.insight.aadhya-analytics.com/v1/spam/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                            <br />
                            <p>
                              <b>Url Format:</b>
                            </p>
                            <code>
                              <a href="https://documenter.getpostman.com/view/5916954/SVYtMHN8" target="_blank" rel="noopener noreferrer">
                                          https://documenter.getpostman.com/view/5916954/SVYtMHN8</a>
                            </code>
                            <br />&nbsp;
                            <p>
                              <b>Response:</b>
                            </p>
                            <pre>
                              <p>&#123;</p>
                                <p>    "Classifier_id": "Spam",</p>
                                <p>    "classifications": &#123;</p>
                                  <p>        "Prediction_accuracy": "80.28",</p>
                                  <p>        "given_text": "hello",</p>
                                  <p>        "spam": "NotSpam"</p>

                                  <p>    &#125;</p>
                                  <p>    "content_type": "application-json",</p>
                                  <p>    "status_code": 200,</p>
                                  <p>    "query_limit": "10000",</p>
                                  <p>    "query_limit_remaining": "9515",</p>
                                  <p>    "query_limit_request": 1</p>
                              <p>&#125;</p>
                            </pre>
                            <br />
                            <br />

                            <p>
                              <b>Gender:</b>
                            </p>
                            <p>
                              This api is responsible to predict exact gender for the given text.
                            </p>
                            <br />
                            <p>
                              <b>GET Method:</b>
                            </p>
                            <pre>GET    /api.insight.aadhya-analytics.com/v1/gender/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                            <br />
                            <p>
                              <b>Url Format:</b>
                            </p>
                            <code>
                              <a href="https://documenter.getpostman.com/view/5916954/SVYtMHSR" target="_blank" rel="noopener noreferrer">
                                            https://documenter.getpostman.com/view/5916954/SVYtMHSR</a>
                            </code>
                            <br />&nbsp;
                            <p>
                              <b>Response:</b>
                            </p>
                            <pre>
                              <p>&#123;</p>
                                <p>    "Classifier_id": "Gender",</p>
                                <p>    "classifications": &#123;</p>
                                  <p>        "Prediction_accuracy": "100.00",</p>
                                  <p>        "gender": "Female"</p>
                                  <p>        "given_text": "hello",</p>

                                  <p>    &#125;</p>
                                  <p>    "content_type": "application-json",</p>
                                  <p>    "status_code": 200,</p>
                                  <p>    "query_limit": "10000",</p>
                                  <p>    "query_limit_remaining": "9460",</p>
                                  <p>    "query_limit_request": 1</p>
                              <p>&#125;</p>
                            </pre>
                            <br />
                            <br />

                            <p>
                              <b>Age:</b>
                            </p>
                            <p>
                              This api is responsible to predict exact age for the given text.
                            </p>
                            <br />
                            <p>
                              <b>GET Method</b>
                            </p>
                            <pre>GET    /api.insight.aadhya-analytics.com/v1/age/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                            <br />
                            <p>
                              <b>Url Format:</b>
                            </p>
                            <code>
                              <a href="https://documenter.getpostman.com/view/5916954/SVYtMHSY" target="_blank" rel="noopener noreferrer">
                                          https://documenter.getpostman.com/view/5916954/SVYtMHSY</a>
                            </code>
                            <br />&nbsp;
                            <p>
                              <b>Response:</b>
                            </p>
                            <pre>
                              <p>&#123;</p>
                                <p>    "Classifier_id": "Age",</p>
                                <p>    "classifications": &#123;</p>
                                  <p>        "Prediction_accuracy": "99.61",</p>
                                  <p>        "age": "25_34"</p>
                                  <p>        "given_text": "hello",</p>

                                  <p>    &#125;</p>
                                  <p>    "content_type": "application-json",</p>
                                  <p>    "status_code": 200,</p>
                                  <p>    "query_limit": "10000",</p>
                                  <p>    "query_limit_remaining": "9459",</p>
                                  <p>    "query_limit_request": 1</p>
                              <p>&#125;</p>
                              </pre>
                            <br />
                            <br />

                            <p>
                              <b>Tweet Sentiment:</b>
                            </p>
                            <p>
                              This api is responsible to predict exact tweet sentiment for the given text.
                            </p>
                            <br />
                            <p>
                              <b>GET Method:</b>
                            </p>
                            <pre>GET    /api.insight.aadhya-analytics.com/v1/tweetsentiment/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                            <br />
                            <p>
                              <b>Url Format:</b>
                            </p>
                            <code>
                              <a href="https://documenter.getpostman.com/view/5916954/SVYtMHWs" target="_blank" rel="noopener noreferrer">
                                                      https://documenter.getpostman.com/view/5916954/SVYtMHWs</a>
                            </code>
                            <br />&nbsp;
                            <p>
                              <b>Response:</b>
                            </p>
                            <pre>
                              <p>&#123;</p>
                                <p>    "Classifier_id": "Tweet_sentiment,</p>
                                <p>    "classifications": &#123;</p>
                                  <p>        "Prediction_accuracy": "55.24",</p>
                                  <p>        "given_text": "hello",</p>
                                  <p>        "tweetsentiment": "Positive"</p>

                                  <p>    &#125;</p>
                                  <p>    "content_type": "application-json",</p>
                                  <p>    "status_code": 200,</p>
                                  <p>    "query_limit": "10000",</p>
                                  <p>    "query_limit_remaining": "9458",</p>
                                  <p>    "query_limit_request": 1</p>
                              <p>&#125;</p>
                            </pre>
                            <br />
                            <br />

                            <p>
                              <b>Personality Traits:</b>
                            </p>
                            <p>
                              This api is responsible to predict exact personality traits for the given text.
                            </p>
                            <br />
                            <p>
                              <b>GET Method:</b>
                            </p>
                            <pre>GET    /api.insight.aadhya-analytics.com/v1/personalitytraits/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                            <br />
                            <p>
                              <b>Url Format:</b>
                            </p>
                            <code>
                              <a href="https://documenter.getpostman.com/view/5916954/SVYtMHyM" target="_blank" rel="noopener noreferrer">
                                                https://documenter.getpostman.com/view/5916954/SVYtMHyM</a>
                            </code>
                            <br />&nbsp;
                            <p>
                              <b>Response:</b>
                            </p>
                            <pre>
                              <p>&#123;</p>
                                <p>    "Classifier_id": "Personality_traits,</p>
                                <p>    "classifications": &#123;</p>
                                  <p>        "Prediction_accuracy": "29.26",</p>
                                  <p>        "given_text": "i like to play",</p>
                                  <p>        "personality traits": "openness"</p>

                                  <p>    &#125;</p>
                                  <p>    "content_type": "application-json",</p>
                                  <p>    "status_code": 200,</p>
                                  <p>    "query_limit": "10000",</p>
                                  <p>    "query_limit_remaining": "9428",</p>
                                  <p>    "query_limit_request": 1</p>
                              <p>&#125;</p>
                            </pre>
                            <br />
                            <br />
                          </div>
                        );

/*-----------------------------------  ExtractionApi ------------------------------------------*/
let extractionApi = (
                      <div className="apiGuideBody">
                        <p>
                          There are different types of services which extract the given text for the selected service.
                        </p>
                        <br />

                        <p>
                          <b>Entity:</b>
                        </p>
                        <p>
                          This api is responsible to predict exact entity for the given text.
                        </p>
                        <br />
                        <p>
                          <b>GET Method:</b>
                        </p>
                        <pre>GET    /api.insight.aadhya-analytics.com/v1/entity/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                        <br />
                        <p>
                          <b>Url Format:</b>
                        </p>
                        <code>
                          <a href="https://documenter.getpostman.com/view/5916954/SVYtMHWu" target="_blank" rel="noopener noreferrer">
                                              https://documenter.getpostman.com/view/5916954/SVYtMHWu</a>
                        </code>
                        <br />&nbsp;
                        <p>
                          <b>Response:</b>
                        </p>
                        <pre>
                          <p>&#123;</p>
                            <p>    "Classifier_id": "Entity",</p>
                            <p>    "content_type": "application-json",</p>
                            <p>    "extractions": &#123;</p>
                              <p>        "entity": [</p>
                                <p>            &#123;</p>
                                  <p>                "text": "today",</p>
                                  <p>                "type": "DATE"</p>
                                <p>            &#125;</p>
                              <p>        ],</p>
                              <p>    "given_text": "i am going to delhi today"</p>
                            <p>    &#125;,</p>
                            <p>    "status_code": 200,</p>
                            <p>    "query_limit": "10000",</p>
                            <p>    "query_limit_remaining": "9456",</p>
                            <p>    "query_limit_request": 1</p>
                          <p>&#125;</p>
                        </pre>
                        <br />
                        <br />

                        <p>
                          <b>Keyword:</b>
                        </p>
                        <p>
                          This api is responsible to predict exact keyword for the given text.
                        </p>
                        <br />
                        <p>
                          <b>GET Method:</b>
                        </p>
                        <pre>GET    /api.insight.aadhya-analytics.com/v1/keyword/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                        <br />
                        <p>
                          <b>Url Format:</b>
                        </p>
                        <code>
                          <a href="https://documenter.getpostman.com/view/5916954/SVYtMHkC" target="_blank" rel="noopener noreferrer">
                                            https://documenter.getpostman.com/view/5916954/SVYtMHkC</a>
                        </code>
                        <br />&nbsp;
                        <p><b>Response:</b></p>
                        <pre>
                          <p>&#123;</p>
                            <p>    "Classifier_id": "Keyword",</p>
                            <p>    "content_type": "application-json",</p>
                            <p>    "extractions": &#123;</p>
                              <p>        "given_text": "i am going to delhi today",</p>
                              <p>        "keywords": [</p>
                                <p>            &#123;</p>
                                  <p>                "keyword": "delhi today",</p>
                                  <p>                "relevance": 4</p>
                                <p>            &#125;</p>
                              <p>        ]</p>
                            <p>    &#125;,</p>
                            <p>    "status_code": 200,</p>
                            <p>    "query_limit": "10000",</p>
                            <p>    "query_limit_remaining": "9455",</p>
                            <p>    "query_limit_request": 1</p>
                          <p>&#125;</p>
                        </pre>
                        <br />
                        <br />

                        <p>
                          <b>Tweet Entity:</b>
                        </p>
                        <p>
                          This api is responsible to predict exact tweet entity for the given text.
                        </p>
                        <br />
                        <p>
                          <b>GET Method:</b>
                        </p>
                        <pre>GET    /api.insight.aadhya-analytics.com/v1/tweetentity/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_text</pre>
                        <br />
                        <p>
                          <b>Url Format:</b>
                        </p>
                        <code>
                          <a href="https://documenter.getpostman.com/view/5916954/SVYtMHts" target="_blank" rel="noopener noreferrer">
                                                    https://documenter.getpostman.com/view/5916954/SVYtMHts</a>
                        </code>
                        <br />&nbsp;
                        <p>
                          <b>Response:</b>
                        </p>
                        <pre>
                          <p>&#123;</p>
                          <p>    "Classifier_id": "Tweet_entity",</p>
                          <p>    "content_type": "application-json",</p>
                          <p>    "extractions": &#123;</p>
                            <p>        "given_text": " Ram is going to Delhi @ today ",</p>
                            <p>        "tweetentity": &#123;</p>
                            <p>            "Entities": [</p>
                              <p>            &#123;</p>
                                <p>                "entities": [</p>
                                  <p>                    &#123;</p>
                                    <p>                        "Entity": [</p>
                                      <p>                            "Ram"</p>
                                    <p>                        ],</p>
                                    <p>                        "Tag": "I-PER"</p>
                                  <p>                    &#125;,</p>
                                  <p>                    &#123;</p>
                                    <p>                        "Entity": [</p>
                                      <p>                            "Delhi"</p>
                                        <p>                      ],</p>
                                        <p>                      "Tag": "I-LOC"</p>
                                  <p>                    &#125;</p>
                                  <p>                ]</p>
                                  <p>            &#125;</p>
                                  <p>            ],</p>
                                  <p>            "Hashtags": [],</p>
                                  <p>            "symbols": [],</p>
                                  <p>            "urls": [],</p>
                                  <p>            "user_profiles_url": [],</p>
                                  <p>            "users": []</p>
                                  <p>        &#125;</p>
                                  <p>    &#125;,</p>
                                  <p>    "status_code": 200,</p>
                                  <p>    "query_limit": "10000",</p>
                                  <p>    "query_limit_remaining": "9454",</p>
                                  <p>    "query_limit_request": 1</p>
                                  <p>&#125;</p>
                        </pre>
                        <br />
                        <br />

                        <p>
                          <b>Url Extension:</b>
                        </p>
                        <p>
                          This api is responsible to predict exact url extraction for the given text.
                        </p>
                        <br />
                        <p>
                          <b>GET Method:</b>
                        </p>
                        <pre>GET    /api.insight.aadhya-analytics.com/v1/urlextraction/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?userinputdata=sample_url</pre>
                        <br />
                        <p>
                          <b>Url Format:</b>
                        </p>
                        <code>
                          <a href="https://documenter.getpostman.com/view/5916954/SVYtMHu2" target="_blank" rel="noopener noreferrer">
                                                  https://documenter.getpostman.com/view/5916954/SVYtMHu2</a>
                        </code>
                        <br />&nbsp;
                        <p>
                          <b>Response:</b>
                        </p>
                        <pre>
                          <p>&#123;</p>
                          <p>    "Classifier_id": "Url_extraction",</p>
                          <p>    "content_type": "application-json",</p>
                          <p>    "extractions": &#123;</p>
                          <p>        "Response": &#123;</p>
                          <p>            "AUTHORS": [],</p>
                          <p>            "FULL CONTENT": "I am using requests to get the image from
                                          remote URL. Since the images will always be 16x16, I want to
                                          convert them to base64 , so that I can embed them later to use in
                                          HTML img tag.\n\nimport requests import base64 response =
                                          requests.get(url).content print(response) b =
                                          base64.b64encode(response) src = \"data:image/png;base64,\" +
                                          b\n\nThe output for response is:\n\nresponse =
                                          b'GIF89a\\x80\\x00\\x80\\x00\\xc4\\x1f\\x00\\xff\\xff\\xff\\x00\\x0
                                          0\\x00\\xff\\x00\\x00\\xff\\x88\\x88\"\"\"\\xffff\\...\n\nThe HTML
                                          part is:\n\n etc..</p>
                          <p>            "KEYWORDS": [</p>
                          <p>                "url",</p>
                          <p>                "base64",</p>
                          <p>                "srcsrcbut",</p>
                          <p>                "requests",</p>
                          <p>                "response",</p>
                          <p>                "html",</p>
                          <p>                "src",</p>
                          <p>                "image",</p>
                          <p>                "python",</p>
                          <p>                "using",</p>
                          <p>                "tagimport"</p>
                          <p>            ],</p>
                          <p>            "PUBLICATION DATE": null,</p>
                          <p>            "SUMMARY": "I am using requests to get the image from remote
                                          URL.\nSince the images will always be 16x16, I want to convert
                                          them to base64 , so that I can embed them later to use in HTML
                                          img tag.\nimport requests import base64 response =
                                          requests.get(url).content print(response) b =
                                          base64.b64encode(response) src = \"data:image/png;base64,\" +
                                          bThe output for response is:response = etc..</p>
                          <p>        &#125;,</p>
                          <p>        "given_url":"https://stackoverflow.com/questions/30280495/python-reque sts-base64-image"</p>
                          <p>    &#125;,</p>
                          <p>    "status_code": 200,</p>
                          <p>    "query_limit": "10000",</p>
                          <p>    "query_limit_remaining": "9453",</p>
                          <p>    "query_limit_request": 1</p>
                          <p>&#125;</p>
                        </pre>
                        <br />
                        <br />
                      </div>
                    );


/*-----------------------------------  MetricsApi ------------------------------------------*/

let metricsApi = (
                    <div className="apiGuideBody">
                      <p>
                        This metrics are helpful to detect the document readability and document similarity for
                          the given text using the respective apis which are below.
                      </p>
                      <br />

                      <p>
                        <b>Document Readability:</b>
                      </p>
                      <p>
                        This api is responsible to predict exact document readability for the given text.
                      </p>
                      <br />
                      <p>
                        <b>GET Method:</b>
                      </p>
                      <pre>GET    /api.insight.aadhya-analytics.com/v1/readability/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;/sample_url</pre>
                      <br />
                      <p>
                        <b>Url Format:</b>
                      </p>
                      <code>
                        <a href="https://documenter.getpostman.com/view/5916954/SVYtMJ3i" target="_blank" rel="noopener noreferrer">
                                        https://documenter.getpostman.com/view/5916954/SVYtMJ3i</a>
                      </code>
                      <br />&nbsp;
                      <p>
                        <b>Response:</b>
                      </p>
                      <pre>
                        <p>&#123;</p>
                          <p>    "Classifier_id": "Document_readability",</p>
                          <p>    "classifications": &#123;</p>
                          <p>        "document_readability": &#123;</p>
                          <p>            "Automated_Readability_Index": 3.1,</p>
                          <p>            "Coleman_liau_index": -4.51,</p>
                          <p>            "Dalechal": 11.63,</p>
                          <p>            "Flesch_Kindrade_Grade": 2.9,</p>
                          <p>            "Flesch_Reading_Score": 77.91,</p>
                          <p>            "Gunning_Fog": 0.8,</p>
                          <p>            "Linsear_Write": 0,</p>
                          <p>            "Smog_index": 0</p>
                          <p>        &#125;,</p>
                          <p>        "given_text": "=hello guys"</p>
                          <p>    &#125;,</p>
                          <p>    "content_type": "application-json",</p>
                          <p>    "status_code": 200,</p>
                          <p>    "query_limit": "10000",</p>
                          <p>    "query_limit_remaining": "9427",</p>
                          <p>    "query_limit_request": 1</p>
                        <p>&#125;</p>
                      </pre>
                      <br />
                      <br />

                      <p>
                        <b>Document Similarity:</b>
                      </p>
                      <p>
                        This api is responsible to predict exact document similarity for the given text.
                      </p>
                      <br />
                      <p>
                        <b>GET Method:</b>
                      </p>
                      <pre>GET    /api.insight.aadhya-analytics.com/v1/similarity/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;/sample_text1/sample_text2</pre>
                      <br />
                      <p>
                        <b>Url Format:</b>
                      </p>
                      <code>
                        <a href="https://documenter.getpostman.com/view/5916954/SVYtMJ3n" target="_blank" rel="noopener noreferrer">
                                          https://documenter.getpostman.com/view/5916954/SVYtMJ3n</a>
                      </code>
                      <br />&nbsp;
                      <p>
                        <b>Response:</b>
                      </p>
                      <pre>
                        <p>&#123;</p>
                        <p>    "Classifier_id": "Document_similarity",</p>
                        <p>    "Metrics": &#123;</p>
                        <p>        "Cosine_similarity": 0.35355339059327373,</p>
                        <p>        "Jaccard_similarity": 0.2,</p>
                        <p>        "given_text1": "hello guys",</p>
                        <p>        "given_text2": "hello how are you"</p>
                        <p>    &#125;,</p>
                        <p>    "content_type": "application-json",</p>
                        <p>    "status_code": 200,</p>
                        <p>    "query_limit": "10000",</p>
                        <p>    "query_limit_remaining": "9426",</p>
                        <p>    "query_limit_request": 1</p>
                        <p>&#125;</p>
                      </pre>
                      <br />
                      <br />
                    </div>
                 );


/*--------------------------------  vision Analytics  ---------------------------------*/

let visionAnalyticsApi = (
                            <div className="apiGuideBody">
                              <p>
                                In vision analysis APIs we can give the appropriate image url and get the predicted
                                  results for any model using “GET” method and can also upload any image from the local system
                                  and get the predicted results for any model using “POST” method.
                              </p>
                              <br />
                              <p>
                                <b>METHOD AND REQUEST PATH:</b>
                              </p>
                              <br />
                              <p>
                                GET
                              </p>
                              <pre>
                                /api.insight.aadhya-analytics.com/v1/modelname/&#x3c;accountid&#x3e;/&#x3c;path:apikey&#x3e;/&#x3c;userid&#x3e;?img=
                              </pre>
                              <br />
                              <p>
                                POST
                              </p>
                              <pre>
                                /api.insight.aadhya-analytics.com/v1/modelname/&#x3c;accountid&#x3e;/&#x3c;path:apikey&#x3e;/&#x3c;userid&#x3e;
                              </pre>
                              <p>
                                <b>Required Parameters:</b>
                              </p>
                              <br />
                              <ul>
                                <li>Model name</li>
                                <li>Account id</li>
                                <li>Api key</li>
                                <li>Userid</li>
                                <li>img</li>
                              </ul>
                            </div>
                         );

/*-----------------------------------  Object Detection ------------------------------------------*/

let objectDetectionApi = (
                        <div className="apiGuideBody">
                          <p>
                            There are five kinds of services which detects logo ,bird ,transport, plant and general
                            object for their respective apis.
                          </p>
                          <br />

                          <p>
                            <b>Logo :</b>
                          </p>
                          <p>
                            This api is responsible to predict type of logo for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/logo/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMcvL" target="_blank" rel="noopener noreferrer">
                                                  https://documenter.getpostman.com/view/5916954/SVYtMcvL</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>    "Classifier_id": "Logo",</p>
                            <p>    "classifications": &#123;</p>
                            <p>      "Logos": [</p>
                            <p>        &#123;</p>
                            <p>          "Class": "Adidas",</p>
                            <p>          "Coordinates": &#123;</p>
                            <p>            "Bottom": 435.5094037055969,</p>
                            <p>            "Left": 46.070361882448196,</p>
                            <p>            "Right": 363.0004495382309,</p>
                            <p>            "Top": 22.972640693187714</p>
                            <p>          &#125;,</p>
                            <p>          "Logo": 1,</p>
                            <p>          "Prediction_accuracy": 85</p>
                            <p>        &#125;</p>
                            <p>      ]</p>
                            <p>    &#125;,</p>
                            <p>    "content_type": "application-json",</p>
                            <p>    "status_code": 200,</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/logo/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMdTH" target="_blank" rel="noopener noreferrer">
                                                  https://documenter.getpostman.com/view/5916954/SVYtMdTH</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Logo",</p>
                            <p>  "classifications": &#123;</p>
                            <p>      "Logos": [</p>
                            <p>        &#123;</p>
                            <p>          "Class": "BMW",</p>
                            <p>          "Coordinates": &#123;</p>
                            <p>            "Bottom": 216.4431095123291,</p>
                            <p>            "Left": 0,</p>
                            <p>            "Right": 223.58473241329193,</p>
                            <p>            "Top": 6.710571795701981</p>
                            <p>            &#125;,</p>
                            <p>            "Logo": 1,</p>
                            <p>            "Prediction_accuracy": 96</p>
                            <p>          &#125;</p>
                            <p>      ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9280",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>Bird:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of bird for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/bird/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMdNv" target="_blank" rel="noopener noreferrer">
                                                https://documenter.getpostman.com/view/5916954/SVYtMdNv</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "classifications": &#123;</p>
                            <p>  "Classifier_id": "Bird",</p>
                            <p>    "Birds": [</p>
                            <p>      &#123;</p>
                            <p>        "Bird": 1,</p>
                            <p>        "Class": "toucan_bird",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 771.6451168060303,</p>
                            <p>          "Left": 52.976274490356445,</p>
                            <p>          "Right": 1192.015027999878,</p>
                            <p>          "Top": 14.660406112670898</p>
                            <p>        &#125;,</p>
                            <p>      "Prediction_accuracy": 99</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9281",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/bird/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMdTL" target="_blank" rel="noopener noreferrer">
                                                  https://documenter.getpostman.com/view/5916954/SVYtMdTL</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Bird",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Birds": [</p>
                            <p>      &#123;</p>
                            <p>        "Bird": 1,</p>
                            <p>      "Class": "cuckoo_bird",</p>
                            <p>      "Coordinates": &#123;</p>
                            <p>          "Bottom": 179.93262219429016,</p>
                            <p>          "Left": 11.016395032405853,</p>
                            <p>          "Right": 190.7638725042343,</p>
                            <p>          "Top": 13.085303485393524</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 35</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",v</p>
                            <p>  "query_limit_remaining": "9278",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>Transport:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of transport for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/transport/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMcvN" target="_blank" rel="noopener noreferrer">
                                                    https://documenter.getpostman.com/view/5916954/SVYtMcvN</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Transport",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Transports": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "auto",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 800,</p>
                            <p>          "Left": 46.47928476333618,</p>
                            <p>          "Right": 1174.371099472046,</p>
                            <p>          "Top": 8.649015426635742</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 75,</p>
                            <p>        "transport": 1</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9375",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/transport/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMdXi" target="_blank" rel="noopener noreferrer">
                                                    https://documenter.getpostman.com/view/5916954/SVYtMdXi</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Transport",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Transports": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "bicycle",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 186,</p>
                            <p>          "Left": 3.3283207714557648,</p>
                            <p>          "Right": 253.78670608997345,</p>
                            <p>          "Top": 9.036693155765533</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 62,</p>
                            <p>        "transport": 1</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  “status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9277",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>Plant:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of plant for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/plant/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMcvR" target="_blank" rel="noopener noreferrer">
                                                    https://documenter.getpostman.com/view/5916954/SVYtMcvR</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Plant",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Plants": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "plants_indoor",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 753.8764953613281,</p>
                            <p>          "Left": 9.570479393005371,</p>
                            <p>          "Right": 1200,</p>
                            <p>          "Top": 27.48234272003174</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 58,</p>
                            <p>        "plant": 1</p>
                            <p>      &#125;,</p>
                            <p>      &#123;</p>
                            <p>        "Class": "plants_outdoor",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 800,</p>
                            <p>          "Left": 55.03517389297485,</p>
                            <p>          "Right": 1130.672264099121,</p>
                            <p>          "Top": 10.125207901000977</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 53,</p>
                            <p>        "plant": 2</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9374",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/plant/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxKq" target="_blank" rel="noopener noreferrer">
                                                https://documenter.getpostman.com/view/5916954/SVYtMxKq</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Plant",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Plants": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "plants_outdoor",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 185.56567668914795,</p>
                            <p>          "Left": 1.8586609959602356,</p>
                            <p>          "Right": 268.44862365722656,</p>
                            <p>          "Top": 2.789686918258667</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 97,</p>
                            <p>        "plant": 1</p>
                            <p>      &#125;,</p>
                            <p>      &#123;</p>
                            <p>        "Class": "plants_indoor",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 174.63129687309265,</p>
                            <p>          "Left": 9.612243175506592,</p>
                            <p>          "Right": 271,</p>
                            <p>          "Top": 0</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 97,</p>
                            <p>        "plant": 2</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9276",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>General Object:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of general object for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/object/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMdNt" target="_blank" rel="noopener noreferrer">
                                                   https://documenter.getpostman.com/view/5916954/SVYtMdNt</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "General_Object",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "GeneralObjects": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Clothing",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 781.9650173187256,</p>
                            <p>          "Left": 326.60393714904785,</p>
                            <p>          "Right": 913.2122039794922,</p>
                            <p>          "Top": 258.1010580062866</p>
                            <p>        &#125;,</p>
                            <p>        "Object": 1,</p>
                            <p>        "Score": 73</p>
                            <p>      &#125;,</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Face",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 274.97315406799316,</p>
                            <p>          "Left": 508.36490392684937,</p>
                            <p>          "Right": 689.9345397949219,</p>
                            <p>          "Top": 28.40385138988495</p>
                            <p>        &#125;,</p>
                            <p>        "Object": 2,</p>
                            <p>        "Score": 54</p>
                            <p>      &#125;,</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Person",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 795.4741477966309,</p>
                            <p>          "Left": 309.1881036758423,</p>
                            <p>          "Right": 943.9865827560425,</p>
                            <p>          "Top": 30.157431960105896</p>
                            <p>        &#125;,</p>
                            <p>        "Object": 3,</p>
                            <p>        "Score": 42</p>
                            <p>      &#125;,</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Man",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 794.6691036224365,</p>
                            <p>          "Left": 319.6103096008301,</p>
                            <p>          "Right": 909.6429347991943,</p>
                            <p>          "Top": 29.600465297698975</p>
                            <p>        &#125;,</p>
                            <p>        "Object": 4,</p>
                            <p>        "Score": 40</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9287",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/object/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxdd" target="_blank" rel="noopener noreferrer">
                                                     https://documenter.getpostman.com/view/5916954/SVYtMxdd</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "General_Object",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "GeneralObjects": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Man",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>        "Bottom": 185.55098712444305,</p>
                            <p>          "Left": 23.752282068133354,</p>
                            <p>          "Right": 169.40501201152802,</p>
                            <p>          "Top": 14.513427123427391</p>
                            <p>          &#125;,</p>
                            <p>          "Object": 1,</p>
                            <p>          "Score": 91</p>
                            <p>        &#125;,</p>
                            <p>        &#123;</p>
                            <p>          "Class": "Face",</p>
                            <p>          "Coordinates": &#123;</p>
                            <p>            "Bottom": 118.90861165523529,</p>
                            <p>            "Left": 73.21695926785469,</p>
                            <p>            "Right": 140.2823607325554,</p>
                            <p>            "Top": 19.984357327222824</p>
                            <p>          &#125;,</p>
                            <p>          "Object": 2,</p>
                            <p>          "Score": 85</p>
                            <p>        &#125;,</p>
                            <p>        &#123;</p>
                            <p>        "Class": "Suit",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 185.05212950706482,</p>
                            <p>          "Left": 22.120419323444366,</p>
                            <p>          "Right": 160.39565813541412,</p>
                            <p>          "Top": 90.04469239711761</p>
                            <p>        &#125;,</p>
                            <p>        "Score": 71</p>
                            <p>        "Object": 3,</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9266",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                        </div>
                      );

/*-----------------------------------  Scene Detection ------------------------------------------*/

let sceneDetectionApi = (
                        <div className="apiGuideBody">
                          <p>
                          There are 4 kinds of scene detection for the services scene ,tlo ,weather,
                            And violence using the below apis user can detect the type of scene and belongs to which
                            Kind of detection.
                          </p>
                          <br />


                          <p>
                            <b>Scene:</b>
                          </p>
                          <p>
                          This api is responsible to predict type of scene for the given image
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/scene/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMd5D" target="_blank" rel="noopener noreferrer">
                                                   https://documenter.getpostman.com/view/5916954/SVYtMd5D</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Scene",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Scenes": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Office_building",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 795.7945823669434,</p>
                            <p>          "Left": 211.71129941940308,</p>
                            <p>          "Right": 954.0289878845215,</p>
                            <p>          "Top": 36.637091636657715</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 48,</p>
                            <p>        "scene": 1</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9373",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/scene/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxUn" target="_blank" rel="noopener noreferrer">
                                                     https://documenter.getpostman.com/view/5916954/SVYtMxUn</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  “Classifier_id": "Scene",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Scenes": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "beach",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 309.71482515335083,</p>
                            <p>          "Left": 2.7154689729213715,</p>
                            <p>          "Right": 440.9570702314377,</p>
                            <p>          "Top": 8.924773693084717</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 64,</p>
                            <p>        "scene": 1</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9270",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>Tlo:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of tlo for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/tlo/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMd9d" target="_blank" rel="noopener noreferrer">
                                                   https://documenter.getpostman.com/view/5916954/SVYtMd9d</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Tlo",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Scenes": [</p>
                            <p>        "Class": "lake",</p>
                            <p>        &#123;</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 784.8915100097656,</p>
                            <p>          "Left": 15.503132343292236,</p>
                            <p>          "Right": 1200,</p>
                            <p>          "Top": 67.90285110473633</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 99,</p>
                            <p>        "scene": 1</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9294",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/tlo/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxZ6" target="_blank" rel="noopener noreferrer">
                                                     https://documenter.getpostman.com/view/5916954/SVYtMxZ6</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Tlo",</p>
                            <p>  “classifications": &#123;</p>
                            <p>    "Scenes": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "lake",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 282.92023372650146,</p>
                            <p>          "Left": 2.179068475961685,</p>
                            <p>          "Right": 436.57460618019104,</p>
                            <p>          "Top": 170.7362823486328</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 77,</p>
                            <p>        "scene": 1</p>
                            <p>      &#125;,</p>
                            <p>      &#123;</p>
                            <p>        "Class": "lake",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 292.43615770339966,</p>
                            <p>          "Left": 19.75181156396866,</p>
                            <p>          "Right": 420.8736714720726,</p>
                            <p>          "Top": 24.792327404022217</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 64,</p>
                            <p>        "scene": 2</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9269",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>Weather:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of weather for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/weather/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMd9g" target="_blank" rel="noopener noreferrer">
                                                   https://documenter.getpostman.com/view/5916954/SVYtMd9g</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Weather",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Scenes": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "weather_cloudy",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 786.3338470458984,</p>
                            <p>          "Left": 22.27081060409546,</p>
                            <p>          "Right": 1196.7453002929688,</p>
                            <p>          "Top": 63.08014392852783</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 91,</p>
                            <p>        "scene": 1</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9288",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/weather/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxZ9" target="_blank" rel="noopener noreferrer">
                                                     https://documenter.getpostman.com/view/5916954/SVYtMxZ9</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Weather",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Scenes": [</p>
                            <p>      &#123;</p>
                            <p>        “Class": "weather_sunny",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 308.5643434524536,</p>
                            <p>          "Left": 3.2041118144989014,</p>
                            <p>          "Right": 449,</p>
                            <p>          "Top": 10.294026374816895</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 82,</p>
                            <p>        "scene": 1</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9267",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>Violence:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of violence for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/violence/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMdJY" target="_blank" rel="noopener noreferrer">
                                                   https://documenter.getpostman.com/view/5916954/SVYtMdJY</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Violence",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Scenes": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "war",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 797.3265647888184,</p>
                            <p>          "Left": 111.2958312034607,</p>
                            <p>          "Right": 1200,</p>
                            <p>          "Top": 0</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 99,</p>
                            <p>        "scene": 1</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9315",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/violence/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxdW" target="_blank" rel="noopener noreferrer">
                                                     https://documenter.getpostman.com/view/5916954/SVYtMxdW</a>
                          </code>
                          <br />
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Violence",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Scenes": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "war",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 312,</p>
                            <p>          "Left": 38.02344357967377,</p>
                            <p>          "Right": 449,</p>
                            <p>          "Top": 0</p>
                            <p>        &#125;,</p>
                            <p>        "Prediction_accuracy": 99,</p>
                            <p>        "scene": 1</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9268",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                        </div>
                      );

/*-----------------------------------  Attribute Detection ------------------------------------------*/

let attributeDetectionApi = (
                        <div className="apiGuideBody">
                          <p>
                            This type of detection has four kinds of services which detects gender ,age ,emotion and
                              color for the given image url or the uploaded image using the below apis for the
                              respective models.
                          </p>
                          <br />

                          <p>
                            <b>Gender:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of gender for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/gender/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMcvS" target="_blank" rel="noopener noreferrer">
                                                   https://documenter.getpostman.com/view/5916954/SVYtMcvS</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Gender",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Faces": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Male",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 296.77181243896484,</p>
                            <p>          "Left": 507.11517333984375,</p>
                            <p>          "Right": 694.7719573974609,</p>
                            <p>          "Top": 10.180974006652832</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 1,</p>
                            <p>        "Predicted_accuracy": 99</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9341",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/gender/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br/>
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxQM" target="_blank" rel="noopener noreferrer">
                                                     https://documenter.getpostman.com/view/5916954/SVYtMxQM</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Gender",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Faces": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Male",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 125.8564875125885,</p>
                            <p>          "Left": 63.90167024731636,</p>
                            <p>          "Right": 146.0232321023941,</p>
                            <p>          "Top": 11.004302144050598</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 1,</p>
                            <p>        "Predicted_accuracy": 99</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9274",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>Age:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of age for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/age/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMczm" target="_blank" rel="noopener noreferrer">
                                                   https://documenter.getpostman.com/view/5916954/SVYtMczm</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>    "Classifier_id": "Age",</p>
                            <p>    "classifications": &#123;</p>
                            <p>      "Faces": [</p>
                            <p>        &#123;</p>
                            <p>          "Class": "age:31-55",</p>
                            <p>          "Coordinates": &#123;</p>
                            <p>          "Bottom": 287.361216545105,</p>
                            <p>          "Left": 505.3851127624512,</p>
                            <p>          "Right": 691.1338090896606,</p>
                            <p>          "Top": 18.365883827209473</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 1,</p>
                            <p>        "Predicted_accuracy": 50</p>
                            <p>        &#125;</p>
                            <p>      ]</p>
                            <p>    &#125;,</p>
                            <p>    "content_type": "application-json",</p>
                            <p>    "status_code": 200,</p>
                            <p>    "query_limit": "10000",</p>
                            <p>    "query_limit_remaining": "9325",</p>
                            <p>    "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/age/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxKt" target="_blank" rel="noopener noreferrer">
                                                 https://documenter.getpostman.com/view/5916954/SVYtMxKt</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Age",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Faces": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "age:31-55",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 123.70278668403625,</p>
                            <p>          "Left": 67.29966233670712,</p>
                            <p>          "Right": 145.65102177858353,</p>
                            <p>          "Top": 15.952146649360657</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 1,</p>
                            <p>        "Predicted_accuracy": 81</p>
                            <p>      &#125;,</p>
                            <p>      &#123;</p>
                            <p>        "Class": "age:55+",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 123.77706599235535,</p>
                            <p>          "Left": 67.3367210328579,</p>
                            <p>          "Right": 146.05521476268768,</p>
                            <p>          "Top": 18.419067800045013</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 2,</p>
                            <p>        "Predicted_accuracy": 43</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9275",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>Emotion :</b>
                          </p>
                          <p>
                            This api is responsible to predict type of emotion for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/emotion/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMczq" target="_blank" rel="noopener noreferrer">
                                                 https://documenter.getpostman.com/view/5916954/SVYtMczq</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Emotion",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Faces": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Neutral",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 283.76402854919434,</p>
                            <p>          "Left": 519.3756937980652,</p>
                            <p>          "Right": 677.5135517120361,</p>
                            <p>          "Top": 43.51223707199097</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 1,</p>
                            <p>        "Predicted_accuracy": 50</p>
                            <p>      &#125;,</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Surprise",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 282.74221420288086,</p>
                            <p>          "Left": 510.49675941467285,</p>
                            <p>          "Right": 689.6688938140869,</p>
                            <p>          "Top": 29.714858531951904</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 2,</p>
                            <p>        "Predicted_accuracy": 37</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9348",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/emotion/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxKx" target="_blank" rel="noopener noreferrer">
                                                https://documenter.getpostman.com/view/5916954/SVYtMxKx</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Emotion",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Faces": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "Happy",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 123.28942787647247,</p>
                            <p>          "Left": 69.90889418125153,</p>
                            <p>          "Right": 145.2878247499466,</p>
                            <p>          "Top": 21.062840223312378</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 1,</p>
                            <p>        "Predicted_accuracy": 99</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9273",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />
                          <br />

                          <p>
                            <b>Color:</b>
                          </p>
                          <p>
                            This api is responsible to predict type of color for the given image.
                          </p>
                          <br />
                          <p>
                            <b>GET Method:</b>
                          </p>
                          <pre>GET    /api.insight.aadhya-analytics.com/v1/color/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;?img=sample_url</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href = "https://documenter.getpostman.com/view/5916954/SVYtMd59" target="_blank" rel="noopener noreferrer">
                                             https://documenter.getpostman.com/view/5916954/SVYtMd59</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Color",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Faces": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "white_people",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 791.6101455688477,</p>
                            <p>          "Left": 225.31331777572632,</p>
                            <p>          "Right": 988.1491184234619,</p>
                            <p>          "Top": 47.25532531738281</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 1,</p>
                            <p>        "Predicted_accuracy": 99</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9310",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>
                          <br />

                          <p>
                            <b>POST Method :</b>
                          </p>
                          <pre>POST    /api.insight.aadhya-analytics.com/v1/color/&#x3c;accountid&#x3e;/&#x3c;apikey&#x3e;/&#x3c;userid&#x3e;</pre>
                          <br />
                          <p>
                            <b>Url Format:</b>
                          </p>
                          <code>
                            <a href="https://documenter.getpostman.com/view/5916954/SVYtMxUg" target="_blank" rel="noopener noreferrer">
                                               https://documenter.getpostman.com/view/5916954/SVYtMxUg</a>
                          </code>
                          <br />&nbsp;
                          <p>
                            <b>Response:</b>
                          </p>
                          <pre>
                            <p>&#123;</p>
                            <p>  "Classifier_id": "Color",</p>
                            <p>  "classifications": &#123;</p>
                            <p>    "Faces": [</p>
                            <p>      &#123;</p>
                            <p>        "Class": "white_people",</p>
                            <p>        "Coordinates": &#123;</p>
                            <p>          "Bottom": 184.1963210105896,</p>
                            <p>          "Left": 8.687249720096588,</p>
                            <p>          "Right": 220.10100144147873,</p>
                            <p>          "Top": 13.051561832427979</p>
                            <p>        &#125;,</p>
                            <p>        "Face": 1,</p>
                            <p>        "Predicted_accuracy": 94</p>
                            <p>      &#125;</p>
                            <p>    ]</p>
                            <p>  &#125;,</p>
                            <p>  "content_type": "application-json",</p>
                            <p>  "status_code": 200,</p>
                            <p>  "query_limit": "10000",</p>
                            <p>  "query_limit_remaining": "9272",</p>
                            <p>  "query_limit_request": 1</p>
                            <p>&#125;</p>
                          </pre>

                        </div>
                      );



/*-----------------------------------  ******** ------------------------------------------*/

/*--------------------------------  Error Responses  ---------------------------------*/

/*--------------------------------  Status Codes  ---------------------------------*/

let statuscode = (
                    <div className="apiGuideBody">
                      <p>
                        Data2Insights API uses HTTP status codes in responses to indicate the relevant response for
                          the accessed request.
                      </p>
                      <br />
                      <table className="statustable table-bordered ">
                        <tbody>
                          <tr className="status_table">
                            <td>Code</td>
                            <td>Description</td>
                          </tr>
                          <tr>
                            <td className="statcode">200 <br /> Ok</td>
                            <td className="statdesc">Returns successful response</td>
                          </tr>
                          <tr>
                            <td className="statcode">400 <br /> BAD REQUEST</td>
                            <td className="statdesc">Could not parse the request when the request is not formed in
                                                      a proper way.</td>
                          </tr>
                          <tr>
                            <td className="statcode">401 <br /> UNAUTHORIZED</td>
                            <td className="statdesc">Authorization failure to access the service</td>
                          </tr>
                          <tr>
                            <td className="statcode">406 <br /> NOT ACCEPTABLE</td>
                            <td className="statdesc">Indicates that the server cannot produce a response matching the list
                                      of acceptable values defined in the request's proactive content negotiation headers,
                                      and that the server is unwilling to supply a default representation</td>
                          </tr>
                          <tr>
                            <td className="statcode">429 <br /> TOO MANY REQUESTS</td>
                            <td className="statdesc">Reached Request limit ,request was throttled.</td>
                          </tr>
                          <tr>
                            <td className="statcode">404 <br /> NOT FOUND</td>
                            <td className="statdesc">Resource doesn’t exist and no access for it,should check the url</td>
                          </tr>
                          <tr>
                            <td className="statcode">503 <br /> SERVICE UNAVAILABLE</td>
                            <td className="statdesc">API is temporarily out of service due to maintenance​.
                                                    Please try again later.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                 );


/*--------------------------------  Error Codes  ---------------------------------*/

let errorcode = (
                  <div className="apiGuideBody">
                    <p>
                      The error_code in error response body is easier to understand than the HTTP status_code.
                    </p>
                    <br />
                    <table className="statustable table-bordered ">
                      <tbody>
                        <tr className="status_table">
                          <td>Code</td>
                          <td>Description</td>
                        </tr>
                        <tr>
                          <td className="statcode">AUTH_HEADER_TOKEN</td>
                          <td className="statdesc">When the passed authentications were Invalid</td>
                        </tr>
                        <tr>
                          <td className="statcode">BAD_REQUEST</td>
                          <td className="statdesc">Some parameters which are required to make
                                                    the request were missing.</td>
                        </tr>
                        <tr>
                          <td className="statcode">VALUE_ERROR</td>
                          <td className="statdesc">Value is the information that is stored within a
                                                    certain object.​ A problem with the content of
                                                    the object you tried to assign the value to</td>
                        </tr>
                        <tr>
                          <td className="statcode">SSL_ERROR</td>
                          <td className="statdesc">SSL stands for ​ Secure Sockets Layer​ and is
                                                    designed to create a secure connection between
                                                    client and server. Secure means that connection is
                                                    encrypted and therefore protected from
                                                    eavesdropping. It also allows to validate server
                                                    identity.</td>
                        </tr>
                        <tr>
                          <td className="statcode">TYPE_ERROR</td>
                          <td className="statdesc">This occurs when an operation or function is applied
                                                    to an object of inappropriate type.</td>
                        </tr>
                        <tr>
                          <td className="statcode">KEY_ERROR</td>
                          <td className="statdesc">This error is ​ raised when a mapping ​ key​ is
                                            accessed and isn't found in the mapping. A
                                            mapping is a data structure that maps one set
                                            of values to another.</td>
                        </tr>
                        <tr>
                          <td className="statcode">ATTRIBUTE_ERROR</td>
                          <td className="statdesc">Some mismatches occured</td>
                        </tr>
                        <tr>
                          <td className="statcode">NAME _ERROR</td>
                          <td className="statdesc">The name you requested is incorrect</td>
                        </tr>
                        <tr>
                          <td className="statcode">UNBOUNDLOCAL_ERROR</td>
                          <td className="statdesc">You did not gave input parameter</td>
                        </tr>
                        <tr>
                          <td className="statcode">CONNECTION_ERROR</td>
                          <td className="statdesc">Connection failed</td>
                        </tr>
                        <tr>
                          <td className="statcode">LOOKUP_ERROR</td>
                          <td className="statdesc">The base class​ ​ for the exceptions that are
                                                  raised when a key or index used on a mapping
                                                  or sequence is invalid: IndexError, KeyError.
                                                  This can be raised directly by codecs</td>
                        </tr>
                      </tbody>
                    </table>


                  </div>
                );

/*--------------------------------  Error Response Body  ---------------------------------*/

let errorresponsebody = (
                          <div className="apiGuideBody">
                            <p>
                              For client errors and server errors , you can see extra information about what went wrong
                                            encoded as a JSON in the response body.
                            </p>
                            <br />
                            <p>
                              <b>Authentication Failure:</b>
                            </p>
                            <p>
                              If you provide an invalid API Key in the Authentication header, you’ll get the
                                                following response body:
                            </p>
                            <br />
                            <pre>
                              <p>&#123;</p>
                                  <p>    "detail": "Credentials are not correct.",</p>
                                  <p>    "error_code": "AUTH_HEADER_TOKEN",</p>
                                  <p>    "status_code": 401</p>
                              <p>&#125;</p>
                            </pre>
                            <p>
                              If you provide an account id which doesn’t exist in the database,you’ll get the following
                                                response body:
                            </p>
                            <br />
                            <pre>
                              <p>&#123;</p>
                                  <p>    "detail": "Your account id does not exist",</p>
                                  <p>    "error_code": "AUTH_HEADER_TOKEN",</p>
                                  <p>    "status_code": 401</p>
                              <p>&#125;</p>
                            </pre>
                            <p>
                              When the details of suspended account are given,the following response body is displayed:
                            </p>
                            <br />
                            <pre>
                              <p>&#123;</p>
                              <p>    "detail": "your account id is not active",</p>
                              <p>    "error_code": "AUTH_HEADER_TOKEN",</p>
                              <p>    "status_code": 401</p>
                              <p>&#125;</p>
                            </pre>
                            <p>
                              <b>Call Limits:</b>
                            </p>
                            <p>
                              If calls exceeded for their respective plan limit,then the response body will be as in the below
                                                json:
                            </p>
                            <br />
                            <pre>
                              <p>&#123;</p>
                              <p>    "detail": "Exceeded plan limit " ,</p>
                              <p>    "error_code": "AUTH_HEADER_TOKEN",</p>
                              <p>    "status_code": 429</p>
                              <p>&#125;</p>
                            </pre>
                            <p>
                              <b>Connection Failure:</b>
                            </p>
                            <p>
                              When docker connection failed,then the response body will be as in the below response:
                            </p>
                            <br />
                            <pre>
                              <p>&#123;</p>
                                      <p>    "detail": "Connection Failed",</p>
                                      <p>    "error_code": "CONNECTION_ERROR",</p>
                                      <p>    "status_code": 503</p>
                              <p>&#125;</p>
                            </pre>
                            <p>
                              When the database connection failed as all the user details were in the database, you’ll see the
                                                    following response body:
                            </p>
                            <br />
                            <pre>
                              <p>&#123;</p>
                              <p>    "detail": "Not connected",</p>
                              <p>    "error_code": "CONNECTION_ERROR",</p>
                              <p>    "status_code": 503</p>
                              <p>&#125;</p>
                            </pre>
                            <p>
                              <b>Model Not Found:</b>
                            </p>
                            <p>
                              When the invalid service name is given in the api ,will see the following response body:
                            </p>
                            <br />
                            <pre>
                              <p>&#123;</p>
                              <p>    "detail": "Invalid service name",</p>
                              <p>    "error_code": "AUTH_HEADER_TOKEN",</p>
                              <p>    "status_code": 404</p>
                              <p>&#125;</p>
                            </pre>
                            <p>
                              The fields below are the fields you’ll get in a JSON error response body:
                            </p>
                            <br />
                            <table className="statustable table-bordered ">
                              <tbody>
                                <tr className="status_table">
                                  <td>Field</td>
                                  <td>Description</td>
                                </tr>
                                <tr>
                                  <td className="statcode">detail</td>
                                  <td className="statdesc">A human can read and understand the cause of the error.</td>
                                </tr>
                                <tr>
                                  <td className="statcode">error_code</td>
                                  <td className="statdesc">A simple word which explains the valid
                                                    reason why the request was not parsed.</td>
                                </tr>
                                <tr>
                                  <td className="statcode">status_code</td>
                                  <td className="statdesc">This is visible from the obtained json response.Status_codes are
                                     based on the HTTP status codes.</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                          );



/*---------------------------------------------------- ********  -------------------------------------------------------------*/

export const API_Guide = {

        "What is Data2Insights ?":{
                      "content":def,
                      "content_type":"para",
                      "childs":
                        {
                          "Advantages of Data2Insights":advantages,
                          "Benefits":benefits,
                        }

        },

        "Services":{
                  "content":services,
                  "content_type":"para",
                  "childs":
                    {
                      "Text Analytics":{
                                          "content":textAnalytics,
                                          "content_type":"para",
                                          "childs":
                                            {
                                              "Classification":classification,
                                              "Extraction":extraction,
                                              "Metrics":metrics
                                            }

                                        },
                      "Vision Analytics":{
                                            "content":vision,
                                            "content_type":"para",
                                            "childs":
                                              {
                                                "Object Detection":objectDetection,
                                                "Scene Detection":sceneDetection,
                                                "Attribute Detection":attributeDetection
                                              }

                                          },
                    }

        },

        "Are you a first time user of Data2Insights ?": {
                  "content":fstuser,
                  "content_type":"para",
                  "childs":
                    {
                      "How does it work ?":work
                    }

        },

        "Getting Started":{
              "content":"",
              "content_type":"para",
              "childs":{
                "Setting up an account":setting,
                "Developer sign up":developer,
                "Enterprise sign up":enterprise
              }
        },

        "Plans and Pricing":{
          "content":plan,
          "content_type":"para",
          "childs":{}
        },

        "Requesting a Demo for Data2Insights services":{
          "content": requestingfordemo,
          "content_type":"para",
          "childs":{}
        },

        "Examples Of Text Analytics":{
          "content":extextanalytics,
          "content_type":"para",
          "childs":{}
        },

        "Examples Of Vision Analytics":{
          "content":exvisionanalytics,
          "content_type":"para",
          "childs":{}
        },



        "Using API’s by postman collection":{
          "content":"",
          "content_type":"para",
          "childs":{
                  "Text Analytics API's":{
                                      "content":textAnalyticsApi,
                                      "content_type":"para",
                                      "childs":
                                        {
                                          "Classification API":classificationApi,
                                          "Extraction API":extractionApi,
                                          "Metrics API":metricsApi
                                        }

                                    },
                  "Vision Analytics API's":{
                                        "content":visionAnalyticsApi,
                                        "content_type":"para",
                                        "childs":
                                          {
                                            "Object Detection API":objectDetectionApi,
                                            "Scene Detection API":sceneDetectionApi,
                                            "Attribute Detection API":attributeDetectionApi
                                          }

                                      },
                }
        },

        "Error Responses":{
          "content":"",
          "content_type":"para",
          "childs":
            {
              "Status codes":statuscode,
              "Error codes":errorcode,
              "Error Response Body":errorresponsebody
            }

        },
        "Packages":{
          "content":"",
          "content_type":"para",
          "childs":
            {
              "Nodejs Package": node_package,
              "Php Package": php_package
            }

        },

        // ...node_package,



  };
