**Conditional probability** is the probability of an event occuring given that another event is true.

$$
\Pr(A \mid B) \triangleq \frac{\Pr(A \cap B)}{\Pr(B)}
$$

Since $A \cap B$ is a [[subset]] of $B$, the probability is forced to be between 0 and 1.


Suppose $A$ and $B$ enjoy [[independence]]. Then $\Pr(A \cap B) = \Pr(A)\Pr(B)$, leaving us with

$$
\Pr(A \mid B) = \Pr(A)
$$

Which means independent events have no bearing on the respective conditional distributions.
