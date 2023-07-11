<template>
  <div>
    <slot class="h-full w-full" />
    <div class="footer">
    <a href="/about">About</a>
    <a href="https://github.com/KristinaVucina/night-club-rezervacije" target="_blank">GitHub</a>
    <a href="https://docs.google.com/document/u/0/d/1cisyedasqv7j1Lbp_lmooxYLxAvYZiwF/edit?dls=true&usp=gmail_attachment_preview" target="_blank"
                   >Link za viziju</a>
  </div>
  </div>
</template>

<script lang="ts" setup>
// const visible = ref(true);
// const items = ref({
//   start: [
//     {
//       label: "Klijenti",
//       icon: "pi pi-fw pi-users",
//       to: "/",
//     },
//   ],
//   end: [
//     {
//       label: "Odjava",
//       icon: "",
//       to: "",
//     },
//   ],
// });
</script>

<style scoped>
    /* CSS styles for the footer */
    .footer {
      background-color: #f2f2f2;
      padding: 10px;
      text-align: center;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    
    .footer a {
      color: #333;
      text-decoration: none;
      margin: 0 10px;
    }
</style>
