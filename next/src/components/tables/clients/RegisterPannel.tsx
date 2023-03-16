interface RegisterPannelProps {
  setOpen: (value: boolean) => void;
}

const RegisterPannel: React.FC<RegisterPannelProps> = ({ setOpen }) => {
  return (
    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
      <div className="ml-4 mt-2">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Clients
        </h3>
      </div>
      <div className="ml-4 mt-2 flex-shrink-0">
        <button
          type="button"
          className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setOpen(true)}
          data-testid="register-btn"
        >
          Register new client
        </button>
      </div>
    </div>
  );
};

export default RegisterPannel;
