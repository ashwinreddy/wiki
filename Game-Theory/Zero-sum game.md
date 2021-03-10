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

* A row is (strictly) dominated if there exists a convex combination of other rows that is elementwise (strictly) larger than it.
* A column is (strictly) dominated if there exists a convex combination of other columns that is elementwise (strictly) smaller than it.

If a row/column is dominated, that means that the corresponding player can do better without needing to use it. If there is strict domination, the row/column can be discarded without changing the game at all.


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

$$
\langle x\^*, \vec{column 1} \rangle = \dots = \langle x\^*, \vec{column n}\rangle
$$