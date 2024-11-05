import { IoCloseOutline } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

const Item = ({ index, activeIndex, setActiveIndex }) => {
  return (
    <div className="py-4">
      <header>
        <button
          onClick={() => {
            setActiveIndex(index);
            activeIndex === index ? setActiveIndex(0) : setActiveIndex(index);
          }}
          className="flex items-center justify-between w-full text-left font-semibold py-2"
        >
          <span className="text-black">
            Are there any fees or commissions in addition to the monthly
            subscription?
          </span>
          <span className="ml-8 self-start">
            {activeIndex === index ? (
              <IoCloseOutline className="text-blue-900 text-2xl" />
            ) : (
              <IoRemove className="text-blue-900 text-2xl" />
            )}
          </span>
        </button>
      </header>
      {activeIndex === index && (
        <section className="text-sm text-slate-600">
          <p className="pb-3">
            If you go over your organization's or user limit, a member of the
            team will reach out about bespoke pricing. In the meantime, our
            collaborative features won't appear in accounts or users that exceed
            the 100-account or 1,000-user limit.
          </p>
        </section>
      )}
    </div>
  );
};

export default Item;
