<script setup>
import { onMounted, ref } from "vue";

const sliderClicked = ref(false);
const scrollTarget = ref(null);

function clickSlider() {
  sliderClicked.value = !sliderClicked.value;
  console.log(sliderClicked.value);
}


onMounted(() => {

  const counterValues = ref(document.querySelectorAll('.counter-value'));
  const totalDuration = 2000;

  counterValues.value.forEach(value => {
    let startVal = 0;
    let endVal = parseInt(value.getAttribute('data-val'));
    let increment = endVal / totalDuration; 

    let animateCounter = () => {
      let currentValue = 0;
      let startTime = performance.now();
     

      let updateCounter = (currentTime) => {
        let elapsedTime = currentTime - startTime;
        currentValue = Math.min(endVal, Math.floor(increment * elapsedTime));
        value.textContent = currentValue;

        if (currentValue < endVal) {
          requestAnimationFrame(updateCounter);
        } else {
          value.textContent = endVal; 
        }
      };

      requestAnimationFrame(updateCounter);
    };

    animateCounter();
    
    

  });
});
</script>

<template>
  <div
    id="review"
    class="review-section clearfix " ref="scrollTarget"
    style="padding: 100px 0; background-color: #0f2c6b"
  >
    <div class="container">
      <div class="row">
        <div class="counter-review col-md-6">
          <h2 class="section-title white">Avis clients</h2>

          <div class="review-text">
            <p>

            </p>
          </div>

          <!-- the-counter -->
          <div class="the-counter row clearfix">
            <div class="counter-item col-md-6">
              <div class="counter-pic">
                <i class="fa-regular fa-clock"></i>
              </div>

              <div class="counter-text">
                <p class="counter-value" data-val="41265">0000</p>
                <p class="counter-title">Heures de travail</p>
              </div>
            </div>
            <div class="counter-item col-md-6">
              <div class="counter-pic">
                <i class="fa-solid fa-mug-hot"></i>
              </div>

              <div class="counter-text">
                <p class="counter-value" data-val="1565">0000</p>
                <p class="counter-title">Tasses de café</p>
              </div>
            </div>
            <div class="counter-item col-md-6">
              <div class="counter-pic">
                <i class="fa-solid fa-crown"></i>
              </div>

              <div class="counter-text">
                <p class="counter-value" data-val="675">0000</p>
                <p class="counter-title">Des clients satisfaits</p>
              </div>
            </div>
            <div class="counter-item col-md-6">
              <div class="counter-pic">
                <i class="fa-solid fa-trophy"></i>
              </div>

              <div class="counter-text">
                <p class="counter-value" data-val='834'>0000</p>
                <p class="counter-title">Projets totaux</p>
              </div>
            </div>
          </div>
          <!-- the-counter end -->
        </div>

        <div class="the-testimonial col-md-6">
          <div
            class="testimonial-slider wow fadeIn animated"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
            style="
              visibility: visible;
              animation-duration: 2s;
              animation-delay: 0.3s;
            "
          >
            <div class="flexslider clearfix">
              <transition name="fade" mode="out-in">
                <ul class="slides" key="sliderClicked.value">
                  <li
                    style="
                      width: 100%;
                      float: left;
                      margin-right: -100%;
                      position: relative;
                      opacity: 1;
                      display: block;
                      z-index: 2;
                      animation: fadeIn 1.5s ease-in;
                    "
                    class="flex-active-slide"
                    v-show="!sliderClicked"
					
                  >
                    <div
                      class="testimonial-content"
                    >
                      <div class="testi-author-img">
                        <img
                          width="140"
                          height="140"
                          src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/avatar-3.jpg?x12902"
                          class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                          alt=""
                          decoding="async"
                          srcset="
                            https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/avatar-3.jpg?x12902       140w,
                            https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/avatar-3-60x60.jpg?x12902  60w
                          "
                          sizes="(max-width: 140px) 100vw, 140px"
                          draggable="false"
                        />
                      </div>

                      <div class="testimonial-text">
                        <i class="icon-finance-quote"></i>
                        <p>
                          L'agence Dafec est très professionnelle. Ils ont été très disponibles, à l'écoute et réactifs. Je les recommande vivement.
                        </p>

                        <h4>Khaled ch</h4>
                        <span class="testi-job">Client</span>
                      </div>
                    </div>
                  </li>

                  <li
                    style="
                      width: 100%;
                      float: left;
                      margin-right: -100%;
                      position: relative;
                      opacity: 1;
                      display: block;
                      z-index: 1;
                      animation: fadeIn 1.5s ease;
                    "
                    class="flex-active-slide"
                    v-show="sliderClicked"
                    
                  >
                    <div
                      class="testimonial-content"
                    >
                      <div class="testi-author-img">
                        <img
                          width="140"
                          height="140"
                          src="https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/avatar-4.jpg?x12902"
                          class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                          alt=""
                          decoding="async"
                          srcset="
                            https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/avatar-4.jpg?x12902       140w,
                            https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/avatar-4-60x60.jpg?x12902  60w
                          "
                          sizes="(max-width: 140px) 100vw, 140px"
                          draggable="false"
                        />
                      </div>

                      <div class="testimonial-text">
                        <i class="icon-finance-quote"></i>
                        <p>
                          Si vous voulez un service professionnel et rapide à un prix très raisonnable, ne regardez pas plus loin. Dafec vont dépasser vos attentes.👍
                        </p>

                        <h4>Said Saili</h4>
                        <span class="testi-job">Client</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </transition>
              <ul class="flex-direction-nav"  >
                <li class="flex-nav-prev">
                  <a class="flex-prev" @click="clickSlider"></a>
                </li>
                <li class="flex-nav-next">
                  <a class="flex-next" @click="clickSlider"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.counter-item {
    margin-top: 20px;
}

