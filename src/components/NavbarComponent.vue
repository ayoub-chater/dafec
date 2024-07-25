<script setup></script>

<template>
    <header id="header" class="clearfix">
        <div class="site-header">
            <div class="top-bar">
                <div class="container">
                    <div class="row">
                        <div class="top-bar-left">
                            <div class="col-md-8">
                                <div class="address-bar">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>1010 Avenue of the Moon, New York, NY 10018 US.</p>
                                </div>
                            </div>
                        </div>

                        <div class="top-bar-right">
                            <div class="col-md-4">
                                <div class="quote-link">
                                    <router-link
                                        to="/contact">REQUEST
                                        A QUOTE</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="top-header clearfix">
                <div class="container">
                    <div class="row">
                        <div class="logo col-md-3">
                            <div class="logo-image">
                                <router-link to="/"><img
                                        src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/finance_logo.png?x12902"
                                        class="image-logo" alt="logo" /></router-link>
                            </div>
                        </div>

                        <div class="info col-md-9">
                            <ul>
                                <li>
                                    <i class="fa-regular fa-clock"></i>                                    <p>
                                    <span class="heading">Contact Time</span>
                                    <span>Mon-Sat: 9.00-18.00</span>
                                    </p>
                                </li>
                                <li>
                                    <i class="fa-solid fa-phone"></i>
                                    <p>
                                        <span class="heading">Phone Number</span>
                                        <span>(+212) 662 34 53 30</span>
                                    </p>
                                </li>
                                <li class="last">
                                    <i class="fa-solid fa-envelope-open-text"></i>
                                    <p>
                                        <span class="heading">Contact Email</span>
                                        <span>contact@dafec.ma</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navigation">
                <div class="container">
                    <div class="row">
                        <div class="row clearfix">
                            <div class="main-menu col-md-10">
                                <ul id="menu-menu" class="sm menus">
                                    <li id="menu-item-1938"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-1592 menu-item-1938">
                                        <router-link to="/">Accueil</router-link>
                                    </li>
                                    <li id="menu-item-1937"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1937">
                                        <router-link to="/à-propos">À propos</router-link>
                                    </li>
                                    <li id="menu-item-1936"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1936">
                                        <router-link to="/nos-services">Nos services</router-link>
                                    </li>
                                    <li id="menu-item-1934"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1934">
                                        <router-link to="/nos-solutions">Nos Solutions DAF</router-link>
                                    </li>
                                    <li id="menu-item-1934"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1934">
                                        <router-link to="/contact">Outils pratiques</router-link>
                                    </li>
                                    <li id="menu-item-1934"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1934">
                                        <router-link to="/contact">Contact</router-link>
                                    </li>
                                </ul>
                            </div>

                            <div class="right-section col-md-2">
                                <div class="mobile-menu">
                                    <button id="slide-buttons" class="icon-finance-bars"></button>
                                </div>

                                <!-- MOBILE MENU START
                            ============================================= -->
                                <nav id="c-menu--slide-right" class="c-menu c-menu--slide-right">
                                    <button class="c-menu__close icon-finance-close"></button>

                                    <ul id="menu-menu-1" class="sm menus">
                                        <li
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1592 current_page_item menu-item-1938">
                                            <a href="https://financetheme.themesawesome.com/"
                                                aria-current="page">Accueil</a>
                                        </li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1937">
                                            <a href="https://financetheme.themesawesome.com/about-2/">À propos</a>
                                        </li>
                                        <li
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1936">
                                            <a href="https://financetheme.themesawesome.com/services/">Nos services</a>
                                            <ul class="sub-menu">
                                                <li
                                                    class="menu-item menu-item-type-post_type menu-item-object-finance-service menu-item-1942">
                                                    <a
                                                        href="https://financetheme.themesawesome.com/service/audit-assurance/">Audit
                                                        &amp; Assurance</a>
                                                </li>
                                                <li
                                                    class="menu-item menu-item-type-post_type menu-item-object-finance-service menu-item-1941">
                                                    <a
                                                        href="https://financetheme.themesawesome.com/service/bonds-commodities/">Bonds
                                                        &amp; Commodities</a>
                                                </li>
                                                <li
                                                    class="menu-item menu-item-type-post_type menu-item-object-finance-service menu-item-1945">
                                                    <a
                                                        href="https://financetheme.themesawesome.com/service/financial-projections/">Financial
                                                        Projections</a>
                                                </li>
                                                <li
                                                    class="menu-item menu-item-type-post_type menu-item-object-finance-service menu-item-1944">
                                                    <a
                                                        href="https://financetheme.themesawesome.com/service/strategic-planning/">Strategic
                                                        Planning</a>
                                                </li>
                                                <li
                                                    class="menu-item menu-item-type-post_type menu-item-object-finance-service menu-item-1940">
                                                    <a
                                                        href="https://financetheme.themesawesome.com/service/turnaround-consulting/">Turnaround
                                                        Consulting</a>
                                                </li>
                                                <li
                                                    class="menu-item menu-item-type-post_type menu-item-object-finance-service menu-item-1943">
                                                    <a href="https://financetheme.themesawesome.com/service/trades-stocks/">Trades
                                                        &amp; Stocks</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1935">
                                            <a href="https://financetheme.themesawesome.com/case-studies/">Case Studies</a>
                                            <ul class="sub-menu">
                                                <li
                                                    class="menu-item menu-item-type-post_type menu-item-object-finance-project menu-item-2010">
                                                    <a href="https://financetheme.themesawesome.com/case/personal-banking/">Personal
                                                        Banking</a>
                                                </li>
                                                <li
                                                    class="menu-item menu-item-type-post_type menu-item-object-finance-project menu-item-2008">
                                                    <a
                                                        href="https://financetheme.themesawesome.com/case/plan-for-your-future/">Plan
                                                        For Your Future</a>
                                                </li>
                                                <li
                                                    class="menu-item menu-item-type-post_type menu-item-object-finance-project menu-item-2009">
                                                    <a
                                                        href="https://financetheme.themesawesome.com/case/the-next-big-thing/">The
                                                        Next Big Thing</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1939">
                                            <a href="https://financetheme.themesawesome.com/blog/">Nos solutions DAF</a>
                                        </li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1939">
                                            <a href="https://financetheme.themesawesome.com/blog/">Outils pratiques</a>
                                        </li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1934">
                                            <a href="https://financetheme.themesawesome.com/contact/">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div id="slide-overlay" class="slide-overlay"></div>
                                <!-- MOBILE MENU END -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
