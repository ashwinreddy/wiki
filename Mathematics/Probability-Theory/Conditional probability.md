The **conditional probability** of an event $A$ given event $B$ with $\Pr(B) > 0$ is 

$$
\Pr(A \mid B) \triangleq \frac{\Pr(A \cap B)}{\Pr(B)}
$$

Since $A \cap B$ is a [[subset]] of $B$, the probability is guaranteed between 0 and 1.


Suppose $A$ and $B$ enjoy [[independence]]. Then $\Pr(A \cap B) = \Pr(A)\Pr(B)$, leaving us with

$$
\Pr(A \mid B) = \Pr(A),
$$

which means independent events have no bearing on the respective conditional distributions.