.counter-text {
    text-align: right;
    margin-top: 10px;
    padding-right: 30px;
}

.counter-value {
    font-family: 'fira_sansbold';
    font-size: 40px;
    font-size: 4rem;
    margin-bottom: 10px;
    line-height: 30px;
    color: #ffffff;
}

.counter-text .counter-title {
    font-family: 'open_sansbold';
    color: #ffffff;
}


.counter-pic {
    float: left;
    text-align: center;
    line-height: 85px;
    height: 75px;
    width: 75px;
    background-color: #ffffff;
    border-radius: 3px;
    -webkit-transition: all .35s ease;
    -moz-transition: all .35s ease;
    -ms-transition: all .35s ease;
    -o-transition: all .35s ease;
    transition: all .35s ease;
}

.counter-item:hover .counter-pic {
    background-color: #ffcf06;
    border-radius: 3px;
}

.counter-pic i {
    font-size: 35px;
    font-size: 3.5rem;
}


/* testimonial section */

.testimonial-content {
  position: relative;
  padding-top: 80px;
}

.testimonial-content .testimonial-text {
  background-color: #ffffff;
  padding: 90px 50px 30px 30px;
  position: relative;
}

.testimonial-text i {
  font-size: 70px;
  position: absolute;
  top: 15px;
  left: 25px;
  color: #f2f2f2;
}

.testimonial-text h4 {
  margin: 0;
}

.testi-author-img {
  width: 150px;
  position: absolute;
  top: 0;
  right: 50px;
  z-index: 100;
  border: 4px solid #ffffff;
  border-radius: 3px;
}

.testimonial-slider ul.slides {
  padding-bottom: 60px;
}

.testimonial-slider .flex-direction-nav a {
  background-color: #ffcf06;
  color: #0f2c6b;
  opacity: 1;
  text-align: center;
  bottom: 10px;
  width: 50px;
  height: 50px;
  right: 15px;
  top: 98%;
}

.testimonial-slider .flex-direction-nav a:before {
  font-family: "finance" !important;
  line-height: 50px;
  font-size: 28px;
}

.testimonial-slider .flex-direction-nav a.flex-next:before {
  content: "\203A";
  font-size: 4rem;
}

.testimonial-slider .flex-direction-nav a.flex-prev:before {
  content: "\2039";
  font-size: 4rem;
}

/* .testimonial-slider .flexslider:hover .flex-direction-nav .flex-next {
  right: 0;
} */

.testimonial-slider .flexslider .flex-direction-nav .flex-prev,
.testimonial-slider .flex-direction-nav .flex-prev {
  right: 58px;
  left: inherit;
}

/* next and previous buttons */
.flex-direction-nav {
  height: 0;
  list-style-type: none;
}
.flex-direction-nav a {
  text-decoration: none;
  display: block;
  width: 40px;
  height: 40px;
  margin: -20px 0 0;
  position: absolute;
  top: 50%;
  z-index: 10;
  overflow: hidden;
  opacity: 0;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);
}

.flex-direction-nav .flex-prev {
  left: -50px;
}
.flex-direction-nav .flex-next {
  right: -50px;
  text-align: right;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50%{
	opacity: .7;
  }
  100% {
    opacity: 1;
  }
}

</style>