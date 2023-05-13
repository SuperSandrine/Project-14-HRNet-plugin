import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './modal.styles.css';
import CloseIcon from './../assets/closeIcon.svg';
import SpinnerModal from './SpinnerModal';
import PropTypes from 'prop-types';

/**
 * Creation of a modal component with parameters to personalise some functions
 * @param {Object} props - component props
 * @param {(String|Number|Element)} props.children - This add a descriptive paragraph in the modal.
 * @param {Function} props.onClose- OnClose function that permit the modal closure by switching false the showModal state.
 * @param {Boolean} props.showModal - Boolean that determines if the modal should be shown or not thanks to parent state.
 * @param {String} props.title - String adds title to modal
 * @param {Boolean} props.backDropClickAndClose - Boolean that determines if the modal should be closed when the backdrop is clicked.
 * @param {Boolean} props.closeAllModalsBefore - Boolean that determines if all modals should be closed before this modal is shown (close only modals created with the same component, in the case of cascade modal).
 * @param {Boolean} props.fadeIn - Boolean that determines if the modal should fade in when shown.
 * @param {Number} props.animationDuration - This value should be a number in a string type. The duration of the modal fade-in animation and fade-out in seconds.
 * @param {Boolean} props.fadeOut - Boolean that determines if the modal should fade out when closed
 * @param {Object} props.dataHref - The dataHref should provide event.target object from event which turn on the modal. If the event is a click on a tag <a>, then dataHref should be (event.target)
 * @param {string} props.closureButton - Text that appear in the closure button of modal. If it's absent, a default cross button will be displayed instead.
 * @param {String} props.ajaxData - The name of the data to fetch from the URL if the dataHref is an API. Note that it should began with "data.", as "data.name", or "data.phoneNumber".
 * @param {String} props.customButtonColor - The color of the close button and spinner in hexadecimal format, HSL and HSLA format, RGB  and RGBA format and name format
 * @param {Boolean} props.dataHrefIsAnAPI - Boolean that determines if the external link clicked is an API.
 * @returns {JSX.Element|null} The Modal component
 */
const Modal = (props) => {
  const modalRef = useRef(null);
  const [newDataHref, setNewDataHref] = useState(null);
  const {
    children,
    onClose,
    showModal,
    title,
    backDropClickAndClose,
    closeAllModalsBefore,
    fadeIn,
    animationDuration,
    fadeOut,
    dataHref,
    closureButton,
    ajaxData,
    customButtonColor,
    dataHrefIsAnAPI,
  } = props;

  const notFocusable = document.querySelectorAll(
    '#root, #formContainer, header, main, footer, :not(#modal)'
  );

  useEffect(() => {
    if (showModal) {
      setParams();
      setAccessibility();
      setBlocker();
    }
  }, [showModal]);

  /**
   * Sets the parameters for the modal based on the provided configurations from props.
   */
  const setParams = () => {
    if (closeAllModalsBefore) {
      closeAllModals();
    }
    if (dataHref) {
      handleParentConditions();
    }
    if (fadeIn && animationDuration) {
      modalRef.current.parentElement.classList.add('tUv39-modal-fadeIn');
      modalRef.current.parentElement.style.setProperty(
        'animation-duration',
        `${animationDuration}s`
      );
    } else if (fadeIn && !animationDuration) {
      modalRef.current.parentElement.classList.add('tUv39-modal-fadeIn');
      modalRef.current.parentElement.style.setProperty(
        'animation-duration',
        `2s`
      );
    }
    if (customButtonColor) {
      const modal = document.querySelectorAll('.tUv78');
      modal[modal.length - 1].style.setProperty(
        '--tUv39Blue',
        customButtonColor
      );
    }
  };

 /**
 * Sets the blocker to prevent scrolling of the body behind modal.
 */
  const setBlocker = () => {
    document.body.style.overflow = 'hidden';
    modalRef.current.setAttribute('overflow', '');
  };

  /**
 * Sets the accessibility attributes for the modal and element behind, also run keyboard navigation.
 */
  const setAccessibility = () => {
    notFocusable.forEach((element) => {
      element.setAttribute('aria-hidden', true);
    });
    modalRef.current.setAttribute('aria-hidden', false);
    document.addEventListener(
      'keydown',
      handleKeyboardNavigation(event, modalRef.current)
    );
    modalRef.current.focus();
  };
/**
 * Handles the closing of the modal and restores the previous state.
 */
  const handleModalClose = () => {
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleKeyboardNavigation);
    notFocusable.forEach((element) => {
      element.setAttribute('aria-hidden', false);
    });
    if (fadeOut && animationDuration) {
      modalRef.current.parentElement.classList.add('tUv39-modal-fadeOut');
      modalRef.current.parentElement.style.setProperty(
        'animation-duration',
        `${animationDuration}s`
      );
      setTimeout(() => {
        onClose();
      }, animationDuration * 1000 - 100);
    } else if (fadeOut && !animationDuration) {
      modalRef.current.parentElement.classList.add('tUv39-modal-fadeOut');
      modalRef.current.parentElement.style.setProperty(
        'animation-duration',
        `2s`
      );
      setTimeout(() => {
        onClose();
      }, 1900);
    } else {
      onClose();
    }
  };

  /**
 * Handles keyboard navigation within the modal with a focus trap, and eventlistener.
 * @param {KeyboardEvent} event - The keyboard event.
 * @param {HTMLElement} parentElement - This is the parent of elements in the modal, so it refer to the modal container, so called id="modal"
 */
  const handleKeyboardNavigation = (event, parentElement) => {
    event.preventDefault();
    event.stopPropagation();
    const tabbableElementsSelectors = 
    '#dialogTitle, #dialogDesc, #dialogCloseButton, #dialogCloseDefaultButton';
    const allTabbableElements = parentElement.querySelectorAll(
      tabbableElementsSelectors
    );
    const trapFocusInModal = (event, parentElement) => {
      let index = Array.from(allTabbableElements).findIndex(
        (i) => i === parentElement.querySelector(':focus')
      );
      if (event.shiftKey === true) {
        index--;
      } else {
        index++;
      }
      if (index >= allTabbableElements.length) {
        index = 0;
      }
      if (index < 0) {
        index = allTabbableElements.length - 1;
      }
      allTabbableElements[index].focus();
    };

    parentElement.addEventListener('keydown', function (event) {
      event.preventDefault();
      if (event.keyCode === 9) {
        trapFocusInModal(event, parentElement);
        //console.log('où est le focus', document.activeElement);
      } else if (event.keyCode !== 9) {
        event.preventDefault();
        if (event.keyCode === 27) {
          handleModalClose();
        } else if ((document.activeElement.id === 'dialogCloseButton' ||
        document.activeElement.id === 'dialogCloseDefaultButton') &&
      event.keyCode === 13) {
          handleModalClose();
        }
      }
    });
  };
  handleKeyboardNavigation.PropTypes = {
    event: PropTypes.object.isRequired,
    parentElement: PropTypes.object.isRequired,
  };

  /**
   * Handles the conditions from the parent to adjust a modal behavious according the kind of link that display modal.
   */
  const handleParentConditions = () => {
    if (dataHref?.localName.includes('a')) {
      //display ID of the anchor clicked
      if (dataHref.href.includes('#')) {
        const href = decodeURI(dataHref.href);
        const anchor = href.split('#')[1];
        setNewDataHref(anchor);
      }
      if (dataHref.href.includes('#') === false) {
        setNewDataHref(<SpinnerModal />);
        if (!dataHrefIsAnAPI) {
          setNewDataHref(
            <a href={dataHref.href} target="_top">
              {dataHref.href}
            </a>
          );
        }
        if (!/^data\./.test(ajaxData) && dataHrefIsAnAPI) {
          console.error(
            `No or invalid prop 'ajaxData' supplied to 'Modal'. Value must start with 'data.'`
          );
        } else if (/^data\./.test(ajaxData) && dataHrefIsAnAPI) {
          fetch(dataHref.href)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            // eslint-disable-next-line no-unused-vars
            .then((data) => {
              const func = eval(`(${ajaxData})`);
              setNewDataHref(<div>{func}</div>);
            })
            .catch((error) => {
              console.error(
                'Il y a eu un problème avec la requête fetch:',
                error
              );
              setNewDataHref(<div>"fetch return error"</div>);
            });
        }
      }
    }
  };

