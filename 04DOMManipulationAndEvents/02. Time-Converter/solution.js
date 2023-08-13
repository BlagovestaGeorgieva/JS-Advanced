function attachEventsListeners() {

    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function convert(value, unit) {
        let days = value / rations[unit];

        return {
            days: days,
            hours: days * 24,
            minutes: days * 1440,
            seconds: days * 86400,
        };
    }

    function onConvert(e) {
        let input = e.target.parentElement.querySelector('input[type = "text"]');
        let time = convert(Number(input.value), input.id);

        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value = time.minutes;
        secondsElement.value = time.seconds;
    }
}