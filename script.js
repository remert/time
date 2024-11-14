function updateCurrentTimeBlock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Clear previous current time block
    document.querySelectorAll('.time-block').forEach(block => block.classList.remove('current'));

    // Determine the current time block
    if (hours >= 6 && hours < 7) {
        document.getElementById('block-6-7').classList.add('current');
    } else if (hours >= 7 && hours < 7.5) {
        document.getElementById('block-7-7-30').classList.add('current');
    } else if (hours >= 7.5 && hours < 8) {
        document.getElementById('block-7-30-8').classList.add('current');
    } else if (hours >= 8 && hours < 8.5) {
        document.getElementById('block-8-8-30').classList.add('current');
    } else if (hours >= 8.5 && hours < 9) {
        document.getElementById('block-8-30-9').classList.add('current');
    } else if (hours >= 9 && hours < 12) {
        document.getElementById('block-9-12').classList.add('current');
    } else if (hours >= 12 && hours < 13) {
        document.getElementById('block-12-1').classList.add('current');
    } else if (hours >= 13 && hours < 15) {
        document.getElementById('block-1-3').classList.add('current');
    } else if (hours >= 15 && hours < 15.5) {
        document.getElementById('block-3-3-30').classList.add('current');
    } else if (hours >= 15.5 && hours < 17.5) {
        document.getElementById('block-3-30-5-30').classList.add('current');
    } else if (hours >= 17.5 && hours < 18.5) {
        document.getElementById('block-5-30-6-30').classList.add('current');
    } else if (hours >= 18.5 && hours < 19.5) {
        document.getElementById('block-6-30-7-30').classList.add('current');
    } else if (hours >= 19.5 && hours < 21) {
        document.getElementById('block-7-30-9').classList.add('current');
    } else if (hours >= 21 && hours < 22) {
        document.getElementById('block-9-10').classList.add('current');
    } else if (hours >= 22) {
        document.getElementById('block-10').classList.add('current');
    }
}

// Update the current time block every minute
setInterval(updateCurrentTimeBlock, 60000);
updateCurrentTimeBlock();
