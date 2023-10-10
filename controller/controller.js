import Modell from "../model/model.js";
import ElemView from "../view/ElemView.js";
class Controller{
    constructor(){
       
        const MODELL = new Modell()
        for (let index = 0; index < 9; index++) {
           this.VIEW = new ElemView($(".megjelenit"),index)   
        }
        $(window).on("kivalaszt",()=>{
           MODELL.allapotAllitas(event.detail.getIndex())
            event.detail.setErtek(MODELL.getAdat())
            console.log("x")
        });
    }
    
}
export default Controller;