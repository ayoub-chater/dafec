<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useServices } from '../store/services';

const store = useServices();
const services = store.services;

function viewServiceDetails(service) {
	store.selectService(service.id);
}

</script>

<template>
    <div class="service-section clearfix" style="padding:100px 0; background-color:#f5f5f5;">
		<div class="container">
			<div class="row">

				<div class="section-header clearfix">
					<div class="section-detail col-md-8">
						<h2 class="section-title">Nos Meilleurs Services</h2>
						<div class="section-text">
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
						</div>
					</div>
					<div class="section-button col-md-4 text-right vertical-center" style="top: 41px;">
						<a href="https://financetheme.themesawesome.com/services/" class="button button-normal">Voir Tous les Services</a>
					</div>
				</div>

				<div class="service-post clearfix">
					<div class="service-post-wrap">
						<div v-for="(item) in services.slice(0, 3)" :key="item.id" class="service-item col-md-4">
							<div class="post-thumb">
								<router-link :to="`/services/${item.name}`">
									<img width="360" height="180" :src="item.img" class="attachment-finance-service-loop size-finance-service-loop wp-post-image" alt="" decoding="async" />
								</router-link>
							</div><!-- thumbnail-->
							<div class="loop-content">
								<router-link :to="`/services/${item.name}`">
									<h4 class="title">{{ item.name }}</h4>
								</router-link>
								<p class="excerpt">{{ item.description }}</p>
							</div>
							<div class="view-more">
								<i class="fa-solid fa-plus"></i><router-link :to="`/services/${item.name}`">Lire Plus</router-link>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>



<style>

.service-section {
    background-image: url("src/assets/images/background.jpg") ;
    background-size: cover ;
}

.service-section .service-post {
    margin-top: 40px;
}

.service-page {
    background-color: #f2f2f2;
}

.service-item {
    margin-bottom: 30px;
}

.service-item .view-more {
    float: right;
    margin-top: 25px;
    overflow: hidden;
}

.service-item .view-more i {
    padding: 16px;
    background-color: #375084;
    color: #ffffff;
    font-size: 13px;
}

.service-item .view-more a {
    padding: 15px 20px;
    background-color: #0f2c6b;
    color: #ffffff;
    text-transform: uppercase;
    line-height: 45px;
    font-size: 13px;
    letter-spacing: 0.01em;
}

span.arrow {
    position: relative;
    vertical-align: middle;
    margin-top: 10px;
}

/* single service */

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
</style>