import assetsGlobal from "@/app/assets";
import CoursesCard from "./CoursesCard";

export default function CoursesSection() {
  const courses = [
    {
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      price: "99.99",
      image: assetsGlobal.course1,
    },
    {
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      price: "99.99",
      image: assetsGlobal.course1,
    },
    {
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      price: "99.99",
      image: assetsGlobal.course1,
    },
    {
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      price: "99.99",
      image: assetsGlobal.course1,
    },
  ];
  return (
    <div className="container mx-auto py-20 w-full flex flex-col justify-start gap-6">
      <h2 className="font-bold text-2xl text-center">Learn from the best</h2>
      <p className="text-sm text-gray-500 text-center">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <div className="grid grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <CoursesCard key={index} courses={course} />
        ))}
      </div>
    </div>
  );
}
