"use client";
import { IoCloseOutline } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

import { useState } from "react";

const Item = () => {
  const [itemIsOpen, setItemIsOpen] = useState(false);
  return (
    <dl className="divide-y divide-slate-200">
      <div className="py-4">
        <dt>
          <button
            onClick={() => setItemIsOpen(!itemIsOpen)}
            id="faqs-title-02"
            aria-expanded="false"
            aria-controls="faqs-content-02"
            className="flex items-center justify-between w-full text-left font-semibold py-2"
          >
            <span className="text-black">
              Are there any fees or commissions in addition to the monthly
              subscription?
            </span>
            <span className="ml-8 self-start">
              {itemIsOpen ? (
                <IoCloseOutline className="text-blue-900 text-2xl" />
              ) : (
                <IoRemove className="text-blue-900 text-2xl" />
              )}
            </span>
          </button>
        </dt>
        {itemIsOpen && (
          <dd id="faqs-content-02" className="text-sm text-slate-600">
            <p className="pb-3">
              If you go over your organization's or user limit, a member of the
              team will reach out about bespoke pricing. In the meantime, our
              collaborative features won't appear in accounts or users that
              exceed the 100-account or 1,000-user limit.
            </p>
          </dd>
        )}
      </div>
    </dl>
  );
};

export default Item;
