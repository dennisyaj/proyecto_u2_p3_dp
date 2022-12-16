console.log(Vue)

//options API
const app = Vue.createApp({
    // template: `
    //<h2>Hola Mundo!!</h2>
    //  <h2>Hola Mundo!!</h2>
    // <p>{{1+1}}</p>
    //`
    //     template: ``,
    data() {
        //propiedades reactivas
        return {
            mensaje: 'Hola mundo',
            nombre: 'Dennis',
            apellido: 'Pilco'
        }
    }, methods: {
        cambiarNombre(event) {
            console.log(event)
            this.nombre = 'Alexander'
        },
        cambiarApellido(event) {
            console.log(event)
            this.apellido ='Yajamin'
         }

    }
})

app.mount('#myApp')