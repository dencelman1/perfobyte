import my_module from 'my_module';


// dynamic:

b: while ( i <= length ) {

    a: while (1) {

        if (a > 0) {
            break a;
        }
        else if (a < 0) {
            continue b;
        }
        else {
            a--;
        };

    };

    i++;
}


// static;

let i = 404;



a: for ( i ) {
    console.log(
        a ? 1: 0 // without break and continue;
    );
};


c: with ([
    Buffer,
    my_module
]) {
    console.log(modules_method(1));
}