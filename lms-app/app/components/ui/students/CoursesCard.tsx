import Image, { StaticImageData } from "next/image";
type CoursesCardProps = {
  courses: {
    image: StaticImageData;
    title: string;
    description: string;
    price: string;
  };
};
export default function CoursesCard({ courses }: CoursesCardProps) {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg overflow-hidden h-[400px] w-full">
      <Image
        src={courses.image}
        alt={courses.title}
        className="object-fill w-full aspect-video shrink-0"
        width={260}
        height={148}
      />
      <div className="flex flex-col p-4 gap-3 items-start justify-start grow">
        <h3 className="font-semibold text-lg text-black/80">{courses.title}</h3>
        <p className="text-sm text-gray-600">{courses.description}</p>
        <p className="font-semibold text-base text-gray-700">
          ${courses.price}
        </p>
      </div>
    </div>
  );
}
