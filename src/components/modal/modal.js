import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button class="buttonf" type="button" onClick={handleClose}>
          Close
        </button>
          <button class="buttonf" type="button" onClick={() => window.alert("Successfully Registed.")}>
          Submit
        </button>
      </section>
    </div>
  );
};

export default Modal;