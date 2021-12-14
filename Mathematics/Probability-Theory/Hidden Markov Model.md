A **Hidden Markov model (HMM)** is a [[Markov model]] models a [[sequence]] of states $Q = \\{q_i\\}_{i=1}^N$ using hidden variables. 

Transition probability matrix
: An $n \times n$ [[matrix]] $A$ where $A_{ij}$ is the probability of transitioning from state $i$ to $j$.

$$
\sum_{j=1}^n A_{ij} \equiv 1
$$


1. Likelihood: given an observation sequence, determine its likelihood
2. Decoding: given an observation sequence, discover the best hidden state sequence
3. Learning: given an observation sequence, learn the HMM parameters

# Likelihood

Given a HMM $\lambda = (A, B)$ and an observation sequence $O$, determine $P(O \mid \lambda)$.

$$
\alpha_1 (j) = \pi_j b_j(o_1)\quad \forall j \in [N]
$$

$$
\alpha_t(j) = \sum_{i=1}^N \alpha_{t-1}a_{ij}b_j(o_t)\quad \forall j \in [N], t \in [T]
$$

$$
P(O \mid \lambda) = \sum_{i=1}^N \alpha_T(i)
$$