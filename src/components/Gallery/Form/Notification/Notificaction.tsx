interface NotificationProps {
  status: string;
  message: string;
  onClose: () => void;
}

export const Notification = ({ status ,message, onClose }: NotificationProps) => {

  return (
    <div className={`fixed bottom-4 right-4 z-50 p-[1rem]  ${status === "success" ? "bg-green-500" : "bg-red-500"}`} onClick={onClose}>
      {message}
    </div>
  );
};
