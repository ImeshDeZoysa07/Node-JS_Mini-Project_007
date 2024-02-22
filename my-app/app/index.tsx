// This is a basic Next.js app that displays "Hello World" on the homepage

// Import necessary modules from Next.js
import Head from 'next/head'

// Create a functional component representing the homepage
export default function Home() {
  return (
    <div>
      {/* Set the title of the page */}
      <Head>
        <title>Hello World</title>
      </Head>

      {/* Display "Hello World" */}
      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}
