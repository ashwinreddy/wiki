**Traffic/network flow game** consists of a [[directed graph]] with edges annotated by latency function $\ell_e(x)$ gives the cost if $x$ amount of traffic uses edge $e$ as well as a start and end node.

A strategy here is an element of $\Delta_N$, a [[probability mass function]] over the $N$ paths from start to end.



# Socially optimal

A socially optimal traffic flow is partition of traffic minimizing average latency.

# Price of anarchy

Compare the cost for Nash to socially optimal.

$$
\text{PoA} = \frac{\text{average travel time in worst Nash equilibrium}}{\text{average travel time in socially optimal outcome}}
$$

Often upper bounded by $4/3$ (e.g. affine latency functions).

# Braess Paradox

Adding capacity to a system can result in increase of average driver travel time in equilibrium.

# Formalism

Each driver chooses a path $P \in \mathcal{P}_{st}$ which is the set of paths in which unit flow from source $s$ to destination $t$. Let $f_P$ be the fraction of drivers taking $P$. Let $\mathbf{f}$ be a distribution over every $f_P$.

The flow on edge $e$ is given by adding up all the fractions of drivers going through $e$:

$$
F_e \triangleq \sum_{P \mid e \in P} f_P
$$

The latency for someone using path $P$ is

$$
L_P(\mathbf{f}) = \sum_{e \in P}\ell_e(F_e)
$$

The total latency is the expected value of latency

$$
L(\mathbf{f}) = \sum_P f_P L_P(\mathbf{f})
$$


# [[Nash equilibrium]]

We want no driver to be able to take another path that has lower cost whenever a path has positive probability of being used. There's always a NE, provided some basic assumptions about the functions.

A Nash equilibrium flow $\mathbf{f}$ requires that whenever $f_P > 0$,

$$
L_P(\mathbf{f}) = \min_{P' \in \mathcal{P}\_{st}} L_{P'}(\mathbf{f}).
$$
