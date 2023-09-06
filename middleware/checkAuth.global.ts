export default defineNuxtRouteMiddleware((to, from) => {
      useAuth().getUser()
})
