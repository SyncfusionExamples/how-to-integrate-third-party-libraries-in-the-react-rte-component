import React from 'react';
import './App.css';
import { RichTextEditorComponent, Toolbar, Link, Image, 
  HtmlEditor, Inject } from '@syncfusion/ej2-react-richtexteditor';
import Tribute from 'tributejs';

class App extends React.Component {

  private rteObject:RichTextEditorComponent;
  public onCreate(): void {
    let employeeNameList:Tribute<{key: string; value: string;}> = new Tribute({
     values : [
      { key: 'Phil Heartman', value: 'pheartman' },
      { key: 'Gordon Ramsey', value: 'gramsey' },
      { key: 'Jordan Humphreys', value: 'jhumphreys' },
      { key: 'Howard Johnson', value: 'hjohnson' }
     ]
    })
    employeeNameList.attach(this.rteObject.inputElement);
  }
  public showCardPreview(args : any) : void {
    if(args.requestType === 'Links') {
      const embedCardElement: HTMLElement = document.createElement('blockquote');
      embedCardElement.setAttribute('class', 'embedly-card');
      embedCardElement.appendChild(args.elements[0].parentElement);
      embedCardElement.appendChild(document.createElement('p'));
      args.range.insertNode(embedCardElement);
    }
  }
  render() {
    return ( 
        <RichTextEditorComponent placeholder='Type @ to get the employee list'
        ref={rte => { this.rteObject = rte as RichTextEditorComponent}}
        created={this.onCreate.bind(this)}
        actionComplete={this.showCardPreview.bind(this)}>
        <Inject services = {[Toolbar, Link, Image, HtmlEditor]}></Inject>
        </RichTextEditorComponent>
    );
  }
}
   
export default App;



 
 
