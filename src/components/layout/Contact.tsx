import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import CustomersLogos from "./CustomersLogos";

export default function Contact() {
  return (
    <>
      <section className="bg-secondary">
        <div className="max-w-[1180px] mx-auto px-5 pt-[67px] pb-[120px] max-lg:py-[60px]">
          <h1 className="max-w-[555px] text-[64px] font-bold leading-[1.1563] tracking-[-0.89px] max-lg:text-[40px]">
            Get in touch with our lovely team
          </h1>

          <section className="mt-[65px] flex justify-between gap-[60px] max-lg:flex-col max-lg:items-center">
            <div className="max-w-[458px] w-full">
              <ContactMap />
            </div>
            <div className="max-w-[555px] w-full">
              <ContactForm />
            </div>
          </section>
        </div>
      </section>

      <section>
        <div className="max-w-[1180px] mx-auto px-5 pt-[100px] pb-[100px] max-lg:py-[60px]">
          <CustomersLogos text="Our clients and partners" className='!gap-[79px]' />
        </div>
      </section>
    </>
  );
}
