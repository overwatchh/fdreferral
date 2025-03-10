import FAQ from "./components/FAQ";
import testimonyImg from "./images/dx-zoomo-au.jpg";
import basepayImg from "./images/basepay.webp";
import promotionImg from "./images/promotion.webp";
import { faqs, reasons } from "./content";
import Facebook from "./components/icons/Facebook";
import { ContactForm } from "./components/ContactForm";
import useTrackPageView from "./hooks/useTrackPageView";
import useSectionTracking from "./hooks/useSectionTracking";
function App() {
  const howMuchEarnRef = useSectionTracking("how_much_earn");
  const requirementsRef = useSectionTracking("requirements");
  const faqRef = useSectionTracking("faq");
  const contactRef = useSectionTracking("contact");
  useTrackPageView();
  return (
    <div className="">
      <div className="bg-red-600 p-3">
        <div className="text-white text-center">
          <p className="text-4xl">Be referred and earn an extra 💵 AU$400.</p>
          <p className="text-base mt-4">
            🔗 Sign up using a referral link and 💰 earn extra money. Why not?
            ✨
          </p>
        </div>
      </div>
      {/* Why join ?*/}
      <div className="pt-8 flex flex-col space-y-10 md:flex-row md:items-start md:space-y-0 xl:container xl:mx-auto">
        {reasons.map((reason, index) => (
          <div className="flex flex-col items-center md:flex-1" key={index}>
            <span className="text-red-600">{reason.icon}</span>
            <p className="text-lg text-neutral-950 font-bold mt-4">
              {reason.title}
            </p>
            <p className="text-base text-neutral-950 text-center mt-3 mx-12 md:mx-2">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
      {/* Testimony */}
      <div className="bg-rose-50 px-4 pb-16 mt-20 md:flex md:flex-row xl:ml-60">
        <img
          className="md:block md:w-96 md:h-96"
          src={testimonyImg}
          alt="Testimony description"
        />
        <div className="md:p-6 md:flex md:flex-col md:items-start justify-center md:px-12 xl:mr-60">
          <p className="text-neutral-900 font-bold text-2xl mt-6">
            “I accidentally found this referral website on Google when I was
            searching for food delivery. I earned an unimaginable amount of
            money that week. The support team from the Referral Program was very
            helpful, as they are experienced delivery drivers who assisted me
            with the onboarding process and answered all my questions.”
          </p>

          <div className="text-center mt-4 text-lg font-medium neutral-800 md:text-start">
            <p>Dang</p>
            <p>Earned AU$1500 for 40 hours working with referral bonus</p>
          </div>
        </div>
      </div>
      {/* How much can I earn ? */}
      <div ref={howMuchEarnRef} className="mt-12 px-4 xl:container xl:mx-auto">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          How much can I earn exactly 🤔?
        </h2>
        <div className="md:flex md:flex-row md:space-x-4 md:justify-center">
          <div className="mt-8 text-center md:flex-1">
            <img className="md:h-96" src={basepayImg} alt="Base pay" />

            <p className="mt-4 text-lg neutral-900 font-bold">Normal pay</p>
            <p className="mt-4 text-base neutral-900">
              The normal pay from DoorDash includes base pay, which is about
              AU$5–AU$8 per trip, along with customer tips and promotions during
              peak hours. In short, it’s about AU$25–AU$30 per hour.
            </p>
          </div>

          <div className="mt-8 text-center md:flex-1">
            <img className="md:h-96" src={promotionImg} alt="Base pay" />

            <p className="mt-4 text-lg neutral-900 font-bold">Referral Bonus</p>
            <p className="mt-4 text-base neutral-900">
              Earn a referral bonus of AU$400—equivalent to more than 10 hours
              of working on the road.
            </p>
          </div>
        </div>
      </div>
      {/* Gear */}
      <div className="bg-rose-50 px-4 pb-16 mt-20 md:flex md:flex-row-reverse xl:mr-60">
        <img
          className="md:w-96 md:h-96"
          src={testimonyImg}
          alt="Testimony description"
        />
        <div className="md:flex md:flex-col md:items-start justify-center md:px-12 xl:ml-60">
          <p className="text-center text-neutral-900 font-bold text-2xl mt-6">
            How to Get Started
          </p>

          <p className="mt-4 text-base neutral-900 xl:mr-60">
            Sounds good! But, how can I get started? I don't know what to do. Do
            I need a bike or something? I don’t even have a bike. At the very
            least, what documents do I need?
          </p>
        </div>
      </div>
      {/* Requirements */}
      <div ref={requirementsRef} className="mt-12 xl:container xl:mx-auto">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          Requirements
        </h1>
        <div className="flex flex-col space-y-8 mt-8 px-4 md:flex md:flex-row md:space-x-4 md:items-start md:space-y-0">
          <div className="flex flex-col items-center md:flex-1">
            <span className="flex justify-center items-center rounded-[50%] h-10 w-10 bg-red-600 text-white text-lg font-bold">
              1
            </span>
            <p className="text-lg font-bold mt-2">Age</p>
            <p className="mt-3">Dashers must be 18 years or older </p>
          </div>

          <div className="flex flex-col items-center md:flex-1">
            <span className="flex justify-center items-center rounded-[50%] h-10 w-10 bg-red-600 text-white text-lg font-bold">
              2
            </span>
            <p className="text-lg font-bold mt-2">Vehicle</p>
            <p className="mt-3">Any car, scooter or bicycle.</p>
          </div>

          <div className="flex flex-col items-center md:flex-1">
            <span className="flex justify-center items-center rounded-[50%] h-10 w-10 bg-red-600 text-white text-lg font-bold">
              3
            </span>
            <p className="text-lg font-bold mt-2">Documentation</p>
            <p className="mt-3">
              You must have the right visa, TFN, ABN, and a police background
              check to be eligible to become a Dasher.
            </p>
          </div>
        </div>
      </div>
      {/* FAQ   */}
      <div
        ref={faqRef}
        className="lg:container lg:mx-auto xl:container xl:mx-auto"
      >
        <div className="mt-12">
          <h1 className="text-center text-3xl font-bold">
            Frequently asked <br /> questions
          </h1>
        </div>

        <div className="mt-8">
          {faqs.map((faq) => (
            <div className="border-b border-gray-300 last:border-b-0 px-4 py-2">
              <FAQ question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
      {/* Contact Form */}
      <div
        ref={contactRef}
        className="bg-rose-50 px-4 pb-16 mt-20 md:flex md:flex-row md:items-start md:justify-start md:space-x-12 xl:ml-60"
      >
        <img
          className="md:block md:w-96 md:h-96"
          src={testimonyImg}
          alt="Testimony description"
        />
        <div>
          <p className="text-center text-neutral-900 font-bold text-2xl mt-6 md:text-start">
            Ready to earn ?
          </p>

          <p className="mt-4 text-base neutral-900">
            Fill in your information here. We will send you the referral link
            and our support team of experienced drivers will have your back.
          </p>

          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <div>
        <a
          className="flex items-center justify-center bg-blue-600 text-white py-4"
          href="https://www.facebook.com/people/Australia-Food-Delivery-Referral-Program/61573376661936/"
        >
          <Facebook className="fill-white" />{" "}
          <span className="uppercase font-bold">Referral Program</span>
        </a>
      </div>
    </div>
  );
}

export default App;
