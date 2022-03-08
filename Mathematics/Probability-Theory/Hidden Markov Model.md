A **Hidden Markov model (HMM)** is a [[Markov model]] that allows us to observe some evidence at each timestep, which can potentially affect the belief distribution at each of the states. If the state variables are $q_i$ and the observation/evidence is $o_i$.

Belief distribution
: $\Pr(q_i \mid o_1, \dots, o_i)$










models a [[sequence]] $Q = \left(q\_i\right)\_{i=0}^T$ of hidden states  and observation sequence $O=\left(o_i\right)_{i=1}^T$.

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

This is an $\order{N^2 T}$ [[dynamic programming]] algorithm with the forward trellis. We build up a table `forward[s, t]` which represents $\alpha_t(s)$ where 

$$
\alpha_t(j) = P(o_{1:t}, q_t = j).
$$

Once filled out, we just compute


\begin{equation}
P(O \mid \lambda) = \sum_{i=1}^N \alpha_T(i) \tag{Termination}
\end{equation}

How? First, we initialize $\alpha_1$ with

$$
\alpha_1 (j) = \pi_j b_j(o_1)\quad \forall j \in [N]
$$

Then we use the recursion


$$
\alpha_t(j) = \sum_{i=1}^N \alpha_{t-1}a_{ij}b_j(o_t)\quad \forall j \in [N], t \in [T]
$$


[[https://danieltakeshi.github.io/assets/forward_trellis.png]]


