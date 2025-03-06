import FAQs from "./components/FAQs";
import testimonyImg from "./images/dx-zoomo-au.jpg";
import basepayImg from "./images/basepay.webp";
import promotionImg from "./images/promotion.webp";
import { reasons } from "./content";
import DoorDash from "./components/icons/DoorDash";

function App() {
  return (
    <div>
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
      <div className="mt-12">
        <h2 className="text-center text-3xl font-bold">
          How much can I earn ?
        </h2>

        <div className="mt-8 text-center">
          <img src={basepayImg} alt="Base pay image" />

          <p className="mt-4 text-lg neutral-900 font-bold">Base pay</p>
          <p className="mt-4 text-base neutral-900">
            You’ll always earn <span>Base Pay</span> for any offer accepted on
            DoorDash. Base Pay is calculated based on the estimated time,
            distance, and desirability of the offer.
          </p>
        </div>

        <div className="mt-8 text-center">
          <img src={promotionImg} alt="Base pay image" />

          <p className="mt-4 text-lg neutral-900 font-bold">Plus promotion</p>
          <p className="mt-4 text-base neutral-900">
            Promotions like Peak Pay, Challenges, and Delivery Streaks help you
            earn more.
          </p>
        </div>
      </div>
      {/* FAQ   */}
      <FAQs />
      {/* Footer */}
      <div>
        <a
          className="flex items-center justify-center bg-red-600 text-white py-4"
          href="https://www.facebook.com/people/Australia-Food-Delivery-Referral-Program/61573376661936/"
        >
          <DoorDash className="fill-white" />{" "}
          <span className="uppercase font-bold">Referral Program</span>
        </a>
      </div>
    </div>
  );
}

export default App;
