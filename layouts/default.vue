<template>
  <div>
    <Menubar :model="items" v-if="user && permissionCheck">
      <template #end>
        <div class="card flex justify-content-center">
          <Button type="button" severity="secondary" :label="userName" @click="toggle" aria-haspopup="true"
            aria-controls="overlay_menu" text />
          <Menu ref="menu" id="overlay_menu" :model="itemsUser" :popup="true" />
        </div>
      </template>
    </Menubar>
    <slot class="h-full w-full" />
    <div class="footer">
      <a href="/about">About</a>
      <a href="https://github.com/KristinaVucina/night-club-rezervacije" target="_blank">GitHub</a>
      <a href="https://docs.google.com/document/u/0/d/1cisyedasqv7j1Lbp_lmooxYLxAvYZiwF/edit?dls=true&usp=gmail_attachment_preview"
        target="_blank">Link za viziju</a>
    </div>
  </div>
</template>

<script lang="ts" setup>


useAuth().getUser()
const userName = computed(() => (useUser().value as any)?.name ?? '')

const menu = ref();

const toggle = (event: any) => {
  menu.value.toggle(event);
};
const user = computed(() => useUser().value)
const permissionCheck = computed(() => hasAnyRole(['admin', 'superadmin', 'user']))

const items = computed(() => {
  let items = [
    {
      label: 'Početna',
      icon: 'pi pi-fw pi-home',
      to: '/',
      roles: ['user', 'admin', 'superadmin']
    },
    {
      label: 'Admin',
      icon: 'pi pi-fw pi-cog',
      to: '/admin/clubs',
      roles: ['admin', 'superadmin']
    },
    {
      label: 'Korisnici',
      icon: 'pi pi-fw pi-user',
      to: '/admin/users',
      roles: ['superadmin']
    }
  ]
  return items.filter(item => hasAnyRole(item.roles));
});

const itemsUser = ref([
  {
    label: 'Moje rezervacije',
    icon: 'pi pi-fw pi-calendar',
    to: '/my_reservations',
  },
  {
    label: 'Odjava',
    icon: 'pi pi-fw pi-sign-out',
  }
],
);
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
