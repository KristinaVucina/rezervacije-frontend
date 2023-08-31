export default defineNuxtRouteMiddleware((to, from) => {
      console.log('checkAuth.global.ts')
      console.log(useUser().value)
        useAuth().getUser()
  })
