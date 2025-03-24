import Image from 'next/image'

export default function Page() {
    return (
        <div className="flex justify-center items-center min-h-screen gap-4">
            <Image
                src="/images/Capture.PNG"
                width={300}
                height={300}
                alt="Image 1"
            />
            <Image
                src="/images/Capture1.PNG"
                width={300}
                height={300}
                alt="Image 2"
            />
            <Image
                src="/images/Capture2.PNG"
                width={300}
                height={300}
                alt="Image 3"
            />
        </div>
    )
}