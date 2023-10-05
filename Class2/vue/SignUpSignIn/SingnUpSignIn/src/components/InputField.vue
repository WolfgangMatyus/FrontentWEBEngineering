<template>
    <div class="form-group">
      <label :for="inputId">{{ label }}</label>
      <input :type="type" :id="inputId" v-bind="value" class="form-control" required>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      type: String,
      inputId: String,
      value: String
    }
  };
  </script>
  