The **approximate counting algorithm** by Morris

1. Initialize $X \leftarrow 0$
2. Increment $X$ with probability $\frac{1}{2^X}$ for each update
3. Output $\tilde{n} = 2^X - 1$