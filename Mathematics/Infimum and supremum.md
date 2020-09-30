The **supremum** of a [[set]] $S$ is the least upper bound $M$ for the set, if it exists. Pragmatically, one can answer these questions to determine the supremum of a set:


1. Is the set bounded from above? If no, the supremum is infinity.
2. Does the set have a maximum? If yes, the maximum is the supremum.
3. The set is bounded above but has no maximum. Select the least upper bound. This is the supremum.

If a set is bounded from above, it has a supremum. The [[maximum|extrema]], if it exists, is the supremum. Formally, we have

$$
M = \sup S \iff \begin{cases} \forall s \in S, s \leq M \\\\\ \forall x < M, \exists s \in S, s > x \end{cases}
$$

It is a useful fact for proving a supremum, then, that

$$
\sup S \leq \text{Any upper bound on } S
$$