/*-----------------------------------------------------------------------------------*/

/*  2. Header
/*-----------------------------------------------------------------------------------*/

.router-link-active {
    color: #83a2aa !important;
}

#header {
    position: relative;
    z-index: 1000;
}

.site-title {
    margin: 10px 0;
}

/* top bar */

.top-bar {
    background-color: #034153;
}

.address-bar {
    line-height: 52px;
}

.address-bar i {
    float: left;
    color: #fed100;
    margin-right: 10px;
    font-size: 20px;
    line-height: 52px;
}

.address-bar p {
    color: #ffffff;
    margin: 0;
    font-size: 13px;
}

.quote-link {
    float: right;
}

.quote-link a {
    /* font-family: 'open_sansbold'; */
    background-color: #fed100;
    color: #034153;
    padding: 15px 30px;
    display: inline-block;
    text-transform: uppercase;
    font-size: 15px;
}

/* top header */

.top-header {
    background: #ffffff;
    padding: 30px 0;
}

.top-header .logo-image {
    max-width: 160px;
}

.top-header ul {
    float: right;
    margin: 0;
    padding: 0;
}

.top-header ul li {
    display: inline-block;
    margin: 0 20px;
}

.top-header ul li.last {
    margin-right: 0;
}

.top-header ul li i {
    margin-right: 5px;
    float: left;
    line-height: 42px;
    display: block;
    text-align: center;
    font-size: 38px;
    padding-right: 10px;
    color: #023669;
}

.top-header ul li p {
    float: right;
    overflow: hidden;
    margin: 0;
}

.top-header ul li p span {
    /* font-family: 'open_sansbold'; */
    display: block;
    font-size: 14px;
}

.top-header ul li p span.heading {
    /* font-family: 'open_sansregular'; */
}

.site-header .navigation {
    border-top: 1px solid #d9e3e5;
    border-bottom: 1px solid #d9e3e5;
}

/* main menu */

.main-menu {
    position: relative;
    z-index: 50;
}

.main-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1;
}

.main-menu>ul {
    position: relative;
    display: inline-block;
    z-index: 500;
    padding: 0 15px;
}

.main-menu:after,
.main-menu>ul:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
}

.main-menu.align-right>ul>li {
    float: right;
}

.main-menu.align-center ul {
    text-align: center;
}

.main-menu.align-center ul ul {
    text-align: left;
}

.main-menu>ul>li {
    float: left;
    position: relative;
    margin: 0;
    padding: 0;
}

.main-menu>ul>#menu-button {
    display: none;
}

.main-menu ul li a {
    display: block;
    text-decoration: none;
}

.main-menu>ul>li>a {
    /* font-family: 'fira_sansbold'; */
    display: inline-block;
    padding: 0 30px;
    line-height: 60px;
    font-size: 19px;
    letter-spacing: -0.01em;
    color: #034153;
    -webkit-transition: opacity 0.25s ease-out;
    -moz-transition: opacity 0.25s ease-out;
    -ms-transition: opacity 0.25s ease-out;
    -o-transition: opacity 0.25s ease-out;
    transition: opacity 0.25s ease-out;
}

.main-menu>ul>li>a:first-child {
    padding-left: 0;
}

.main-menu>ul>li:hover>a,
.main-menu>ul>li.current_page_item>a {
    opacity: 0.7;
}

.main-menu li.has-child::after,
.main-menu li.page_item_has_children::after,
.main-menu li.has-sub::after,
.main-menu li.menu-item-has-children::after {
    display: block;
    content: "";
    position: absolute;
    width: 0;
    height: 0;
}

