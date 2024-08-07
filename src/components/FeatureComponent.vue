<script setup>
</script>

<template>
    <div class="feature-section clearfix" style="padding:100px 0;">
        <div class="container">
            <h2 class="section-title">Caractéristiques</h2>
            
            <div class="features row clearfix">
                <div class="feature col-md-4">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                        <div class="feature-desc">
                            <h5 class="title">Consulting en Transport & Logistique</h5>
                            <p>Maintenant résidence Dashwoods, elle vous est excellente. Ombre étant sous son lit. Beaucoup lire sur comme dessiner.</p>
                        </div>
                    </div>
                </div>
            
                <div class="feature col-md-4">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-plane-departure"></i>
                        </div>
                        <div class="feature-desc">
                            <h5 class="title">Consulting en Voyage et Aviation</h5>
                            <p>Maintenant résidence Dashwoods, elle vous est excellente. Ombre étant sous son lit. Beaucoup lire sur comme dessiner.</p>
                        </div>
                    </div>
                </div>
            
                <div class="feature col-md-4">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-briefcase"></i>
                        </div>
                        <div class="feature-desc">
                            <h5 class="title">Consulting en Services Financiers</h5>
                            <p>Maintenant résidence Dashwoods, elle vous est excellente. Ombre étant sous son lit. Beaucoup lire sur comme dessiner.</p>
                        </div>
                    </div>
                </div>
            
                <div class="feature col-md-4">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-chart-simple"></i>
                        </div>
                        <div class="feature-desc">
                            <h5 class="title">Consulting en Services aux Entreprises</h5>
                            <p>Maintenant résidence Dashwoods, elle vous est excellente. Ombre étant sous son lit. Beaucoup lire sur comme dessiner.</p>
                        </div>
                    </div>
                </div>
            
                <div class="feature col-md-4">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div class="feature-desc">
                            <h5 class="title">Consulting en Produits de Consommation</h5>
                            <p>Maintenant résidence Dashwoods, elle vous est excellente. Ombre étant sous son lit. Beaucoup lire sur comme dessiner.</p>
                        </div>
                    </div>
                </div>
            
                <div class="feature col-md-4">
                    <div class="feature-content">
                        <div class="feature-pic">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <div class="feature-desc">
                            <h5 class="title">Consulting en Énergie et Environnement</h5>
                            <p>Maintenant résidence Dashwoods, elle vous est excellente. Ombre étant sous son lit. Beaucoup lire sur comme dessiner.</p>
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
    line-height: 85px;
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