import React from 'react'
import Jobs from '../Jobs.json'
import { JobList } from './JobList'

export const JobsListing = ({isHome = 0}) => {

    const JobsListing = isHome ? Jobs.slice(0,3) : Jobs

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {JobsListing.map((job)=>(
             <JobList key={job.id} job={job}/>
          ))}
          
          </div>
      </div>
    </section>
  )
}
