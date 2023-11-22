import { Mail, Map } from "lucide-react"

const Contact = () => {
	return (
		<section id='contact'>
			<div className='container mx-auto p-4 flex flex-col flex-wrap justify-center items-center gap-5 text-center '>
				<div className='flex flex-col gap-5'>
					<p className='text-4xl font-bold text-blue-900'>Contact</p>
					<h3>Have I gained your interest? Let's work together! 👇</h3>
				</div>
				<div className='Container-MapMail flex flex-wrap flex-col justify-center items-center gap-3'>
					<div className='bg-gradient-to-b from-blue-400 to-blue-900 rounded-full w-14 h-14 shadow-2xl flex items-center justify-center'>
						<Map color='white' />
					</div>
					<div>
						<p className='text-xl font-bold text-blue-900'>Location</p>
						<p>Frankfurt am Main, Germany</p>
					</div>
					<div className='bg-gradient-to-b from-blue-400 to-blue-900 rounded-full w-14 h-14 shadow-2xl flex items-center justify-center'>
						<Mail color='white' />
					</div>
					<div>
						<p className='text-xl font-bold text-blue-900'>Mail</p>

						<a href='mailto:loukmane.chaou@web.de'>loukmane.chaou@web.de</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
