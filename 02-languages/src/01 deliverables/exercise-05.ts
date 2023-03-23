console.log("************** DELIVERABLE 05 *********************");
console.log("Slot Machine");
/** As commented in the laboratory, this exercise has been extended to allow playing more than 1 coin (up to 99).
 * Game starts with a Jackpot of 50 coins.
 * PlayerName argument is required when declaring a new Slotmachine.
 * If player wins the game, the jackpot is reset to a 20 coins reserve (...otherwise nobody will want to play).
*/
{
  type EachRoulette = "●"| "▲"| "■";
  interface RoulettesResult{
    a: EachRoulette,
    b: EachRoulette,
    c: EachRoulette
  };

  class SlotMachine {
    jackpot: number;
    minimumJackpot: number;
    _playerName: string;
    constructor(playerName: string) {
      this.minimumJackpot = 20;
      this.jackpot = 50;
      this.playerName = playerName
    }
    // Accessors
    set playerName(input) {
      this._playerName = input.toUpperCase() + ":\n"
    }

    get playerName() {
      return this._playerName;
    }
    // Methods
    play(coins: number): void {
      if (coins <= 0) { console.error(`${this.playerName} Please enter at least 1 coin to play.`); return }
      else if (coins >= 100) { console.error(`${this.playerName} Please play responsibly, enter a logic amount of coins.`); return }
      this.jackpot += coins;
      console.warn(`${this.playerName} enters ${coins} coin${coins > 1 ? `s` : ``}`);
      console.log(`Current jackpot: ${this.jackpot}`);
      let lastRoundResult:boolean = false;
      do {
        console.log("...new round...");
        coins--;
        const { a, b, c } = this.spinRoulettes();
        lastRoundResult = this.gameRoundResult(a, b, c);
        console.log(`Jackpot: ${this.jackpot} coins. ` + (lastRoundResult ? `` : `You have ${coins} rounds left.`));
      } while (coins > 0 && !lastRoundResult);
    }

    spinRoulettes():RoulettesResult {
      const random0to2 = ():number => Math.round(Math.random() * 2);
      const numberToIcon = (number:number):EachRoulette => {
        if (number === 0) return "●";
        else if (number === 1) return "▲";
        return "■"
      };
      return {
        a: numberToIcon(random0to2()),
        b: numberToIcon(random0to2()),
        c: numberToIcon(random0to2()),
      }
    }

    gameRoundResult(a:EachRoulette, b:EachRoulette, c:EachRoulette):boolean {
      let finalMessage: string;
      let isWinnerRound:boolean = false;
      if (a === b && b === c) {
        finalMessage = `CONGRATULATIONS!!! You won ${this.jackpot} coins!!`;
        isWinnerRound = true;
        this.resetJackpot();
      } else {
        finalMessage = `...good luck next time!!`
      }
      console.log([a, b, c].join(" | "), finalMessage);
      return isWinnerRound
    }

    resetJackpot():void {
      this.jackpot = this.minimumJackpot;
    }
  }

  const machine1 = new SlotMachine("Player_1");
  machine1.play(1); 
  machine1.play(10);
  machine1.play(1); 
  machine1.play(0); 
  machine1.play(100); 
}