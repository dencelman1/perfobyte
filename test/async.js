


var
    func = async () => {
        return await operation();
    }
;

let
    time = 1_000
;

var
    timeout_id = setTimeout(func, time),
    interval_id = setInterval(func, time)
;

// and

process.timeout(time);
process.interval(time); // interval stops
