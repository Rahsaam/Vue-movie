import {ref } from "vue";
import {client} from '@/components/utils/client.js'

export function useFetch(initialData = []) {
    const data = ref(initialData)
    const loading = ref(false)
    const error = ref(null)

    async function doFetch(url, options, method = 'GET') {
        try {
            error.value = null
            loading.value = true
            const res = await client(url , options, method)
            data.value = res
        } catch(err) {
            error.value = err
        }
        finally {
            loading.value = false
        }
    }
    return{doFetch, data, error, loading}
} 