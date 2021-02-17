A **zero-sum game** is one where the cost of losing is the benefit of winning so that the total payoff across players is 0.

[[_TOC_]]

# Value

The value of the game is given by

\begin{equation}
V = \max_x \min_y x^\mathsf{T} C y = \min_y \max_x x^\mathsf{T} C y. \tag{Value}
\end{equation}

# Solutions

How do we solve the game?

## Saddle points

Saddle point
: An outcome $C_{ij}$ that is minimal in row $i$ and maximal in column $j$.

If there's a saddle point, then it's the value of the game -- neither player has incentive to deviate.

## Domination

If one row is less than or equal to another row (elementwise), remove it. If a convex combination of columns is greater than or equal to another column (elementwise), remove them.

This idea can also apply to convex combinations.

## Equalizing payoff

Say the optimal strategy is fully mixed. Then, you can find strategies by equating the payoffs. If you end up with pure strategies, then this method "fails."

## Principle of Indifference

## Symmetry
