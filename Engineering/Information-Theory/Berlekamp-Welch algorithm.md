The Berlekamp-Welch algorithm protects against general errors in transmissions. Alice wants to send a message $m_1\dots m_n$ but _k_ of those will be corrupted. Let $e_1, \dots, e_k$ represent the locations of the errors. 


Error-locator polynomial
: $$
E(x) = \prod_{i=1}^k (x - e_i)
$$