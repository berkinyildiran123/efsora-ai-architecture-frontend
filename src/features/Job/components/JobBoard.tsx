import React from 'react'

import { Job, JobStatus } from '../types/job.types'

const StatusBadge: React.FC<{ status: JobStatus }> = ({ status }) => {
  const colors: Record<JobStatus, string> = {
    [JobStatus.Pending]: '#856404',
    [JobStatus.Processing]: '#0056b3',
    [JobStatus.Completed]: '#155724',
    [JobStatus.Failed]: '#721c24',
  }

  return (
    <span
      style={{
        backgroundColor: colors[status],
        color: 'white',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '0.8rem',
      }}
    >
      {status}
    </span>
  )
}

export const JobBoard: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  if (jobs.length === 0) return <p>No jobs available.</p>

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <code>#{job.id}</code>
            <StatusBadge status={job.status} />
          </div>
          <p>{job.description}</p>
          {job.suggestion && (
            <div style={{ background: '#f0f0f0', padding: '10px', marginTop: '10px' }}>
              <strong>Suggestion:</strong>
              <p>{job.suggestion}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
