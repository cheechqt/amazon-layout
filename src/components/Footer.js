const listItems = [
  { title: "Amazon Music", subtitle: "Stream millions of songs" },
  {
    title: "Amazon Business",
    subtitle: "Everything For Your Business",
  },
  { title: "Box Office Mojo", subtitle: "Find Movie Box Office Data" },
  {
    title: "Kindle Direct Publishing",
    subtitle: "Indie Digital & Print Publishing Made Easy",
  },
  {
    title: "Amazon Advertising",
    subtitle: "Find, attract, and engage cutomers",
  },
  { title: "AmazonGlobal", subtitle: "Ship Orders Internationally" },
  { title: "ComiXology", subtitle: "Thousands of Digital Comics" },
  { title: "Prime Video Direct", subtitle: "Video Distribution Made Easy" },
  { title: "Blink", subtitle: "Smart Security for Every Home" },
  { title: "Amazon Drive", subtitle: "Cloud storage from Amazon" },
  { title: "Home Services", subtitle: "Experienced Pros Happiness Guarantee" },
  { title: "DPReview", subtitle: "Digital Photography" },
  { title: "Shopbop", subtitle: "Designer Fashion Brands" },
  { title: "Neighbors App", subtitle: "Real-Time Crime & Safety Alerts" },
  { title: "6pm", subtitle: "Score deals on fashion brands" },
  {
    title: "Amazon Ignite",
    subtitle: "Sell your original Digital Educational Resources",
  },
  { title: "Fabric", subtitle: "Sewing, Quilting & Knitting" },
  { title: "Woot!", subtitle: "Deals and Shenanigans" },
  {
    title: "Amazon Subscription Boxes",
    subtitle: "Top subscription boxes - right to your door",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#232f3e] mt-[30px] py-[30px]">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-4 gap-y-2 gap-x-10">
          {listItems.map((item) => {
            return (
              <div className="px-2">
                <a
                  href="#"
                  className="flex flex-col text-[#dedede] text-[12px]"
                >
                  {item.title}
                  <span className="text-[#bfbfbf] text-[10px]">
                    {item.subtitle}
                  </span>
                </a>
                <div />
              </div>
            );
          })}
        </div>
        <div className="flex-center flex-col pt-[40px] text-xs text-[#dedede]">
          <ul className="flex">
            <li>Conditions of Use</li>
            <li>Privacy Notice</li>
            <li>Interest-Based Ads</li>
          </ul>
          <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
