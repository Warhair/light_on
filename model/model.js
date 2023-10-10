class Modell{
    #lista=[];
    #index;
    #adat;
    #allapot;
    constructor(){
        this.#allapot == true;
        this.#adat=0;
        this.#lista=[1,0,1,0,1,0,1,0,1];
    }
    getAdat(){
        return this.#adat;
    }
    allapotAllitas(index){
      
        if(this.#adat == 0){
           
            this.#adat = 1;
            console.log(this.#adat)
            this.#lista[index]=this.#adat;
            
        }
        else {
            this.#adat = 0
            console.log(this.#adat)
            this.#lista[index]=this.#adat;
            
            
        }
        
        this.#szinBeallit();
        
        console.log(this.#lista)
    }
    #szinBeallit() {
        const VILAGOS = document.querySelector(".vilagit");
        const SOTET = document.querySelector(".sotet");
        console.log(this.#lista)
        for (let index = 0; index < this.#lista.length; index++) {
            if (this.#lista[index] == 0) {
                VILAGOS.classList.replace("vilagit", "sotet");
              } else {
                SOTET.classList.replace("sotet", "vilagit");
              } 
        }
      }
      
    

}
export default Modell;