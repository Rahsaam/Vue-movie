import {useFetch} from "@/composables/useFetch"

export function useSearch () {
    const {data, loading, error, doFetch} = useFetch();
         async function doSearch(url, string, page = 1) {
            const params = new URLSearchParams()
            params.append('query', string)
            params.append('page', page)
            await doFetch(`${url}?${params}`)
         }
    return {data, loading, error, doFetch, doSearch}
}