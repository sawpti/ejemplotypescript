import * as React from 'react';
import { ITask } from './components/Task';
import TaskForm from './components/TaskForm';

interface IPropApp {
  title: string,
}
interface IState {
  tasks: ITask [],
}


class App extends React.Component<IPropApp, IState>{
  constructor(props: IPropApp) {
    super(props)
    this.state = {
      tasks: []
    }
  }
  public addNewTask(task: ITask){

    this.setState(
      {
        tasks:[...this.state.tasks, task]
      }
    )

  }


  public render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a href="/" className="navbar-brand" >{this.props.title}</a>

        </nav>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-4">
              <TaskForm addNewTask={this.addNewTask} />         
           </div>
          </div>

        </div>

      </div>

    );
  }
}

export default App;