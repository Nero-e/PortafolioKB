interface NotificationProps {
  status: string;
  message: string;
  onClose: () => void;
}

export const Notification = ({
  status,
  message,
  onClose,
}: NotificationProps) => {
  return (
    // <div className={`fixed bottom-4 right-4 z-50 p-[1rem] rounded-2xl  ${status === "success" ? "bg-[#f0fdf4]" : "bg-red-500"}`} onClick={onClose}>
    //   {message}
    // </div>
    <div
      onClick={onClose}
      className={`fixed bottom-4 right-4 z-50 p-[1rem] font-satoshi rounded-2xl ${
        status === "success" ? "bg-[#f0fdf4]" : "bg-[#ffecf0]"
      }  `}
    >
      {status === "success" ? (
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#4ade80] w-5 h-5"
            >
              <path
                clipRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="ml-3">
            <h2 className="text-[#166534] tracking-wide leading-4 font-semibold">
              ¡Correo enviado!
            </h2>
            <div>
              <p className="text-[#15803d] mt-2">{message}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FF2058] w-5 h-5"
            >
              <path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z"></path>
            </svg>
          </div>
          <div className="ml-3">
            <h2 className="text-[#c01641] tracking-wide leading-4 font-semibold">
              Error
            </h2>
            <div>
              <p className="text-[#ff4271] mt-2">{message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
