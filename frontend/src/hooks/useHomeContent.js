import { useEffect, useState } from 'react'
import { fetchSections, fetchTestimonials } from '../lib/api.js'
import { siteContent } from '../data/siteContent.js'

const initialState = {
  sections: siteContent,
  testimonials: siteContent.testimonials,
  isLoading: true,
  isFallback: false,
}

export function useHomeContent() {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    let ignore = false

    async function loadContent() {
      try {
        const [sectionsResponse, testimonialsResponse] = await Promise.all([
          fetchSections(),
          fetchTestimonials(),
        ])

        if (ignore) {
          return
        }

        setState({
          sections: sectionsResponse.data ?? siteContent,
          testimonials: testimonialsResponse.data ?? siteContent.testimonials,
          isLoading: false,
          isFallback: sectionsResponse.dataSource === 'fallback',
          dataSource: sectionsResponse.dataSource,
        })
      } catch {
        if (!ignore) {
          setState({
            sections: siteContent,
            testimonials: siteContent.testimonials,
            isLoading: false,
            isFallback: true,
            dataSource: 'fallback',
          })
        }
      }
    }

    loadContent()

    return () => {
      ignore = true
    }
  }, [])

  return state
}
