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

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Registrierungslogik hier implementieren
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

Jetzt haben Sie das Registrierungsformular in einzelne Komponenten aufgeteilt, eine für das Input-Feld mit Label (InputField.vue) und eine für den Button (RegisterButton.vue), und sie in Ihrer RegistrierungsFormular.vue-Komponente verwendet. Stellen Sie sicher, dass Sie die neuen Komponenten im gleichen Verzeichnis wie RegistrierungsFormular.vue erstellen und importieren.
