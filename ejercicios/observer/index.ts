interface Observer{
    update: (data: any) => void
}

interface Subject{
    suscribe: (observer: Observer) => void
    unsuscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject{
    observers: Observer[] = []

    constructor(){
        const input: HTMLInputElement = document.querySelector("#value") as HTMLInputElement
        input.addEventListener("input", () => {
            this.notify(input.value)
        })

    }


    suscribe(observer: Observer){
        this.observers.push(observer);
    }
    unsuscribe(observer: Observer){
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })
        this.observers.splice(index, 1)
    }

    notify(data: any){
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer{
    private element: HTMLElement;
    constructor(){
        this.element = document.querySelector("#price") as HTMLElement 
    }


    update(data: any){
        this.element.innerText = data
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();
value.suscribe(display)

setTimeout(
    () => value.unsuscribe(display),
    5000
)