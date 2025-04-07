

// ohne side effects;
// only 1 return;

var
    example = () => {
        var i = 0; // caching this value for another execution;
        return i * 2;
    }
;

let
    example = (a,b) => { // simple inline
        return (a * b)
    },

    with_error = () => {
        var i = 0; // error not allowed allocation inside "let" link functions
        return i;
    }
;