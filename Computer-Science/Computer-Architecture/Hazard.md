A **hazard** is a situation that prevents starting the next instruction in the next clock cycle.

|Type|Explanation|
|----|-----------|
|Structural hazard|a required resource is busy.|
|Data hazard|data dependency between instructions|
|Control hazard|flow of execution depends on previous instruction|

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