A **CPU cache** (informal abbreviation $$) makes programs more efficient by sitting closer to the core than actual memory and being made of faster hardware. The speed ups are enabled by the following assumptions / principles:

Temporal locality
: If a memory location was used recently, it is likely to be used soon.

Spatial locality
: If a memory location was used recently, nearby locations are likely to also be used.

[[_TOC_]]

# Associativity

The cache is organized into **blocks**. Naturally, we have

$$
\text{Cache Size} = \text{Block Size} \times \text{Num Blocks}.
$$

When desiging a cache, we have a choice for associativity. Higher associativity means less conflict misses.

Associativity
: The number of slots a block can potentially map to into our cache.

The more associative a cache, the more permissive the block is. So a fully associative cache will allow data to be stored in any cache block and will have no need for any index (i.e. just uses 1 index).

# Types

There exists a spectrum of cache types. A fully associative cache is one that allows data to be stored in any cache block.

|Type|Description|Associativity|
|----|-----------|--------------|
|Direct Mapped Cache|Each block gets its own index|1|
|N-way associative||$N$|
|Fully associative|No index bits for the block||

\begin{equation}
N \times \text{Num Sets} = \text{Num Blocks}
\end{equation}

For example, a 4-way set associative cache will index every 4 set of 4 lines in the cache, so it would use 2 fewer index bits than a direct mapped cache.


# Implementation

When you make a cache, you choose a **cache size** and a **block size**. The cache size is how large the actual cache. The cache is organized / chunked into entries called blocks; the block size tells us how large each block is.


There's also the choice of associativity, as discussed above. Finally, there's the [[address space]], which is separate from our design choices for the cache. 

# Accessing the Cache

Suppose there's some address you want to access in the cache. Here are the steps:

|Address Component|Question|Meaning|
|-----------------|-------|--------|
|Tag|Which block do we want to look in?|The tag uniquely identifies the block|
|Index|Which section of the block do we look in|The index tells which set in the cache|
|Offset|Which byte of that section should we look at?|The offset is where in the block is your desired data|

Since the offset needs to specify a byte in a block, we have

\begin{equation\*}
\text{Offset Bits} = \lg \frac{\text{Bytes}}{\text{Block}}
\end{equation\*}

\begin{equation\*}
\text{Index Bits} = = \lg \text{Num Sets} = \lg \frac{\text{Num Blocks}}{N} = \lg \frac{\text{Bytes}/\text{Cache}}{N \times \text{Bytes}/\text{Block}}
\end{equation\*}

\begin{equation\*}
\text{Tag Bits} = \text{Address Bits} - \text{Index Bits} - \text{Offset bits}
\end{equation\*}

# Usage




# Policies

|Write Hit Policy|Description|
|----------------|-----------|
|Write through|Write to cache and memory to enforce consistency|
|Write back|Write to cache and write to memory if dirty|

|Write Miss Policy|Description|
|----------------|-----------|
|Write allocate|Pull the block up to cache and write it there|
|Write back|Write directly to memory|

# Cache miss


|Type|Description|
|----|-----------|
|Compulsory|A miss that must occur because it's the first time bringing in that block|
|Conflict|Two blocks are mapped to the same row/index and there is not enough room to hold both|
|Capacity|Seeing more unique blocks than blocks in the cache. The cache isn't big enough to hold every block you want to use.|