**Gibbs sampling** can be used to sample for inference. It estimates $P(X \mid \mathbf{e})$ by creating a vector $\mathbf{N}$ to represent the unnormalized [[distribution]] (frequency counts).

1. Initialize $\mathbf{x}$ with $\mathbf{e}$.
2. Do $N$ times
    1. Sample a $Z_i$
    2. Increment the count of $\mathbf{N}[x]$.