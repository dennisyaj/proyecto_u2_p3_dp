const numeros = [1, 2, 3, 4]
console.log(numeros)
const frases = [
    { texto: 'De tal palo tal astilla1', autor: 'Pepito Perez1' },
    { texto: 'De tal palo tal astilla2', autor: 'Pepito Perez2' },
    { texto: 'De tal palo tal astilla3', autor: 'Pepito Perez3' },
    { texto: 'De tal palo tal astilla4', autor: 'Pepito Perez4' },
    { texto: 'De tal palo tal astilla5', autor: 'Pepito Perez5' }
]
console.log(frases)
console.log(Vue)
const app = Vue.createApp({
    data() {
        return {
            arreglo: frases,
            fraseNueva: ''
        }

    },
    methods: {
        agregarFrase({charCode}) {
            console.log('Mensaje desesctrucutrado')
            console.log(charCode)
            if (charCode !== 13) return

            const fraseObjNueva = {
                texto: this.fraseNueva,
                autor: 'Dennis'
            }
            this.arreglo.unshift(fraseObjNueva)
        },
        agregarFraseModificador(event) {
            console.log('Mensaje')
            console.log(event.charCode)
            
            const fraseObjNueva = {
                texto: this.fraseNueva
            }
            this.arreglo.unshift(fraseObjNueva)
        }

    }

})

app.mount("#myApp2")