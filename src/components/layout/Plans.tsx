import Button from "../ui/Button";
import PlanItem from "./PlanItem";

export default function Plans() {
  const plans = [
    {
      id: 1,
      title: "Starter",
      isRecommended: false,
      subtitle: "Get organized and set up simple sales processes lorem ipsum",
      price: "$8,90",
      period: "month",
      button: {
        text: "Try for Free",
        type: "secondary",
      },
      trialText: "Free 14-day trial. No credit card required.",
      listItems: [
        {
          text: "2 team members",
          lineThrough: false,
        },
        {
          text: "1,000 Contacts & Companies",
          lineThrough: false,
        },
        {
          text: "5 Campaign Workflows",
          lineThrough: false,
        },
        {
          text: "10 Nodes Per Campaign",
          lineThrough: false,
        },
        {
          text: "5 Automation Rules (Triggers)",
          lineThrough: false,
        },
        {
          text: "3 Plugins/Integrations",
          lineThrough: false,
        },
        {
          text: "Marketing Automation",
          lineThrough: true,
        },
        {
          text: "Custom Deal Tracks",
          lineThrough: true,
        },
        {
          text: "Automated Voicemails",
          lineThrough: true,
        },
        {
          text: "Post-call Automation",
          lineThrough: true,
        },
      ],
    },
    {
      id: 2,
      title: "Professional",
      isRecommended: true,
      subtitle: "Everything you need to boost performance and revenue lorem ipsum",
      price: "$29,90",
      period: "month",
      button: {
        text: "Try for Free",
        type: "primary",
      },
      trialText: "Free 14-day trial. No credit card required.",
      listItems: [
        {
          text: "10 team members",
          lineThrough: false,
        },
        {
          text: "2,500 Contacts & Companies",
          lineThrough: false,
        },
        {
          text: "5 Campaign Workflows",
          lineThrough: false,
        },
        {
          text: "10 Nodes Per Campaign",
          lineThrough: false,
        },
        {
          text: "5 Automation Rules (Triggers)",
          lineThrough: false,
        },
        {
          text: "3 Plugins/Integrations",
          lineThrough: false,
        },
        {
          text: "Marketing Automation",
          lineThrough: false,
        },
        {
          text: "Custom Deal Tracks",
          lineThrough: false,
        },
        {
          text: "Automated Voicemails",
          lineThrough: true,
        },
        {
          text: "Post-call Automation",
          lineThrough: true,
        },
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      isRecommended: false,
      subtitle: "Customize without limits and access unrivaled support lorem ipsum",
      price: "$39,90",
      period: "month",
      button: {
        text: "Try for Free",
        type: "secondary",
      },
      trialText: "Free 14-day trial. No credit card required.",
      listItems: [
        {
          text: "Unlimited team members",
          lineThrough: false,
        },
        {
          text: "5,000 Contacts & Companies",
          lineThrough: false,
        },
        {
          text: "25 Campaign Workflows",
          lineThrough: false,
        },
        {
          text: "20 Nodes Per Campaign",
          lineThrough: false,
        },
        {
          text: "15 Automation Rules (Triggers)",
          lineThrough: false,
        },
        {
          text: "10 Plugins/Integrations",
          lineThrough: false,
        },
        {
          text: "Marketing Automation	",
          lineThrough: false,
        },
        {
          text: "Custom Deal Tracks",
          lineThrough: false,
        },
        {
          text: "Automated Voicemails",
          lineThrough: false,
        },
        {
          text: "Post-call Automation",
          lineThrough: false,
        },
      ],
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="max-w-[1180px] mx-auto px-5 pt-[70px] pb-[118px] max-lg:py-[60px]">
        <div className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:gap-[40px]">
          <h1 className="max-w-[690px] text-[64px] font-bold leading-[1.1563] tracking-[-0.89px] max-lg:text-[40px]">
            Choose the right plan <span className="text-[#787878]">for your business</span>
          </h1>
          <p className="max-w-[360px] text-lg leading-[1.5556] self-end max-lg:self-center">
            Built with love for growing businesses. Check out the Roooby CRM pricing grid below. Switch between plans at
            any time.
          </p>
        </div>

        <div className="mt-[95px] flex justify-center flex-wrap gap-x-[9px] gap-y-6">
          {plans.map((plan) => (
            <div key={plan.id}>
              <PlanItem {...plan} />
            </div>
          ))}
        </div>

        <div className="mt-[100px] h-[1px] bg-[#787878] max-lg:mt-[60px]"></div>

        <div className="mt-[48px] max-w-[945px] mx-auto flex justify-between items-center max-lg:flex-col max-lg:gap-6">
          <h3 className="text-[32px] font-bold leading-[1.3125] tracking-[-0.44px] max-lg:text-center">
            Need help choosing the right plan?
          </h3>
          <Button secondary className="!h-[56px] !text-lg !font-bold !rounded-lg">
            Contact sales
          </Button>
          <Button primary className="!h-[56px] !text-lg !font-bold !rounded-lg">
            Compare plans
          </Button>
        </div>
      </div>
    </section>
  );
}
