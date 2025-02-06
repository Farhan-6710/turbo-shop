import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react"; // Import CheckCircle icon from Lucide

interface NotificationPopupProps {
  message: string;
  onClose: () => void;
  handleConfirmRemove?: () => void;
  handleCancelRemove?: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({
  message,
  onClose,
  handleConfirmRemove,
  handleCancelRemove,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Delay the onClose callback to let the slide out animation complete
    }, 10000); // Popup duration

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-8 inset-x-0 flex justify-center z-50 mx-2 duration-300 ${
        visible ? "popup-enter" : "popup-exit"
      }`}
      role="alert"
    >
      <div
        className={`bg-whiteTwo dark:bg-blackTwo text-blackTwo dark:text-whiteTwo px-6 py-4 rounded-lg shadow-lg transition-all duration-300 border border-gray-200 dark:border-stone-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row text-center gap-2 lg:gap-0 justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full mr-4">
              <CheckCircle size={24} />
            </div>
          </div>
          <div className="mr-4 text-lg">
            <span>{message}</span>
          </div>
          <div className="flex justify-center items-center text-center sm:text-left">
            <div className="flex gap-4 justify-center items-center w-full">
              <button
                className="text-blackTwo bg-whiteTwo dark:text-white dark:bg-blackTwo border border-gray-200 dark:border-stone-800 px-4 py-2 w-24 rounded"
                onClick={handleConfirmRemove} // Confirm removal
              >
                Yes
              </button>
              <button
                className="text-blackTwo bg-whiteTwo dark:text-white dark:bg-blackTwo border border-gray-200 dark:border-stone-800 px-4 py-2 w-24 rounded"
                onClick={handleCancelRemove} // Cancel removal
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;