/**
 * Handles the click on the backdrop and closes the modal if the props is true.
 */ 
    const handleBackDropClick = () => {
    backDropClickAndClose ? handleModalClose() : null;
  };
/** 
  * Closes all modals previously open (from this modal component), except the current one.
  * If you want to close other modal components, you have to add class ('.tUv78) to the div blocker that contain the modal container.
  */
  const closeAllModals = () => {
    const modals = document.querySelectorAll('.tUv78');
    for (let i = 0; i < modals.length - 1; i++) {
      const closeButton = modals[i].querySelector(
        'button#dialogCloseButton, button#dialogCloseDefaultButton'
      );
      closeButton.click();
    }
  };

  return showModal ? (
    <div
      id="modalBlocker"
      className="tUv39-modal-blocker-div tUv78"
      onClick={handleBackDropClick}
    >
      <div
        tabIndex="-1"
        ref={modalRef}
        id="modal"
        role="dialog"
        aria-labelledby="dialogTitle"
        aria-describedby="dialogDesc"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="tUv39-modal-container"
      >
        {title && (
          <h3 className="tUv39-modalclose-h3" id="dialogTitle" tabIndex={1}>
            {title}
          </h3>
        )}
        {(children || newDataHref) && (
          <div
            role="p"
            className="tUv39-modalclose-p"
            id="dialogDesc"
            tabIndex={2}
          >
            {children}
            <br />
            {newDataHref}
          </div>
        )}
        {closureButton ? (
          <button
            onClick={handleModalClose}
            id="dialogCloseButton"
            className="tUv39-modalclose-button"
            aria-label="close modal button"
            tabIndex={3}
            style={{ customButtonColor }}
          >
            {closureButton}
          </button>
        ) : (
          <button
            onClick={handleModalClose}
            id="dialogCloseDefaultButton"            className="tUv39-modalclose-button-default"
            aria-label="close modal button"
            tabIndex={3}
            style={{ customButtonColor }}
          >
            <img src={CloseIcon} width={'20px'} />
          </button>
        )}
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  onClose: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  backDropClickAndClose: PropTypes.bool,
  closeAllModalsBefore: PropTypes.bool,
  fadeIn: PropTypes.bool,
  animationDuration: PropTypes.string,
  fadeOut: PropTypes.bool,
  dataHref: PropTypes.object,
  closureButton: PropTypes.string,
  ajaxData: PropTypes.string,
  customButtonColor: PropTypes.string,
  dataHrefIsAnAPI: PropTypes.bool,
};
Modal.defaultProps = {
  animationDuration: '2',
  backDropClickAndClose: false,
  closeAllModalsBefore: false,
  fadeIn: false,
  fadeOut: false,
  ajaxData: 'data.id',
};

export default Modal;
