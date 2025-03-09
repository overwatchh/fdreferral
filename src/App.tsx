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
    <div className="md:container md:mx-auto">
      <div className="bg-red-600 p-3">
        <div className="text-white text-center">
          <p className="text-4xl">Sign-up in minutes, earn within days.</p>
          <p className="text-base mt-4">
            Deliver with DoorDash and get more opportunities to earn
          </p>
        </div>
      </div>
      {/* Why join ?*/}
      <div className="pt-8 flex flex-col space-y-12">
        {reasons.map((reason) => (
          <div className="flex flex-col items-center">
            <span className="text-red-600">{reason.icon}</span>
            <p className="text-lg text-neutral-950 font-bold mt-4">
              {reason.title}
            </p>
            <p className="text-base text-neutral-950 text-center mt-3 mx-12">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
      {/* Testimony */}
      <div className="bg-rose-50 px-4 pb-16 mt-20">
        <img src={testimonyImg} alt="Testimony description" />

        <p className="text-neutral-900 font-bold text-2xl mt-6">
          “The best part is the flexibility of work hours. Being able to decide
          my own schedule is such a wonderful opportunity.”
        </p>

        <div className="text-center mt-4 text-lg font-medium neutral-800">
          <p>Emily</p>
          <p>Earned AU$1500 per week</p>
        </div>
      </div>
      {/* How much can I earn ? */}
      <div ref={howMuchEarnRef} className="mt-12 px-4">
        <h2 className="text-center text-3xl font-bold">
          How much can I earn ?
        </h2>

        <div className="mt-8 text-center">
          <img src={basepayImg} alt="Base pay" />

          <p className="mt-4 text-lg neutral-900 font-bold">Base pay</p>
          <p className="mt-4 text-base neutral-900">
            You’ll always earn <span>Base Pay</span> for any offer accepted on
            DoorDash. Base Pay is calculated based on the estimated time,
            distance, and desirability of the offer.
          </p>
        </div>

        <div className="mt-8 text-center">
          <img src={promotionImg} alt="Base pay" />

          <p className="mt-4 text-lg neutral-900 font-bold">Plus promotion</p>
          <p className="mt-4 text-base neutral-900">
            Promotions like Peak Pay, Challenges, and Delivery Streaks help you
            earn more.
          </p>
        </div>
      </div>
      {/* Gear */}
      <div className="bg-rose-50 px-4 pb-16 mt-20">
        <img src={testimonyImg} alt="Testimony description" />

        <p className="text-center text-neutral-900 font-bold text-2xl mt-6">
          Dasher Gear
        </p>

        <p className="mt-4 text-base neutral-900">
          Since no two people have the same taste in gear, there’s an online
          store so you can get the gear and equipment you want, at less than
          retail. Access items like a hot bag, bike safety kit and mask for
          Dasher safety.
        </p>
      </div>
      {/* Requirements */}
      <div ref={requirementsRef} className="mt-12">
        <h1 className="text-center text-3xl font-bold">Requirements</h1>
        <div className="flex flex-col space-y-8 mt-8 px-4">
          <div className="flex flex-col items-center">
            <span className="flex justify-center items-center rounded-[50%] h-10 w-10 bg-red-600 text-white text-lg font-bold">
              1
            </span>
            <p className="text-lg font-bold mt-2">Age</p>
            <p className="mt-3">Dashers must be 18 years or older </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="flex justify-center items-center rounded-[50%] h-10 w-10 bg-red-600 text-white text-lg font-bold">
              2
            </span>
            <p className="text-lg font-bold mt-2">Vehicle</p>
            <p className="mt-3">
              Any car, scooter or bicycle. No car or bike?{" "}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="flex justify-center items-center rounded-[50%] h-10 w-10 bg-red-600 text-white text-lg font-bold">
              3
            </span>
            <p className="text-lg font-bold mt-2">Documentation</p>
            <p className="mt-3">
              An Australian Business number (ABN), consent to a FREE background
              check and have rights to work in Australia. A full open Australian
              license is optional to access certain offers.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* FAQ   */}
      <div ref={faqRef}>
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
      <div ref={contactRef} className="bg-rose-50 px-4 pb-16 mt-20">
        <img src={testimonyImg} alt="Testimony description" />

        <p className="text-center text-neutral-900 font-bold text-2xl mt-6">
          Ready to earn ?
        </p>

        <p className="mt-4 text-base neutral-900">
          Fill in your information below to get started with DoorDash and unlock
          more earning opportunities.
        </p>

        <ContactForm />
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
