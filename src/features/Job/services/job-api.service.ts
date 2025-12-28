import axios from 'axios'

import { CreateJobRequest, Job } from '../types/job.types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createJob = async (dto: CreateJobRequest): Promise<void> => {
  await api.post('/jobs', dto)
}

export const findJobs = async (): Promise<Job[]> => {
  const res = await api.get<Job[]>('/jobs')
  return res.data
}
