**Calling convention** comprises requirements that ensure smooth running of subroutines.

1. The following values need to be saved by the caller before jumping to a function using `jal`: `a0-a7`, `t0-t6`, and `ra`. These are not guaranteed to be the same after a function call.
2. The following values need to be restored by the callee: `sp` and `s0-s11`. The callee must restore them because they need to be the same after the function call.

You need to save the save registers. You have to assume the callee will tamper with any and all argument registers and temporary registers.