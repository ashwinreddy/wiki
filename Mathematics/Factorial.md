The **factorial** of an [[integer]] $n$ is the product of nonzero positive integers less than or equal to $n$. We can also use [[recursion]]:

$$
\mathop{\mathsf{factorial}}(n) = \begin{cases} 1 & n = 0 \\\\\ n \cdot \mathsf{factorial}(n) & n > 0 \end{cases}
$$