import * as PIXI from "pixi.js";
import { ScrollBox } from "@pixi/ui";
// import { ScrollBox } from "./ScrollBox";
// import { Graphics } from "pixi.js";

export function HiloSmall(element) {
  let canvasWidth = element.offsetWidth;
  let canvasHeight = element.offsetHeight;

  const app = new PIXI.Application({
    backgroundAlpha: 0,
    resizeTo: element,
    width: canvasWidth,
    height: canvasHeight,
    antialias: true,
    resolution: 2,
    autoDensity: true,
  });

  document.body.appendChild(app.view);

  let cardlist = [];
  let scaleX = canvasHeight / 275;
  let scaleY = canvasHeight / 275;
  let gamestatus;
  let scrollcontainer;
  let canvasStatus = 'WEB';
  
  let betresult = "";

  function init(num) {
    drawScrollbox();
    drawCard(num, num, "start", 1);
  }

  function redrawObjects(reElement, canvas_Status){
    canvasStatus = canvas_Status;
    canvasWidth = reElement.offsetWidth;
    canvasHeight = reElement.offsetHeight;

    app.renderer.resize(canvasWidth, canvasHeight);

    scaleX = canvasHeight / 275;
    scaleY = canvasHeight / 275;

    
    
    if (canvasStatus == 'WEB') {
      scrollcontainer.init({
        type: "horizontal",
        width: canvasWidth,
        height: canvasHeight,
        vertPadding: canvasHeight * 0.425,
        horPadding: canvasHeight * 0.285,
        elementsMargin: -canvasHeight * 0.1
      });
      for (let i = 0; i < scrollcontainer.items.length; i++) {
        if (i == 0) {
          // scrollcontainer.items[i].getChildAt(0).width = canvasHeight * 0.34;
          // scrollcontainer.items[i].getChildAt(0).height = canvasHeight;


          scrollcontainer.items[i].getChildAt(1).scale.set(scaleX, scaleY);
          // scrollcontainer.items[i].getChildAt(1).x = 0;
          // scrollcontainer.items[i].getChildAt(1).y = 0;

          // scrollcontainer.items[i].getChildAt(2).x = - canvasHeight  * 0.215;
          // scrollcontainer.items[i].getChildAt(2).y = canvasHeight * 0.38;
          // scrollcontainer.items[i].getChildAt(2).width = canvasHeight * 0.43;
          // scrollcontainer.items[i].getChildAt(2).height = canvasHeight * 0.15;

          // scrollcontainer.items[i].children.forEach(child => {
          //   if (child instanceof PIXI.Text) {
          //     // Modify the font size for text objects
          //     child.style.fontSize = (12 * canvasHeight) / 150;
          //     child.y = canvasHeight * 0.45;
          //     // Optionally, update the text's texture
          //     child.updateText();
          //   }
          // });
          // // scrollcontainer.items[i].children.find((text) => text.text !== "Hello").style.fontSize = (12 * canvasHeight) / 150;
          // scrollcontainer.items[i].children.find((text) => text.text !== "Hello").x = 0;
          // scrollcontainer.items[i].children.find((text) => text.text !== "Hello").y = canvasHeight * 0.45;

        } else {
          scrollcontainer.items[i].getChildAt(0).scale.set(scaleX, scaleY);
          // scrollcontainer.items[i].getChildAt(0).x = 10;
          // scrollcontainer.items[i].getChildAt(0).y = -canvasHeight * 0.85 / 2;

            // scrollcontainer.items[i].getChildAt(1).x = - canvasHeight  * 0.215;
            // scrollcontainer.items[i].getChildAt(1).y = canvasHeight * 0.38;
            // scrollcontainer.items[i].getChildAt(1).width = canvasHeight * 0.43;
            // scrollcontainer.items[i].getChildAt(1).height = canvasHeight * 0.15;

            // scrollcontainer.items[i].children.find((text) => text.text !== "Hello").x = 0;
            // scrollcontainer.items[i].children.find((text) => text.text !== "Hello").y = canvasHeight * 0.45;
        }
      }
    } else {
      console.log("sniper5165561321321");
      scrollcontainer.init({
        type: "horizontal",
        width: canvasWidth,
        height: canvasHeight,
        vertPadding: canvasHeight * 0.425,
        horPadding: canvasHeight * 0.285,
        elementsMargin: -canvasHeight * 0.1
      });
      console.log(scrollcontainer.items.length);
      for (let i = 0; i < scrollcontainer.items.length; i++) {
        console.log("innnerenennenen");
        if (i == 0) {
          scrollcontainer.items[i].getChildAt(1).scale.set(0.3, 0.35);

        } else {
          scrollcontainer.items[i].getChildAt(0).scale.set(0.3, 0.35);
        }
      }
    }
    
  }

  function drawScrollbox() {
    scrollcontainer = new ScrollBox({
      type: "horizontal",
      width: canvasWidth,
      height: canvasHeight,
      vertPadding: canvasHeight * 0.425,
      horPadding: canvasHeight * 0.285,
      elementsMargin: -canvasHeight * 0.1
     
    });
    app.stage.addChildAt(scrollcontainer, 0);
    
  }

  function drawCard(result, displayNum, bottomtype, totalprofit) {
    gamestatus = bottomtype;
    let realNum = displayNum % 13 + 1;
    let realflower = Math.floor((displayNum - 1) / 13);

    betresult = result + "";

    const basicflowers = [
      "spade",
      "kroba",
      "heart",
      "diamond"
    ];    

    let cardcontainer = new PIXI.Container();
    cardcontainer.x = canvasWidth * 1.05;
    cardcontainer.y = canvasHeight * 0.85 / 2;

    let whiterect = PIXI.Sprite.from('/cards/' + basicflowers[realflower] + '(' + realNum + ').svg');
    whiterect.anchor.set(0.5);
    console.log("hhhh " + canvasStatus);
    if (canvasStatus == 'WEB'){
      whiterect.scale.set(scaleX, scaleY);
    } else {
      whiterect.scale.set(0.3, 0.35);
    }
    whiterect.x = 0;
    whiterect.y = 0 ;

    cardcontainer.addChild(whiterect);

    let bottomcontainer = new PIXI.Container();
    bottomcontainer.x = canvasWidth * 1.1;
    bottomcontainer.y = canvasHeight * 0.85 / 2;
    let bottomcolor;
    let bottomtextcolor;
    let bottomtextstring;
    if (bottomtype == "start") {
      bottomcolor = 0x00E700;
      bottomtextcolor = '#013E01';
      bottomtextstring = "Start Card";

      scrollcontainer._trackpad.xAxis.value = 0;
      scrollcontainer._trackpad.yAxis.value = 0; 
    } else if (bottomtype == "skipOnBetting"){
      bottomcolor = 0x00E700;
      bottomtextcolor = '#013E01';
      bottomtextstring = totalprofit.toFixed(2) + "x";
    }
    if (betresult.indexOf("right") !== -1) {
      bottomcolor = 0x00E700;
      bottomtextcolor = '#013E01';
      bottomtextstring = totalprofit.toFixed(2) + "x";
    }
    if (betresult.indexOf("wrong") !== -1) {
      bottomcolor = 0xE9103D;
      bottomtextcolor = '#2F030C';
      bottomtextstring = "0.00x";
    }
    //#E9103D : red(#2F030C), #00E700: green(#013E01)
    const cardbottom = new PIXI.Graphics();
    cardbottom.beginFill(bottomcolor);
    cardbottom.drawRoundedRect(
      0,
      0,
      canvasHeight * 0.43,
      canvasHeight * 0.15,
      2
    );
    cardbottom.x = - canvasHeight  * 0.215;
    cardbottom.y = canvasHeight * 0.38;
    bottomcontainer.addChild(cardbottom);
   
    let backcardcontainer = new PIXI.Container();
    let resultsymbolcontainer = new PIXI.Container();
    backcardcontainer.x = canvasWidth * 1.05;
    backcardcontainer.y = canvasHeight * 0.85 / 2;
    resultsymbolcontainer.x = canvasWidth * 1.05;
    resultsymbolcontainer.y = canvasHeight * 0.7 / 2;
    

    let bottomtextstyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: (12 * canvasHeight) / 150,
      fontWeight: "bold",
      fill: bottomtextcolor,
    });
    const bottomtext = new PIXI.Text(bottomtextstring, bottomtextstyle);
    bottomtext.anchor.set(0.5);
    bottomtext.x = 0;
    bottomtext.y = canvasHeight * 0.45;
    bottomcontainer.addChild(bottomtext);
    app.stage.addChildAt(cardcontainer, 1);
    app.stage.addChildAt(bottomcontainer, 2);

    if (bottomtype != "start"){
      let backcard = PIXI.Sprite.from('/cardback.svg');
      backcard.anchor.set(0.5);
      backcard.scale.set(scaleX, scaleY);
      backcard.x = 0;
      backcard.y = canvasHeight * 0.035 / 2;
      backcardcontainer.addChild(backcard);
      app.stage.addChildAt(backcardcontainer, 3);

      let resultsymbol = PIXI.Sprite.from('/' + betresult + '.svg');
      resultsymbol.anchor.set(0.5);
      resultsymbol.scale.set(2 * scaleX, 2 * scaleY);
      resultsymbol.x = - canvasHeight * 0.24;
      resultsymbol.y = canvasHeight * 0;
      resultsymbolcontainer.addChild(resultsymbol);
   
      app.stage.addChildAt(resultsymbolcontainer, 4);
      resultsymbolcontainer.visible = false;
    }
    
    cardcontainer.visible = false;
    bottomcontainer.visible = false;
    
    cardlist.push({
      container: cardcontainer,
      bottom: bottomcontainer,
      back: backcardcontainer,
      result: resultsymbolcontainer,
      bettype: bottomtype,
    });

    if (gamestatus == "start" && cardlist.length > 1){
      for (let j = 0; j < (cardlist.length - 1); j++) {
        scrollcontainer.removeItems();
      }
      let i = 0;
      for (; i < (cardlist.length - 1);) {
        let currentCard = cardlist[0];
        app.stage.removeChild(currentCard.container);
        app.stage.removeChild(currentCard.bottom);

        if (currentCard.bettype != "start") {
          app.stage.removeChild(currentCard.result);
        }
        cardlist.shift();
        currentCard.container.destroy();
        currentCard.bottom.destroy();
        if (currentCard.bettype != "start") {
          currentCard.result.destroy();
        }
        if (cardlist.length == 1) break;
      }
    
    }
    if (gamestatus == "start") {
      cardlist[0].container.visible = true;
      cardlist[0].bottom.visible = true;
    }

    animate();
  }
  

  let ticker = PIXI.Ticker.shared;
  let elapsed = 0;
  function animate(){
    elapsed = 0;
    ticker.add(update);
  }

  function update(delta){
    elapsed = Math.min(1, elapsed + delta * 0.06); 
    if (gamestatus == "start"){
      cardlist[cardlist.length - 1].container.position.x = canvasWidth * 1.1 + (canvasHeight * 0.25 - canvasWidth * 1.1) * elapsed;
      cardlist[cardlist.length - 1].bottom.position.x = canvasWidth * 1.1 + (canvasHeight * 0.25 - canvasWidth * 1.1) * elapsed;
      // cardlist[cardlist.length - 1].result.position.x = canvasWidth * 1.1 + (canvasHeight * 0.25 - canvasWidth * 1.1) * elapsed;
    }
    else {
      cardlist[cardlist.length - 1].back.position.x = canvasWidth * 1.1 + (canvasHeight * 0.25 + canvasHeight * 0.48 * (cardlist.length - 1) - canvasWidth * 1.1) * elapsed;
      cardlist[cardlist.length - 1].container.position.x = canvasWidth * 1.1 + (canvasHeight * 0.25 + canvasHeight * 0.48 * (cardlist.length - 1) - canvasWidth * 1.1) * elapsed;
      cardlist[cardlist.length - 1].bottom.position.x = canvasWidth * 1.1 + (canvasHeight * 0.25 + canvasHeight * 0.48 * (cardlist.length - 1) - canvasWidth * 1.1) * elapsed;
      cardlist[cardlist.length - 1].result.position.x = canvasWidth * 1.1 + (canvasHeight * 0.25 + canvasHeight * 0.48 * (cardlist.length - 1) - canvasWidth * 1.1) * elapsed;
    }
    if (elapsed >= 1) {
      if (gamestatus != "start") {
        elapsed = 0;
        ticker.add(flipCardBack);
      } else {
        let whole = new PIXI.Container();
        whole.position.x = 50;
        whole.position.y = 0;
        // whole.width = 1;
        // whole.height = canvasHeight;
        // cardlist[cardlist.length - 1].result.visible = true;
        const temp = new PIXI.Graphics();
        // temp.drawRect(0, 0, canvasHeight * 0.34, canvasHeight);
        temp.beginFill(0x0A1923).drawRect(0, 0, canvasHeight * 0.34, canvasHeight);
        // scrollcontainer.addItem(temp);
        whole.addChild(temp);
        if (canvasStatus == 'H5') {
          cardlist[cardlist.length - 1].container.getChildAt(0).scale.set(0.3, 0.35);
        }
        whole.addChild(cardlist[cardlist.length - 1].container.getChildAt(0));
        whole.addChild(cardlist[cardlist.length - 1].bottom.getChildAt(0));
        whole.addChild(cardlist[cardlist.length - 1].bottom.children.find((text) => text.text !== "Hello"));
        // whole.addChild(cardlist[cardlist.length - 1].bottom.getChildAt(1));

        // whole.width = 72.39;
        console.log("start " + whole.width);
        console.log(canvasStatus);
        // whole.addChild(cardlist[cardlist.length - 1].result);

        // cardlist[cardlist.length - 1].container.addChild(cardlist[cardlist.length - 1].bottom)
        // scrollcontainer.addItem(cardlist[cardlist.length - 1].container);

        // let backcard = PIXI.Sprite.from('/cardback.svg');
        // backcard.anchor.set(0.5);
        // backcard.scale.set(scaleX, scaleY);
        // backcard.x = 0;
        // backcard.y = canvasHeight * 0.035 / 2;

        // cardlist[cardlist.length - 1].bottom.addChild(backcard);

        scrollcontainer.addItem(whole);



        // app.stage.addChild(whole);
      }
      ticker.remove(update);
    }
  }

  function flipCardBack(delta){
    elapsed = Math.min(1, elapsed + delta * 0.15);
    cardlist[cardlist.length - 1].back.scale.set(1 - elapsed, 1);
    if (elapsed >= 1) {
      app.stage.removeChild(cardlist[cardlist.length - 1].back);
      cardlist[cardlist.length - 1].back.destroy();
      elapsed = 0;
      cardlist[cardlist.length - 1].container.visible = true;
      ticker.add(flipCard);
      ticker.remove(flipCardBack);
    }
  }

  function flipCard(delta){
    // console.log("123456789");
    elapsed = Math.min(1, elapsed + delta * 0.15);
    cardlist[cardlist.length - 1].container.scale.set(elapsed, 1);
    if (elapsed >= 1) {
      elapsed = 0;
      cardlist[cardlist.length - 1].bottom.visible = true;
      ticker.add(bottomAppear);
      ticker.remove(flipCard);
    }
  }

  function bottomAppear(delta) {
    elapsed = Math.min(1, elapsed + delta * 0.3);
    cardlist[cardlist.length - 1].bottom.scale.set(elapsed, 1);
    if (elapsed >= 1) {
      elapsed = 0;
      cardlist[cardlist.length - 1].result.visible = true;
      let whole = new PIXI.Container();
      whole.position.x = 0;
      whole.position.y = 0;
      // whole.height = canvasHeight;
      whole.addChild(cardlist[cardlist.length - 1].container.getChildAt(0));
      whole.addChild(cardlist[cardlist.length - 1].bottom.getChildAt(0));
      whole.addChild(cardlist[cardlist.length - 1].bottom.children.find((text) => text.text !== "Hello"));
        // whole.addChild(cardlist[cardlist.length - 1].bottom.getChildAt(1));
      whole.addChild(cardlist[cardlist.length - 1].result.getChildAt(0));
      // scrollcontainer.addItem(cardlist[cardlist.length - 1].container);
      // scrollcontainer.elementsMargin = -100;
      // whole.width = 30;

      console.log("doing on  " + whole.width);

      // let backcard = PIXI.Sprite.from('/cardback.svg');
      //   backcard.anchor.set(0.5);
      //   backcard.scale.set(scaleX, scaleY);
      //   backcard.x = 0;
      //   backcard.y = canvasHeight * 0.035 / 2;

      //   cardlist[cardlist.length - 1].bottom.addChild(backcard);


      scrollcontainer.addItem(whole);
      scrollcontainer.scrollBottom();
      // scrollcontainer.scrollTo(cardlist.length - 2);
      // app.stage.addChild(whole);
      ticker.remove(bottomAppear);
    }
  }

  element.appendChild(app.view);

  function map() {
    app.stage.position._x = 0;
    let scale = 1;
    app.stage.scale.set(scale);
    // console.log("sniper here");
  }

  return {
    map,
    init,
    drawCard,
    animate,
    redrawObjects
  };
}
