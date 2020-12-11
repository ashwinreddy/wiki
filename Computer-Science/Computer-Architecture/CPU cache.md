A **CPU cache** makes it faster for read/write to memory by sitting closer to the core. 

|Type|
|----|
|Direct Mapped Cache|
|N-way associative|
|Fully associative|

# TIO

Tag
: The tag identifies the block inside the cache entry/slot.

$$
\text{Tag bits} = \text{Address bits} - \text{Index bits} - \text{Offset bits}
$$

Index
: The index tells which set in the cache

Offset
: The offset is where in the block is your desired data

$$
\text{Offset bits} = \lg \frac{\text{bytes}}{\text{block}}
$$