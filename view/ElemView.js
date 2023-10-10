class ElemView{
    #index
    #igaze
    constructor(szuloElem, index){
    this.szuloElem = szuloElem
    this.#index = index
    this.#igaze = false
    this.#htmlOsszerak()
    this.elem=$(".elem:last")
    this.divElem=this.elem.children("div")
    console.log(this.elem)
    this.elem.on("click",()=>{
            this.#esemenyTrigger("kivalaszt")
        
       
    })
}#htmlOsszerak(){
        if (this.index % 2 == 0) {
            console.log()
            this.szuloElem.append(`
                <div class="vilagit ${this.#index} elem col-sm-4">
                    
                </div>
            `);
            console.log(this.#igaze)
           
          } else {
            this.szuloElem.append(`
            <div class="sotet ${this.#index} elem col-sm-4">
                
            </div>
        `); 
    }
    return this.igaze;
    }
    getIndex(){
        return this.#index;
    }
    setErtek(jel){
        this.divElem.html(jel)
        if(this.#igaze){
            this.#igaze = false;
        }
        console.log(this.#igaze);
    }
    #esemenyTrigger(esemenyNev) {
        const esemenyem = new CustomEvent(esemenyNev,{detail:this});
        window.dispatchEvent(esemenyem);
    }
}
export default ElemView;