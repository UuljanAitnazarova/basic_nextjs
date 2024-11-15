
'use client'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Head>
        <title>Hello World</title>
      </Head>
      <h1 className="text-4xl text-gray-700">Hello, World!</h1>
      <button
        className="mt-5 p-3 bg-blue-500 text-white rounded"
        onClick={() => alert('Hello, World!')}
      >
        Click me
      </button>
    </div>
  )
}