const WHOLE_STEP = 2;
const HALF_STEP = 1;
const MAJOR_SCALE_STEPS = [WHOLE_STEP, WHOLE_STEP, HALF_STEP, WHOLE_STEP, WHOLE_STEP, WHOLE_STEP, HALF_STEP];

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function getMajorScale(rootNote) {
    const scale = [];
    let startIndex = NOTES.indexOf(rootNote);
    scale.push(NOTES[startIndex]);

    MAJOR_SCALE_STEPS.forEach(step => {
        startIndex = (startIndex + step) % NOTES.length;
        scale.push(NOTES[startIndex]);
    });

    return scale;
}

document.getElementById('key').addEventListener('change', function() {
    const selectedKey = this.value;
    const majorScale = getMajorScale(selectedKey);

    const rootNote = majorScale[0];
    const triadNotes = [majorScale[1], majorScale[3], majorScale[5]]; // Every other note for a major scale

    // Remove all previous highlights
    document.querySelectorAll('.fret').forEach(fret => {
        fret.classList.remove('root-note', 'triad-note', 'scale-note');
    });

    document.querySelectorAll('.fret').forEach(fret => {
        const note = fret.getAttribute('data-note');

        if (note === rootNote) {
            fret.classList.add('root-note');
        } else if (triadNotes.includes(note)) {
            fret.classList.add('triad-note');
        } else if (majorScale.includes(note)) {
            fret.classList.add('scale-note');
        }
    });
});
