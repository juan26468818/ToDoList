import React, {useState, useEffect} from 'react';
import './List.css'
import { myNotes } from '../Notes/myNotes';

export const List = ()=>{
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    const handleChange = (e) =>{
        setNewNote(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(newNote !== ""){
            const addingNote = [
                {
                    id: notes.length+1,
                    title: "",
                    desctiption: newNote,
                    importance: false,
                    category: ""
                }
            ]
            setNotes(notes.concat(addingNote))
        }
        else{
            window.alert("¡No puedes agregar un elemento vacío a la lista!")
        }
        setNewNote("")
    }
    return(
        <div className="list-component">
            <ul className="list-container">
                {notes.map((note)=>{
                    return <li key={note.id}>{note.desctiption}</li>
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>Crea tu Elemento </label>
                <input type="text" onChange={handleChange} value={newNote}>

                </input>
                <button>Guardar elemento</button>
            </form>
        </div>
    )
}