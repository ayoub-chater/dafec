<script setup>
import { ref } from "vue";
import { useContact } from "../store/contact";

const contactStore = useContact();
const message = ref(null);

const form = ref({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
});

const sendMail = async () => {
    await contactStore.sendMail(form.value);
    message.value = contactStore.message;
    console.log(message.value);
};
const hideModal = () => {
    message.value = !message.value;
    form.value.name = "";
    form.value.email = "";
    form.value.phone = "";
    form.value.subject = "";
    form.value.message = "";
};
</script>

<template>
    <div class="form-section clearfix" style="padding:80px 0; background-color:#0f2c6b">
        <div class="container">
            <div class="row row-flex">
                <div class="form-html vertical-center col-md-6" >
                    <img src="../assets/images/logo_white.png" alt="logo-white">
                    <h2>Demandez une consultation gratuite</h2>
                    <p>Souhaitez-vous parler à l'un de nos conseillers financiers par téléphone ? Soumettez simplement vos
                        coordonnées et nous vous contacterons sous peu. Vous pouvez également nous envoyer un e-mail si vous
                        préférez.</p>
                </div>

                <div class="the-form col-md-6">
                    <div class="wpcf7 js" id="wpcf7-f1574-o1" lang="en-US" dir="ltr">
                        <div class="screen-reader-response">
                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                            <ul></ul>
                        </div>
                        <form @submit.prevent="sendMail" method="post" class="form init">
                            <p class="">
                                <span class="form-control-wrap">
                                    <input v-model="form.name" size="40" maxlength="400"
                                        class="-form-control text validates-as-required" placeholder="Votre Nom" type="text"
                                        name="name" />
                                </span>
                            </p>
                            <p class="telephone">
                                <span class="form-control-wrap">
                                    <input v-model="form.phone" size="40" maxlength="400" class="-form-control -text"
                                        aria-invalid="false" placeholder="Votre telephone" type="text" name="phone" />
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
        </div>
    </div>
</template>


<style>

.row-flex {
    display: flex ;
    align-items: center ;
}

.form-alert {
    background-color: #ffcf06;
    color: #375084;
    margin-top: 10px;
}

.form-html img {
    width: 260px;
}

.form-html h2 {
    margin-top: 50px;
    color: #ffffff;
}

.form-html p {
    color: #ffffff;
}

.the-form form p.name,
.the-form form p.email {
    width: 49%;
    display: inline-block;
}

.the-form form p.name {
    margin-right: 6.25px;
}

.the-form form p.submit {
    margin: 0;
}

.the-form form p.submit input {
    display: inline-block;
    width: auto;
    height: auto;
    font-family: 'open_sansbold';
    padding: 10px 20px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    border-radius: 3px;
    color: #ffffff;
    border: 2px solid #ffffff;
    background-color: transparent;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.the-form form p.submit input:hover {
    color: #0f2c6b;
    border: 2px solid #ffcf06;
    background-color: #ffcf06;
}
</style>