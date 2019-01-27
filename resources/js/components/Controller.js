import PurpleProcessor from './PurpleProcessor.js';
import UIController from './UIController.js';

const Controller = (function(purplProcssr, UICtrl){
  
  return {
    makePurplePs: function() {
      const thePs = UICtrl.getAllPs();
      const purplePs = purplProcssr.purplifyThePs(thePs);
      UICtrl.setPurplePs(purplePs);
    },
    
    test: function() {
      console.log('Controller!!');
      purplProcssr.test();
      UICtrl.test();
    }


  }
}(PurpleProcessor, UIController));

export default Controller;