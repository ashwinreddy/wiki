**Binary symmetric channel** is a simple [[communication channel]] model that can transmit either 0 or 1 and with probability $p$ will flip the input. Its [[channel capacity]] is

$$
C_{\text{BSC}} = 1 - H(p)
$$

\begin{align*}
C_{\text{BSC}} &= H(Y) - H(Y \mid X) \\\\
&= H(Y) - \sum_{x \in \mathcal{X}} \mathbb{P}(X = i) H(Y \mid X = i)
\end{align*}