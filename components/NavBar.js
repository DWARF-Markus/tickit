import Image from 'next/image'

const NavBar = () => {
  return (
    <div className="bg-white-100 z-10 fixed p-4 flex w-full shadow-md">
      <div className="px-2 py-1 w-1/4 lg:w-2/12 border border-black-30 rounded">
        <label className="flex relative" htmlFor="search">
          <Image src="/search.svg" width={20} height={20} />
          <input className="w-full mx-2 text-black-50" id="search" />
        </label>
      </div>
      <div className="inset-center my-1">
        <Image src="/logo.svg" width={60} height={50} />
      </div>
    </div>
  )
}

export default NavBar;