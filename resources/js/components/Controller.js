import PurpleProcessor from './PurpleProcessor';
import UIController from './UIController';

const Controller = (function(purplProcssr, UICtrl){
  
  return {
    test: function() {
      console.log('Controller!!');
      purplProcssr.test();
      UICtrl.test();
    }
  }
}(PurpleProcessor, UIController));

export default Controller;