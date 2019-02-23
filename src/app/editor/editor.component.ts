import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {InitialState, INotes} from "../reducers/reducers.model";
import {ADD_NOTES} from "../actions/constants";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit,OnChanges {
  @select() notes;
  @select() editIndex;

  note_data_current = <INotes>{};

  constructor(private ngRedux: NgRedux<InitialState>) {
    this.editIndex.subscribe((t)=>{
      this.note_data_current = t;
    })
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  onTextChange(){
    this.note_data_current.timestamp = new Date();
    if (!this.note_data_current.id) {
      this.ngRedux.dispatch({type: ADD_NOTES, note: this.note_data_current});
    }
    // this.noted_data.push(this.note_data_current);
    // localStorage.setItem('note',JSON.stringify(this.noted_data));
  }

}
