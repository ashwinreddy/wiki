**RISC-V** is a simplified [[instruction set architecture]] for computers.

# Registers

RISC-V has 32 integer [[register]]. The registers are numbered `x0` to `x31` with `x0` always equal to 0. A command like `add x0, x3, x4` won't do anything. The registers `x10` to `x17` we call `a0` to `a7` for argument registers.

# Data transfer

The world is processor centric, so we _load from_ and _store to_ memory. Thus, the first argument is register and the second is a point in memory.

We have the `lw` load word and `sw` store word commands but also `lb` load byte and `sb` store byte. If we don't want to do a sign extension, then we use `lbu`.

# Control flow 

# If-else

* Invert the operation for the boolean condition for branching
* Make sure to include a jump to prevent the if True case from falling through everything

# Instructions

|Type|Op|Idea|
|---|-|-------|
|R|Register-register|
|I|Short immediate data and load|
|S|Fetch store|
|B|Conditional jump|`beq`, `bne`, `blt`, etc.|
|U|Long immediate|
|J|Unconditional jump|`j`, `jal`, `jalr`|

[[https://programmersought.com/images/208/1d0b406069c9a25bf209005412f377e0.png]]