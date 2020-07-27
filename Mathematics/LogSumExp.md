**LogSumExp (LSE)** is a [[function composition]] that applies the [[logarithm]] after the sum of the [[exponential]] of components of a vector $\vec{x}$.

\begin{equation}
\mathsf{LogSumExp}\left(\vec{x} \right) \doteq \log \sum_{i} \exp(x_i)
\end{equation}

This creates a soft approximation to the maximum.