**BayCRL** is an algorithm that tries to do RL using only _successful outcome examples_: states in which the desired task has been accomplished successfully. It builds on [[VICE|Variational Inverse Control with Events]] to do goal-oriented exploration, but it needs a way to handle uncertainty. We need an uncertainty-aware classifier for successful states.

# Formalism

Let $\mathcal{M}$ be a [[Markov decision process]] without [[reward function]] with examples $\mathcal{S}\_+ = \\{s^k_+\\}_{k=1}^K$. These examples we assume are sampled from $p(s_t \mid e_t = \mathsf{True})$.

# Idea

The reward $r(s)$ assigned to state $s$ can be picked up directly from the classifier:

$$
r(s) = p_{\mathsf{meta-NML}}(e=1 \mid s)
$$

$$
p_{\mathsf{meta-NML}} =  \frac{p_{\theta_1}(e = 1 \mid s)}{\sum_{i \in \\{0, 1\\}} p_{\theta_i}(e = i \mid s)}
$$

> rewards start off at an uninformative value of 0.5 for all unvisited states at the beginning, and close to
1 for successful outcomes. As training progresses, more states are visited, added to the buffer and
BayCRL starts to assign them progressively lower reward as they get visited more and more, thereby
encouraging visiting of under-visited states. At convergence, all the non successful states will have a
reward of close to 0 and states at the goal will have a reward of 0.5, since the numbers of positive and
negative labels for successful outcomes will be balanced as described above

# Algorithm

In each iteration, we do the following:

1. Collect on-policy examples to add to $\mathcal{S}_{-}$ by executing $\pi$.
2. If iteration $i \mod k \equiv 0$,
    1. Sample $n_{\mathsf{train}}$ states from $\mathcal{S}\_{-}$ to create $2n_{\mathsf{train}}$ meta-training tasks.
    2. Samples $n_{\mathsf{test}}$ total test points equally from $\mathcal{S}\_{+}$ and $\mathcal{S}_{-}$.