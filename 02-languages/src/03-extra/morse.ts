/* morse */
console.log("------------morse------------");
{
  // Types
  type Alphabet = {
    [key: string]: string,
  }
  interface SpacingRef {
    dotInMs: number;
    dot: number,
    dash: number,
    signSpacing: number,
    charSpacing: number,
    wordSpacing: number
  }
  interface signalOutput {
    light: string,
    t: SpacingRef[keyof SpacingRef],
  }

  const morseAlphabet: Alphabet = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
    " ": "S",//added to identify spaces
  };
  const morseSpacingRef: SpacingRef = {
    dotInMs: 1000,
    dot: 1,
    dash: 3,
    signSpacing: 1,
    charSpacing: 3,
    wordSpacing: 7
  }

  /* Factoria de transmisores */
  function transmisorFactory(alphabet: Alphabet, duration: SpacingRef):any {
    return class {
      protected charToMorse(char: string): string[] {
        return Array.from(alphabet[char.toLowerCase()]);
      }
      setSignsMessage(morseText:string[]):signalOutput[] {
        const switcher = ["[OFF]", "[ON]"]
        function signToOnOff(sign):signalOutput[] {
          if (sign === ".") return [
            { light: switcher[1], t: duration.dot },
            { light: switcher[0], t: duration.signSpacing }
          ];
          else if (sign === "-") return [
            { light: switcher[1], t: duration.dash },
            { light: switcher[0], t: duration.signSpacing }
          ];
          else if (sign === "S") return [{ light: "", t: duration.wordSpacing }];
        }
        const charSigns = morseText.reduce((acc, currentSign) =>
          acc = [...acc, ...(signToOnOff(currentSign))], []);
        //Add extra space beetwen characters excluding " " duration.wordSpacing; 
        if (charSigns[0]["light"] !== "") charSigns.push({ light: "", t: duration.charSpacing });
        return charSigns
      }
      buildTextMap(message:string):signalOutput[] {
        const morseText = Array.from(message).reduce((acc, current) => {
          const morse = this.charToMorse(current);
          return acc = [
            ...acc,
            {
              char: current,
              morse,
              signals: this.setSignsMessage(morse)
            }]
        }, []);
        return morseText
      }

      // protected writter(logText) {
      //   console.log(logText);
      // }

      protected hold(time:SpacingRef[keyof SpacingRef]):Promise<any> {
        return new Promise(resolve => setTimeout(resolve, duration.dotInMs * time));
      }

      protected messageTransmitted():void {
        return console.log(`Message transmission completed!!!`)
      }

      transmit(message: string):void {
        const messageMorseMap = this.buildTextMap(message);
        const fullMessageSignals = messageMorseMap.reduce((acc, current) =>
          acc = [...acc, ...(current["signals"])], []);
        const send = async (fullMessageSignals) => {
          for (let i = 0; i < fullMessageSignals.length; i++) {
            const { light, t } = fullMessageSignals[i];
            await this.hold(t)
            console.log(light)
          }
          this.messageTransmitted()
        }
        send(fullMessageSignals)
      }
    }
  }

  const transmissorClass = transmisorFactory(morseAlphabet, morseSpacingRef);
  const transmissor01 = new transmissorClass();

  transmissor01.transmit("To Palante")
}
console.log("----------------------------------")