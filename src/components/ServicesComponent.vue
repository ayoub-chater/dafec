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
	<div id="content" class="service-page clearfix">
	<div class="container">
		<div class="row">
		<div v-for="item in services" :key="item.id" class="service-item col-md-4" @click="viewServiceDetails(item)">
			<div class="service-post-wrap">
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
				<i class="fa-solid fa-plus"></i><router-link :to="`/services/${item.name}`">Read More</router-link>
			</div>
			</div>
		</div>
		</div>
	</div>
	</div>
</template>

<style>

.service-page {
    background-image: url("src/assets/images/background.jpg") ;
    background-size: cover ;
}

#content .service-page .container {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

.service-item {
flex: 1 1 30%;
}

.service-page .service-post-wrap {
background: #fff; 
padding: 10px;
border: 1px solid #ddd; 
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>