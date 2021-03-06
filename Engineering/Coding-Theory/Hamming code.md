A **Hamming code** is an error-correcting code. We have some bitstring $d_1\dots d_n$ and then we interleave parity bits at the indices that are powers of 2. 

[[https://inst.eecs.berkeley.edu/~cs61c/hw/parity_bits.jpg]]


The parity bit $p_i$ covers all the bit positions which have the $i$th bit set.

\begin{equation}
\label{eq:err-check}
p_i = \bigoplus_{j \in \\{ i\text{th bit is 1} \\} } d_j
\end{equation}

$m$ parity bits can cover bits 1 through $2^m -1$ of which $2^m-m-1$ are data bits. For example, $m=3$ is a [[Hamming(7,4)]].

To find the error,

1. Run Equation \ref{eq:err-check} for each parity bit.
2. Identify the wrong equations.
3. Sum the $i$'s for which the equation is wrong
4. That's the wrong bit in the original received message.

# [[Hamming(7,4)]]

[[include:Hamming(7,4)]]

# Resources

* [[Table|https://en.wikipedia.org/wiki/Hamming_code?oldformat=true#General_algorithm]]