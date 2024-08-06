<script setup>
import { useRoute } from 'vue-router';
import { computed, watch } from 'vue';
import { useServices } from '../store/services';

const store = useServices();
const route = useRoute();

const updateService = () => {
    const serviceName = route.path.split('/').pop();
    const service = store.services.find(s => s.name === serviceName);
    if (service) {
        store.selectService(service.id);
    }
};

watch(() => route.path, updateService, { immediate: true });

const service = computed(() => store.selectedService);

</script>


    <template>
    <div id="content" class="clearfix">
        <div class="single-service wrapper clearfix">
        <div class="container">
            <div class="row">
            <div class="col-md-9 post-content single-content">
                <div class="post-thumb">
                <img :src="service.img" :alt="service.name" />
                </div>
                <div class="post-content">
                <h2 class="post-title">{{ service.name }}</h2>
                <div class="inner-content">
                    <p>{{ service.description }}</p>
                </div>
                </div>
            </div>
            <div class="blog-sidebar col-md-3">
                <div id="nav_menu-2" class="widget widget_nav_menu">
                <div class="heading-block">
                    <h4>Nos Services</h4>
                </div>
                <div class="menu-service-menu-container">
                    <ul id="menu-service-menu" class="menu">
                    <li class="menu-item">
                        <router-link to="/services/Expertise comptable">Expertise comptable</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/services/Commissariat aux compte">Commissariat aux compte</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/services/Conseil">Conseil</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/services/Fiscalité">Fiscalité</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/services/Services juridiques">Services juridiques</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/services/Formation">Formation</router-link>
                    </li>
                    </ul>
                </div>
                </div>
                <div id="text-4" class="widget widget_text">
                <div class="textwidget">
                    <div class="sidebar-contact">
                    <h3>Comment est-ce que nous pouvons vous aider?</h3>
                    <router-link to="/contact" class="button button-white">Contactez-nous</router-link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>



<style scoped>
blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

