"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {signIn, signOut, useSession, getProviders} from "next-auth/react"

const Nav = () => {
  const isUserLoggenIn = true

  const [providers, setPorviders] = useState(null)
  const [toglleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setProviders = async()=>{
      const response = await getProviders()

      setProviders(response)
    }

    setPorviders()
  }, [])

  const signOut = ()=>{

  }
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image src="/assets/images/logo.svg" alt="Logo" width={30} height={30} className="object-containz"/>
            <p className="logo_text">Promtopia</p>
        </Link>

        {/* Desktop navigation */}
        <div className="sm:flex hidden">
          {isUserLoggenIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-promt" className="black_btn">
                Create Post
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>

              <Link href="/profile">
                <Image src="/assets/images/logo.svg" width={37} height={37} className="rounded-full" alt="profile"/>

              </Link>
            </div>
          ):(
            <>
              {providers && Object.values(providers).map((provider) =>(
                <button type="button" key={provider.name} onClick={()=> signIn(provider.id)} className="black_btn">

                </button>
              ))}
            </>
          )}
        </div>

        {/* Mobile Navigation  */}

        <div className="sm:hidden flex relative">
            {isUserLoggenIn?(
              <div className="flex">
                <Image src="/assets/images/logo.svg" width={37} height={37} className="rounded-full" alt="profile" onClick={()=> setToggleDropdown((prev) =>!prev)}/>

                {toglleDropdown && (
                  <div className="dropdown">
                    <Link href="/profile" className="dropdown_link" onClick={()=> setToggleDropdown(false)}>
                      My Profile
                    </Link>
                    <Link href="/create-prompt" className="dropdown_link" onClick={()=> setToggleDropdown(false)}>
                      Create Prompt
                    </Link>

                    <button type="button" onClick={()=> {setToggleDropdown(false); signOut}} className="mt-5 w-full black_btn">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ):(
              <>
                {providers && Object.values(providers).map((provider) =>(
                  <button type="button" key={provider.name} onClick={()=> signIn(provider.id)} className="black_btn">

                  </button>
                ))}
              </>
            )}
        </div>
    </nav>
  )
}

export default Nav