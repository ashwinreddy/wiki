The **surprisal** or **Shannon information (content)** of an outcome $x$ is defined as the [[logarithm]] of the reciprocal of the probability of the outcome. 

$$
I(x) \triangleq \log_b \frac{1}{p(x)}
$$

The base $b$ of the logarithm is arbitrary, but common choices are 2 and $e$. The units of surprisal are then bits or nats, respectively.

Why is this a good definition?

1. The information of an event with 100% probability is 0.
2. The less probable, the more surprising (negative log is monotonic decreasing).
3. The information of independent events $A$ and $B$ stack cumulatively:

$$
I(A \cap B) = I(A) + I(B)
$$

In coding theory, the following turns out to be true: Suppose a sender and receiver agree on a probability distribution $p$ over a space of messages $\mathcal{X}^n$. Then there exists a code such that

$$
L_p(x^n) \approx - \log p(x^n)
$$

Where $L_p(x^n)$ is the code length for $x^n$ and equality holds up to a single bit.