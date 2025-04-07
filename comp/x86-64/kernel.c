#include <stdio.h>
#include <stdbool.h>


inline int process(int pc,int c) {
    return putchar(c);
};


int main(
    int a, char *b[]
) {
    FILE *f = fopen(b[1], "r");
    int
        code[] = {
            '\n',' ','\r','/', '*', '\\'
        },
        c = fgetc(f),
        pc = 0,

        next = 0,
        i = 0
    ;

    bool
        cm = false,
        m_cm = false
    ;

    while (c != EOF) {
        if (cm) {
            (m_cm ? (c == 42)&&(fgetc(f)==47): (c==10))
            &&
            (cm = false);
        }
        else {
            if ((c == 47)) {
                if (
                    (next = fgetc(f)) == 47
                ) {
                    m_cm = false;
                    cm = true;
                }
                else if (
                    next == 42
                ) {
                    m_cm = true;
                    cm = true;
                }
                else {
                    process(pc, 47);
                    process(47, next);
                }
            }
            else {
                process(pc, c);
            }
        };

        pc = c;
        c = fgetc(f);
    };

    fclose(f);
    return 0;
};
