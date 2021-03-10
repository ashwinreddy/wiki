A **zero-sum game** is a [[general-sum game]] where the cost of losing is the benefit of winning so that the total payoff across players is 0.

[[_TOC_]]

# Value

The **value** of the game is given by

\begin{equation}
V = \max_x \min_y x^\mathsf{T} C y = \min_y \max_x x^\mathsf{T} C y. \tag{Value}
\end{equation}

# Safety Strategies

How do we solve the game?

1. Look for [[saddle point]]. If there is one, that's the value of the game. 
2. Domination
3. Equalize payoffs


## Domination

If one row is less than or equal to another row (elementwise), remove it. If a convex combination of columns is greater than or equal to another column (elementwise), remove them.

This idea can also apply to convex combinations.

## Equalizing payoff

Assume the optimal strategy is fully mixed. Then, you can find strategies by equating the payoffs. If you end up with pure strategies, then this method "fails."

Let's look at an example. Say the payoff matrix is

$$
\begin{bmatrix}
1 & -2 \\\\
-3 & 5
\end{bmatrix}
$$

As the row player, you can go top or bottom. 

$$
1 \cdot x + (-3)(1-x) = (-2)x + 5(1-x)
$$