/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ROrNF5upZsi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <div className="w-full overflow-hidden">
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="flex flex-col gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pro Quality Services
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your partner in achieving ISO and IATF 16949 certification. We provide expert guidance and support to help your business
              meet ISO standards.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-2 md:py-6 lg:py-8">
        <div className="container grid items-start gap-4 px-4 md:px-12 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Benefits of ISO Certification
            </h2>
            <p className="max-w-3xl text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              ISO certification demonstrates that your company meets international standards for quality, safety, and
              efficiency. It can improve customer confidence, enhance operational performance, and open doors to new
              business opportunities.
            </p>
          </div>
          <div className="grid w-full max-w-sm gap-2 mx-auto">
            
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-6 lg:py-8">
        <div className="container grid items-start gap-4 px-4 md:px-12 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Approach to ISO Certification
            </h2>
            <p className="max-w-3xl text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We take a comprehensive and tailored approach to ISO certification. Our team works closely with your
              organization to assess your needs, develop effective processes, and provide the guidance and resources
              needed to achieve certification.
            </p>
          </div>
          <div className="grid w-full max-w-sm gap-2 mx-auto">
            
          </div>
        </div>
      </section>
      {/* <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container grid items-start gap-4 px-4 md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Industries We Serve</h2>
            <p className="max-w-3xl text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our experienced consultants have worked with a diverse range of industries, including manufacturing,
              healthcare, information technology, and more. We understand the unique requirements of each sector and are
              committed to helping businesses across industries achieve ISO certification.
            </p>
          </div>
          <div className="grid w-full max-w-sm gap-2 mx-auto">
            <img
              alt="Image"
              className="aspect-[2/1] rounded-lg overflow-hidden object-center object-cover"
              height="200"
              src="/placeholder.svg"
              width="400"
            />
          </div>
        </div>
      </section> */}
      <section className="w-full py-6 md:py-6 lg:py-8">
        <div className="grid items-start gap-4 px-4 md:px-12 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="max-w-3xl text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to take the next step towards ISO certification? Contact our team to learn more about our services
              and schedule a consultation.
            </p>
          </div>
          <div className="w-full max-w-sm mx-auto space-y-4">
            <Link href="/contact"><Button size="lg">Contact</Button></Link>
            
          </div>
        </div>
      </section>
    </div>
  )
}

