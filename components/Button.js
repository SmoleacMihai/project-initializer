const MyButton = ({ children, variant, disabled, onClick }) => {
  const buttonClass = `button ${variant}${disabled ? ' button-disabled' : ''}`;

  return `
    <button class="${buttonClass}"${disabled ? ' disabled' : ''} onclick="${onClick}">
      ${children}
    </button>
  `;
};

export default MyButton;