<template>
  <div class="registration-form">
    <div class="card">
      <div class="card-header">
        Registrierung
      </div>
      <div class="card-body">
        <form @submit.prevent="register">
          <InputField label="E-Mail:" type="email" inputId="email" v-model="email" />
          <InputField label="Passwort:" type="password" inputId="password" v-model="password" />
          <RegisterButton label="Registrieren" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from './InputField.vue';
import RegisterButton from './RegisterButton.vue';
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
  const formData = {
    email: this.email,
    password: this.password
  };

  axios.post('http://localhost:8080/api/registrieren', formData)
    .then(response => {
      console.log(response.data);
      // Hier können Sie die Server-Antwort verarbeiten
    })
    .catch(error => {
      console.error(error);
      // Hier können Sie Fehlerbehandlung durchführen
    });
}
  },
  components: {
    InputField,
    RegisterButton
  }
};
</script>

<style scoped>
/* Styling für die Registrierungsformular-Komponente */
.registration-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
