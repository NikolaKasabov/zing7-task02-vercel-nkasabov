import info1 from "../../../public/images/info1.png";
import info2 from "../../../public/images/info2.png";
import info3 from "../../../public/images/info3.png";
import Button from "../ui/Button";
import InfoItem from "./InfoItem";

export default function Info() {
  const info = [
    {
      id: 1,
      tagText: "sales",
      title: "Increase company revenue up to 65%",
      text: "Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging. ",
      listItems: [
        "Close more deals with single-page contact management",
        "Enjoy one-click calling, call scripts and voicemail automation",
        "Track stages and milestones of your deals to keep the sales process on track",
      ],
      image: info1,
      isImageOnTheRight: true,
    },
    {
      id: 2,
      tagText: "marketing",
      title: "Marketing",
      text: "Market like the most successful companies in the world with Agile CRM's marketing automation software. ",
      listItems: [
        "Marketing workflows with an easy drag-and-drop designer",
        "Use our templates to create high converting, mobile responsive landing pages",
        "Integrate social media easily into your marketing campaigns & contact views",
      ],
      image: info2,
      isImageOnTheRight: false,
      children: (
        <div className="max-w-[457px] w-[90%] min-h-[80px] py-3 bg-primary rounded-xl flex flex-wrap justify-center items-center gap-[12px] absolute left-[50%] bottom-[30px] translate-x-[-50%]">
          <p className="text-lg font-bold tracking-[-0.25px] text-white text-center">Automate your sales & marketing</p>
          <Button primary className="!h-[56px] !px-5 !text-lg !font-bold !bg-[#00CC61] hover:!bg-[#40b87a] !rounded-lg">
            Start now
          </Button>
        </div>
      ),
    },
    {
      id: 3,
      tagText: "service",
      title: "Help Desk Software",
      text: "Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey. ",
      listItems: [
        "Resolve every issue in the shortest possible time with powerful ticketing features",
        "Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)",
        "Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard",
      ],
      image: info3,
      isImageOnTheRight: true,
    },
  ];

  return (
    <section className="py-[120px] max-lg:py-[60px]">
      <div className="max-w-[1180px] mx-auto px-5 space-y-[120px] max-lg:space-y-[60px]">
        {info.map((item) => (
          <div key={item.id}>
            <InfoItem {...item}>{item.children}</InfoItem>
          </div>
        ))}
      </div>
    </section>
  );
}
