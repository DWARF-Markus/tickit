import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SideBar = () => {
  const [open, setOpen] = useState(true)


  return (
    <div className={`fixed mt-16 bg-black-80 text-white-100 h-screen ${open ? "w-2/12" : "w-14"}`}>
      <div onClick={() => setOpen(!open)} className={`flex m-3 ${open ? "justify-end" : "justify-center"}`}>
        <div className={`transform transition ${open ? "rotate-180" : ""}`}>
          <Image src="/arrow-white.svg" width={15} height={15} />
        </div>
      </div>
      <Link href='/'>
        <div className="mb-2 flex h-10 py-3 px-3 gap-1 border-l-4 border-white-50 cursor-pointer hover:bg-black-30">
          <Image src="/home-white.svg" width={20} height={20} />
          <p className={`px-2 ${open ? 'block' : 'hidden'}`}>Overview</p>
        </div>
      </Link>
      <Link href='/projects/scanomat'>
        <div className="mb-2 flex h-10 py-3 px-3 gap-1 cursor-pointer hover:bg-black-30">
          <Image src="/folder-white.svg" width={20} height={20} />
          <p className={`px-2 ${open ? 'block' : 'hidden'}`}>SCANOMAT</p>
        </div>
      </Link>
    </div>
  )
}

export default SideBar