The **factorial** of an [[integer]] $n$ is the product of nonzero positive integers less than or equal to $n$. We can use [[recursion]] to say that $0!=1$ and $n! = n(n-1)!$.

$$
\mathsf{factorial}(n) = \begin{cases} 1 & n = 0 \\\\\ n \cdot \mathsf{factorial}(n) & n > 0 \end{cases}
$$