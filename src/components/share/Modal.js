import { X } from "phosphor-react";
import React from "react";
import video from '../../assets/images/video/video1.mp4'

const Modal = ({setIsModalVisible}) => {
  return (
    <div class="modal fixed z-50 inset-0 flex h-screen w-full items-center justify-center px-4">
      <div class="modal-overlay fixed inset-0 bg-black/40 h-screen w-full items-center justify-center z-30" onClick={() => setIsModalVisible(false)}></div>
      <div class="modal-content max-w-[1100px] h-auto relative z-40">
        <button onClick={() => setIsModalVisible(false)}
          type="button"
          className="close-modal absolute top-3 right-3 z-50 bg-red-600 text-white px-1 pt- text-bold rounded-md"
        >
          {/* <i class="ph-x"></i> */}
          <X size={20} />
        </button>
        <video controls class="w-full h-full rounded-md">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Modal;
