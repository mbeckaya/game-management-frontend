import { ref } from 'vue'
import axios from 'axios'
import { API_URL } from '@/utils/constants'

export function useFetch() {
    const isLoading = ref(false)
    const error = ref('')

    async function fetchData(endpoint: string) {
        try {
            isLoading.value = true
            const response = await axios.get(`${API_URL}${endpoint}`)
            return response.data
        } catch (err) {
            console.error(err)
            error.value = 'Failed to fetch'
            return null
        } finally {
            isLoading.value = false
        }
    }

    return {
        isLoading,
        error,
        fetchData,
    }
}