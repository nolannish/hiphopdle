'use client';

import dynamic from 'next/dynamic';

const GuessDropdown = dynamic(() => import('@/components/GuessDropdown'), {
  ssr: false,
});

const options = [
  { value: 'To Pimp a Butterfly', label: 'To Pimp a Butterfly' },
  { value: 'Illmatic', label: 'Illmatic' },
  { value: 'The Chronic', label: 'The Chronic' },
  { value: 'The Miseducation of Lauryn Hill', label: 'The Miseducation of Lauryn Hill' },
  { value: 'Enter the Wu-Tang (36 Chambers)', label: 'Enter the Wu-Tang (36 Chambers)' },
]

export default function AlbumPage() {
  return (
  <div>
    <h1 className="text-5xl fond-bold mb-8 text-gray-800">Album page</h1>
      <GuessDropdown options={options}/>
  </div>
  )
}