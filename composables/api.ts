export const useApi: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()
    return useFetch(request, {
      baseURL: config.public.apiUrl, credentials: 'include',headers: {
        accept: 'application/json'
      }, onResponse: (res) => {
        if (res.response.status === 401 || (res.response.redirected && res.response.url.includes('/login'))) {
          navigateTo('/login')
        }
      }, ...opts
    })
  }
  