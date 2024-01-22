import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className='head_text text-center'>Discover and Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>Aì Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
            Promptly is an open source project that aims to provide a platform for users to discover and share prompts.
        </p>
    <Feed />
    </section>
  )
}

export default Home
