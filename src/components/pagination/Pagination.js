import React from "react";

export const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <div class="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            class="isolate flex flex-row gap-2 -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <div
              onClick={() => {
                if (currentPage > 1) paginate(currentPage - 1);
              }}
              class={`px-2 py-2 text-sm font-bold rounded-4 text-darkGrey border border-paginationBtn cursor-pointer ${
                currentPage == 1 ? `bg-paginationBtn` : `bg-white`
              }`}
            >
              <span class="sr-only">Previous</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#C4CDD5"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div
              onClick={() => paginate(1)}
              className={`px-4 py-2 text-sm font-bold rounded-4 ${
                currentPage == 1 || currentPage == 2
                  ? `text-buttonBlue border-buttonBlue`
                  : `text-darkGrey border-paginationBtn `
              } border cursor-pointer`}
            >
              {currentPage == 1 ? 1 : 2}
            </div>

            <div
              onClick={() => paginate(2)}
              className={`px-4 py-2 text-sm font-bold rounded-4 ${
                currentPage == 3
                  ? `text-buttonBlue border-buttonBlue`
                  : `text-darkGrey border-paginationBtn `
              } border cursor-pointer`}
            >
              {currentPage > 1 ? 3 : 2}
            </div>

            <div className="px-4 py-2 text-sm font-bold rounded-4 text-darkGrey border border-paginationBtn cursor-pointer">
              ...
            </div>

            <div
              className={`px-4 py-2 text-sm font-bold rounded-4 ${
                currentPage == totalPages - 1
                  ? `text-buttonBlue border-buttonBlue`
                  : `text-darkGrey border-paginationBtn `
              } border cursor-pointer`}
            >
              {totalPages - 1}
            </div>

            <div
              className={`px-4 py-2 text-sm font-bold rounded-4 ${
                currentPage == totalPages
                  ? `text-buttonBlue border-buttonBlue`
                  : `text-darkGrey border-paginationBtn `
              } border cursor-pointer`}
            >
              {totalPages}
            </div>

            <div
              href="#"
              class={`px-2 py-2 text-sm font-bold rounded-4 text-darkGrey border border-paginationBtn cursor-pointer ${
                currentPage == totalPages ? `bg-paginationBtn` : `bg-white`
              }`}
              onClick={() => {
                if (currentPage < totalPages) paginate(currentPage + 1);
              }}
            >
              <span class="sr-only">Next</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#C4CDD5"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
