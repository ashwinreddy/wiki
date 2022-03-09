**Gibbs sampling** can be used to sample for inference. It estimates $P(X \mid \mathbf{e})$ by creating a vector $\mathbf{N}$ of counts for each value of $X$ to represent the unnormalized [[probability distribution]] (frequency counts).

1. Initialize $\mathbf{x}$ with $\mathbf{e}$.
2. Do $N$ times
    1. Sample a $Z_i$ from $P(Z_i \mid \mathsf{MarkovBlanket}(Z_i))$
    2. Increment the count of $\mathbf{N}[x]$.


[[https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fjwwa1acdx9k4on%2F015663d6b9f6a328df3128ec4e8a3bb8cc06a60285610416b9383977a43f5ada%2FScreen_Shot_2022-03-08_at_2.47.29_PM.png]]