import * as React from 'react';
import { ITask } from './Task';

// export interface IAppProps {
//     ph:string
// }

interface ITaskFormProps {
    addNewTask:(task:ITask)=>void

}

class TaskForm extends React.Component<ITaskFormProps, any> {

constructor(props:ITaskFormProps){
    super (props)
}


    public handleNewtask(e: React.FormEvent<HTMLFormElement>) {
        // tslint:disable-next-line:no-console
        console.log(` EVENTO ${e}`)
    }
    public render() {
           return (
            <div className="card card-body">
                <form onSubmit={this.buttonClicked}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre de la Nueva tarea" />
                    </div>
                  <div className="form-group">
                  <textarea
                        className="form-control"
                        placeholder="Descripción de la tares" />
                    <button type="submit" className="btn btn-primary btn-block" > Agregar</button>

                      
                      </div>  
                  
                </form>

            </div>
        );
    }
    private buttonClicked = (e: React.FormEvent<HTMLFormElement>) => {
       
        e.preventDefault()
        const newT:ITask={
            completed: false,
            descripcion: "string",
            id:1,
            titulo:"Tarea 1",

        }
         
       this.props.addNewTask(newT)
     // tslint:disable-next-line:no-console
        console.log("Guardando")
     

        // alert(e.nativeEvent);
    }
}
export default TaskForm;

// funcion = (num, ...restoParametros) => (event)=> {
//     console.log("Num: ",num)
//     console.log("Codigo de tecla: ",event.keyCode)
// }

// <input type="text" onKeyDown={this.funcion(num)}/>