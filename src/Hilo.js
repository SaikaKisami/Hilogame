/************************************************************
 *********** created by Satyam in 2023.12.25 ***************
 ***********************************************************/

import * as PIXI from "pixi.js";
import { HiloSmall } from "./HiloSmall.js";
import { changeFlag} from "./utils/gameController.ts";
// import { ScrollBox } from "@pixi/ui";
// import { Graphics } from "pixi.js";
// import { Sprite } from "pixi.js";

export function Hilo(element, elementsmall) {
  let canvasWidth = element.offsetWidth;
  let canvasHeight = element.offsetHeight;
  const hiloSmall = HiloSmall(elementsmall);
  hiloSmall.map();

  const app = new PIXI.Application({
    backgroundAlpha: 0,
    resizeTo: element,
    width: canvasWidth,
    height: canvasWidth,
    antialias: true,
    resolution: 2,
    autoDensity: true,
  });

  document.body.appendChild(app.view);

  let canvasStatus = "WEB";
  //common required
  let displayNum = 1; // currently showed including flower 1-52
  let realNum = 1; // pure real number 1-13
  let gamestatus = "start";
  let totalprofit = 1;
  let beforeRealNum = 1;
  let betresult = "";
  let redrect;
  let symbolK;
  let symbolA;
  let skipbtn;
  let cardbackinit = [];
  let cardcontainer;

  let symbolK_h5;
  let symbolA_h5;

  let higherbet_h5;
  let higherbetdes_h5;
  let lowerbet_h5;
  let lowerbetdes_h5;
  let h5_btnAvailable = false;


  let scaleX = canvasHeight / 500;
  let scaleY = canvasWidth / 840;
  let cardlist = [];
  let cardback;
  let cashOuted = false;


  let realflower = 1; // 0: spade, 1: kroba, 2: heart, 3: diamond
 

  let isOnskip = false;

  initCanvas();

  function initCanvas(){
    drawCardFrame();
    displayNum = generateRandom();
    hiloSmall.init(displayNum, "start", 1);
    setCardInfo(displayNum);
    drawCardContainer();
    drawSkipBtn();
  }

  function setGameStatus(bettype){
    gamestatus = bettype;


    if (bettype == "start") {
      cashOuted = true;
    } 

    if ("skipOnBetting" == bettype && betresult.indexOf("wrong") !== -1) {
      commonAction("start", "vue");
      betresult = "right";
     
    }
    if ("skipOnBetting" == bettype && cashOuted) {
      commonAction("start", "vue");
      cashOuted = false;
    }
  }

  function redrawObjects(reElement, reSmallElement, canvas_Status){
    hiloSmall.redrawObjects(reSmallElement, canvas_Status);
    canvasStatus = canvas_Status;
    canvasWidth = reElement.offsetWidth;
    canvasHeight = reElement.offsetHeight;

    app.renderer.resize(canvasWidth, canvasHeight);

    scaleX = canvasHeight / 500;
    scaleY = canvasWidth / 840;

    if (canvasStatus == 'H5') {
      symbolA.visible = false;
      symbolK.visible = false;

      symbolA_h5.visible = true;
      symbolK_h5.visible = true;

      higherbet_h5.visible = true;
      higherbetdes_h5.visible = true;

      lowerbet_h5.visible = true;
      lowerbetdes_h5.visible = true;

      // canvasHeight = 221;
      // symbolK_h5.scale.set(0.5, 0.5);
      symbolK_h5.x = 15;
      symbolK_h5.y = canvasHeight / 2;
      // symbolA_h5.scale.set(0.5, 0.5);
      symbolA_h5.x = 285;
      symbolA_h5.y = canvasHeight / 2;

      higherbetdes_h5.x = 210;
      higherbetdes_h5.y = canvasHeight * 0.31;
      
      lowerbetdes_h5.x = 210;
      lowerbetdes_h5.y = canvasHeight * 0.7;
      higherbetdes_h5.style.fontSize = (12 * canvasHeight) / 200;
      lowerbetdes_h5.style.fontSize = (12 * canvasHeight) / 200;

      higherbet_h5.y = canvasHeight * 0.08
      lowerbet_h5.y = canvasHeight * 0.53;
      higherbet_h5.x = 170;
      lowerbet_h5.x = 170;

      for (let i = 0; i < 5; i++) {
        cardbackinit[i].x = 110;
        cardbackinit[i].y = canvasHeight * (1.1 - 0.02 * i) / 2;
        cardbackinit[i].scale.set(0.6, 0.6);
      }
      cardbackinit[5].x = 110;
      cardbackinit[5].y = canvasHeight / 2;
      cardbackinit[5].scale.set(0.6, 0.6);
          
      cardcontainer.x = 110;
      cardcontainer.y = canvasHeight / 2;
      cardcontainer.getChildAt(0).scale.set(0.6, 0.6);
      cardcontainer.getChildAt(0).x = 0;
      cardcontainer.getChildAt(0).y = 0;
      
      skipbtn.x = 75;
      skipbtn.y = canvasHeight * 0.23;
      skipbtn.scale.set(0.6, 0.6);
      if (redrect) {
        redrect.clear();
        redrect.lineStyle(3, 0xE9103D);
        redrect.drawRoundedRect(-38, -canvasHeight * 0.26, 76, canvasHeight * 0.53, canvasHeight * 0.02);
      }
    } else {
      symbolA.visible = true;
      symbolK.visible = true;

      symbolA_h5.visible = false;
      symbolK_h5.visible = false;

      higherbet_h5.visible = false;
      higherbetdes_h5.visible = false;

      lowerbet_h5.visible = false;
      lowerbetdes_h5.visible = false;

      symbolK.x = canvasWidth * 0.15;
      symbolK.y = canvasHeight * 1.1 / 2;
      symbolK.scale.set(scaleY, scaleY);
  
      symbolA.x = canvasWidth * 0.85;
      symbolA.y = canvasHeight * 1.1 / 2;
      symbolA.scale.set(scaleY, scaleY);
      
      for (let i = 0; i < 5; i++) {
        cardbackinit[i].x = canvasWidth / 2;
        cardbackinit[i].y = canvasHeight * (1.1 - 0.02 * i) / 2;
        cardbackinit[i].scale.set(scaleX, scaleX);
      }
      cardbackinit[5].x = canvasWidth / 2;
      cardbackinit[5].y = canvasHeight / 2;
      cardbackinit[5].scale.set(scaleX, scaleX);
          
      cardcontainer.x = canvasWidth / 2;
      cardcontainer.y = canvasHeight / 2;
      cardcontainer.getChildAt(0).scale.set(scaleX, scaleX);
      cardcontainer.getChildAt(0).x = 0;
      cardcontainer.getChildAt(0).y = 0;
      
      skipbtn.x = canvasWidth / 2 + canvasHeight * 0.12;
      skipbtn.y = canvasHeight * 0.62 / 2;
      skipbtn.scale.set(scaleX, scaleX);
      if (redrect) {
        redrect.clear();
        redrect.lineStyle(3, 0xE9103D);
        redrect.drawRoundedRect(-canvasHeight * 0.125, -canvasHeight * 0.195, canvasHeight * 0.251, canvasHeight * 0.39, canvasHeight * 0.02);
      }
    }
  }

  function drawCardFrame() {
    const symbolKtexture = PIXI.Texture.from("/symbol_K.svg");
    symbolK = new PIXI.Sprite(symbolKtexture);
    symbolK.anchor.set(0.5);
    symbolK.x = canvasWidth * 0.15;
    symbolK.y = canvasHeight * 1.1 / 2;
    symbolK.scale.set(scaleY, scaleY);
    app.stage.addChild(symbolK);
    const symbolAtexture = PIXI.Texture.from("/symbol_A.svg");
    symbolA = new PIXI.Sprite(symbolAtexture);
    symbolA.anchor.set(0.5);
    symbolA.x = canvasWidth * 0.85;
    symbolA.y = canvasHeight * 1.1 / 2;
    symbolA.scale.set(scaleY, scaleY);
    app.stage.addChild(symbolA);
    for (let i = 0; i < 5; i++) {
      const backtextureinit = PIXI.Texture.from("/cardfront.svg");
      cardbackinit[i] = new PIXI.Sprite(backtextureinit);
      cardbackinit[i].anchor.set(0.5);
      cardbackinit[i].x = canvasWidth / 2;
      cardbackinit[i].y = canvasHeight * (1.1 - 0.02 * i) / 2;
      cardbackinit[i].scale.set(scaleX, scaleX);
      app.stage.addChildAt(cardbackinit[i], i);
    }
    const backtextureinit = PIXI.Texture.from("/cardback.svg");
    cardbackinit[5] = new PIXI.Sprite(backtextureinit);
    cardbackinit[5].anchor.set(0.5);
    cardbackinit[5].x = canvasWidth / 2;
    cardbackinit[5].y = canvasHeight / 2;
    cardbackinit[5].scale.set(scaleX, scaleX);
    app.stage.addChildAt(cardbackinit[5], 5);

    symbolK_h5 = PIXI.Sprite.from('/symbolK_h5.svg');
    symbolA_h5 = PIXI.Sprite.from('/symbolA_h5.svg');
    symbolK_h5.anchor.set(0.5);
    symbolK_h5.scale.set(0.5, 0.5);
    symbolK_h5.x = 15;
    symbolK_h5.y = canvasHeight / 2;
    symbolA_h5.anchor.set(0.5);
    symbolA_h5.scale.set(0.5, 0.5);
    symbolA_h5.x = 285;
    symbolA_h5.y = canvasHeight / 2;
    app.stage.addChild(symbolK_h5);
    app.stage.addChild(symbolA_h5);

    higherbet_h5 = PIXI.Sprite.from('/higher_h5.svg');
    lowerbet_h5 = PIXI.Sprite.from('/lower_h5.svg');
    higherbet_h5.scale.set(0.7, 0.7);
    lowerbet_h5.scale.set(0.7, 0.7);
    higherbet_h5.y = canvasHeight * 0.08
    lowerbet_h5.y = canvasHeight * 0.53;
    higherbet_h5.x = 170;
    lowerbet_h5.x = 170;
    app.stage.addChild(higherbet_h5);
    app.stage.addChild(lowerbet_h5);

    
    higherbet_h5.interactive = true;
    higherbet_h5.cursor = 'pointer';
    higherbet_h5.on('pointerdown', higherbet);

    lowerbet_h5.interactive = true;
    lowerbet_h5.cursor = 'pointer';
    lowerbet_h5.on('pointerdown', lowerbet);

    let higherbettextstyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: (12 * canvasHeight) / 200,
      fontWeight: "bold",
      fill: 0x2B2D1B,
      align: "center"
    });
    higherbetdes_h5 = new PIXI.Text("Higher or\nSame\n90%", higherbettextstyle);
    higherbetdes_h5.anchor.set(0.5, 0.5);
    higherbetdes_h5.x = 250;
    higherbetdes_h5.y = canvasHeight * 0.21;
    app.stage.addChild(higherbetdes_h5);
    let lowerbettextstyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: (12 * canvasHeight) / 200,
      fontWeight: "bold",
      fill: 0xFFFFFF,
      align: "center"
    });
    lowerbetdes_h5 = new PIXI.Text("Lower\n90%", lowerbettextstyle);
    lowerbetdes_h5.anchor.set(0.5, 0.5);
    lowerbetdes_h5.x = 250;
    lowerbetdes_h5.y = canvasHeight * 0.6;
    app.stage.addChild(lowerbetdes_h5);

    higherbet_h5.alpha = 0.5;
    lowerbet_h5.alpha = 0.5;
    lowerbetdes_h5.alpha = 0.5;
    higherbetdes_h5.alpha = 0.5;

  }

  function h5_betbtnSetOpacity(flag){
    h5_btnAvailable = flag;

    if (h5_btnAvailable) {
      higherbet_h5.alpha = 1;
      lowerbet_h5.alpha = 1;
      lowerbetdes_h5.alpha = 1;
      higherbetdes_h5.alpha = 1;
    } else {
      higherbet_h5.alpha = 0.5;
      lowerbet_h5.alpha = 0.5;
      lowerbetdes_h5.alpha = 0.5;
      higherbetdes_h5.alpha = 0.5;
    }
  }

  function generateRandom(){
    return Math.floor(Math.random() * 52) + 1;
  }

  function setCardInfo(num) {
    beforeRealNum = realNum;
    realNum = displayNum % 13 + 1;

    realflower = Math.floor((displayNum  - 1) / 13);
  }

  function drawCardContainer(){
    cardcontainer = new PIXI.Container();
    if (canvasStatus == 'WEB'){
      cardcontainer.x = canvasWidth / 2;
    } else {
      cardcontainer.x = 110;
    }
    cardcontainer.y = canvasHeight / 2;
    
    const basicflowers = [
      "spade",
      "kroba",
      "heart",
      "diamond"
    ];
    let whiterect = PIXI.Sprite.from('/cards/' + basicflowers[realflower] + '(' + realNum + ').svg');
    whiterect.anchor.set(0.5);
    if (canvasStatus == 'WEB') {
      whiterect.scale.set(scaleX, scaleX);
    } else {
      whiterect.scale.set(0.6, 0.6);
    }
    whiterect.x = 0;
    whiterect.y = 0;
    cardcontainer.addChild(whiterect);

    if (betresult.indexOf("wrong") !== -1) {
      redrect = new PIXI.Graphics();
      redrect.lineStyle(3, 0xE9103D);
      if (canvasStatus == 'WEB'){
        redrect.drawRoundedRect(-canvasHeight * 0.125, -canvasHeight * 0.195, canvasHeight * 0.251, canvasHeight * 0.39, canvasHeight * 0.02);
      } else {
        redrect.drawRoundedRect(-38, -canvasHeight * 0.26, 76, canvasHeight * 0.53, canvasHeight * 0.02);
      }
      cardcontainer.addChild(redrect);
    }
    
    app.stage.addChildAt(cardcontainer, 6);
    cardlist.push({
      container : cardcontainer,
      num : realNum,
      flower : realflower
    });
    if (gamestatus != "start"){
      const backtexture = PIXI.Texture.from("/cardback.svg");
      cardback = new PIXI.Sprite(backtexture);
      cardback.anchor.set(0.5);
      cardback.y = canvasHeight / 2;

      if (canvasStatus == 'WEB'){
        cardback.x = canvasWidth / 2;
        cardback.scale.set(scaleX, scaleX);
      } else {
        cardback.x = 110;
        cardback.scale.set(0.6, 0.6);
      }
      
      app.stage.addChildAt(cardback, 7);
    }
    updateBtnDes(realNum);
  }
  
  function drawSkipBtn() {
    skipbtn = PIXI.Sprite.from('/skip.svg');
    skipbtn.anchor.set(0.5);
    skipbtn.x = canvasWidth / 2 + canvasHeight * 0.12;
    skipbtn.y = canvasHeight * 0.62 / 2;
    skipbtn.scale.set(scaleX, scaleX);
    skipbtn.interactive = true;
    skipbtn.cursor = 'pointer';
    skipbtn.on('pointerdown', onSkipBtnClick);

    app.stage.addChild(skipbtn);
  }

  let ticker = PIXI.Ticker.shared;
  let elapsed = 0;
  let rotateBool = true;

  function higherbet(){
    if (h5_btnAvailable){
      commonAction("higher", "pixi");
    }
  }

  function lowerbet(){
    if (h5_btnAvailable){
      commonAction("lower", "pixi");
    }
  }
  function commonAction(bettype, from){
    if (isOnskip) return;
    isOnskip = true;

    displayNum = generateRandom();
    setCardInfo(displayNum);
    betresult = getBetResult(beforeRealNum, realNum, bettype);
    
    totalprofit = getTotalProfit(beforeRealNum, betresult, bettype);


    hiloSmall.drawCard(betresult, displayNum, bettype, totalprofit);

    drawCardContainer();
    animate();
  }

  function getTotalProfit(num, result, bettype) {
    let res = result + "";
    if (res.indexOf("right") !== -1) {
      let profit = calcProfit(num);
      if (bettype == "higher") {
        return profit.higher * totalprofit;
      }
      if (bettype == "lower") {
        return profit.lower * totalprofit;
      }
    }
    if (res.indexOf("wrong") !== -1) {
      return 0;
    }
    if (res == "skiponbetting"){
      return totalprofit;
    }
    if (res == "start") {
      return 1;
    }
  }
  function onSkipBtnClick()
  {
    commonAction(gamestatus, "pixi");
  }

  function animate(){
    elapsed = 0;
    if (rotateBool) {
      ticker.add(updateLeft);
      rotateBool = !rotateBool;
    } else {
      ticker.add(updateRight);
      rotateBool = !rotateBool;
    }
  }

  function updateLeft(delta) {
    // Calculate the progress of the animation
    elapsed = elapsed + delta * 0.06; 
    cardlist[0].container.rotation = Math.PI * 0.7 * elapsed;
    if (canvasStatus == 'WEB') {
      cardlist[0].container.position.x = canvasWidth / 2 + (canvasWidth * 0.2 - canvasWidth / 2) * elapsed;
    } else {
      cardlist[0].container.position.x = 110 + (70 - 110) * elapsed;
    }
    cardlist[0].container.position.y = canvasHeight * 0.9 / 2 + (- canvasHeight * 0.35 - canvasHeight * 0.9 / 2) * elapsed;
    if (elapsed >= 1) {
      let currentCard = cardlist[0];
      app.stage.removeChild(currentCard);
      cardlist.shift();
      currentCard.container.destroy();
      if (gamestatus != "start"){
        elapsed = 0;
        cardlist[0].container.visible = false;
        ticker.add(flipCardBack);
      } else {
        isOnskip = false;
      }
      ticker.remove(updateLeft);
      
    }
  }

  function updateRight(delta) {
    // Calculate the progress of the animation
    elapsed = elapsed + delta * 0.06; 
    cardlist[0].container.rotation = -Math.PI * 0.4 * elapsed;
    if (canvasStatus == 'WEB') {
      cardlist[0].container.position.x = canvasWidth / 2 + (canvasWidth * 0.8 - canvasWidth / 2) * elapsed;
    } else {
      cardlist[0].container.position.x = 110 + (150 - 110) * elapsed;
    }
    cardlist[0].container.position.y = canvasHeight * 0.9 / 2 + (- canvasHeight * 0.35 - canvasHeight * 0.9 / 2) * elapsed;
    if (elapsed >= 1) {
      let currentCard = cardlist[0];
      app.stage.removeChild(currentCard);
      cardlist.shift();
      currentCard.container.destroy();
      if (gamestatus != "start"){
        elapsed = 0;
        cardlist[0].container.visible = false;
        ticker.add(flipCardBack);
      } else {
        isOnskip = false;
      }
      ticker.remove(updateRight);
    }
  }

  function flipCardBack(delta){
    elapsed = Math.min(1, elapsed + delta * 0.15);
    if (canvasStatus == 'WEB') {
      cardback.scale.set(scaleX + (0 - scaleX) * elapsed, scaleX);
    } else {
      cardback.scale.set(0.6 + (0 - 0.6) * elapsed, 0.6);
    }
    if (elapsed >= 1) {
      app.stage.removeChild(cardback);
      cardback.destroy();
      elapsed = 0;
      cardlist[0].container.visible = true;
      ticker.add(flipCard);
      ticker.remove(flipCardBack);
    }
  }

  function flipCard(delta){
    elapsed = Math.min(3, elapsed + delta * 0.15);
    if (elapsed >= 1) {
      cardlist[0].container.scale.set(1, 1);
    } else {
      cardlist[0].container.scale.set(elapsed, 1);
    }
    if (elapsed >= 3) {
      isOnskip = false;
      if (betresult.indexOf("wrong") !== -1) {
        changeFlag();
        gamestatus = "start";
        totalprofit = 1;
      }

      ticker.remove(flipCard);
    }
  }

  function calcProfit(num) {
    let higherprofit;
    let lowerprofit;
    let higherprob;
    let lowerprob;

    if (num == 1) {
      lowerprob = (4 * 100 / 52).toFixed(2);
      higherprob = 100 - lowerprob;
    } else if (num == 13) {
      higherprob = (4 * 100 / 52).toFixed(2);
      lowerprob = 100 - higherprob;
    } else {
      higherprob = ((13 - num + 1) * 100 / 13).toFixed(2);
      lowerprob = (num * 100 / 13).toFixed(2);
    }

    higherprofit = (13.94234 - higherprob * 0.13944).toFixed(2);
    lowerprofit = (13.94234 - lowerprob * 0.13944).toFixed(2);
    return {higher: higherprofit, lower: lowerprofit};
  }

  function updateBtnDes(num){
    let higherprofit;
    let lowerprofit;
    let higherprob;
    let lowerprob;

    let higherHtml;
    let lowerHtml;

    let higherdes;
    let lowerdes;

    if (num == 1) {
      lowerprob = (4 * 100 / 52).toFixed(2);
      higherprob = 100 - lowerprob;
      higherHtml = '<div>Higher&nbsp;&nbsp;</div><div><img src="/icons/high.svg" /></div><div>&nbsp;&nbsp;' + higherprob + '%</div>';
      lowerHtml = '<div>Same&nbsp;&nbsp;</div><div><img src="/icons/lowequal.svg" /></div><div>&nbsp;&nbsp;' + lowerprob + '%</div>';

      higherdes = 'Higher\n' + higherprob + '%';
      lowerdes = 'Same\n' + lowerprob + '%';
    } else if (num == 13) {
      higherprob = (4 * 100 / 52).toFixed(2);
      lowerprob = 100 - higherprob;

      higherHtml = '<div>Same&nbsp;&nbsp;</div><div><img src="/icons/highequal.svg" /></div><div>&nbsp;&nbsp;' + higherprob + '%</div>';
      lowerHtml = '<div>Lower&nbsp;&nbsp;</div><div><img src="/icons/low.svg" /></div><div>&nbsp;&nbsp;' + lowerprob + '%</div>';

      higherdes = 'Same\n' + higherprob + '%';
      lowerdes = 'Lower\n' + lowerprob + '%';
    } else {
      higherprob = ((13 - num + 1) * 100 / 13).toFixed(2);
      lowerprob = (num * 100 / 13).toFixed(2);

      higherHtml = '<div>Higher or Same&nbsp;&nbsp;</div><div><img src="/icons/high.svg" /></div><div>&nbsp;&nbsp;' + higherprob + '%</div>';
      lowerHtml = '<div>Lower or Same&nbsp;&nbsp;</div><div><img src="/icons/low.svg" /></div><div>&nbsp;&nbsp;' + lowerprob + '%</div>';

      higherdes = 'Higher or\nSame\n' + higherprob + '%';
      lowerdes = 'Lower or\nSame\n' + lowerprob + '%';
    }

    higherprofit = (13.94234 - higherprob * 0.13944).toFixed(2);
    lowerprofit = (13.94234 - lowerprob * 0.13944).toFixed(2);
    
    higherbetdes_h5.text = higherdes;
    lowerbetdes_h5.text = lowerdes;

    if (canvasStatus == 'WEB') {
      document.getElementById("profithigerdes").innerText = "Profit Higher (" + higherprofit + "x)";
      document.getElementById("profitlowerdes").innerText = "Profit Lower (" + lowerprofit + "x)";
    }

    if (totalprofit == 1) {
      document.getElementById("totalprofitdes").innerText = "Total Profit (1.00x)";
    } else if (totalprofit == 0) {
      document.getElementById("totalprofitdes").innerText = "Total Profit (0.00x)";
    } else {
      document.getElementById("totalprofitdes").innerText = "Total Profit (" + totalprofit.toFixed(2) + "x)";
    }

    if (canvasStatus == 'WEB') {
      document.getElementById("higherbetdes").innerHTML = higherHtml;
      document.getElementById("lowerbetdes").innerHTML = lowerHtml;
    }
    
  }

  function getBetResult(beforeRealNum, num, bettype){
    if (bettype == "start") return "start";
    if (bettype == "skipOnBetting") return "skiponbetting";
    if (bettype == "higher") {
      if (beforeRealNum == 1) {
        if (beforeRealNum == num) {
          return "higherwrong";
        } else {
          return "higherright";
        }
      } else if (beforeRealNum == 13) {
        if (beforeRealNum == num) {
          return "sameright";
        } else {
          return "samewrong"
        }
      } else {
        if (num >= beforeRealNum) {
          return "highersameright";
        } else {
          return "highersamewrong";
        }
      }
    } else {
      if (beforeRealNum == 1) {
        if (beforeRealNum == num) {
          return "sameright";
        } else {
          return "samewrong";
        }
      } else if (beforeRealNum == 13) {
        if (beforeRealNum == num) {
          return "lowerwrong";
        } else {
          return "lowerright"
        }
      } else {
        if (num <= beforeRealNum) {
          return "lowersameright";
        } else {
          return "lowersamewrong";
        }
      }
    }

    
  }

  element.appendChild(app.view);


  function map() {
    app.stage.position._x = 0;
    let scale = 1;
    app.stage.scale.set(scale);
  }

  return {
    map,
    drawSkipBtn,
    setGameStatus,
    commonAction,
    redrawObjects,
    h5_betbtnSetOpacity,
    totalprofit,
    
  };
}

