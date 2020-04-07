The Berlekamp-Welch algorithm protects against general errors in transmissions. Alice wants to send a message $m_1\dots m_n$. Let her find a polynomial $P(x)$ of degree _n-1_ with [[Lagrange interpolation]] that fits her message and then generate off _2k_ more values. She then sends over these values $P(i)$ for $i=1, \dots, n+2k$.

but _k_ of those will be corrupted. Let $e_1, \dots, e_k$ represent the locations of the errors. 


Error-locator polynomial
: $$
E(x) = \prod_{i=1}^k (x - e_i)
$$