blockquote {
    margin: 1.5em 0;
    border: 5px solid #f2f2f2;
    padding: 15px;
    display: inline-block;
    font-family: "finance" !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

blockquote:before {
    color: #999;
    content: "\2c";
    font-size: 2em;
    margin-right: 0.4em;
}

blockquote p {
    font-family: 'open_sansregular';
    font-size: 20px;
    line-height: 32px;
    display: inline;
}

/* single post */

.single-content {
    padding-right: 35px;
}

.single-content .post-thumb {
    margin: 0;
}

.single-content .post-thumb img {
    width: 100%;
}

.single-content .post-title {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 42px;
}

.single-content .post-title:after {
    content: "";
    background-image: url("src/assets/images/section-title.png");

    position: absolute;
    bottom: 0;
    height: 3px;
    background-size: 50px;
    width: 80px;
    background-repeat: no-repeat;
    left: 0;
}

.single-content .post-meta {
    margin: 18px 0px 20px;
    border-bottom: 1px solid #dddddd;
    padding: 0 0 15px 0;
}

.single-content .post-meta li {
    position: relative;
    float: left;
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0 0 0 20px;
    font-size: 14px;
}

.single-content .post-meta li:first-child {
    margin: 0;
    padding: 0;
}

.single-content .post-meta li:before {
    content: '';
    width: 1px;
    height: 15px;
    background: #ddd;
    position: absolute;
    left: 0;
    top: 3px;
}

.post-text:after {
    clear: both;
    content: " ";
    display: table;
}

.post-text .wp-block-image:after {
    clear: both;
    content: " ";
    display: table;
}

p.post-nav-links {
    clear: both;
}

.meta-bottom {
    clear: both;
}

.tag-wrapper {
    margin: 20px 0 30px;
    padding: 15px;
    background-color: #f2f2f2;
    border-left: 4px solid #0f2c6b;
}

.tag-wrapper i {
    font-size: 18px;
    margin-right: 10px;
    position: relative;
    top: 3px;
}

.tag-wrapper a {
    font-size: 14px;
}

.pagination span.current {
    font-family: 'open_sansbold';
    display: inline-block;
    padding: 10px 15px;
    margin: 0 5px;
    font-size: 16px;
    border-radius: 3px;
    border: 2px solid #0f2c6b;
    background-color: transparent;
    color: #0f2c6b;
}

.pagination a {
    font-family: 'open_sansbold';
    display: inline-block;
    padding: 10px 15px;
    margin: 0 5px;
    font-size: 16px;
    border-radius: 3px;
    border: 2px solid #0f2c6b;
    background-color: #0f2c6b;
    color: #ffffff;
}

.pagination a:hover {
    border: 2px solid #ffcf06;
    background-color: #ffcf06;
    color: #0f2c6b;
}

/* author */

.author-wrapper {
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #dddddd;
}

.author-ava {
    float: left;
    margin-right: 20px;
}

.author-ava img {
    border-radius: 100%;
    margin: 0 auto;
}

.author-context {
    float: left;
    width: 80%;
}

.author-context .author-name {
    float: none;
    font-size: 15px;
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.user-social {
    list-style: none;
    padding: 0;
}

.user-social li {
    display: inline-block;
    margin-right: 5px;
}

.slogan-title,
.slogan-button {
    display: inline;
}

.single-service .post-thumb {
    margin-bottom: 20px;
}

.slogan-button {
    text-align: right;
}

.slogan-button a.button {
    margin: 0;
}

.slogan-button a.button:hover {
    background-color: #0f2c6b;
    border-color: 1px solid #0f2c6b;
    color: #ffffff;
    border-radius: 3px;
}


/*-----------------------------------------------------------------------------------*/

/*  8. CASE STUDIES PAGE
/*-----------------------------------------------------------------------------------*/

.project-page .project-item .project-post-wrap {
    padding: 30px;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -ms-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
}

.project-page .project-item:hover .project-post-wrap {
    -webkit-box-shadow: 0px 0px 30px 5px rgba(153, 153, 153, 0.15);
    -moz-box-shadow: 0px 0px 30px 5px rgba(153, 153, 153, 0.15);
    box-shadow: 0px 0px 30px 5px rgba(153, 153, 153, 0.15);
}

.project-post-wrap .title {
    position: relative;
    padding: 20px 0;
    margin: 0;
}

.project-post-wrap .title:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    width: 10%;
    background-color: #ffcf06;
}

.project-post-wrap .view-more a {
    padding: 10px 30px;
    background-color: #0f2c6b;
    color: #ffffff;
    text-transform: uppercase;
    line-height: 45px;
    font-size: 12px;
    border-radius: 5px;
}

.view-more a:hover {
    background-color: #ffcf06;
    color: #0f2c6b;
}

/* single case */

.single-project .post-thumb {
    margin-bottom: 20px;
}

.single-project .content-bottom {
    margin-top: 30px;
}

.faq-project {
    width: 50%;
    float: left;
    padding-right: 15px;
}

.team-project {
    width: 50%;
    float: left;
    padding-left: 15px;
}

.team-slider {
    position: relative;
}

.team-project .flexslider .slides img {
    width: auto;
    margin: 0 auto;
}

.team-text {
    background-color: #0f2c6b;
    padding: 4% 8%;
    color: #ffffff;
}

.team-text h4 {
    margin-bottom: 10px;
}

.team-slider .flex-direction-nav a {
    color: #ffffff;
    opacity: 1;
    text-align: center;
    bottom: 0;
    width: 60px;
    height: 85px;
    right: 0;
    top: inherit;
}

.team-slider .flex-direction-nav a:before {
    font-family: "finance" !important;
    line-height: 85px;
    font-size: 28px;
    color: #ffffff;
}

.team-slider .flex-direction-nav a.flex-next:before {
    content: "\69";
}

.team-slider .flex-direction-nav a.flex-prev:before {
    content: "\68";
}

.team-slider .flexslider:hover .flex-direction-nav .flex-next {
    right: 0;
}

.team-slider .flexslider .flex-direction-nav .flex-prev,
.team-slider .flexslider:hover .flex-direction-nav .flex-prev {
    right: 60px;
    left: inherit;
}

/* widget contact */

.sidebar-contact {
    background-color: #0f2c6b;
    padding: 30px 20px;
}

.sidebar-contact h3 {
    color: #ffffff;
    font-size: 20px;
    font-size: 2.0rem;
}

.sidebar-contact p {
    color: #ffffff;
    margin-bottom: 0;
}

.blog-sidebar .widget {
    position: relative;
    margin-bottom: 40px;
}

.blog-sidebar .widget .wp-block-group__inner-container {
    padding: 0;
    margin-bottom: 0;
}

.blog-sidebar .widget .wp-block-group__inner-container>ol {
    padding-left: 0;
}

.blog-sidebar .widget .heading-block h4 {
    color: #333333;
    margin: 0;
}

.blog-sidebar .widget .heading-block h4 {
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.blog-sidebar .widget .heading-block h4:after {
    content: "";
    background-image: url("src/assets/images/section-title.png");

    position: absolute;
    bottom: 0;
    height: 3px;
    background-size: 50px;
    width: 80px;
    background-repeat: no-repeat;
    left: 0;
}

.blog-sidebar .widget ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.blog-sidebar .widget ul li {
    border-bottom: 2px solid #ffffff;
    background-color: #f2f2f2;
    padding: 10px 15px;
}

.sidebar .widget ul,
.sidebar .widget ul.children,
.sidebar .widget ul.sub-menu {
    padding: 0;
    list-style: none;
}

.sidebar .widget ul.children li,
.sidebar .widget ul.sub-menu li {
    padding-left: 8px;
    padding-right: 5px;
    border: none;
    padding-bottom: 0;
}

.blog-sidebar .widget.widget_calendar {
    padding: 0;
    max-width: 100%
}

.widget_calendar table {
    max-width: 100%;
}

.collapse.in {
    display: none;
}

.collapse.show {
    visibility: visible;
}</style>