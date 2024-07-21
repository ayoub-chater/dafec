<script setup>
import { ref } from "vue";

const sliderClicked = ref(false);

function clickSlider() {
  sliderClicked.value = !sliderClicked.value;
  console.log(sliderClicked.value);
}
</script>

<template>
  <div
    class="review-section clearfix"
    style="padding: 100px 0; background-color: #034153"
  >
    <div class="container">
      <div class="row">
        <div class="counter-review col-md-6">
          <h2 class="section-title white">Why People Choose Us</h2>

          <div class="review-text">
            <p>
              Now residence dashwoods she excellent you. Shade being under his
              bed her. Much read on as draw.
            </p>
          </div>

          <!-- the-counter -->
          <div class="the-counter row clearfix">
            <div class="counter-item col-md-6">
              <div class="counter-pic">
                <i class="icon-finance-timer"></i>
              </div>

              <div class="counter-text">
                <p class="counter-value">41265</p>
                <p class="counter-title">Hours in work</p>
              </div>
            </div>
            <div class="counter-item col-md-6">
              <div class="counter-pic">
                <i class="icon-finance-coffee"></i>
              </div>

              <div class="counter-text">
                <p class="counter-value">2565</p>
                <p class="counter-title">Cups of coffee</p>
              </div>
            </div>
            <div class="counter-item col-md-6">
              <div class="counter-pic">
                <i class="icon-finance-crown"></i>
              </div>

              <div class="counter-text">
                <p class="counter-value">3675</p>
                <p class="counter-title">Happy clients</p>
              </div>
            </div>
            <div class="counter-item col-md-6">
              <div class="counter-pic">
                <i class="icon-finance-trophy"></i>
              </div>

              <div class="counter-text">
                <p class="counter-value">4834</p>
                <p class="counter-title">Total projects</p>
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
					  animation: fadeIn 3s ease-in;
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
                          Image. And lesser. Won’t divided. His won’t lesser us
                          their likeness without sixth is light own. Divided
                          Gathered created third tree after grass. Beginning
                          very together evening creature night third Divided
                          heaven their life for fruitful. First our.
                        </p>

                        <h4>Mohamed Habaza</h4>
                        <span class="testi-job">CO Founder</span>
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
					  animation: fadeIn 1s ease;
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
                          Gregg is an outstanding Washington tax attorney. He is
                          responsive, thorough, and creative in his advice, and
                          he is also genuinely collegial with others. He is a
                          valued advisor to AOL and other Time Warner divisions.
                        </p>

                        <h4>Rian Adam</h4>
                        <span class="testi-job">Managing Director</span>
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
  background-color: #fed100;
  color: #034153;
  opacity: 1;
  text-align: center;
  bottom: 10px;
  width: 50px;
  height: 50px;
  right: 8px;
  top: 29.3em;
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
