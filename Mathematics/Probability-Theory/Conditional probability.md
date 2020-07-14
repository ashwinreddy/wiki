**Conditional probability** is the probability of an event occuring given that another event is true.

$$
\Pr(A \mid B) \doteq \frac{\Pr(A \cap B)}{\Pr(B)}
$$

Since $A \cap B$ is a subset of $B$, the probability will be between 0 and 1.


Suppose $A$ and $B$ are independent. Then $\Pr(A \cap B) = \Pr(A)\Pr(B)$, leaving us with

$$
\Pr(A \mid B) = \Pr(A)
$$

Which means independent events have no bearing on the respective conditional distributions.