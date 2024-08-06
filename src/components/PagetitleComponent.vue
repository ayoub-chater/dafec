<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';
import { useServices } from '../store/services';

const store = useServices();
const route = useRoute();

const currentPath = ref(route.path.slice(1));

const formattedRoute = computed(() => {
    return currentPath.value.charAt(0).toUpperCase() + currentPath.value.slice(1);
    });

    watch(
    () => route.path,
    (newPath) => {
        currentPath.value = newPath.slice(1);
        console.log(currentPath.value);
    }
    );

    </script>

    <template>
    <div class="page-title">
        <div class="title-wrap container">
        <div class="left-side">
            <h3 class="wow fadeInUp animated" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s;">
            {{ formattedRoute }}
            </h3>
            
            <p class="wow fadeIn animated" data-wow-duration="1s" data-wow-delay="0.7s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.7s;">
            Projet de partenariat "Pay for Success"
            </p>
        </div>

        <div class="right-side">
            <div class="breadcrumbs">
            <p>
                Vous êtes ici : 
                <span>
                <router-link to="/">Accueil / </router-link>
                </span>
                <span class="arrow">
                <i class="icon-finance-arrow-right"></i>
                </span>
                <span>{{ formattedRoute }}</span>
            </p>
            </div>
        </div>
        </div>
    </div>
</template>




<style>
.page-title {
    background-color: #ffcf06;
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
    color: #0f2c6b;
    font-size: 32px;
    font-size: 3.2rem;
}

.page-title p {
    margin: 0;
    color: #0f2c6b;
    font-style: italic;
}
</style>