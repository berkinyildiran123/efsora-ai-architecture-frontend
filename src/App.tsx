import { useJobs } from './features/Job/hooks/use-jobs.hook'

import { JobBoard } from './features/Job/components/JobBoard'
import { JobForm } from './features/Job/components/JobForm'

export default function App() {
  const { jobs, loading, error, refresh } = useJobs(3000)

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>AI Job Manager</h1>

      <JobForm onSuccess={refresh} />

      <hr style={{ margin: '30px 0' }} />

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && jobs.length === 0 ? <p>Loading jobs...</p> : <JobBoard jobs={jobs} />}
    </main>
  )
}
