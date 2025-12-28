import { useState, useEffect, useCallback } from 'react'

import { findJobs } from '../services/job-api.service'
import { Job } from '../types/job.types'

export const useJobs = (pollingInterval: number = 4000) => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchJobs = useCallback(async () => {
    try {
      const data = await findJobs()
      setJobs(data)
      setError(null)
    } catch (err) {
      setError('Failed to find jobs')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchJobs()

    const interval = setInterval(fetchJobs, pollingInterval)
    return () => clearInterval(interval)
  }, [fetchJobs, pollingInterval])

  return { jobs, loading, error, refresh: fetchJobs }
}
