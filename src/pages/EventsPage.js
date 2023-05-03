import React from 'react'
import Navbar from '../components/Navbar'
import Navbarhome from '../components/Navbarhome'
import Sidebar from '../components/Sidebar'
import ProfileSidebar from '../components/ProfileSidebar'
import NavigationHome from '../components/NavigationHome'
import Events from '../components/Events'
import Connect from '../components/Connect'
export default function () {
  return (
      <>
          <div className="flex flex-col min-h-screen ">
				<Navbarhome />

				<div className="flex flex-1 space-x-12">
					<div className="lg:w-1/4">
						<div className="sticky top-4">
							<Sidebar />
							<ProfileSidebar />
						</div>
					</div>
					<div className="lg:w-full mt-4 pr-2">
						<Events/>
					</div>
				</div>
				<NavigationHome />
			</div>
          {/* <div className="flex flex-col min-h-screen">
			<Navbarhome />

			<div className="flex justify-evenly pr-16">
				<div className="lg:w-1/5">
					<div className="sticky top-4">
						<Sidebar />
						<ProfileSidebar />
					</div>
				</div>
				<div className="w-[60%] pr-4 mt-4 ">
					<Events/>
				</div>
				<div className="lg:w-1/6 mt-[0.9rem]">
					<div className="sticky top-4 ">
						<Connect />
					</div>
				</div>
			</div>
			<NavigationHome />
		</div> */}
      </>
  )
}
