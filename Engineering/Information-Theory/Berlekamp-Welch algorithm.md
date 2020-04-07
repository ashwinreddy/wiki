The Berlekamp-Welch algorithm protects against general errors in transmissions. Alice wants to send a message $m_1\dots m_n$. Let her find a polynomial $P(x)$ of degree _n-1_ with [[Lagrange interpolation]] that fits her message and then generate off _2k_ more values. She then sends over these values $P(i)$ for $i=1, \dots, n+2k$.

_k_ of those will be corrupted and Bob gets $r_i$'s instead. Let $e_1, \dots, e_k$ represent the locations of the errors. 

Error-locator polynomial
: A degree _k_ polynomial given by $E(x) = \prod_{i=1}^k (x - e_i)$

Knowing the error-locator polynomial means knowing where the errors are. 

Define a polynomial $Q(x) = P(x)E(x)$. $Q(x)$ is a degree $n+k-1$ polynomial. It holds that

$$
Q(i) = r_i E(i), \qquad i = 1, \dots, n + 2k
$$

