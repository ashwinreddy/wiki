The **factorial** of an [[integer]] $n$ is the product of nonzero positive integers less than or equal to $n$. 

$$
n! = \prod_{j=1}^n j
$$

Note that $n! = n\cdot (n-1)!$, so we can also use [[recursion]]:

$$
n! = \begin{cases} 1 & n = 0 \\\\\ n \cdot (n-1)! & n > 0 \end{cases}
$$