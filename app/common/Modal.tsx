import React, { FC, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  isShow: boolean;
  handleCloseModal: () => void;
  className?: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({
  isShow,
  handleCloseModal,
  className,
  children,
}) => {
  return (
    <Transition appear show={isShow} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white text-left align-middle transition-all">
                <div
                  className={`flex box-content justify-center items-center ${className}`}
                >
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
