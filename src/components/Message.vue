<template>
    <li style="padding-top: 10px" class="message">{{message}}</li>
</template>

<script>
  export default {
    props: {
      message: String,
      author: {
        type: String,
        default: 'Paco'
      }
    }
  }
</script>
