**Calling convention** comprises requirements that ensure smooth running of subroutines: 

* Every [[register]] is _either_ preserved across function calls or not preserved across function calls.
* The preserved ones are `sp` and `s0-s11`. They need to be restored by the callee so that they are the same after the function call.
* The ones that are not preserved across function calls the caller _cannot_ rely on values being unchanged. These need to be saved before jumping `jal` if you want to keep using them: `a0-a7`, `t0-t6`, and `ra`. 


You need to save the save registers. You have to assume the callee will tamper with any and all argument registers and temporary registers. 

A function often has a prologue where it saves `s` registers so they can be used. Then at the end the epilogue restores them.