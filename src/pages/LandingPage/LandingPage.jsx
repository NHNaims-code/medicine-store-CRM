import React, { useState } from 'react'
import { LandingPageHero } from '../../components/landing_page/HeroSection/HeroSection'
import LandingPageBookDemoModal from '../../components/landing_page/modals/BookADemo/LandingPageBookDemoModal'
import { LandingPageHeader } from '../../components/layout/headers/LandingPageHeader/LandingPageHeader'

export default function LandingPage() {
  const links = [
    {label: 'Features', link: '/'},
    {label: 'Lern', link: '/'},
    {label: 'About', link: '/'},
    {label: 'Pricing', link: '/'},
    {label: 'Support', link: '/'},
  ]

  const [openDemoBookModal, setOpenDemoBookModal] = useState(false)
  return (
    <div>
      <LandingPageHeader links={links}/>
      <LandingPageHero setOpenDemoBookModal={setOpenDemoBookModal}/>
      <LandingPageBookDemoModal open={openDemoBookModal} setOpen={setOpenDemoBookModal}/>
    </div>
  )
}
