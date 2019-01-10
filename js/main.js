/* eslint-env browser */

window.addEventListener('load', () => {
  const html = document.querySelector('html');
  html.classList.add('fadedIn');

  const windowHeight = window.innerHeight;
  const logo = document.getElementById('logo');
  const logoTopPosition = logo.getBoundingClientRect().top;
  const logoHeight = logo.height;

  // Helper Functions
  const getCurrentMidLogoPosition = () => {
    const pageTopPosition = window.scrollY;
    return pageTopPosition + logoTopPosition + (logoHeight / 2);
  };

  const changeLogoTo = (colorType) => {
    switch (colorType) {
      case 'hoverLogo':
        logo.src = 'assets/logoPurple.svg';
        logo.style.opacity = 1;
        break;
      case 'lightLogo':
        logo.src = 'assets/logoWhite.svg';
        logo.style.opacity = 0.5;
        break;
      default:
        logo.src = 'assets/logoBlack.svg';
        logo.style.opacity = 0.5;
    }
  };

  const handleChangeLogoSource = (hovered) => {
    const midLogoPosition = getCurrentMidLogoPosition();

    if (hovered) {
      changeLogoTo('hoverLogo');
    } else if (midLogoPosition < windowHeight) {
      changeLogoTo('lightLogo');
    } else {
      changeLogoTo('darkLogo');
    }
  };

  // Event Listeners
  document.addEventListener('scroll', () => handleChangeLogoSource());
  logo.addEventListener('mouseenter', () => handleChangeLogoSource(true));
  logo.addEventListener('mouseleave', () => handleChangeLogoSource());
});
