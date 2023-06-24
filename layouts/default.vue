<template>
  <div>
    <Menubar>
      <template #start>
        <nuxt-link v-for="item in items.start" :key="item.label" :to="item.to">
          <Button :label="item.label" :icon="item.icon" outlined></Button>
        </nuxt-link>
      </template>
      <template #end>
        <div class="flex justify-end align-center">
          <div class="flex items-center flex-wrap">
            <p v-if="user" class="px-4 text-center">{{ user.name }}</p>
          </div>

          <nuxt-link v-for="item in items.end" :key="item.label" :to="item.to">
            <Button
              :label="item.label"
              :icon="item.icon"
              @click="item.click"
              outlined
              severity="help"
            ></Button>
          </nuxt-link>
        </div>
      </template>
    </Menubar>
    <slot class="h-full w-full" />
  </div>
</template>

<script lang="ts" setup>
const visible = ref(true);
const items = ref({
  start: [
    {
      label: "Klijenti",
      icon: "pi pi-fw pi-users",
      to: "/",
    },
  ],
  end: [
    {
      label: "Odjava",
      icon: "",
      to: "",
    },
  ],
});
</script>
