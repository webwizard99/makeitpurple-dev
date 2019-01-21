import PurpleProcessor from './PurpleProcessor';
import UIController from './UIController';

const Controller = (function(purplProcssr, UICtrl){
  
  return {
    makePurplePs: function() {
      const thePs = UICtrl.getAllPs();
      const purplePs = purplProcssr.purlifyThePs(thePs);
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