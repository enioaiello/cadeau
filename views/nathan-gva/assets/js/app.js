function runDiaporama(idElement) {
    const elemDiapo = document.getElementById(idElement);
    elemDiapo.append(elemDiapo.firstElementChild);
    setTimeout(() => runDiaporama(idElement), 1000);
  }

  runDiaporama("diapo");