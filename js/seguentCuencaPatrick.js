function passaSeguentPCL(objRebut){
    let idObjPregAct = objRebut.parentElement.parentElement.id;
    let colArticles = document.getElementsByTagName("article");
    let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregSeg = colArticles[i+1].id;
        break;
      };
    }
    
    amagaElementPCL(idObjPregAct);
    mostraElementPCL(idObjPregSeg);
  }


  function mostraElementPCL(idRebut){
    document.getElementById(idRebut).classList.add("elementVisiblePCL");
    document.getElementById(idRebut).classList.remove("elementOcultPCL");
  }

  function amagaElementPCL(idRebut){
    document.getElementById(idRebut).classList.remove("elementVisiblePCL");
    document.getElementById(idRebut).classList.add("elementOcultPCL");
  }
