A **zero-sum game** is a [[general-sum game]] where the cost of losing is the benefit of winning so that the total payoff across players is 0.

[[_TOC_]]

# Value

The value of the game is given by

\begin{equation}
V = \max_x \min_y x^\mathsf{T} C y = \min_y \max_x x^\mathsf{T} C y. \tag{Value}
\end{equation}

# Solutions

How do we solve the game?

1. Look for [[saddle point]]



## Domination

If one row is less than or equal to another row (elementwise), remove it. If a convex combination of columns is greater than or equal to another column (elementwise), remove them.

This idea can also apply to convex combinations.

## Equalizing payoff

Say the optimal strategy is fully mixed. Then, you can find strategies by equating the payoffs. If you end up with pure strategies, then this method "fails."

