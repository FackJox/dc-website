'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='mx-auto flex w-full flex-wrap items-center md:flex-row '>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:text-left'>
          <h1 className='my-4 text-5xl font-bold leading-tight font-spacetron'>Welcome to the DrumCult…</h1>
          <p className='mb-8 text-2xl leading-normal'>Congratulations, you have completed the first step on the road to enlightenment. Envision a brighter future where we can all live in harmony. Where freedom of expression reigns supreme, irrespective of religion, race, creed or colour. Where we can all be free to dance every night away in unison, as one being. 
</p>
<p className='mb-8 text-2xl leading-normal'>Prepare to become an honorary member of the cult and find your equilibrium within the drum.
</p>

<p className='mb-8 text-2xl leading-normal'>“What actually is the DrumCult?” we hear you cry…</p>
<p className='mb-8 text-2xl leading-normal'>We are a diverse community of creatives based in Bristol. We organize unforgettable events with breathtaking visuals displays and earthshaking tunes. Our aim is to keep our events inclusive and affordable, whilst supporting up and coming local talent. If you feel you could have anything to contribute, don’t hesitate to get in touch.</p>

<p className='mb-8 text-2xl leading-normal'>See you at our next gathering where you can collect your ceremonial gown and take your first sip from the sacred cup…</p>
        </div>

      
      </div>

      <div className='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>
        {/* first row */}
        <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800 font-spacetron'>Events</h2>
          <p className='mb-8 text-gray-600'>INITIATION - 28th Sept 24 - Box7, Bristol</p>
          <p className='mb-8 text-gray-600'>jcak fcuks, Matt Scratch, Psilocybin Laden, </p>
          <a href="https://www.skiddle.com" target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
    Buy Tickets Now
  </a>     </div>
        <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full  sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
              <Common color={'lightpink'} />
            </Suspense>
          </View>
        </div>
        {/* second row */}
        <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full animate-bounce sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Duck route='/blob' scale={2} position={[0, -1.6, 0]} />
              <Common color={'lightblue'} />
            </Suspense>
          </View>
        </div>
        <div className='w-full p-6 sm:w-1/2'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800 font-spacetron'>Socials</h2>
          <p className='mb-8 text-gray-600'>
           TikTok Logo, FB Logo, Insta Logo - look at carousels
          </p>
        </div>
      </div>
    </>
  )
}
