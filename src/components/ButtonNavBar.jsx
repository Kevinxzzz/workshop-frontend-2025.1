export default function ButtonNavBar({onClick, setPag}) {
    return (
        <button
          onClick={onClick}
          className="text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 
            font-medium rounded-full w-10 h-10 text-center inline-flex items-center justify-center me-2 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            {setPag}
        </button>
    )
};