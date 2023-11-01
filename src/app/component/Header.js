import React from 'react'

const Header = () => {
  return (
    <div>


      <div className="relative bg-gray-700 flex items-center justify-center  select-none bg-grey lg:flex lg:items-stretch w-full">

        <a href="#" className="flex-no-grow text-200 flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Welcome play a game </a>


      </div>


      <div className="relative bg-gray-700 flex items-center justify-center  select-none bg-grey lg:flex lg:items-stretch w-full">
        <a href="#" className="flex-no-grow text-200 flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Rules: You have to pick the song with the most views , if picked correct you will get plus one point </a>


      </div >
    </div >
  )

}

export default Header
