import image1 from "../../../public/images/results1.png";
import image2 from "../../../public/images/results2.png";
import ResultItem from "./ResultItem";

export default function Results() {
  const resultsData = [
    {
      id: 1,
      revenueText1: "$2.5 M",
      revenueText2: "Generate sales",
      text: "Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.",
      author: "Nellie Foster",
      jobTitle: "Founder & CEO, Foster Business Strategies",
      image: image1,
    },
    {
      id: 2,
      revenueText1: "45%",
      revenueText2: "Grew revenue",
      text: "Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.",
      author: "Lawrence Gibbs",
      jobTitle: "Marketing Director",
      image: image2,
    },
  ];

  return (
    <section className="py-[120px] max-lg:py-[60px]">
      <div className="max-w-[1180px] mx-auto px-5">
        <h2 className="text-5xl font-bold leading-[1.417] tracking-[-0.67px] max-lg:text-[40px] max-lg:text-center">
          Real-life results and revenue
        </h2>
        <p className="mt-3 text-lg max-lg:text-center">
          See how companies like yours have smashed their sales success goals
        </p>

        <div className="mt-[66px] space-y-[65px]">
          {resultsData.map((item) => (
            <div key={item.id}>
              <ResultItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
