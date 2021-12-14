A **Hidden Markov model (HMM)** is a [[Markov model]] models a [[sequence]] $Q = \left(q\_i\right)\_{i=0}^T$ of hidden states  and observation sequence $O=\left(o_i\right)_{i=1}^T$.

Transition probability matrix
: An $n \times n$ [[matrix]] $A$ where $a_{ij}$ is the probability of transitioning from state $i$ to $j$.

$$
\sum_{j=1}^n A_{ij} \equiv 1
$$


1. Likelihood: given an observation sequence, determine its likelihood
2. Decoding: given an observation sequence, discover the best hidden state sequence
3. Learning: given an observation sequence, learn the HMM parameters

# Likelihood

Given a HMM $\lambda = (A, B)$ and an observation sequence $O$, determine $P(O \mid \lambda)$. Note that

$$
P(O \mid Q) = \prod_{i=1}^T P(o_i \mid q_i)
$$

$$
P(O, Q) = P(O \mid Q)P(Q) = \prod_{i=1}^T P(o_i \mid q_i) \times \prod_{i=1}^T P(q_i \mid q_{i-1})
$$

$$
P(O) = \sum_Q P(O,Q) = \sum_Q P(O \mid Q)P(Q)
$$

## Forward algorithm

This is an $\order{N^2 T}$ [[dynamic programming]] algorithm with the forward trellis.

[[https://danieltakeshi.github.io/assets/forward_trellis.png]]

$$
\alpha_t(j) = P(o_{1:t}, q_t = j)
$$

$$
\alpha_1 (j) = \pi_j b_j(o_1)\quad \forall j \in [N]
$$

$$
\alpha_t(j) = \sum_{i=1}^N \alpha_{t-1}a_{ij}b_j(o_t)\quad \forall j \in [N], t \in [T]
$$

\begin{equation}
P(O \mid \lambda) = \sum_{i=1}^N \alpha_T(i) \tag{Termination}
\end{equation}