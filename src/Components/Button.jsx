import React from "react";

const Button = ({ page, setPage }) => {
  function clickHandler() {
    if (page != 1) {
      setPage(page - 1);
    }
  }
  return (
    <>
      <div className="flex justify-center mb-[-40px] gap-0">
        {page > 1 && (
          <button
            className="bg-white p-4 rounded-xl hover:font-semibold text-4xl"
            onClick={clickHandler}
          >
            &#60;
          </button>
        )}

        <button className="bg-white p-4 rounded-xl">Page {page}</button>
        <button
          className=" bg-white p-4 rounded-xl hover:font-semibold text-4xl"
          onClick={() => setPage(page + 1)}
        >
          &#62;
        </button>
      </div>
    </>
  );
};

export default Button;
