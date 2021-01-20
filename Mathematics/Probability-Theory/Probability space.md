A **probability space** is a triple $(\Omega, \mathcal{F}, P)$ with $\Omega$ a [[sample space]], $\mathcal{F}$ a suitable [[σ-algebra]], and $P$ a [[probability measure]]. They must satisfy the [[Kolmogorov axioms]].

The elements of $\mathcal{F}$ are called "events." Because $\mathcal{F}$ is a $\sigma$-algebra, the complements, unions, and intersections of events must also be an event.

The probability measure $P: \mathcal{F} \to [0,1]$ assigns probabilities to events.

# Examples

Say you flip a coin. Then $\Omega = \\{ \mathsf{Heads}, \mathsf{Tails} \\}$, and we can take $\mathcal{F}$ to be the [[power set]] of $\Omega$:

$$
\mathcal{F} = \big \\{ \emptyset, \\{\mathsf{Heads}\\}, \\{\mathsf{Tails}\\}, \\{ \mathsf{Heads}, \mathsf{Tails} \\} \big \\}.
$$

Then, a valid probability measure could have

\begin{align\*}
P(\\{ \mathsf{Heads} \\}) &= p \\\\
P( \\{ \mathsf{Tails} \\} ) &= 1-p \\\\
P( \emptyset ) &= 0 \\\\
P( \\{ \mathsf{Heads}, \mathsf{Tails} \\} ) &= 1
\end{align\*}