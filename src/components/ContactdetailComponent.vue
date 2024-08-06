<script setup>
import { ref } from "vue";
import { useContact } from "../store/contact";

const contactStore = useContact();
const message = ref(null);

const form = ref({
    name: "",
    phone: "",
});

const sendMail = async () => {
    await contactStore.sendMail(form.value);
    message.value = contactStore.message;
    console.log(message.value);
};
const hideModal = () => {
    message.value = !message.value;
    form.value.name = "";
    form.value.phone = "";
};
</script>

<template>
    <div id="content" class="clearfix">

        <div class="contact-form-section">
            <div class="container">
                <div class="row">
                    <!-- CONTACT FORM START
            ============================================= -->
                    <div class="contact-form col-md-6">
                        <div class="form wow fadeIn animated" style="visibility: visible">
                            <div>
                                <form @submit.prevent="sendMail" method="post" class="form init">
                                    <p class="telephone">
                                        <span class="-form-control-wrap">
                                            <input v-model="form.name" size="40" maxlength="400"
                                                class="-form-control text validates-as-required" placeholder="Votre Nom"
                                                type="text" name="name" />
                                        </span>
                                    </p>
                                    <p class="telephone">
                                        <span class="form-control-wrap">
                                            <input v-model="form.phone" size="40" maxlength="400"
                                                class="-form-control -text" aria-invalid="false"
                                                placeholder="Votre telephone" type="text" name="phone" />
                                        </span>
                                    </p>

                                    <input class="-form-control submit" type="submit" value="Envoyer" />
                                </form>
                                <div class="alert alert-primary alert-dismissible contact-alert" v-if="message">
                                    <button type="button" class="close" data-dismiss="alert" @click="hideModal">
                                        &times;
                                    </button>
                                    {{ contactStore.message }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- CONTACT FORM END -->

                    <div class="contact-details col-md-6">

                        <div class="contact-text clearfix">
                            <div class="contact-author-details">
                                <div class="telephone">
                                    <h4 class="title HA">Telephone : </h4> <span>+212 662 34 53 30</span>
                                </div>
                                <div class="email-contact">
                                    <h4 class="title HA">Email : </h4> <span>contact@dafec.ma</span>
                                </div>
                                <div class="location">
                                    <h4 class="title HA">Adresse : </h4> <span>Résidence EDEN CALIFORNIE 3 Etg n° 9, Bd HAIFA. Casablanca</span>
                                </div>
                                <div class="text-section">
                                    <h4 class="title HA">Heures : </h4> <span>Lundi - Vendredi   ( 9h00 à 18h00 ) </span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>

.HA {
    display: inline-block;
}

#content {
    padding: 80px 0;
}

#content.no-padding {
    padding: 0;
}

.contact-alert {
    background-color: #ffcf06;
    color: #375084;
    margin-top: 10px;
}

.contact-form form p.name,
.contact-form form p.email {
    width: 49%;
    display: inline-block;
    margin-left: 5px;
}
</style>