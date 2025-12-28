import React, { useState } from 'react'

import { createJob } from '../services/job-api.service'

interface JobFormProps {
  onSuccess: () => void
}

export const JobForm: React.FC<JobFormProps> = ({ onSuccess }) => {
  const [desc, setDesc] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!desc.trim()) return

    setIsSubmitting(true)
    try {
      await createJob({ description: desc })
      setDesc('')
      onSuccess()
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section>
      <h2>Submit New Job</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter job description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          disabled={isSubmitting}
          rows={3}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" disabled={isSubmitting || !desc.trim()}>
          {isSubmitting ? 'Submitting...' : 'Create Job'}
        </button>
      </form>
    </section>
  )
}
