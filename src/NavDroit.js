import React from 'react';
import logo1 from './gims.jpg';
import logo2 from './vda.jpg';
import logo3 from './daju.jpg';
import logo4 from './excell.jpg';
function NavDroit() {
    return (
    <div class="blocDroit">
                <div class="blocDroitLeft">
                    <div class="blocSearch">
                        <div class="search">
                        <input type="text" name="search" id="search" placeholder="Recherche" />  
                        </div>
                    </div>
                    <div class="menu">
                        <ul>
                            <li><a href="">OVERVIEW</a></li>
                            <li><a href="">CHARTS</a></li>
                            <li><a href="">GENRES AND MOODS</a></li>
                            <li><a href="">DISCOVER</a></li>
                            <li><a href="">CONCERTS</a></li>
                            <li><a href="">PODSCATS</a></li>
                        </ul>
                    </div>
                    <div class="browser">
                        <h3>Browser</h3>
                    </div>
                    <div class="blocArticle">
                        <article>
                            <p><img src={logo1} alt="vision" class="imgL"/></p>
                            <h1>The blueprint</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident praesentium doloremque qui a
                                itaque est rem possimus fugit officiis beatae quod eius, sint excepturi! Est in ex vero molestiae
                                delectus</p>
                        </article>
                        <article>
                            <p><img src={logo2} alt="vision" class="imgL"/></p>
                            <h1>Reasonable Doubt</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident praesentium doloremque qui a
                                itaque est rem possimus fugit officiis beatae quod eius, sint excepturi! Est in ex vero molestiae
                                delectus</p>
                        </article>
                        <article>
                            <p><img src={logo3} alt="vision" class="imgL"/></p>
                            <h1>The black Albums</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident praesentium doloremque qui a
                                itaque est rem possimus fugit officiis beatae quod eius, sint excepturi! Est in ex vero molestiae
                                delectus</p>
                        </article>
                        <article>
                            <p><img src={logo4} alt="vision" class="imgL"/></p>
                            <h1>Américan Gangstar</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident praesentium doloremque qui a
                                itaque est rem possimus fugit officiis beatae quod eius, sint excepturi! Est in ex vero molestiae
                                delectus</p>
                        </article>
                    </div>
                    <div class="articleImg">
                        <img src={logo1} alt="vision" class="imgS"/>
                        <img src={logo2} alt="vision" class="imgS"/>
                        <img src={logo3} alt="vision" class="imgS"/>
                        <img src={logo4} alt="vision" class="imgS"/>
                        <img src={logo1} alt="vision" class="imgS"/>
                        <img src={logo2} alt="vision" class="imgS"/>
                        <img src={logo3} alt="vision" class="imgS"/>
                        <img src={logo4} alt="vision" class="imgS"/>
                    </div>
                </div>
                
                <div class="blocDroitRight">
                    <div class="navDroit">
                        <p>Freind activity</p>
                        <div class="navDroitB"></div>
                    </div>
                </div>
            </div>

    );
}

export default NavDroit;