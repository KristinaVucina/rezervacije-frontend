<template>
    <div class="flex justify-center max-h-screen h-screen">
      <Card class="self-center">
        <template #title>
          <h1>Registracija</h1>
        </template>
        <template #content>
          <FormKit
            id="registerForm"
            v-model="form"
            type="form"
            :submit-attrs="{
              inputClass: 'p-button p-component',
            }"
            @submit="submitHandler"
          >
            <FormKitSchema :schema="schema" :data="form" />
          </FormKit>
        </template>
      </Card>
    </div>
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
    layout: false,
  });
  const schema = [
    {
      $formkit: "primeInputText",
      name: "name",
      label: "Naziv",
      help: "Naziv racuna.",
      validation: "required",
    },
    {
      $formkit: "primeInputText",
      name: "email",
      label: "Email",
      help: "Email racuna.",
      validation: "required|email",
    },
    {
      $formkit: "primePassword",
      name: "password",
      label: "Lozinka",
      help: "Lozinka.",
      validation: "required|length:8,32",
    },
    {
      $formkit: "primePassword",
      name: "password_confirmation",
      label: "Potvrdi lozinku",
      help: "Potvrda lozinke.",
      validation: "required|length:8,32|same:password",
    },
  ];
  
  const form = ref({});
  
  const submitHandler = async () => {
    await useAuth().register(form.value as RegisterData);
    navigateTo("/");
  };
  </script>
    