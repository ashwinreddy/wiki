A **CPU cache** makes it faster for read/write to memory by sitting closer to the core. 

Temporal locality
: If a memory location was used recently, it is likely to be used soon.

Spatial locality
: If a memory location was used recently, nearby locations are likely to also be used.



When you make a cache, you choose a **cache size** and a **block size**.

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

# Policies

|Write Hit Policy|Description|
|----------------|-----------|
|Write through|Write to cache and memory to enforce consistency|
|Write back|Write to cache and write to memory if dirty|

|Write Miss Policy|Description|
|----------------|-----------|
|Write allocate|Pull the block up to cache and write it there|
|Write back|Write directly to memory|

<<Note("When do we do the update for write back?")>>

# Cache miss


|Type|Description|
|----|-----------|
|Compulsory|First time bringing in a block|
|Conflict||
|Capacity|Seeing more unique blocks than blocks in the cache.|