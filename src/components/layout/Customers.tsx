import Link from "next/link";
import image1 from '../../../public/images/customer1.png';
import image2 from '../../../public/images/customer2.png';
import image3 from "../../../public/images/customer3.png";
import CustomerItem from "./CustomerItem";

export default function Customers() {
  const customers = [
    {
      id: 1,
      text: "The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.",
      name: "Lola Ross",
      jobTitle: "Marketing Director",
      image: image1,
    },
    {
      id: 2,
      text: "It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.",
      name: "Daisy Phelps",
      jobTitle: "Speaker and Author, Lifeiseasy",
      image: image2,
    },
    {
      id: 3,
      text: "Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!",
      name: "Andrew Wilkins",
      jobTitle: "Managing Director, Nirma Studio",
      image: image3,
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="max-w-[1180px] mx-auto px-5 pt-[120px] pb-[117px] max-lg:py-[60px]">
        <div className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-6">
          <h2 className="max-w-[570px] text-5xl font-bold leading-[1.2083] tracking-[-0.67px] max-lg:text-[40px] max-lg:text-center">
            We love our Customers and They love us too
          </h2>
          <Link href="/" className="text-xl font-medium tracking-[0.43px] lg:self-end">
            See all <span className="text-[#00CC61]">&gt;</span>
          </Link>
        </div>

        <div className="mt-[74px] flex justify-center gap-x-[30px] gap-y-[50px] flex-wrap">
          {customers.map((customer) => (
            <div key={customer.id} className="max-w-[360px] w-full">
              <CustomerItem {...customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}