export type Job = {
  id: string
  description: string
  suggestion?: string
  status: JobStatus
}

export enum JobStatus {
  Pending = 'pending',
  Processing = 'processing',
  Completed = 'completed',
  Failed = 'failed',
}

export type CreateJobRequest = {
  description: string
}
