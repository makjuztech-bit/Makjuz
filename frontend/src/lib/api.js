import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
})

export async function fetchSections() {
  const response = await api.get('/sections')
  return {
    ...response.data,
    dataSource: response.headers['x-data-source'] || 'fallback'
  }
}

export async function fetchTestimonials() {
  const { data } = await api.get('/testimonials')
  return data
}

export async function submitContactForm(payload) {
  const { data } = await api.post('/contact', payload)
  return data
}

export async function subscribeToNewsletter(payload) {
  const { data } = await api.post('/newsletter', payload)
  return data
}

export async function fetchPricing() {
  const { data } = await api.get('/pricing')
  return data
}

export default api
