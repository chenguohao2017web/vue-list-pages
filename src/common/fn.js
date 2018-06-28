export function handleUrl() {
  const url = location.href;
  if (url.indexOf("?") > 0) {
    const querystr = url.split("?")[1];
    const obj = {};
    if (querystr.indexOf("&") > 0) {
      const aQuertstr = querystr.split("&");
      for (let i = 0; i < aQuertstr.length; i++) {
        let aItemstr = aQuertstr[i].split("=");
        obj[aItemstr[0]] = aItemstr[1];
      }
    } else {
      let itemstr = querystr.split("=");
      obj[itemstr[0]] = itemstr[1];
    }
    return obj;
  }
}

export function handleDom(el) {
  setTimeout(() => {
    const arrP = el.children
    for(let i = 0;i<arrP.length; i++) {
      const elP = arrP[i]
      elP.style.fontSize = '0.4rem'
      elP.style.lineHeight='1.5'
      elP.style.marginBottom = '0.2667rem'
      elP.style.display = 'flex'
      const arrImg = elP.getElementsByTagName('img')
      for(let i = 0;i<arrImg.length;i++) {
        arrImg[i].style.width = '100%'
        arrImg[i].style.height = 'auto'
      }
      const arrSpan = elP.getElementsByTagName('span')
      for(let i = 0;i<arrSpan.length;i++) {
        arrSpan[i].style.fontSize = '0.3rem'
      }
    }
  }, 50);
}