A **CPU cache** makes it faster for read/write to memory by sitting closer to the core. 

|Type|Description|
|----|-----------|
|Direct Mapped Cache|Each block gets its own index|
|N-way associative|
|Fully associative|No index bits for the block|

# TIO

Tag
: The tag identifies the block inside the cache entry/slot.

Index
: The index tells which set in the cache

Offset
: The offset is where in the block is your desired data

# Cache miss


|Type|Description|
|----|-----------|
|Compulsory|First time bringing in a block|
|Conflict||
|Capacity|Seeing more unique blocks than blocks in the cache.|