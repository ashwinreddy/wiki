The **Viterbi algorithm** gives us sequence hidden states for [[Hidden Markov Model]] given observed evidence.

$$
\arg\max_{x_{1:n}}P(x_{1:n}, e_{1:n})
$$

1. Find the most likely ending point. $x^*_n = \arg\max_n m_n[x_n]$