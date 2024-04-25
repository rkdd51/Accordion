import "./AccordionWrapper.css";

const AccordionWrapper = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div class="accordionWrapper">
      <div
        class="title"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        {title}
      </div>
      {isOpen && <div class="body">{body}</div>}
    </div>
  );
};
export default AccordionWrapper;
