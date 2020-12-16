A **hazard** is a situation that prevents starting the next instruction in the next clock cycle.

|Type|Explanation|Solution|
|----|-----------|----------|
|Structural hazard|A required resource is busy.|Double pumping. Hardware|
|Data hazard|data dependency between instructions|Stalls. Forwarding. Reordering code.|
|Control hazard|flow of execution depends on previous instruction|Stalling or branch prediction.|

# Structural Hazard

Two or more instructions in the pipeline compete for access to a single physical resource. We can always solve this by adding more hardware, but we can also have instructions take turns to use the resource by stalling.

# Data hazard

Consider 

```
add t0, t1, t2
or t3, t4, t5
slt t6, t0, t3
sw t0, 4(t3)
addi t0, t1, t2
```

In the first line, we'll have to write to `t0` in the register. But `sw t0, 4(t3)` will be reading from `t0` at the exact same time! 🚨

We can hope the register file is fast, we can stall, or we can forward.

# Load data hazard

Load requires one-cycle pipeline stall. The **load delay slot** puts unrelated instruction. 

# Control hazard

When you have a branch and you take the branch, you'll still be executing things. therefore, if branch not taken, no control hazard. If you can do branch prediction ahead of time, this can be efficient.

In a branch instruction, we execute things up until the point that the program counter changes (3 stages later). 