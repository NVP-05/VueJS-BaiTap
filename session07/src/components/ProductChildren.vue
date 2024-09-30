<template>
  <div>
    <h2>-------- Children Component --------</h2>
    <p>Children Company: {{ company }}</p>
  </div>
</template>

<script setup>
defineProps({
  company: {
    type: String,
    required: true
  }
});
</script>
