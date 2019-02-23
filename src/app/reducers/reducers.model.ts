export interface INotes {
    id:number;
    note_text: string;
    timestamp: Date;
}
export interface InitialState {
    notes: INotes[];
    editIndex: INotes;
    createNew: boolean;
    searchText:string
}
const fromLocalStore = JSON.parse(localStorage.getItem('notes'));
fromLocalStore.map((t)=>{
    t.timestamp = new Date(t.timestamp);
});
export const INITIAL_STATE: InitialState = {
    notes: (fromLocalStore!==undefined&&fromLocalStore.length>0)?fromLocalStore:[],
    editIndex:{
        id:null,
        note_text: '',
        timestamp: new Date()
    },
    createNew: true,
    searchText:''
};
