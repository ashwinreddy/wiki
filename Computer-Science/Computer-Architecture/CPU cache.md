A **CPU cache** (informal abbreviation $$) makes programs more efficient by sitting closer to the core than actual memory and being made of faster hardware. The speed ups are enabled by the following assumptions / principles:

Temporal locality
: If a memory location was used recently, it is likely to be used soon.

Spatial locality
: If a memory location was used recently, nearby locations are likely to also be used.



# Types

There exists a spectrum of cache types.

|Type|Description|Associativity|
|----|-----------|--------------|
|Direct Mapped Cache|Each block gets its own index|1|
|N-way associative||$N$|
|Fully associative|No index bits for the block||

<<Note("fill above")>>


# Implementation

When you make a cache, you choose a **cache size** and a **block size**. The cache size is how large the actual cache. The cache is organized / chunked into entries called blocks; the block size tells us how large each block is.


There's also the choice of associativity, as discussed above. Finally, there's the [[address space]], which is separate from our design choices for the cache. 

# Accessing the Cache

Suppose there's some address you want to access in the cache. Here are the steps:

|Address Component|Meaning|Question|
|-----------------|-------|--------|
|Tag|Which block do we want to look in?|
|Index|The index tells which set in the cache|Which section of the block do we look in|
|Offset||Which byte of that section should we look at?|

<<Note("index may be wrong")>>

3. 

Index
: 

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