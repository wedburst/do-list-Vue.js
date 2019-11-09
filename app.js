const app = new Vue({

    el: '#app',
    data: {
        titulo: 'List with Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            localStorage.setItem('do-list', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('do-list', JSON.stringify(this.tareas));
        },
        eliminar(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('do-list', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('do-list'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
})