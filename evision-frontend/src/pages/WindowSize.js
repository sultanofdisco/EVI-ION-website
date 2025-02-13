export function WindowSize(standardWidth,standardHeight,gubun,android) {
    const body = document.querySelector("body");
    const root = document.querySelector("#Range");
   
      root.style.width = `${standardWidth}px`;
      root.style.height = `${standardHeight}px`;
   
     
      let width = body.clientWidth;
      let height = (width * standardHeight) / standardWidth;
  
      if (height > body.clientHeight) {
        height = body.clientHeight;
        width = (height * standardWidth) / standardHeight;
  
        root.style.zoom = width / standardWidth;
   
      }
      else
      {
   
          root.style.zoom = height / standardHeight;
      }
   
    
  }
