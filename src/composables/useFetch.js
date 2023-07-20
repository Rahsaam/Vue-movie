import { inject, ref } from "vue";
import {client} from '@/components/utils/client.js'
import { USER } from "@/components/utils/keys";

export function useFetch(initialData = []) {
    const user = inject(USER)
    console.log(user);
    const data = ref(initialData)
    const loading = ref(false)
    const error = ref(null)

    async function doFetch(url, options) {
        try {
            error.value = null
            loading.value = true
            const res = await client(url , options)
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