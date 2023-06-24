export default defineNuxtRouteMiddleware((to, from) => {
    if(useAuth().user===null && to.path!=='/login'){
        useAuth().getUser()
    }
  })
