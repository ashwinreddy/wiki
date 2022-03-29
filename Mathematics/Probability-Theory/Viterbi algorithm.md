The **Viterbi algorithm** gives us sequence hidden states for [[Hidden Markov Model]] given observed evidence.

$$
\arg\max_{x_{1:n}}P(x_{1:n}, e_{1:n})
$$

Let $m_t[x_t] = max_{x{1:t-1}}P(x_{1:t}, e_{1:t})$

1. Find the most likely ending point. $x^*_n = \arg\max_n m_n[x_n]$