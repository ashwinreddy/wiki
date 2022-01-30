**Calling convention** comprises requirements that ensure smooth running of subroutines. You can think of it as a contract with the following specifications.

1. Every [[register]] will belong to one of two classes: a register whose value needs to be preserved across function calls _or_ a register whose value is allowed to mutate arbitrarily between function calls (therefore you should not assume they are the same between calls).
2. The save registers `sp` and `s0-s11` must be reserved. They need to be restored by the callee so that they are the same after the function call.
3. You have to assume the callee will tamper with any and all argument registers and temporary registers.  These need to be saved before jumping with `jal` if you want to keep using them because you _cannot_ rely on values being unchanged.: `a0-a7`, `t0-t6`, and `ra`. 

A function often has a prologue where it saves `s` registers so they can be used. Then at the end the epilogue restores them.

```py
def prologue():
    decrement sp by num s registers + local var space
    store any saved registers used
    store ra if function call is made

def epilogue():
    reload any save registers used
    reload ra (if needed)
    increment sp back to previous value
    jump back to return address (ret = jr ra = jalr x0, ra, 0)
```

```
# Prologue
addi sp, sp, -8
sw ra 0(sp)
sw s0 4(sp)
lw ra 0(sp)
lw s0 4(sp)
addi sp, sp, 8
```

# 80x86 Calling Convention

For a 32-bit 80x86 implementation of Unix, the convention is

1. The caller pushes each of the function's arguments one by one (left-to-right) on the [[stack]] using push. The stack grows downward 
2. The caller pushes the address of its next instruction (the return address) on the stack and jumps to the first instruction of the callee. A single 80x86 instruction `call` does both.
