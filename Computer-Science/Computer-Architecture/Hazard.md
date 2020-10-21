A **hazard** is a situation that prevents starting the next instruction in the next clock cycle.

|Type|Explanation|
|----|-----------|
|Structural hazard|a required resource is busy.|
|Data hazard|data dependency between instructions|
|Control hazard|flow of execution depends on previous instruction|

# Structural Hazard

Two or more instructions in the pipeline compete for access to a single physical resource. We can always solve this by adding more hardware, but we can also have instructions take turns to use the resource by stalling.

