import axios from "axios";
import { defineStore } from "pinia";


  axios.withCredentials = true,
  axios.withXSRFToken = true
  

export const useContact = defineStore('contact' ,{
    state: () => ({
        form: {
            name: '',
            phone:''
        },
        message : ''
    }),
    actions: {
      async getToken(){
          axios.get('http://localhost:8000/sanctum/csrf-cookie');
      },
      async sendMail(form){
        const res = await axios.post('http://localhost:8000/api/contact' ,form,{
            headers: {
              'Content-Type': 'application/json',
            },
          })
        this.message = res.data.message;
        // console.log(this.message);
      },
      async connectToBackEnd(){
        const res = await axios.get('http://localhost:8000/')
        console.log(res.data);
      }
    }
})