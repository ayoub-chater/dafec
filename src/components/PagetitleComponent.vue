<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = ref(useRoute().path.slice(1));
console.log(route.value)
</script>

<template>
    <div class="page-title">
			<div class="title-wrap container">
				<div class="left-side">
					<h3 class="wow fadeInUp animated" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s;">{{ route.charAt(0).toUpperCase() + route.slice(1) }}</h3>
					
										<p class="wow fadeIn animated" data-wow-duration="1s" data-wow-delay="0.7s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.7s;">Partnership Pay for Success project</p>
									</div>

				<div class="right-side">
					<div class="breadcrumbs"><p>You Are Here : <span><a href="https://financetheme.themesawesome.com/">            Home            </a></span><span class="arrow"><i class="icon-finance-arrow-right"></i></span><span>{{ route.charAt(0).toUpperCase() + route.slice(1) }}</span></p></div>				</div>
			</div>
		</div>
</template>

<style>
.page-title {
    background-color: #fed100;
    padding: 30px 0;
}

.page-title .left-side {
    float: left;
}

.page-title .right-side {
    float: right;
    margin-top: 20px;
}

.page-title h3 {
    margin-bottom: 5px;
    color: #034153;
    font-size: 32px;
    font-size: 3.2rem;
}

.page-title p {
    margin: 0;
    color: #034153;
    font-style: italic;
}
</style>