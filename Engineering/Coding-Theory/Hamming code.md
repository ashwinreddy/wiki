A **Hamming code** is an error-correcting code. We have some bitstring $d_1\dots d_n$ and then we interleave parity bits at the indices that are powers of 2. 

The indexing convention is that 1 is the MSB and we index from left-to-right.


The parity bit $P\\{i\\}$ covers the bits in the new bitstring where the _index_ of the bit under the aforementioned convention, $j$, has a 1 at the same position as $i$ when represented in binary.