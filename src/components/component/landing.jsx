/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/WuKYwgkKthO
 */
'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { landingEmail } from "../../../utils/landing-email"

const Landing = () => {
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => landingEmail(data)
  
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div
            className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
            <div className="space-y-2 text-center">
            <h1 className="py-4 text-3xl font-bold tracking-tighter sm:text-8xl">Pro Quality Services</h1>
              <h1 className="py-2 text-3xl font-bold tracking-tighter text-gray-200 sm:text-3xl">Quality Certification Services</h1>
              <p
                className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Certify your commitment to quality. Let our experts guide you through the process.
              </p>
            </div>
            <form className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* <Input className="flex-1 max-w-sm" placeholder="Enter your email" type="email" /> */}
              <Link href="/contact"><Button>Learn More</Button></Link>
            </form>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full py-12 border-t md:py-24 lg:py-32 dark:bg-gray-800">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Services</h2>
              <p
                className="mx-auto max-w-[600px] pb-6 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a range of certification services to meet your business needs.
              </p>
            </div>
            <div
              className="grid items-center max-w-5xl grid-cols-1 gap-10 mx-auto lg:grid-cols-3 lg:gap-6">
              <div className="flex flex-col items-center gap-2">
                <CheckCircleIcon className="w-12 h-12" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">ISO 9001</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Quality management systems</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircleIcon className="w-12 h-12" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">ISO 14001</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Environmental management systems</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircleIcon className="w-12 h-12" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">IATF 16949</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Automotive quality management systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full py-12 border-t md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Industry Leaders
              </h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our certification services are recognized for their quality and reliability.
              </p>
            </div>
            {/* <div
              className="grid items-center justify-center max-w-5xl grid-cols-2 gap-8 mx-auto lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold">Compliance Manager</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "Our team was able to streamline our compliance processes with the help of Pro Quality Services Inc&apos;s certification
                  services. Highly recommended."
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold">Quality Officer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "Pro Quality Services Inc's certification services helped us achieve ISO 9001 certification. Their expertise and
                  guidance were invaluable."
                </p>
              </div>
            </div> */}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full py-12 border-t md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Have Questions?</h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We&apos;re here to help. Check out our FAQ or contact us directly.
              </p>
            </div>
            <div
              className="grid items-center justify-center max-w-5xl grid-cols-2 gap-10 mx-auto lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold">What are the benefits of certification?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Certification demonstrates that your organization meets international standards for quality, safety,
                    and environmental management. It can improve customer satisfaction, enhance your reputation, and
                    lead to operational efficiencies.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">How long does the certification process take?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The duration of the certification process depends on the size and complexity of your organization,
                    as well as the type of certification you are seeking. Our experts can provide a detailed timeline
                    based on your specific requirements.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Input {...register("name")} placeholder="Name" type="text" />
                <Input {...register("email")} placeholder="Email" type="email" />
                <Textarea {...register("message")} placeholder="Message"/>
                <Button>Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col items-center w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Pro Quality Services Inc. All rights reserved.</p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

export default Landing;

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function CheckCircleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>)
  );
}


