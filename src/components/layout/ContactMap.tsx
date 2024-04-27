export default function ContactMap() {
  return (
    <section>
      <p className="text-lg font-bold">Roooby Technologies</p>
      <p className="text-lg font-medium">Plovdiv, Bulgaria, bul Vasil Levski 96</p>
      <div className="mt-[29px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.4245432804423!2d24.740869477276405!3d42.16259964755199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd18de452a06b%3A0x838e93baa43989e5!2sSeveren%2C%20Vasil%20Levski%20St%2096%2C%204003%20Plovdiv!5e0!3m2!1sen!2sbg!4v1714209067958!5m2!1sen!2sbg"
          width="100%"
          height="288"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-[30px] flex flex-wrap gap-[20px] justify-between">
        <div className="pl-[15px] border-l-[#787878] border-l-[1px]">
          <p className="text-lg font-bold">General</p>
          <p className="text-lg font-medium">hello@me.com</p>
        </div>
        <div className="pl-[15px] border-l-[#787878] border-l-[1px]">
          <p className="text-lg font-bold">Support</p>
          <p className="text-lg font-medium">support@me.com</p>
        </div>
      </div>
    </section>
  );
}