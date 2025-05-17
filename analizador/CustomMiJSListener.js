import MiJSListener from "./generated/MiJSListener.js";

export class CustomMiJSListener extends MiJSListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}