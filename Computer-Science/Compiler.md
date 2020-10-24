A **compiler**.

What are the steps in compiling and running a [[C]] program? The acronym is CALL.

1. Compiler takes `foo.c` and outputs `foo.s` assembly language code (possibly containing pseudo-instructions)
2. [[Assembler]] takes `foo.s` and outputs `foo.o` object code, replacing pseudo instructions and using directives
3. [[Linker]] takes object code files and outputs executable code, _linking_ several object files
4. Loader takes executable code on disk and runs it. It's the job of [[operating system]].

# Resources

* [[http://web.eecs.utk.edu/~azh/blog/teenytinycompiler1.html]]
* [[https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/]]