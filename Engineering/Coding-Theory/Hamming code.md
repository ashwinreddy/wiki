A **Hamming code** is an error-correcting code. We have some bitstring $d_1\dots d_n$ and then we interleave parity bits at the indices that are powers of 2. 

[[https://inst.eecs.berkeley.edu/~cs61c/hw/parity_bits.jpg]]


The parity bit $p_i$ covers all the bit positions which have the $i$th bit set.

$$
p_i = \bigoplus_{j \in \text{Coverage}} d_j
$$

$m$ parity bits can cover bits 1 through $2^m -1$ of which $2^m-m-1$ are data bits.

# Resources

* [[Table|https://en.wikipedia.org/wiki/Hamming_code?oldformat=true#General_algorithm]]