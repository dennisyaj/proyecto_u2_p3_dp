const estu = []
const app = Vue.createApp({
    data() {
        return {
            arreglo: estu,
            nombreNuevo: '',
            apellidoNuevo: '',
            direccionNuevo: ''
        }
    },
    methods: {
        agregarEstudiantes() {
            const estuObjNueva = {
                nombre: this.nombreNuevo,
                apellido: this.apellidoNuevo,
                direccion: this.direccionNuevo
            }
            this.arreglo.unshift(estuObjNueva)
        }

    }
})
app.mount("#myEstudiante")