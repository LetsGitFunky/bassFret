// When the DOM is fully loaded, run the function
document.addEventListener('DOMContentLoaded', function() {

    // Get the dropdown element by its ID
    const keySelector = document.getElementById('key');

    // Listen for changes on the dropdown
    keySelector.addEventListener('change', function() {

        // Reset fretboard colors to default
        const allFrets = document.querySelectorAll('.fret');
        allFrets.forEach(fret => {
            fret.style.backgroundColor = ''; // clear any existing background color
        });

        // Get the selected key
        const selectedKey = keySelector.value;

        // Logic for determining which frets to highlight for each key.
        // Here, we use a basic example for the key of C.
        // You will expand this for other keys and note relationships.
        if (selectedKey === "C") {

            // Example: For C major, C-E-G are the triad notes.
            const triadNotes = ["C", "E", "G"];
            const scaleNotes = ["C", "D", "E", "F", "G", "A", "B"]; // Notes of the C major scale

            // Highlight the triad notes in green
            triadNotes.forEach(note => {
                const frets = document.querySelectorAll(`.fret[data-note="${note}"]`);
                frets.forEach(fret => {
                    fret.style.backgroundColor = 'green';
                });
            });

            // Highlight the root note in blue
            const rootFrets = document.querySelectorAll(`.fret[data-note="${selectedKey}"]`);
            rootFrets.forEach(fret => {
                fret.style.backgroundColor = 'blue';
            });

            // Highlight the other scale notes in yellow
            scaleNotes.forEach(note => {
                if (!triadNotes.includes(note) && note !== selectedKey) { // Exclude triad and root notes
                    const frets = document.querySelectorAll(`.fret[data-note="${note}"]`);
                    frets.forEach(fret => {
                        fret.style.backgroundColor = 'yellow';
                    });
                }
            });
        }

        // Add similar logic for other keys as needed...

    });
});


// const WHOLE_STEP = 2;
// const HALF_STEP = 1;
// const MAJOR_SCALE_STEPS = [WHOLE_STEP, WHOLE_STEP, HALF_STEP, WHOLE_STEP, WHOLE_STEP, WHOLE_STEP, HALF_STEP];

// const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// function getMajorScale(rootNote) {
//     const scale = [];
//     let startIndex = NOTES.indexOf(rootNote);
//     scale.push(NOTES[startIndex]);

//     MAJOR_SCALE_STEPS.forEach(step => {
//         startIndex = (startIndex + step) % NOTES.length;
//         scale.push(NOTES[startIndex]);
//     });

//     return scale;
// }

// document.getElementById('key').addEventListener('change', function() {
//     const selectedKey = this.value;
//     const majorScale = getMajorScale(selectedKey);

//     const rootNote = majorScale[0];
//     const triadNotes = [majorScale[1], majorScale[3], majorScale[5]]; // Every other note for a major scale

//     // Remove all previous highlights
//     document.querySelectorAll('.fret').forEach(fret => {
//         fret.classList.remove('root-note', 'triad-note', 'scale-note');
//     });

//     document.querySelectorAll('.fret').forEach(fret => {
//         const note = fret.getAttribute('data-note');

//         if (note === rootNote) {
//             fret.classList.add('root-note');
//         } else if (triadNotes.includes(note)) {
//             fret.classList.add('triad-note');
//         } else if (majorScale.includes(note)) {
//             fret.classList.add('scale-note');
//         }
//     });
// });
