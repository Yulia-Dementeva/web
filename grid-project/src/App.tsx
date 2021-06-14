import React from 'react';
import './App.css';
import {FiArrowDownCircle} from 'react-icons/fi';
import {AiFillTwitterCircle, AiFillFacebook, AiFillSkype, AiOutlineCopyrightCircle} from 'react-icons/ai'

function App() {
    return (
        <div className="App">

            <header className='header'>
                <div className='logo'>LØGØ</div>
                <div className='headerRight'>
                    <div><a href='App.tsx#workId'>work</a></div>
                    <div><a href='App.tsx#teamId'>team</a></div>
                    <div><a href='App.tsx#contactId'>contact</a></div>
                </div>
            </header>


            <main className='main'>
                <div className='pic'>
                    <h1 className='picTitle'>LET US MAKE <br/>YOUR LIVES EASIER </h1>
                    <i><p className='picText'>
                        We specialize on crafting awesome ideas for web, mobile and beyond.</p>
                    </i>
                    <p className='icon'><a className='icon' href='App.tsx#workId'><FiArrowDownCircle/></a></p>
                </div>

                <div id='workId' className='featuredWork'>
                    <h1 className='title'>FEATURED WORK</h1>
                    <p className='featuredText'>Here you can find some of our latest works, to see the details of these
                        works just click below.</p>
                    <div className='gallery'>
                        <figure className='galleryItem galleryItem1'>
                            <img className='galleryImg'
                                 src='https://www.aliceinfoweb.com/admin/images/services/web%20design.jpg'/>
                        </figure>
                        <figure className='galleryItem galleryItem2'>
                            <img className='galleryImg'
                                 src='data:image/png;base64,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'/>
                        </figure>
                        <figure className='galleryItem galleryItem3'>
                            <img className='galleryImg'
                                 src='https://assets.awwwards.com/awards/submissions/2020/09/5f5faa37e46ea485553805.png'/>
                        </figure>
                        <figure className='galleryItem galleryItem4'>
                            <img className='galleryImg'
                                 src='https://user-images.githubusercontent.com/54681761/113208559-9ea1c780-927a-11eb-971e-d96c12b84cfb.jpeg'/>
                        </figure>
                        <figure className='galleryItem galleryItem5'>
                            <img className='galleryImg'
                                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrojGxwp4AQQik0xHZGNjxSb-oIOqTy9y4AXW8yks3h9L4_3veBqgs_n231eXSlNraEY&usqp=CAU'/>
                        </figure>
                        <figure className='galleryItem galleryItem6'>
                            <img className='galleryImg'
                                 src='https://miro.medium.com/max/1000/1*P1iupOxk19t4v130e9ikhQ.png'/>
                        </figure>
                        <figure className='galleryItem galleryItem7'>
                            <img className='galleryImg'
                                 src='https://cdn.dribbble.com/users/702789/screenshots/14012516/media/561a8b7e8cbe51c72c18f4ef0dc72676.png?compress=1&resize=400x300'/>
                        </figure>
                        <figure className='galleryItem galleryItem8'>
                            <img className='galleryImg'
                                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN26hOftzocJIhBD4xrhROdm8fcchqALyBwQ&usqp=CAU'/>
                        </figure>
                        <figure className='galleryItem galleryItem9'>
                            <img className='galleryImg'
                                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd0Cmb2wgjIWBVptGSNgFEF-D7TyKJxx2O1g&usqp=CAU'/>
                        </figure>
                    </div>

                </div>

                <div id='teamId' className='team'>
                    <h1 className='title'>TEAM</h1>
                    <p className='teamText'>
                        We are a hard working group, who's aim is to listen to your problems <br/> and to come up with
                        the best solution possible. We follow the lates trends on <br/> the web to create custom talierd
                        niche websites.
                    </p>
                    <div className='teamGallery'>
                        <div className='teamBlock'>
                            <img className='teamPic'
                                 src='data:image/jpeg;base64,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'/>
                            <b className='fullName'>NAME SURNAME</b>
                            <p className='profession'><i>Lead Developer</i></p>
                            <div className='links'>
                                <AiFillTwitterCircle/>
                                <AiFillFacebook/>
                            </div>
                        </div>
                        <div className='teamBlock'>
                            <img className='teamPic'
                                 src='data:image/jpeg;base64,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'/>
                            <b className='fullName'>NAME SURNAME</b>
                            <p className='profession'><i>Lead Developer</i></p>
                            <div className='links'>
                                <AiFillTwitterCircle/>
                                <AiFillFacebook/>
                                <AiFillSkype/>
                            </div>
                        </div>
                        <div className='teamBlock'>
                            <img className='teamPic' src='http://www.etoday.ru/uploads/2011/08/03/NicolasGuerin00.jpg'/>
                            <b className='fullName'>NAME SURNAME</b>
                            <p className='profession'><i>Lead Developer</i></p>
                            <div className='links'>
                                <AiFillFacebook/>
                                <AiFillSkype/>
                            </div>
                        </div>
                        <div className='teamBlock'>
                            <img className='teamPic' src='http://s019.radikal.ru/i625/1205/21/e9988250d2eet.jpg'/>
                            <b className='fullName'>NAME SURNAME</b>
                            <p className='profession'><i>Lead Developer</i></p>
                            <div className='links'>
                                <AiFillTwitterCircle/>
                                <AiFillSkype/>
                            </div>
                        </div>

                    </div>
                </div>


                <div id='contactId' className='contact'>
                    <h1 className='title'>CONTACT</h1>
                    <div className='blocks'>
                        <div className='leftBlock'>
                            <p className='text'>Where are we located?</p>
                            <iframe className='map'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4503.699944190002!2d37.36334173732913!3d55.639424068359524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5522525f36cb1%3A0x84336308fc2ce7f!2z0J3QvtCy0L7Qv9C10YDQtdC00LXQu9C60LjQvdGB0LrQsNGPINGD0LsuLCA3LCDQnNC-0YHQutCy0LAsIDExOTYzMw!5e0!3m2!1sru!2sru!4v1623396415756!5m2!1sru!2sru"></iframe>
                        </div>

                        <div className='rightBlock'>
                            <p className='text'>Want to contact us? Just drop us a line below.</p>
                            <div className='leaveContactArea'>
                                <div className='name'>
                                    <p className='contactText'>YOUR NAME</p>
                                    <input className='input' placeholder='Yulia Dementeva'/>
                                </div>
                                <div className='email'>
                                    <p className='contactText'>YOUR E-MAIL</p>
                                    <input className='input' placeholder='your@email.com'/>
                                </div>
                            </div>
                                <div>
                                    <p className='contactText'>YOUR MESSAGE</p>
                                    <textarea className='messageArea' placeholder='Leave us a message...'></textarea>
                                </div>
                            <button className="atuin-btn">SEND MESSAGE</button>


                            {/*<div className='message'>*/}
                            {/*    <textarea className='input1' placeholder='Leave us a message...'/>*/}
                            {/*    <div className='bottomMessage'>*/}
                            {/*        <input className='leaveEmail' placeholder='your@email.com'/>*/}
                            {/*        <button className='sendMessage'>SEND</button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>


            </main>


            <footer className='footer'>
                <div className='address'><b>Address:</b> Moscow, Russian Federation</div>
                <div className='copyright'>
                    <div className='iconCopy'><AiOutlineCopyrightCircle/></div>
                    <p className='name'>Yulia Dementeva</p>
                </div>
            </footer>
        </div>
    )
        ;
}

export default App;
