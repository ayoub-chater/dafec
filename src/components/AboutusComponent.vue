<script setup>

</script>

<template>
    <div class="about-section clearfix" style="padding:100px 0;">
        <div class="container">
            <div class="row">
                
                <div class="about-images col-md-6">
                    <div class="about-image-wrap row clearfix">
                        <div class="about-image col-md-6">
                            <img src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/06/slide2-285x285.jpg?x12902" alt="image à propos">
                        </div>
                        <div class="about-image col-md-6">
                            <img src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/gallery2-285x285.jpg?x12902" alt="image à propos">
                        </div>
                        <div class="about-image col-md-6">
                            <img src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/gallery3-285x285.jpg?x12902" alt="image à propos">
                        </div>
                        <div class="about-image col-md-6">
                            <img src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/gallery1-285x285.jpg?x12902" alt="image à propos">
                        </div>
                    </div>
                </div>
                
                <div class="about-desc col-md-6">
                    <h2 class="section-title">
                        Notre Objectif
                    </h2>
                    <div class="about-text">
                        <p class="margin-bottom-25">DAFEC est un cabinet d'expertise comptable basé à Casablanca et inscrit à l'ordre des experts comptables de Casablanca et spécialisé dans les domaines de l'expertise comptable.3</p>
                        <h4 class="margin-bottom-25">DAFEC se démarque par:</h4>
                        <ul>
                            <li>- Des solutions inovantes et sur mesure (DAF extrenalisé ou de transition)</li>
                            <li class="width">- Des conseils fiscaux spécialisés tenant compte des complexités fiscales nationales et internationales</li>
                        </ul>    
                    </div>
                    <div class="about-button">
                        <a href="https://financetheme.themesawesome.com/contact/" class="button button-normal">
                            Contactez-nous
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
/* about section */

p {
    line-height: 2 ;
}

.margin-bottom-25 {
    margin-bottom: 25px;
}

@media (min-width: 992px) {
    .width {
        width: 650px ;
    }
}

.about-section {
    background-image: url("src/assets/images/background.jpg") ;
    background-size: cover ;
}

.about-section {
    background-color: #fafafa;
}

.about-images {
    padding-right: 45px;
}

.about-image {
    margin-bottom: 30px;
}

.about-image-wrap .about-image:nth-child(2),
.about-image-wrap .about-image:nth-child(4) {
    position: relative;
    top: -40px;
}

.about-text strong {
    font-family: 'open_sansbold';
    margin-bottom: 15px;
    display: block;
}

.about-text ul {
    list-style: none;
    padding: 0
}

.about-text ul li {
    margin-bottom: 15px;
}

.about-text ul li i {
    font-size: 18px;
    margin-right: 10px;
    vertical-align: middle;
    color: #0f2c6b;
}
</style>