import { Github, Linkedin, LinkedinIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Footer() {
	return (
		<footer className="mt-32 bg-gray-100">
			<div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
				<div className="flex justify-center text-teal-600">
					<Image src='/logo.png' alt='logo' width={120} height={70} />
				</div>

				<p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500">
					made with ❤️ & <Image src='/next.svg' width={50} height={50} className='inline' /> by <a href="https://github.com/AbdelrhmanAbuelnile" target='_blank' className='underline hover:text-cyan-600 duration-300'>Abdelrahman</a>
				</p>

				<ul className="flex justify-center gap-6 mt-12 md:gap-8">

					<li>
						<a
							href="https://twitter.com/ABdelrh96901884"
							rel="noreferrer"
							target="_blank"
							className="text-gray-700 transition hover:text-cyan-600"
						>
							<span className="sr-only">Twitter</span>
							<Twitter />
						</a>
					</li>

					<li>
						<a
							href="https://github.com/AbdelrhmanAbuelnile"
							rel="noreferrer"
							target="_blank"
							className="text-gray-700 transition hover:text-cyan-600"
						>
							<span className="sr-only">GitHub</span>
							<Github />
						</a>
					</li>

					<li>
						<a
							href="https://www.linkedin.com/in/abdelrahman-hany-abu-elnile/"
							rel="noreferrer"
							target="_blank"
							className="text-gray-700 transition hover:text-cyan-600"
						>
							<span className="sr-only">LinkedIn</span>
							<Linkedin />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer