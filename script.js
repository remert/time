function updateCurrentTimeBlock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Clear previous current time block
    document.querySelectorAll('.time-block').forEach(block => {
        block.classList.remove('current-green', 'current-yellow', 'current-orange', 'current-red');
    });

    // Determine the current time block
    const timeBlocks = [
        { id: 'block-6-7', start: '06:00', end: '07:00' },
        { id: 'block-7-7-30', start: '07:00', end: '07:30' },
        { id: 'block-7-30-8', start: '07:30', end: '08:00' },
        { id: 'block-8-8-30', start: '08:00', end: '08:30' },
        { id: 'block-8-30-9', start: '08:30', end: '09:00' },
        { id: 'block-9-12', start: '09:00', end: '12:00' },
        { id: 'block-12-1', start: '12:00', end: '13:00' },
        { id: 'block-1-3', start: '13:00', end: '15:00' },
        { id: 'block-3-3-30', start: '15:00', end: '15:30' },
        { id: 'block-3-30-5-30', start: '15:30', end: '17:30' },
        { id: 'block-5-30-6-30', start: '17:30', end: '18:30' },
        { id: 'block-6-30-7-30', start: '18:30', end: '19:30' },
        { id: 'block-7-30-9', start: '19:30', end: '21:00' },
        { id: 'block-9-10', start: '21:00', end: '22:00' },
        { id: 'block-10', start: '22:00', end: '23:59' }
    ];

    timeBlocks.forEach(block => {
        const startTime = new Date();
        const [startHour, startMinute] = block.start.split(':');
        startTime.setHours(startHour, startMinute, 0, 0);

        const endTime = new Date();
        const [endHour, endMinute] = block.end.split(':');
        endTime.setHours(endHour, endMinute, 0, 0);

        if (now >= startTime && now <= endTime) {
            const totalDuration = endTime - startTime;
            const elapsedTime = now - startTime;
            const remainingTime = endTime - now;

            if (remainingTime > totalDuration * 0.5) {
                document.getElementById(block.id).classList.add('current-green');
            } else if (remainingTime > totalDuration * 0.25) {
                document.getElementById(block.id).classList.add('current-yellow');
            } else if (remainingTime > totalDuration * 0.1) {
                document.getElementById(block.id).classList.add('current-orange');
            } else {
                document.getElementById(block.id).classList.add('current-red');
            }
        }
    });
}

// Update the current time block every minute
setInterval(updateCurrentTimeBlock, 60000);
updateCurrentTimeBlock();
