const PurpleProssessor = (function(){
  return {
    purlifyThePs: function(pNodeList) {
      let itInstances = Array.from(pNodeList).map(pNode => {
        const purpleIt = `<span class="purpleIt">it</span>`;
        let purpleNode = pNode.innerHtml.replace(/it/g, purpleIt, 'g');
        return purpleNode;
      });
      return itInstances;
    },
    
    test: function() {
      console.log('Purple Processor!');
    }
  }
}());

export default PurpleProssessor;