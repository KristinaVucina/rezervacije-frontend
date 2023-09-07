export default defineNuxtRouteMiddleware((to, from) => {
      // except register and login page
      if (to.path === '/register' || to.path === '/login') {
            return
      }
      useAuth().getUser()
})
