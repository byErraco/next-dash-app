import React from "react"

import { LoginCard } from "@/components/login/login"
import { SiteHeader } from "@/components/site-header"

const Login = () => {
  return (
    <>
      <SiteHeader />
      <div className="flex-1">
        <section className="container  pb-8 pt-6 md:py-10">
          <div className="flex  items-center justify-center">
            <LoginCard />
          </div>
        </section>
      </div>
    </>
  )
}

export default Login