.main-menu ul ul.children,
.main-menu ul ul.child,
.main-menu ul ul.sub-menu {
    position: absolute;
    left: -9999px;
    top: 70px;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease, top 0.25s ease;
    -moz-transition: opacity 0.3s ease, top 0.25s ease;
    -ms-transition: opacity 0.3s ease, top 0.25s ease;
    -o-transition: opacity 0.3s ease, top 0.25s ease;
    transition: opacity 0.3s ease, top 0.25s ease;
    z-index: 1000;
}

.main-menu ul ul ul {
    top: 37px;
    padding-left: 5px;
}

.main-menu ul ul li {
    position: relative;
}

.main-menu>ul>li:hover>ul {
    left: auto;
    top: 60px;
    opacity: 1;
}

.main-menu.align-right>ul>li:hover>ul {
    left: auto;
    right: 0;
    opacity: 1;
}

.main-menu ul ul li:hover>ul {
    left: 195px;
    top: 0;
    opacity: 1;
}

.main-menu.align-right ul ul li:hover>ul {
    left: auto;
    right: 170px;
    top: 0;
    opacity: 1;
    padding-right: 5px;
}

.main-menu ul ul li a {
    /* font-family: 'open_sansbold'; */
    width: 200px;
    border-bottom: 1px solid #003140;
    padding: 15px 18px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    background: #034153;
    -webkit-transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -ms-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    transition: all 0.35s ease;
}

.main-menu.align-right ul ul li a {
    text-align: right;
}

.main-menu ul ul li:hover>a {
    background: #fed100;
    color: #034153;
}

.main-menu ul ul li:last-child>a,
.main-menu ul ul li.last>a {
    border-bottom: 0;
}

/*-----------------------------------------------------------------------------------*/

/*  3. MOBILE NAVIGATION
/*-----------------------------------------------------------------------------------*/

.mobile-menu {
    display: block;
    text-align: right;
}

#slide-buttons {
    color: #034153;
    height: 63px;
    width: 50px;
    line-height: 72px;
    border: none;
    font-size: 28px;
    padding: 0;
    position: relative;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

#slide-buttons:hover,
#slide-buttons:focus,
#slide-buttons.active,
.c-menu__close:hover,
.c-menu__close:focus,
.c-menu__close.active {
    outline: 0;
}

.c-menu {
    position: fixed;
    z-index: 200;
    padding: 50px 0 0 0;
    background-color: #fff;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
}

.c-menu--slide-right {
    height: 100%;
}

.c-menu--slide-right {
    top: 0;
    right: 0;
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
}

.c-menu--slide-right.is-active {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
}

.c-menu__close {
    color: #333333;
    border: none;
    width: 100%;
    text-align: left;
    padding-left: 20px;
}

.c-menu__close:before {
    border: 1px solid #e4e4e4;
    border-radius: 50%;
    padding: 5px;
    font-size: 18px;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.c-menu__close:hover:before {
    border: 1px solid #034153;
    background-color: #034153;
    color: #ffffff;
}

.c-menu--slide-right>ul {
    list-style: none;
    padding: 0;
    margin: 20px 0 0 0;
}

.c-menu--slide-right>ul li {
    position: relative;
    display: block;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 0 10px 20px;
    cursor: pointer;
    text-align: left;
}

.c-menu--slide-right>ul li.menu-selected ul {
    border-top: 1px solid #e8e8e8;
    margin-top: 10px;
}

.c-menu--slide-right>ul li.menu-item-has-children:after,
.c-menu--slide-right>ul li.page_item_has_children:after {
    display: inline-block;
    /* font-family: "finance" !important; */
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    position: absolute;
    content: "\67";
    top: 0px;
    right: 0;
    width: 45px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    border-left: 1px solid #e8e8e8;
}

.c-menu--slide-right>ul>li>ul.sub-menu,
.c-menu--slide-right>ul>li>ul.children {
    max-height: 0;
    overflow: hidden;
    list-style: none;
    padding-left: 25px;
}

.c-menu--slide-right>ul>li>ul.sub-menu li:last-child,
.c-menu--slide-right>ul>li>ul.children li:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.c-menu--slide-right>ul>li.menu-selected>ul.sub-menu,
.c-menu--slide-right>ul>li.menu-selected>ul.children {
    max-height: 100%;
    padding-left: 0;
}

.c-menu--slide-right ul.menus li a {
    /* font-family: 'fira_sansregular'; */
    font-size: 16px;
    font-size: 1.6rem;
    color: #333333;
}

.slide-overlay {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 0;
    height: 0;
    background-color: #000;
    opacity: 0;
    -webkit-transition: opacity 0.3s, width 0s 0.3s, height 0s 0.3s;
    transition: opacity 0.3s, width 0s 0.3s, height 0s 0.3s;
}

.slide-overlay.is-active {
    width: 100%;
    height: 100%;
    opacity: 0.7;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
}

.navigation #main-menu {
    display: none;
}

#header .mobile-menu {
    display: block;
}

.c-menu--slide-right {
    width: 300px;
    height: 100%;
}
</style>
