const PurpleProssessor = (function(){
  const myVariable = 5;
  
  return {
    purplifyThePs: function(pNodeList) {
      let itInstances = Array.from(pNodeList);
      console.log(itInstances);
      let itsPurple = itInstances.map(pNode => {
        const purpleIt = `<span class="purpleIt">it</span>`;
        console.log(pNode.innerHTML);
        let purpleNode = pNode.innerHTML.replace(/it/g, purpleIt, 'g');
        console.log(purpleNode);
        return purpleNode;
      });
      return itsPurple;
    },
    
    test: function() {
      console.log('Purple Processor!');
    }
  }
}());

export default PurpleProssessor;