(() => {
    for(let i = 1; i <= 100; i++) {
        let result = i;
        if(i % 3 === 0) {
          result = 'Three';
        } else if(i % 5 === 0) {
         result = 'Five';
        }
        if(i % 3 === 0 && i % 5 === 0) {
          result = 'ThreeFive';
        }
        console.log(result)
      }
})();