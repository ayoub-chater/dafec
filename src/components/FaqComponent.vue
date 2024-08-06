<script setup>

</script>

<template>
    <div class="faq-section clearfix" style="padding:50px 0;">
		<div class="container">

							<h2 class="section-title">
								Responsabilité sociale et environnementale de notre entreprise				</h2>
			
			<div class="row roww">
				<div class="the-faq col-md-6">
					<div class="pane-group" id="accordion" role="tablist" aria-multiselectable="true">
										
					<div class="pane panel-default">

						<a data-toggle="collapse" data-parent="#accordion" href="#collapse-1838" aria-expanded="false" aria-controls="collapse-1838" class="collapsed">
							<div class="panel-heading" role="tab" id="heading-1838">
								<h4 class="panel-title">Notre Cabinet s'engage à:</h4>
							</div>
						</a>

						<div id="collapse-1838" class="panel-collapse in collapse" role="tabpanel" aria-labelledby="heading-1838" style="">
							<div class="panel-body">
								<p>Agir en faveur de l'environement en faisant grandir une communauté agisant dans le respect des valeurs humanistes.
</p>
							</div>
						</div>
					
					</div>

					</div>
				</div><!-- faq end -->

				<div class="faq-gallery col-md-6">
					
							<div class="flex-wrapper">
								<div id="slider" class="flexslider">
									<div class="slides">
																				<div style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;" class="flex-active-slide">
											<img src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/gallery2.jpg?x12902" alt="" draggable="false">  
										</div>
																				<div style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;" class="">
											<img src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/gallery3.jpg?x12902" alt="" draggable="false">  
										</div>
																				<div style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;" class="">
											<img src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/gallery1.jpg?x12902" alt="" draggable="false">  
										</div>
																			</div>
								<ul class="flex-direction-nav"></ul></div>
							</div>

					
				</div>
			</div>

		</div>
	</div>
</template>

<style>

.roww {
	align-items: center;
    display: flex;
	flex-wrap: wrap;
}

.faq-section {
    background-image: url("src/assets/images/background.jpg") ;
    background-size: cover ;
}

.faq-gallery .flex-direction-nav a {
    background-color: #ffcf06;
    color: #0f2c6b;
    opacity: 1;
    text-align: center;
    bottom: 0;
    width: 50px;
    height: 50px;
    right: 0;
    top: inherit;
}

.faq-gallery .flex-direction-nav a:before {
    font-family: "finance" !important;
    line-height: 50px;
    font-size: 28px;
}

.faq-gallery .flex-direction-nav a.flex-next:before {
    content: "\69";
}

.faq-gallery .flex-direction-nav a.flex-prev:before {
    content: "\68";
}

.faq-gallery .flexslider:hover .flex-direction-nav .flex-next {
    right: 0;
}

.faq-gallery .flexslider .flex-direction-nav .flex-prev,
.faq-gallery .flexslider:hover .flex-direction-nav .flex-prev {
    right: 50px;
    left: inherit;
}
</style>