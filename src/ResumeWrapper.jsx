import React from 'react'
import Builder from './Builder'
import Edit from './Edit'
import UserResume from './UserResume'

function ResumeWrapper() {
  return (
    <>
    <main className="flex justify-start items-center w-[100%]">
      <Builder />
      <section id="resume-section" className=" h-screen w-full flex gap-[2rem]">
        <Edit/>
        <UserResume />
      </section>
    </main>
    </>
  )
}

export default ResumeWrapper