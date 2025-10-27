import assetsGlobal from "@/app/assets";
import Image from "next/image";
export default function Companies() {
  return (
    <div className="container mx-auto py-20 flex items-center flex-col gap-6">
      <p className="text-base text-gray-500 font-semibold">
        Trusted by learners from
      </p>
      <div className="flex items-center justify-center gap-14 w-full">
        <Image
          src={assetsGlobal.microsoftLogo}
          alt="Company 2"
          width={160}
          height={40}
          className="object-cover"
        />
        <Image
          src={assetsGlobal.accentureLogo}
          alt="Company 1"
          width={160}
          height={40}
          className="object-cover"
        />
        <Image
          src={assetsGlobal.adobeLogo}
          alt="Company 1"
          width={160}
          height={40}
          className="object-cover"
        />

        <Image
          src={assetsGlobal.paypalLogo}
          alt="Company 3"
          width={160}
          height={40}
          className="object-cover"
        />
        <Image
          src={assetsGlobal.walmartLogo}
          alt="Company 4"
          width={160}
          height={25}
          className="object-cover"
        />
      </div>
    </div>
  );
}
