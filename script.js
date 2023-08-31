let titels = [];
let notes = [];
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = ''

    for (let i=0; i < notes.length;i++) {
        const titel = titels[i];
        const note = notes[i];

        content.innerHTML += `
        <div class="notes" >
        <h2>${titel}</h2>
        <p>${note}<p>
        <button onclick="deleteNotes(${i})">Löschen</button>
        `
    }
}

function addNotice() {
let myTitle = document.getElementById('myTitle');
let myNotes = document.getElementById('myNotes');
titels.push(myTitle.value);
notes.push(myNotes.value);

render();
save();
}

function deleteNotes(i) {
titels.splice(i,1);
notes.splice(i,1);
render();
save();
}

function save() {
    let titelsAsText = JSON.stringify(titels);
    localStorage.setItem('titels', titelsAsText);

    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('notes',notesAsText);

}

function load () {
    let titelsAsText = localStorage.getItem('titels')
    let notesAsText = localStorage.getItem('notes')
    if (titelsAsText && notesAsText) {
        titels = JSON.parse(titelsAsText);
        notes = JSON.parse(notesAsText);
    }
}