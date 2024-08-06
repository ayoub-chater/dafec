<script setup>

</script>

<template>
    <footer id="footer" class="site-footer wrapper clearfix">
        <div class="footer-widget-areas clearfix">
            <div class="container">
                <div class="row">
                    <!-- WIDGET FOOTER START ============================================= -->

                    <div class="footer-widget col-md-3">
                        <div id="text-2" class="widget-footer widget_text">
                            <h2 class="title">
                                <div class="logo-image">
                                    <router-link to="/"><img
                                            src="../assets/images/logo_white.png"
                                            class="image-logo" alt="logo" /></router-link>
                                </div> 
                            </h2>                            <div class="textwidget">
                                <p>DAFEC est un cabinet d'expertise comptable basé à Casablanca et inscrit à l'ordre des experts comptables de Casablanca et spécialisé dans les domaines de l'expertise comptable.</p>
                                <router-link to="/contact" class="button button-white">Obtenir un Devis</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="footer-widget col-md-3">
                        <div id="nav_menu-3" class="widget-footer widget_nav_menu">
                            <h2 class="title">Liens Utiles</h2>
                            <div class="menu-footer-menu-container">
                                <ul id="menu-footer-menu" class="menu">
                                    <li id="menu-item-1963" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1592 current_page_item menu-item-1963"><router-link to="/">Accueil</router-link></li>
                                    <li id="menu-item-1960" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1960"><router-link to="/à-propos">À propos</router-link></li>
                                    <li id="menu-item-1964" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1964"><router-link to="/nos-services">Nos services</router-link></li>
                                    <li id="menu-item-1965" class="menu-item menu-item-type-post_type menu-item-object-finance-service menu-item-1965"><router-link to="/nos-solutions">Solutions DAF</router-link></li>
                                    <li id="menu-item-1966" class="menu-item menu-item-type-post_type menu-item-object-finance-service menu-item-1966"><router-link to="/outils-pratiques">Outils pratiques</router-link></li>
                                    <li id="menu-item-1969" class="menu-item menu-item-type-post_type menu-item-object-finance-service menu-item-1969"><router-link to="/contact">Contact</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="footer-widget col-md-3">
                        <div id="social_box-widget-3" class="widget-footer socialbox-widget">
                            <h2 class="title">Suivez-nous!</h2>
                            <ul class="clearfix">
                                <li><a target="_blank" data-title="Facebook" class="socialbox-item facebook" href=""><i class="fa-brands fa-facebook"></i></a></li>
                                <li><a target="_blank" data-title="Twitter" class="socialbox-item twitter" href=""><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a target="_blank" data-title="Pinterest" class="socialbox-item pinterest" href=""><i class="fa-brands fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-widget col-md-3">
                        <div id="text-3" class="widget-footer widget_text">
                            <h2 class="title">Contactez-nous</h2>
                            <div class="textwidget">
                                <div class="contact-section">
                                    <i class="icon-finance-map-marker"></i>
                                    <div class="text-section">
                                        <h4>Adresse de notre Bureau</h4>
                                        <p>Résidence EDEN CALIFORNIE 3 Etg n° 9, Bd HAIFA. Casablanca</p>
                                    </div>
                                </div>

                                <div class="contact-section">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <div class="text-section">
                                        <h4>Téléphone</h4>
                                        <p>+212 662 34 53 30</p>
                                    </div>
                                </div>

                                <div class="contact-section">
                                    <i class="fa-solid fa-envelope-open-text"></i>
                                    <div class="text-section">
                                        <h4>Email</h4>
                                        <p>contact@dafec.ma</p>
                                    </div>
                                </div>

                                <div class="contact-section">
                                    <i class="fa-regular fa-clock"></i>
                                    <div class="text-section">
                                        <h4>Lundi - Vendredi</h4>
                                        <p>10h00 à 18h00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- WIDGET FOOTER END -->
                </div>
            </div>
        </div>

        <!-- COPYRIGHT -->
        <div id="copyright" class="foot-copyright clearfix">
            <div class="container">
                <div class="copyright-text">
                    Créé par <a href="https://mzlouafi.com/">Mzlouafi</a>
                </div>
            </div>
        </div>
    </footer>
</template>


<style>
/*-----------------------------------------------------------------------------------*/
/*  12. FOOTER
/*-----------------------------------------------------------------------------------*/

ul.clearfix {
    display: flex;
    list-style-type: none;
    width: fit-content;
    gap: 10px;
    margin: 0;
    padding: 0;
}

.footer-widget .logo-image {
    width: 100px;
}

.site-footer {
    background-color: #0f2c6b;
}

.footer-widget-areas {
    border-bottom: 1px solid #375084;
    padding: 80px 0 60px;
}

.footer-widget-areas .widget-footer {
    color: #ffffff;
}

.foot-copyright {
    padding: 30px 0;
}

.copyright-text,
.copyright-text a {
    color: #ffffff;
}

/* widget footer */

.footer-widget h2 {
    color: #ffffff;
    margin: 0;
}

.footer-widget h2 {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
}

.footer-widget h2:after {
    content: "";
    background-image: url(./img/section-title.png);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-size: 50px;
    width: 80px;
    background-repeat: no-repeat;
}

.footer-widget .textwidget p {
    color: #ffffff;
    margin-bottom: 0;
}

/* widget menu */

.widget-footer.widget_nav_menu ul {
    list-style: none;
    padding: 0;
}

.widget-footer.widget_nav_menu ul li {
    font-size: 20px;
    margin-bottom: 10px;
}

.widget-footer.widget_nav_menu ul li a {
    color: #ffffff;
}

/* widget newsletter */

.footer-widget .widget_mc4wp_form_widget form input {
    color: #333333;
    padding: 0 50px 0 10px;
}

.footer-widget .newsletter-form {
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
}

.footer-widget .newsletter-form button.submit-button {
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    background-color: #ffcf06;
    padding: 15px;
}

.footer-widget .newsletter-form button.submit-button i {
    color: #375084;
    font-size: 18px;
    font-size: 1.8rem;
}

/* widget contact us */

.widget-footer .contact-section i {
    float: left;
    margin-right: 10px;
    font-size: 24px;
    font-size: 2.4rem;
}

.widget-footer .contact-section {
    margin-bottom: 20px;
}

.widget-footer .contact-section .text-section {
    overflow: hidden;
    display: inline-block;
}

.widget-footer .contact-section .text-section h4 {
    margin-bottom: 5px;
}

.widget-footer .contact-section .text-section p {
    margin-bottom: 0;
    color: #ffffff;
}

.contact-section {
    align-items: center;
    display: flex;
}

.socialbox-widget ul li a {
    font-size: 15px;
    font-size: 1.5rem;
    color: #ffffff;
    background-color: #375084;
    padding: 10px 12px 7px;
    border-radius: 3px;
}

ul.clearfix {
    display: flex;
    list-style-type: none;
    width: fit-content;
    gap: 10px;
    margin: 0;
    padding: 0;
}

</style>