<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  max-width: 400px;
  margin: 0 auto;
}

.card-header {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
}

.card-body {
  margin-bottom: 12px;
}

.card-footer {
  text-align: right;
}
</style>
