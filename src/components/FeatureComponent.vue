<script setup>
</script>

<template>
    <div class="feature-section clearfix" style="padding:100px 0;">
        <div class="container">
            <h2 class="section-title">Nos Valeurs</h2>
            
            <div class="features row clearfix">
                <div class="feature col-md-6">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="feature-desc">
                            <h4 class="title">Excellency</h4>
                            <p>Excellency est la marque de fabrique de notre société, représentant notre engagement inébranlable envers une qualité supérieure et un service exceptionnel.</p>
                        </div>
                    </div>
                </div>
            
                <div class="feature col-md-6">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-shield"></i>
                        </div>
                        <div class="feature-desc">
                            <h4 class="title">Security</h4>
                            <p>La sécurité est au cœur des valeurs de notre société, garantissant la protection la plus totale et la confiance de nos clients.</p>
                        </div>
                    </div>
                </div>
            
                <div class="feature col-md-6">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-face-smile"></i>
                        </div>
                        <div class="feature-desc">
                            <h5 class="title">Integrity</h5>
                            <p>L'intégrité définit l'éthique de notre société, guidant nos actions avec honnêteté, transparence et normes éthiques.</p>
                        </div>
                    </div>
                </div>
            
                <div class="feature col-md-6">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-handshake"></i>
                        </div>
                        <div class="feature-desc">
                            <h5 class="title">Ethics</h5>
                            <p>L'éthique est la fondation de notre société, assurant que chaque décision et action reflète notre engagement envers les principes moraux et la responsabilité sociale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>

.feature-section {
    background-image: url("src/assets/images/background.jpg") ;
    background-size: cover ;
}

.feature .feature-content {
    border: 2px solid #0f2c6b;
    padding: 20px;
    border-radius: 5px;
    margin-top: 30px;
}

.feature .feature-pic {
    float: left;
    margin-right: 15px;
    border: 2px solid #0f2c6b;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    text-align: center;
    line-height: 89px;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.feature:hover .feature-pic {
    border: 2px solid #ffcf06;
    background-color: #ffcf06;
}

.feature .feature-pic i {
    font-size: 32px;
    font-size: 3.2rem;
    color: #0f2c6b;
}

.feature .feature-desc {
    overflow: hidden;
}

.feature .feature-desc h5 {
    font-size: 18px;
    font-size: 1.8rem;
    line-height: 24px;
    margin-bottom: 10px;
    font-weight: 500;
}

.feature .feature-desc p {
    margin-bottom: 0;
    font-size: 1.5rem;
    
}
</style>