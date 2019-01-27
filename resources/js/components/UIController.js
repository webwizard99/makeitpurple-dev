const UIController = (function(){
  const DOMStrings = {
    main: '#mainContainer'
  }

  return {
    getAllPs: function() {
      const allPs = document.querySelectorAll('p');
      return allPs;
    },

    setPurplePs: function(purplePs) {
      const mainContain = document.querySelector(DOMStrings.main);
      mainContain.innerHTML = purplePs;
    },

    test: function() {
      console.log('UIController');
    }
  }
}());

export default UIController;