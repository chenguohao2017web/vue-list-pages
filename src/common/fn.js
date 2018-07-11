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
    if (arrP) {
      for (let i = 0; i < arrP.length; i++) {
        const elP = arrP[i]
        elP.style.fontSize = '0.4rem'
        elP.style.lineHeight = '1.5'
        const arrImg = elP.getElementsByTagName('img')
        if (arrImg) {
          for (let i = 0; i < arrImg.length; i++) {
            arrImg[i].style.width = '100%'
            arrImg[i].style.height = 'auto'
            arrImg[i].style.display = 'flex'
          }
        }

        const arrSpan = elP.getElementsByTagName('span')
        if (arrSpan) {
          for (let i = 0; i < arrSpan.length; i++) {
            arrSpan[i].style.fontSize = '0.4rem'
          }
        }

      }
    }

  }, 50);
}

export function redirctUrl() {
  let url = window.location.href
  if(url.indexOf('&from=')) {
    let newUrl = url.split('&from')[0]
    window.open(newUrl,'_search')
    return
  }
}