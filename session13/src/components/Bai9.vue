<template>
  <div className="w-96 ">
    <form>
    <v-text-field
      label="Name"
    ></v-text-field>

    <v-text-field
      label="Company"
    ></v-text-field>

    <v-text-field
      label="E-mail"
    ></v-text-field>

    <v-text-field
      :counter="10"
      label="Phone No"
    ></v-text-field>

    <v-text-field
      label="Message"
      value=""
    ></v-text-field>

    <v-btn color="primary">
      Send
    </v-btn>
  </form>
  </div>
</template>
<script setup>
  
</script>